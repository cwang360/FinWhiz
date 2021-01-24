/* globals Chart:false, feather:false */

const stockKey = API_KEY;



function getData(){

  var symbol = document.getElementById("sym").value;
  var daysAhead = document.getElementById("days").value;
    console.log(symbol);
    if(symbol.length > 0){
      $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+symbol.toUpperCase()+'&apikey='+stockKey, function(data) {
        currTime = data["Meta Data"]["3. Last Refreshed"];
        currYear = parseInt(currTime.substring(0,4));
        currMonth = parseInt(currTime.substring(5,7));
        currDay = parseInt(currTime.substring(8,10));
      
        console.log(data["Time Series (Daily)"]);
        allPrices = [];
        startTime = Object.keys(data["Time Series (Daily)"]);
        startTime = startTime[startTime.length-1];
        year = parseInt(startTime.substring(0,4));
        month = parseInt(startTime.substring(5,7));
        day = parseInt(startTime.substring(8,10));
        for(var time in data["Time Series (Daily)"]){
          // hilo = [];
          // hilo.push(data["Time Series (60min)"][time]["2. high"]);
          // hilo.push(data["Time Series (60min)"][time]["3. low"]);
          // allPrices.push(hilo);
          allPrices.push((parseInt(data["Time Series (Daily)"][time]["2. high"])
                        +parseInt(data["Time Series (Daily)"][time]["3. low"]))/2);
        }
        allPrices.reverse();
        console.log(allPrices);
        console.log(year);
        console.log(month);
        console.log(day);

        
        //Original
        var url="https://www.wolframcloud.com/obj/2fb14b10-db1b-487e-ba72-985629bd9c5b?y="+year+"&m="+month+"&d="+day+"&p="+allPrices;
        console.log(url);
        
        document.getElementById('historicalGraph').src=url;
        //Simulations
        var url="https://www.wolframcloud.com/obj/fd7cdc9b-eff2-4723-8207-f5d757ae51b4?y="+currYear+"&m="+currMonth+"&d="+currDay+"&p="+allPrices+"&f="+daysAhead;
        document.getElementById('simulationGraph').src=url;
        //distribution
        var url="https://www.wolframcloud.com/obj/1287f82a-82d6-4995-95a6-b0575bde5bb1?p="+allPrices+"&f="+daysAhead;
        document.getElementById('distributionGraph').src=url;

        var text = "A distribution of simulated prices for " + daysAhead + " days after today are shown above.";
        console.log(text);
        document.getElementById('daysValue').innerHTML=text; 


      }) 
  }

};
