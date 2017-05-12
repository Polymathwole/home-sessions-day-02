const program = require('commander');
const Agent = require('node-rest-client').Client;
const app = new Agent();

console.log("AED (UAE Dirham)\nBTC (Bitcoin)\nCAD (Canadian Dollar)\nCNY (Chinese Yuan)\nEUR (Euro)\nGBP (British Pound Sterling)\nJPY (Japanese Yen)\nNGN (Nigerain Naira)\nSAR (Saudi Riyal)\nSEK (Swedish Krona)\nZAR (South African Rand)\nUSD (United States Dollar)");

program.version("0.0.1").
command('exchnairatoother <amt>').
description("Enter the amount in Naira you want to convert and the currency name as specified above").
option('-i,--input <curr>','3 letter abbreviation of currency to convert to as shown above')
.action((amt,curr)=>
{
getData(amt,curr);
}
);

program.parse(process.argv);

const getData=(amount,currency)=>
{
app.get("http://apilayer.net/api/live?access_key=420063ab159087dfcb8b38da4a9c5f5f&currencies=AED,BTC,CAD,CNY,EUR,GBP,JPY,NGN,SAR,SEK,ZAR",
(data, response)=>//function used to parse data 
{
    let utctime = data.timestamp;//time returned in the JSON response
    let quotes = data.quotes;//currencies returned in the JSON response
    let currentdatetime=new Date(utctime*1000);

    console.log("\nTimestamp: " + currentdatetime.toString()+"\n");

    for (let val of quotes)
    {
        if ("USD"+currency===val)
            {
                let amtval = (amount*(quotes.USDAED/quotes.USDNGN)).toFixed(7);
                console.log(amount + " NGN= " + amtval+ currency);
            }
    }
});
}