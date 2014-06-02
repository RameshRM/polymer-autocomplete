module.exports = function(req, res) {
    res.writeHead(200, {
      'Content-Type': "application/json",
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache'
    });

    res.json({
        keywords: ['Red', 'Blue', 'Green', 'Yellow', 'Yelp', 'Yello Stone', 'Pink', 'Blah',
            'position', 'bottom', 'z-index', 'background-color', 'min-width', 'max-width', 'border-top-left-radius',
            'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'
        ]
    });

};