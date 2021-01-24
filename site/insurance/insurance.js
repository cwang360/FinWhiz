
function getData(){
    document.getElementById("subButton").innerHTML = "Loading...";
    document.getElementById('insuranceGraph').src="";
         var medal = document.getElementById('medal').value;
         var plan = document.getElementById('plan').value;
         var state = document.getElementById('state').value;
        var company = document.getElementById('company').value;
          var url="https://www.wolframcloud.com/obj/1548d63d-cc91-4914-90cf-ed51ab8d8f31?m="+medal+"&s="+state+"&g="+plan+"&c="+company;
          console.log(url);
          console.log(medal);
          console.log(plan);
          console.log(company);
        document.getElementById('insuranceGraph').src=url;
        document.getElementById('subButton').innerHTML = "Submit";

       

    
  
  };
  