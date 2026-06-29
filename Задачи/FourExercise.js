const moment = require('moment');

function convertData(str){
    const date = moment(str, 'DD-MM-YYYY');
    console.log(date.format('YYYY-MM-DD'));
}

convertData('21-1-2021');