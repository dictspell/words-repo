import streamlit as st
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz

st.set_page_config(page_title="Traffic Intelligence Monitor", page_icon="🧿", layout="wide")

st.title("🧿 Traffic Intelligence Monitor")
st.markdown("**FARNHAM $\\rightarrow$ LONDON HAMMERSMITH | M3 vs M4 Corridor**")
st.markdown("---")

# --- CURRENT UK TIME ---
uk_timezone = pytz.timezone('Europe/London')
current_time = datetime.now(uk_timezone).strftime("%H:%M:%S")
st.info(f"🕒 **Last Updated:** {current_time} (UK Time)")

# --- CAMERA URL DICTIONARIES ---
# YOU MUST REPLACE THE "URL_HERE" TEXT WITH REAL LINKS COPIED FROM A TRAFFIC CAMERA WEBSITE
M3_ROUTE_CAMS = {
    "M3 J4 (Camberley)": "URL_HERE",
    "M3 J3 (Lightwater)": "URL_HERE",
    "M3 J2 (M25 Interchange)": "https://roadca.ms/2687",
    "M3 J1 (Sunbury)": "URL_HERE"
}

M4_ROUTE_CAMS = {
    "M25 J12 (M3 Interchange)": "URL_HERE",
    "M25 J14 (Heathrow T5)": "URL_HERE",
    "M4 J4B (M25 Interchange)": "URL_HERE",
    "M4 J2 (Osterley)": "URL_HERE"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36"
}

# --- THE TWO-COLUMN LAYOUT ---
col_m3, col_m4 = st.columns(2)

# --- LEFT COLUMN: M3 ROUTE ---
with col_m3:
    st.header("M3 Route")
    st.write("via M3 $\\rightarrow$ A316")
    
    # Route Stats Box
    with st.container(border=True):
        st.write("**DISTANCE:** ~38 miles &nbsp;&nbsp;|&nbsp;&nbsp; **TYPICAL:** 55-75 min")
        
    st.markdown("##### TRAFFIC CAMERAS")
    for name, url in M3_ROUTE_CAMS.items():
        with st.container(border=True):
            st.write(f"🟢 **{name}**")
            if url == "URL_HERE":
                st.warning("Please paste a live image URL in the app.py code.")
            else:
                try:
                    res = requests.get(url, headers=headers, timeout=5)
                    res.raise_for_status()
                    st.image(Image.open(BytesIO(res.content)), use_container_width=True)
                except:
                    st.error("Camera feed offline or URL expired.")

# --- RIGHT COLUMN: M4 ROUTE ---
with col_m4:
    st.header("M4 Route")
    st.write("via M25 $\\rightarrow$ M4")
    
    # Route Stats Box
    with st.container(border=True):
        st.write("**DISTANCE:** ~45 miles &nbsp;&nbsp;|&nbsp;&nbsp; **TYPICAL:** 60-85 min")

    st.markdown("##### TRAFFIC CAMERAS")
    for name, url in M4_ROUTE_CAMS.items():
        with st.container(border=True):
            st.write(f"🟢 **{name}**")
            if url == "URL_HERE":
                st.warning("Please paste a live image URL in the app.py code.")
            else:
                try:
                    res = requests.get(url, headers=headers, timeout=5)
                    res.raise_for_status()
                    st.image(Image.open(BytesIO(res.content)), use_container_width=True)
                except:
                    st.error("Camera feed offline or URL expired.")
