import streamlit as st
import requests
from PIL import Image
from io import BytesIO
from datetime import datetime
import pytz

# --- CAMERA SETUP ---
CAMERAS = {
    "M3 Junction 2 (Thorpe)": "https://via.placeholder.com/600x400.png?text=M3+Traffic+Cam",
    "M4 Chiswick Roundabout": "https://via.placeholder.com/600x400.png?text=M4+Traffic+Cam",
    "A4 Hammersmith Flyover": "https://via.placeholder.com/600x400.png?text=A4+Traffic+Cam"
}

st.set_page_config(page_title="Commute Dashboard", page_icon="🚦", layout="wide")
st.title("🚦 Farnham to Hammersmith Command Center")
st.write("A quick glance at the route before you hit the road.")

if st.button("Refresh Live Cameras", type="primary"):
    st.markdown("---")
    
    # --- GET CURRENT UK TIME ---
    uk_timezone = pytz.timezone('Europe/London')
    current_time = datetime.now(uk_timezone).strftime("%H:%M:%S")
    
    # Display the timestamp prominently
    st.info(f"🕒 **Last Updated:** {current_time} (UK Time)")
    
    cols = st.columns(len(CAMERAS))
    
    for index, (location, url) in enumerate(CAMERAS.items()):
        with cols[index]:
            st.subheader(f"📍 {location}")
            
            try:
                response = requests.get(url, timeout=5)
                response.raise_for_status() 
                img = Image.open(BytesIO(response.content))
                
                st.image(img, use_container_width=True)
                
            except Exception as e:
                st.error(f"Could not load camera for {location}.")
