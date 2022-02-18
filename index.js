const axios = require('axios');

axios.get('https://scihub.copernicus.eu/dhus/odata/v1/Products?filter=( beginPosition:[2021-11-01T00:00:00.000Z TO 2022-01-31T23:59:59.999Z] AND endPosition:[2021-11-01T00:00:00.000Z TO 2022-01-31T23:59:59.999Z] ) AND (  (platformname:Sentinel-1 AND filename:S1A_* AND producttype:SLC AND sensoroperationalmode:IW))&$format=json', {auth: {
    username: 'npaw',
    password: 'npawtest2022'}})
  .then(res => {
    
    for (var i = 0; i < res.length; i++){
        var obj = res[i];
        for (var key in obj){
            var value = obj[key];
            console.log("<br> - " + key + ": " + value);
        }
    }

      //console.log(res);
      /*
    const products = res.data;
    //console.log(products);
    for(product of products) {
      console.log(product);
    }
    */
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

