import streamlit as st
import streamlit.components.v1 as components
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz
import time

st.set_page_config(page_title="Traffic Intelligence Monitor", page_icon="🧿", layout="wide")

st.title("🧿 Traffic Intelligence Monitor")
st.markdown("**FARNHAM $\\rightarrow$ LONDON HAMMERSMITH | M3 vs M4 Corridor**")
st.markdown("---")

# --- CURRENT UK TIME ---
uk_timezone = pytz.timezone('Europe/London')
current_time = datetime.now(uk_timezone).strftime("%H:%M:%S")
st.info(f"🕒 **Last Updated:** {current_time} (UK Time)")

# --- 1. MOTORWAY CAMERAS (USING NORMAL WEBPAGE URLS) ---
# Just paste the normal website links here! No right-clicking needed.
M3_ROUTE_CAMS = {
    "M3 J4 (Camberley)": "https://www.motorwaycameras.co.uk/cctv/m3/junction-4",
    "M3 J3 (Lightwater)": "https://www.motorwaycameras.co.uk/cctv/m3/junction-3",
    "M3 J2 (M25 Interchange)": "https://www.motorwaycameras.co.uk/cctv/m3/junction-2"
}

M4_ROUTE_CAMS = {
    "M25 J12 (M3 Interchange)": "https://www.motorwaycameras.co.uk/cctv/m25/junction-12",
    "M4 J4B (M25 Interchange)": "https://www.motorwaycameras.co.uk/cctv/m4/junction-4b",
    "M4 J2 (Brentford)": "https://www.motorwaycameras.co.uk/cctv/m4/junction-2"
}

col_m3, col_m4 = st.columns(2)

# --- LEFT COLUMN: M3 ROUTE ---
with col_m3:
    st.header("M3 Route")
    st.write("via M3 $\\rightarrow$ A316")
    with st.container(border=True):
        st.write("**DISTANCE:** ~38 miles &nbsp;&nbsp;|&nbsp;&nbsp; **TYPICAL:** 55-75 min")
        
    for name, url in M3_ROUTE_CAMS.items():
        with st.container(border=True):
            st.write(f"🟢 **{name}**")
            # This embeds the webpage directly into the dashboard!
            components.iframe(url, height=350, scrolling=True)

# --- RIGHT COLUMN: M4 ROUTE ---
with col_m4:
    st.header("M4 Route")
    st.write("via M25 $\\rightarrow$ M4")
    with st.container(border=True):
        st.write("**DISTANCE:** ~45 miles &nbsp;&nbsp;|&nbsp;&nbsp; **TYPICAL:** 60-85 min")

    for name, url in M4_ROUTE_CAMS.items():
        with st.container(border=True):
            st.write(f"🟢 **{name}**")
            components.iframe(url, height=350, scrolling=True)

st.markdown("---")

# --- 2. LONDON CITY CAMERAS (USING TFL API) ---
st.header("City Arrival: A4 Hammersmith")
st.write("Live feed from Transport for London (TfL) Database")

TFL_TARGETS = ["Hogarth", "Hammersmith Fly", "Talgarth"]

with st.spinner("Querying TfL Live Database..."):
    try:
        api_response = requests.get("https://api.tfl.gov.uk/Place/Type/JamCam", timeout=10)
        api_response.raise_for_status()
        all_cameras = api_response.json()
        
        found_cameras = []
        seen_targets = set()

        for cam in all_cameras:
            camera_name = cam.get("commonName", "")
            for target in TFL_TARGETS:
                if target.lower() in camera_name.lower() and target not in seen_targets:
                    for prop in cam.get("additionalProperties", []):
                        if prop.get("key") == "imageUrl":
                            display_name = camera_name.replace("A4 ", "").replace(" / ", " - ")
                            found_cameras.append((display_name, prop.get("value")))
                            seen_targets.add(target)
                    break 
            if len(found_cameras) == 3:
                break
                
        if found_cameras:
            tfl_cols = st.columns(3)
            headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36"}
            
            for index, (display_name, url) in enumerate(found_cameras):
                with tfl_cols[index]: 
                    st.subheader(f"📍 {display_name}")
                    try:
                        img_response = requests.get(url, headers=headers, timeout=10)
                        img_response.raise_for_status()
                        img = Image.open(BytesIO(img_response.content))
                        st.image(img, use_container_width=True)
                    except:
                        st.error("Image currently unavailable.")
    except Exception as e:
        st.error(f"Could not connect to TfL Database. Error: {e}")

# --- 3. AUTO REFRESH LOOP ---
time.sleep(300)
st.rerun()
