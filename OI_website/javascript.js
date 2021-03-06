function getStylesheet() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 15) {
       document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
      }
      if (15 <= currentTime&&currentTime < 24) {
       document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
      }
}

 getStylesheet();

function weatherBalloon( cityID ) {
  var key = 'b66159bf91b5fbe629c147082909b174';
   fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
     weatherBalloon( 2746301 ); //tilburg
   // weatherBalloon( 5403676 );
    // weatherBalloon( 5983720 );
    // weatherBalloon( 2643743 );
}

function drawWeather( d ) {
  var main = d.weather[0].main;

  if( main.indexOf('Clear') > -1 ) {
  	document.body.className = 'clear';
  } else if( main.indexOf('Rain') > -1 ) {
  	document.body.className = 'rain';
  } else if( main.indexOf('Clouds') > -1 ) {
  	document.body.className = 'clouds';
  }
    else if( main.indexOf('Thunderstorm') > -1 ) {
    document.body.className = 'rain';
  }
    else if( main.indexOf('Drizzle') > -1 ) {
  	document.body.className = 'rain';
  }
    else if( main.indexOf('Snow') > -1 ) {
    document.body.className = 'snow';
  }
    else if( main.indexOf('Atmosphere') > -1 ) {
    document.body.className = 'clouds';
  }

}

 // <noscript <link href="stylesheet.css" rel="stylesheet"></noscript>
// weather api aanroepen in script, haal shit van tilburg op, als weer zonnige dag is dan is lucht zonnig
