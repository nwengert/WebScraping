const request = require('request')
const cheerio = require('cheerio')

request('https://www.redolive.com/jobs/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const h = cheerio.load(html);

        console.log(`\nRED OLIVE JOB POSTINGS`)
        const ROsectionHeading = h('h3');
        console.log(ROsectionHeading.text());

        h('.title').each((e, el) => {
            const item = h(el).text();
            console.log('\t'+item);
        });
    }
});


request('https://data.mx.com/company#careers', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const i = cheerio.load(html);

        console.log(`\nMX JOB POSTINGS`)
        const MXsection = i('h3');
        console.log(MXsection.text());

        i('.title').each((e, el) => {
            const item = i(el).text();
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

        // $('.ResAts__listing-link').each((e, el) => {
        //     const bambooItem = $(el).text();
        //     console.log('\t'+bambooItem);
        // });
    }
});