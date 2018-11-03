
// I need to look at this one again



var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;

var url = 'https://www.indeed.com/jobs?q=javascript%20developer&l=Salt%20Lake%20County%2C%20UT&vjk=48b817f867b31485'

request(url, function(err, resp, body) {
    var $ = cheerio.load(body);
    var companyName = $('.vjs-jobtitle');
    var companyNameText = companyName.text();
})

console.log(companyNameText);

app.listen(port);
console.log('server running on ' + port);

// const opn = require('opn');
// opn('https://www.indeed.com/jobs?q=junior+web+developer&l=Salt+Lake+County%2C+UT');

