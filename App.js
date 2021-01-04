var axios = require('axios')
async function weather(key){
var weather = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`)
delete weather.data.sol_keys;    
delete weather.data.validity_checks;
const keysArr = Object.keys(weather.data);
const dayKey = true ? keysArr.slice(-1)[0] : keysArr.slice(-2)[0];
const tdw =  weather.data[dayKey]
return {first:tdw.First_UTC,last:tdw.Last_UTC,Season:tdw.Season }
}
module.exports = weather