const request = require('request');
const fs = require('fs');
//Fetches the info inputted into terminal
const arg = process.argv
//Since the info is an array, and there is a specified format, the thrid string is always the website
const website = arg[2]
//And the last string will always be the file location that is written out
const fileName = arg[3]


//Using const to call on website and file location.
request(website, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  if (!error){ 
  //Writes the body of the website onto the file.
    fs.writeFile(fileName, body, 'utf8', (error) => {
      const stat = fs.statSync(fileName)
      console.log(`Downloaded and saved ${stat.size} bytes to ${fileName}`)
    });
  }
});
