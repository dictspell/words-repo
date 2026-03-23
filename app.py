import streamlit as st
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz

# --- REAL WORKING LONDON CAMERAS ---
# These are actual, live TfL JamCams along the A4 heading into Hammersmith
CAMERAS = {
    "A4 Hogarth Roundabout": "https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/00001.09099.jpg",
    "A4 Hammersmith Flyover": "https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/00001.09100.jpg",
    "A4 Talgarth Road": "https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/00001.09103.jpg"
}

st.set_page_config(page_title="Commute Dashboard", page_icon="🚦", layout="wide")
st.title("🚦 Farnham to Hammersmith Command Center")
st.write("A quick glance at the route before you hit the road.")

if st.button("Refresh Live Cameras", type="primary"):
    st.markdown("---")
    
    # --- GET CURRENT UK TIME ---
    uk_timezone = pytz.timezone('Europe/London')
    current_time = datetime.now(uk_timezone).strftime("%H:%M:%S")
    
    st.info(f"🕒 **Last Updated:** {current_time} (UK Time)")
    
    cols = st.columns(len(CAMERAS))
    
    # --- THE DISGUISE ---
    # This tells the government servers that we are a normal Chrome browser, not a Python bot
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    for index, (location, url) in enumerate(CAMERAS.items()):
        with cols[index]:
            st.subheader(f"📍 {location}")
            
            try:
                # We added the 'headers' parameter here to pass our disguise!
                response = requests.get(url, headers=headers, timeout=10)
                response.raise_for_status() 
                img = Image.open(BytesIO(response.content))
                
                st.image(img, use_container_width=True)
                
            except Exception as e:
                # If it fails, it will now tell us exactly *why* it failed to help troubleshoot
                st.error(f"Could not load camera for {location}. Error: {e}")
