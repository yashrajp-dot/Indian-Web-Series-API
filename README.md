# indianWebSeriesAPI


function genreSeries(genre) {
  // fetch all the required series - series with those genre
  // send a random of them

  let requiredSeries = []
  for(let i=0; i<webSeries.length; i++)
  {
    let thatSeries = webSeries[i];
    for(let j=0; j<thatSeries.category.length; j++)
    {
      if(webSeries[i].category[j].localeCompare(genre) === 0)
      {
        requiredSeries.push(thatSeries);
      }
    }
  }
  let random = Math.floor(Math.random() * requiredSeries.length);
  return requiredSeries[random];
}
