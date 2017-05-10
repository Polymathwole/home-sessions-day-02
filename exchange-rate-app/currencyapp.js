
const Agent = require('node-rest-client').Client;
const app = new Agent();

app.get("http://apilayer.net/api/live?access_key=420063ab159087dfcb8b38da4a9c5f5f&currencies=AED,BTC,CAD,CNY,EUR,GBP,JPY,NGN,SAR,SEK,ZAR",
function (data, response)//function used to parse data 
{
    let utctime = data.timestamp;//time returned in the JSON response
    let quotes = data.quotes;//currencies returned in the JSON response
    let currentdatetime=new Date(utctime*1000);

    console.log("\nTimestamp: " + currentdatetime.toString()+"\n");
    console.log("AED (UAE Dirham)\nBTC (Bitcoin)\nCAD (Canadian Dollar)\nCNY (Chinese Yuan)\nEUR (Euro)\nGBP (British Pound Sterling)\nJPY (Japanese Yen)\nNGN (Nigerain Naira)\nSAR (Saudi Riyal)\nSEK (Swedish Krona)\nZAR (South African Rand)\nUSD (United States Dollar)\n");//currencies legend

    console.log('1 AED = '+(quotes.USDNGN/quotes.USDAED).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDAED/quotes.USDNGN).toFixed(7)+" AED");
    console.log('1 BTC = '+(quotes.USDNGN/quotes.USDBTC).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDBTC/quotes.USDNGN).toFixed(7)+" BTC");
    console.log('1 CAD = '+(quotes.USDNGN/quotes.USDCAD).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDCAD/quotes.USDNGN).toFixed(7)+" CAD");
    console.log('1 CNY = '+(quotes.USDNGN/quotes.USDCNY).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDCNY/quotes.USDNGN).toFixed(7)+" CNY");
    console.log('1 EUR = '+(quotes.USDNGN/quotes.USDEUR).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDEUR/quotes.USDNGN).toFixed(7)+" EUR");
    console.log('1 GBP = '+(quotes.USDNGN/quotes.USDGBP).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDGBP/quotes.USDNGN).toFixed(7)+" GBP");
    console.log('1 JPY = '+(quotes.USDNGN/quotes.USDJPY).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDJPY/quotes.USDNGN).toFixed(7)+" JPY");
    console.log('1 SAR = '+(quotes.USDNGN/quotes.USDSAR).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDSAR/quotes.USDNGN).toFixed(7)+" SAR");
    console.log('1 SEK = '+(quotes.USDNGN/quotes.USDSEK).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDSEK/quotes.USDNGN).toFixed(7)+" SEK");
    console.log('1 ZAR = '+(quotes.USDNGN/quotes.USDZAR).toFixed(4)+" NGN, 1 NGN = "+(quotes.USDZAR/quotes.USDNGN).toFixed(7)+" ZAR");
    console.log('1 USD = '+(quotes.USDNGN).toFixed(4)+" NGN, 1 NGN = "+(1/quotes.USDNGN).toFixed(7)+" USD");
    
});