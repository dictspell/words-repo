import streamlit as st
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz
import time # Added for the auto-refresh

st.set_page_config(page_title="Commute Dashboard", page_icon="🚦", layout="wide")
st.title("🚦 Farnham to Hammersmith Command Center")
st.write("Live TfL Cameras — Auto-refreshing every 5 minutes")
st.markdown("---")

# Broadened our search terms to catch variations in TfL's naming
TARGET_LOCATIONS = ["Hogarth", "Hammersmith Fly", "Talgarth"]

# --- GET CURRENT UK TIME ---
uk_timezone = pytz.timezone('Europe/London')
current_time = datetime.now(uk_timezone).strftime("%H:%M:%S")
st.info(f"🕒 **Last Updated:** {current_time} (UK Time)")

# --- 1. ASK TFL FOR THE MASTER CAMERA LIST ---
with st.spinner("Querying TfL Live Database..."):
    try:
        api_response = requests.get("https://api.tfl.gov.uk/Place/Type/JamCam", timeout=10)
        api_response.raise_for_status()
        all_cameras = api_response.json()
    except Exception as e:
        st.error(f"Could not connect to TfL Database. Error: {e}")
        st.stop()
        
# --- 2. SEARCH FOR OUR CAMERAS ---
found_cameras = {}
for cam in all_cameras:
    camera_name = cam.get("commonName", "")
    for target in TARGET_LOCATIONS:
        if target.lower() in camera_name.lower() and target not in found_cameras:
            for prop in cam.get("additionalProperties", []):
                if prop.get("key") == "imageUrl":
                    # Clean up the official name to look nicer on the dashboard
                    display_name = camera_name.replace("A4 ", "").replace(" / ", " - ")
                    found_cameras[target] = (display_name, prop.get("value"))

# --- 3. DISPLAY THE IMAGES IN A FIXED GRID ---
if not found_cameras:
    st.warning("⚠️ Could not find any cameras online right now.")
else:
    # We FORCE 3 columns so the images never stretch to fill the whole screen
    cols = st.columns(3)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
    }
    
    col_index = 0
    for target, (display_name, url) in found_cameras.items():
        with cols[col_index % 3]: 
            st.subheader(f"📍 {display_name}")
            try:
                img_response = requests.get(url, headers=headers, timeout=10)
                img_response.raise_for_status()
                img = Image.open(BytesIO(img_response.content))
                st.image(img, use_container_width=True)
            except Exception as e:
                st.error("Image currently unavailable.")
        col_index += 1

# --- 4. AUTO REFRESH LOOP ---
# This tells the server to wait 300 seconds (5 mins) and then seamlessly reload the page
time.sleep(300)
st.rerun()
