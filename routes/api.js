var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/images", (req, res) => {
  axios({
    method: "get",
    url: `https://api.unsplash.com/search/photos?page=1&query=wine&client_id=${process.env.UNSPLASH_KEY}`,
  })
    .then((wineImage) =>
      res.status(200).json(
        wineImage.data.results.map((element) => {
          return element.urls.small;
        })
      )
    )
    .catch((err) => console.log(err));
});

module.exports = router;
