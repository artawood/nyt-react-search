import axios from "axios";

export default {
  getArticles: (query) => {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", {
      params: {
        "api-key":"b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        q: query
      }
    })
  }
};