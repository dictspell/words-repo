import streamlit as st
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz

st.set_page_config(page_title="Commute Dashboard", page_icon="🚦", layout="wide")
st.title("🚦 Farnham to Hammersmith Command Center")
st.write("A quick glance at the route before you hit the road.")

# We will search the live TfL database for these exact keywords
TARGET_LOCATIONS = [
    "Hogarth Roundabout", 
    "Hammersmith Flyover", 
    "Talgarth Road"
]

if st.button("Refresh Live Cameras", type="primary"):
    st.markdown("---")
    
    # --- GET CURRENT UK TIME ---
    uk_timezone = pytz.timezone('Europe/London')
    current_time = datetime.now(uk_timezone).strftime("%H:%M:%S")
    st.info(f"🕒 **Last Updated:** {current_time} (UK Time)")
    
    # --- 1. ASK TFL FOR THE MASTER CAMERA LIST ---
    with st.spinner("Querying TfL Live Database..."):
        try:
            # We fetch the live directory of all 900+ London cameras
            api_response = requests.get("https://api.tfl.gov.uk/Place/Type/JamCam", timeout=10)
            api_response.raise_for_status()
            all_cameras = api_response.json()
        except Exception as e:
            st.error(f"Could not connect to TfL Database. Error: {e}")
            st.stop() # Stops the script if the database is down
            
    # --- 2. SEARCH FOR OUR CAMERAS ---
    found_cameras = {}
    for cam in all_cameras:
        camera_name = cam.get("commonName", "")
        
        for target in TARGET_LOCATIONS:
            # If we find a match in the database, extract its live URL
            if target.lower() in camera_name.lower() and target not in found_cameras:
                for prop in cam.get("additionalProperties", []):
                    if prop.get("key") == "imageUrl":
                        found_cameras[target] = prop.get("value")
    
    # --- 3. DISPLAY THE IMAGES ---
    if not found_cameras:
        st.warning("⚠️ Could not find any of those cameras online right now. They may be down for maintenance.")
    else:
        # Create dynamically sized columns based on how many cameras it actually found
        cols = st.columns(len(found_cameras))
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        
        for index, (name, url) in enumerate(found_cameras.items()):
            with cols[index]:
                st.subheader(f"📍 {name}")
                try:
                    # Download the image using the fresh, live URL
                    img_response = requests.get(url, headers=headers, timeout=10)
                    img_response.raise_for_status()
                    img = Image.open(BytesIO(img_response.content))
                    st.image(img, use_container_width=True)
                except Exception as e:
                    st.error(f"Image currently unavailable. Error: {e}")
