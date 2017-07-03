var request = require("request");
var fs = require("fs");

/*request('https://sytantris.github.io/http-examples/', function(err, response, body) {
  if(err) throw err;
  console.log("Response Status Code: ", response.statusCode);
});*/

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
        throw err;
       })
       .on('response', function(response) {
        console.log('Response Status Message:\n', response.statusMessage);
        console.log('Response Content Type:\n', response.headers['content-type']);
        console.log('Downloading image...');
        console.log('Downlaod complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));

