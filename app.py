# app.py
from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def download_video(url):
    # Implement the logic to download TikTok video without watermark here
    # This typically involves using TikTok's API or a third-party service
    # For demonstration, we'll use a mock URL
    return "https://example.com/downloaded-video.mp4"

@app.route('/download', methods=['POST'])
def download():
    data = request.json
    video_url = data['url']
    
    try:
        download_url = download_video(video_url)
        return jsonify({"downloadUrl": download_url})
    except Exception as e:
        return str(e), 400

if __name__ == '__main__':
    app.run(debug=True)
