const request = require('request')

let input = process.argv.splice(2);

let catName = input[0];

let address = `https://api.thecatapi.com/v1/breeds/search/?q=${catName}`



request(address, (error, response, body) => {
  if (error){
    console.log(`Error: ${error}`)
  } 
  else if (body === "[]"){
    console.log("Breed not found")
  }
  else {
    const data = JSON.parse(body);
    console.log(data[0].description)
  }
})

