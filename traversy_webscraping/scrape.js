const request = require('request')
const cheerio = require('cheerio')

request('https://www.redolive.com/jobs/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        console.log(`\nRED OLIVE JOB POSTINGS`)
        const ROsectionHeading = $('h3');
        console.log(ROsectionHeading.text());

        $('.title').each((e, el) => {
            const item = $(el).text();
            console.log('\t'+item);
        });
    }
});

//I CANT GET ANYTHING TO WORK ON BAMBOO

request('https://company.bamboohr.com/jobs/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        console.log(`\nBambooHR JOB POSTINGS`)
        // const bambooHeading = $('.ResAts__card-content');
        // const bambooTitle = bambooHeading.find('h2').text();
        // console.log('?'+bambooTitle);

        $('.ResAts__listing-link').each((e, el) => {
            const bambooItem = $(el).text();
            console.log('\t'+bambooItem);
        });
    }
});