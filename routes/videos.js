const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const react = require("react");

const filePath = "./data/exercise.json";

const request = require("request");
const { response } = require("express");
const cors = require("cors");
var muscle = "biceps";
request.get(
  {
    url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
    headers: {
      "X-Api-Key": "SPUBuUKj6jx/6U9l20fpSA==J1kULQQdV8bdG1OX",
    },
  },
  function (error, response, body) {
    if (error) return console.error("Request failed:", error);
    else if (response.statusCode != 200)
      return console.error(
        "Error:",
        response.statusCode,
        body.toString("utf8")
      );
    else console.log(body);
  }
);

console.log(response);
// const videoListString = fs.readFileSync(filePath);

// const api_key = "SPUBuUKj6jx/6U9l20fpSA==J1kULQQdV8bdG1OX"

// const { muscle } = useParams();
//   const [muscleList, setMuscleList] = useState([]);

//   useEffect(() => {
//     const api_key = "SPUBuUKj6jx/6U9l20fpSA==J1kULQQdV8bdG1OX";
//     const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

//     axios
//       .get(url, { headers: { "X-Api-Key": api_key } })
//       .then((response) => {
//         console.log(response.data);
//         const muscle = response.data.map((muscle, index) => {
//           return { ...muscle, image: chestImages[index] };
//         });
//          setMuscleList(muscle);
//       })
//       .catch((error) => {
//         console.error("Error:", error.response.data);
//       });
//   }, [muscle]);
// const sideVideo = videoList.map((video) => ({
//   id: video.id,
//   title: video.title,
//   channel: video.channel,
//   image: video.image,
// }));

// router.get('/', (req, res) => {
//   res.json(sideVideo);
// });

// router.post('/', (req, res) => {
//     const { title, description, timestamp, image } = req.body;
//     const uploadedVideo = {
//       id: uuidv4(),
//       title,
//       channel: "David Le",
//       image,
//       description,
//       views: 0,
//       likes: 0,
//       duration: "3:00",
//       timestamp,
//       comments: []
//     };

//     videoList.push(uploadedVideo);
//     const updatedVideoList = JSON.stringify(videoList)
//     fs.writeFileSync(filePath, updatedVideoList)
//     res.json(uploadedVideo);
//   });

module.exports = router;
