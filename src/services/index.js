import API from "./API";

export function retrieveTopHeadLinesList(headLines) {
  let url =
    "http://newsapi.org/v2/top-headlines?country=" + headLines + "&apiKey=";
  return API.get(url)
    .then(response => response.data)
    .catch(function(error) {
      throw error;
    });
}

export function retrieveSourceList() {
  let url = "http://newsapi.org/v2/sources?apiKey=";
  return API.get(url)
    .then(response => response.data)
    .catch(function(error) {
      throw error;
    });
}
