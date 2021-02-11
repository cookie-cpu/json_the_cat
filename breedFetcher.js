const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let address = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

  request(address, (error, response, body) => {
    if (error) {
      callback(`Error: ${error}`);
    } else if (body === "[]") {
      callback("Breed not found");
    } else {
      const data = JSON.parse(body);
      callback(data[0].description);
    }
    //callback(null, error)
  });
};

module.exports = {fetchBreedDescription};



