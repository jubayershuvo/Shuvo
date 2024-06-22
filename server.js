const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.get('/download', async (req, res) => {
    const videoUrl = req.query.url;
    if (!videoUrl) {
        return res.json({ success: false, message: 'No URL provided' });
    }

    try {
        // Use axios to fetch the video page
        const response = await axios.get(videoUrl);
        const $ = cheerio.load(response.data);

        // Extract the video download URL (this part may vary based on TikTok's website structure)
        const videoDownloadUrl = $('video').attr('src');

        if (videoDownloadUrl) {
            res.json({ success: true, downloadUrl: videoDownloadUrl });
        } else {
            res.json({ success: false, message: 'Unable to find video URL' });
        }
    } catch (error) {
        res.json({ success: false, message: 'Error fetching video' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
