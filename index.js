const axios = require('axios');

var res = axios.get('https://scihub.copernicus.eu/dhus/odata/v1/Products?filter=( beginPosition:[2021-11-01T00:00:00.000Z TO 2022-01-31T23:59:59.999Z] AND endPosition:[2021-11-01T00:00:00.000Z TO 2022-01-31T23:59:59.999Z] ) AND (  (platformname:Sentinel-1 AND filename:S1A_* AND producttype:SLC AND sensoroperationalmode:IW))&$format=json', {auth: {
    username: 'npaw',
    password: 'npawtest2022'}})
  .then(res => {
      var products = res.d;
      console.log(products);
      /*var i = 0;
      while (i < 10) {
          console.log(products[i].json);
            ++i;
      }*/
      //aquí iría toda la cosica bonica para sacar los 10 primeros y últimos items de la lista
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

