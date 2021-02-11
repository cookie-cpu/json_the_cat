const {fetchBreedDescription} = require('./breedFetcher.js');

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc) => {
  if (error !== null) {
    console.log(`Error fetch details: `, error);
  } else {
    console.log(desc);
  }
});


