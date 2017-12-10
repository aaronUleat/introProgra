function Countries(){};
axios.get('https://restcountries.eu/rest/v2/all')
  .then(function (response) {
  		Countries.prototype.count = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

var country = new Countries();
var obj = {};

console.log( _.extend(obj, country.count) );





