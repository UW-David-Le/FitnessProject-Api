const express = require("express");
const app = express();

const cors = require("cors");
const port = process.env.PORT || process.argv[2] || 8080;

const videosRouter = require('./routes/videos')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/videos',videosRouter)

app.listen(port, () => console.log(`Listening on ${port}`));
