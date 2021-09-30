const webSeries = require("./web-series/index.json");

function randomSeries() {
  let random = Math.floor(Math.random() * webSeries.length);
  return webSeries[random];
}

function ratingSeries(r) {
  let random = Math.floor(Math.random() * webSeries.length);
  while (true) {
    if (webSeries[random].rating >= r) {
      return webSeries[random];
    } else {
      random = (random + 1) % webSeries.length;
    }
  }
}

function genreSeries(genre) {
  let random = Math.floor(Math.random() * webSeries.length);
  while (true) {
    for (let i = 0; i < webSeries[random].category.length; i++) {
      if (webSeries[random].category[i].localeCompare(genre) == 0) {
        return webSeries[random];
      }
    }
    random = (random + 1) % webSeries;
  }
}

module.exports = { randomSeries, ratingSeries, genreSeries };
