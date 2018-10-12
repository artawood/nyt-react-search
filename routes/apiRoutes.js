const axios = require('axios');
const router = require("express").Router();

router.get("/search", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", {
      params: req.query
      // {
      //   "api-key":"b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      //   "q": req.query
      // }
    })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
})