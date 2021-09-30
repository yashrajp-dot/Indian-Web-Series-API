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
  let requiredSeries = [];
  for (let i = 0; i < webSeries.length; i++) {
    let thatSeries = webSeries[i];
    for (let j = 0; j < thatSeries.category.length; j++) {
      if (webSeries[i].category[j].localeCompare(genre) === 0) {
        requiredSeries.push(thatSeries);
      }
    }
  }
  let random = Math.floor(Math.random() * requiredSeries.length);
  return requiredSeries[random];
}

module.exports = { randomSeries, ratingSeries, genreSeries };
