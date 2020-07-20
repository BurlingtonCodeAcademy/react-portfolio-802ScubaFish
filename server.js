const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const public = path.resolve('./client/build');

app.use(express.static(public));

app.get('/', (req, res) => {
    res.sendFile(public + '/index.html')
})

app.listen(port, () => console.log(`Portfolio Server running on port ${port}!`))