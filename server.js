const path = require('path');
const express = require('express');
const app = express();
const public = path.resolve('./client/public');
const port = process.env.PORT || 5050;

app.use(express.static(public));

app.get('/', (req, res) => {
    res.sendFile(public + '/index.html')
})

app.listen(port, () => console.log(`App running on port ${port}!`))