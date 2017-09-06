var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  var button = document.querySelector('#display-beers')

  button.addEventListener('click', function() {
    makeRequest(url, requestComplete);
  });
}

var makeRequest = function(url, callback) {
  //create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
  //set the type of request we want to make (HINT: GET)
  request.open('GET', url); //capitalization of GET not required but expected
  //tell the request which function to run when it has completed
  request.addEventListener('load', callback);
  //send the request
  request.send();
}

var requestComplete = function() {
  if( this.status !== 200 ) return;

  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
}

var populateList = function(beers) {
  var ul = document.querySelector('#beer-list');

  beers.forEach( function(beer) {
    var li = document.createElement('li');
    var img = document.createElement('img')
    li.innerText = beer.name
    li.innerHTML = '<p><b>' + beer.name + '</b></p>' + '<p><img src="' + beer.image_url + '" style="width:100px;height:200px;"></p>'
    // img = beer.image_url
    ul.appendChild(li);
    // ul.appendChild(img);
  })
}






window.addEventListener('load', app);