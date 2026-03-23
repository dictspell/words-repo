import streamlit as st
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz
import time

st.set_page_config(page_title="Commute Dashboard", page_icon="🚦", layout="wide")
st.title("🚦 Farnham to Hammersmith Command Center")
st.write("Live TfL Cameras — Auto-refreshing every 5 minutes")
st.markdown("---")

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
        
# --- 2. SEARCH FOR EXACTLY 3 UNIQUE CAMERAS ---
found_cameras = []
seen_targets = set()

for cam in all_cameras:
    camera_name = cam.get("commonName", "")
    
    for target in TARGET_LOCATIONS:
        # If we found a match AND we haven't already grabbed a camera for this target
        if target.lower() in camera_name.lower() and target not in seen_targets:
            for prop in cam.get("additionalProperties", []):
                if prop.get("key") == "imageUrl":
                    display_name = camera_name.replace("A4 ", "").replace(" / ", " - ")
                    found_cameras.append((display_name, prop.get("value")))
                    seen_targets.add(target) # Mark this target as "found" so we don't get duplicates
            break # Move to the next camera in the database
            
    # Stop searching once we have our 3 distinct cameras
    if len(found_cameras) == 3:
        break

# --- 3. DISPLAY THE IMAGES IN A LOCKED 3-COLUMN GRID ---
if not found_cameras:
    st.warning("⚠️ Could not find any cameras online right now.")
else:
    cols = st.columns(3)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
    }
    
    # We use enumerate to place the 1st camera in col 0, 2nd in col 1, 3rd in col 2
    for index, (display_name, url) in enumerate(found_cameras):
        with cols[index]: 
            st.subheader(f"📍 {display_name}")
            try:
                img_response = requests.get(url, headers=headers, timeout=10)
                img_response.raise_for_status()
                img = Image.open(BytesIO(img_response.content))
                st.image(img, use_container_width=True)
            except Exception as e:
                st.error("Image currently unavailable.")

# --- 4. AUTO REFRESH LOOP ---
time.sleep(300)
st.rerun()
