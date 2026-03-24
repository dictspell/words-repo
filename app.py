import streamlit as st
import requests
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
import pytz
import time

# --- SETUP & CONFIG ---
st.set_page_config(page_title="Live Accident Dashboard", page_icon="🚨", layout="wide")
st.title("🚨 Live Route Accident Report")
st.markdown("**FARNHAM $\\rightarrow$ LONDON HAMMERSMITH | M3, M4, A4**")
st.write("Displaying verified incidents reported or updated within the last 3 hours.")
st.markdown("---")

# --- TIME LOGIC ---
uk_timezone = pytz.timezone('Europe/London')
now = datetime.now(uk_timezone)
# This calculates exactly what time it was 3 hours ago
three_hours_ago = now - timedelta(hours=3) 

st.info(f"🕒 **Last Checked:** {now.strftime('%H:%M:%S')} (UK Time)")

# --- DATA FETCHING FUNCTIONS ---
def get_highways_incidents(road_name):
    """Fetches and filters incidents from National Highways RSS"""
    incidents = []
    # Official National Highways Unplanned Events Feed
    url = "http://m.highwaysengland.co.uk/feeds/rss/UnplannedEvents.xml"
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        root = ET.fromstring(response.content)
        
        for item in root.findall('.//item'):
            title = item.find('title').text if item.find('title') is not None else ""
            desc = item.find('description').text if item.find('description') is not None else ""
            pub_date_str = item.find('pubDate').text if item.find('pubDate') is not None else ""
            
            # Check if this incident mentions our specific motorway
            if road_name in title:
                try:
                    # Convert the web timestamp into a real Python UK timezone object
                    pub_date = datetime.strptime(pub_date_str, "%a, %d %b %Y %H:%M:%S %Z")
                    pub_date = pub_date.replace(tzinfo=timezone.utc).astimezone(uk_timezone)
                    
                    # FILTER: Keep only if it happened in the last 3 hours!
                    if pub_date >= three_hours_ago:
                        incidents.append({
                            "location": title.split('-')[0].strip(), # Cleans up the title
                            "details": desc,
                            "time": pub_date.strftime('%H:%M')
                        })
                except Exception:
                    pass 
    except Exception as e:
        st.error(f"Could not load National Highways data: {e}")
        
    return incidents

def get_tfl_incidents(road_name):
    """Fetches and filters incidents from the TfL API"""
    incidents = []
    # Official TfL Road Disruptions endpoint
    url = "https://api.tfl.gov.uk/Road/all/Disruption"
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        for item in data:
            location = item.get("location", "")
            corridors = [str(c).upper() for c in item.get("corridorIds", [])]
            last_modified_str = item.get("lastModifiedTime", "")
            
            # Check if it's on our target road
            if road_name.upper() in location.upper() or road_name.upper() in corridors:
                try:
                    # Clean up the string to parse it properly
                    clean_time_str = last_modified_str.split('.')[0].replace("Z", "")
                    modified_time = datetime.strptime(clean_time_str, "%Y-%m-%dT%H:%M:%S")
                    modified_time = modified_time.replace(tzinfo=timezone.utc).astimezone(uk_timezone)
                    
                    # FILTER: Keep only if it happened in the last 3 hours!
                    if modified_time >= three_hours_ago:
                        incidents.append({
                            "location": location, 
                            "details": item.get("comments", "No additional details."),
                            "time": modified_time.strftime('%H:%M')
                        })
                except Exception:
                    pass
    except Exception as e:
        st.error(f"Could not load TfL data: {e}")
        
    return incidents

# --- UI LAYOUT ---
# Creates our 3 columns
col_m3, col_m4, col_a4 = st.columns(3)

with col_m3:
    st.header("🛣️ M3 Route")
    m3_data = get_highways_incidents("M3")
    if not m3_data:
        st.success("✅ Clear: No recent incidents reported.")
    else:
        for inc in m3_data:
            with st.container(border=True):
                st.write(f"**{inc['location']}**")
                st.caption(f"Reported at: {inc['time']}")
                st.write(inc['details'])

with col_m4:
    st.header("🛣️ M4 / M25 Route")
    # We check both the M4 and the stretch of M25 you use
    m4_data = get_highways_incidents("M4")
    m25_data = get_highways_incidents("M25")
    combined_m4 = m4_data + m25_data
    
    if not combined_m4:
        st.success("✅ Clear: No recent incidents reported.")
    else:
        for inc in combined_m4:
            with st.container(border=True):
                st.write(f"**{inc['location']}**")
                st.caption(f"Reported at: {inc['time']}")
                st.write(inc['details'])

with col_a4:
    st.header("🏙️ A4 (London)")
    a4_data = get_tfl_incidents("A4")
    if not a4_data:
        st.success("✅ Clear: No recent incidents reported.")
    else:
        for inc in a4_data:
            with st.container(border=True):
                st.write(f"**{inc['location']}**")
                st.caption(f"Updated at: {inc['time']}")
                st.write(inc['details'])

# --- AUTO REFRESH LOOP ---
# Waits 5 minutes, then fetches fresh data
time.sleep(300) 
st.rerun()
