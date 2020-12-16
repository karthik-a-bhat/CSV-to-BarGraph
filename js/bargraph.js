/*
Created By: Karthik Anand Bhat
Created On: 11/11/2020 
*/
 

 hljs.initHighlightingOnLoad();
 


 $(document).ready(() => {
   parse();
 });

 $('#run').bind('click', function () {
  if(document.getElementById("input").value == "")
  {
      alert("Please input a Value");
      return false;
  }
   var graphsDiv = document.querySelector('#graphs');
   graphsDiv.style.display="block";
   parse();
 });



 function parse() {
   const input = $('#input').val();
   var data = $.csv.toObjects(input);
   $('#result').empty();
    
   processData(data);

   $('#result').html(JSON.stringify(data, null, 2));
   console.log(data);


 }



 function processData(array){

  var daysOfWeek=[];

  var timeArr=["8:00 AM","8:45 AM","9:30 AM","10:15 AM","11:00 AM","11:45 AM","12:30 PM","1:15 PM","2:00 PM","2:45 PM","3:30 PM","4:15 PM","5:00 PM","5:45 PM","6:30 PM","7:15 PM","8:00 PM","8:45 PM","9:30 PM"];

  var mondayObj = {
    "8:00 AM" : 0,
    "8:45 AM" : 0,
    "9:30 AM" : 0,
    "10:15 AM":0,
    "11:00 AM":0,
    "11:45 AM":0,
    "12:30 PM":0,
    "1:15 PM":0,
    "2:00 PM":0,
    "2:45 PM":0,
    "3:30 PM":0,
    "4:15 PM":0,
    "5:00 PM":0,
    "5:45 PM":0,
    "6:30 PM":0,
    "7:15 PM":0,
    "8:00 PM":0,
    "8:45 PM":0,
    "9:30 PM":0

  };

  var tuesdayObj = {
    "8:00 AM" : 0,
    "8:45 AM" : 0,
    "9:30 AM" : 0,
    "10:15 AM":0,
    "11:00 AM":0,
    "11:45 AM":0,
    "12:30 PM":0,
    "1:15 PM":0,
    "2:00 PM":0,
    "2:45 PM":0,
    "3:30 PM":0,
    "4:15 PM":0,
    "5:00 PM":0,
    "5:45 PM":0,
    "6:30 PM":0,
    "7:15 PM":0,
    "8:00 PM":0,
    "8:45 PM":0,
    "9:30 PM":0

  };

  var wednesdayObj = {
    "8:00 AM" : 0,
    "8:45 AM" : 0,
    "9:30 AM" : 0,
    "10:15 AM":0,
    "11:00 AM":0,
    "11:45 AM":0,
    "12:30 PM":0,
    "1:15 PM":0,
    "2:00 PM":0,
    "2:45 PM":0,
    "3:30 PM":0,
    "4:15 PM":0,
    "5:00 PM":0,
    "5:45 PM":0,
    "6:30 PM":0,
    "7:15 PM":0,
    "8:00 PM":0,
    "8:45 PM":0,
    "9:30 PM":0

  };

  var thursdayObj = {
    "8:00 AM" : 0,
    "8:45 AM" : 0,
    "9:30 AM" : 0,
    "10:15 AM":0,
    "11:00 AM":0,
    "11:45 AM":0,
    "12:30 PM":0,
    "1:15 PM":0,
    "2:00 PM":0,
    "2:45 PM":0,
    "3:30 PM":0,
    "4:15 PM":0,
    "5:00 PM":0,
    "5:45 PM":0,
    "6:30 PM":0,
    "7:15 PM":0,
    "8:00 PM":0,
    "8:45 PM":0,
    "9:30 PM":0

  };

  var fridayObj = {
    "8:00 AM" : 0,
    "8:45 AM" : 0,
    "9:30 AM" : 0,
    "10:15 AM":0,
    "11:00 AM":0,
    "11:45 AM":0,
    "12:30 PM":0,
    "1:15 PM":0,
    "2:00 PM":0,
    "2:45 PM":0,
    "3:30 PM":0,
    "4:15 PM":0,
    "5:00 PM":0,
    "5:45 PM":0,
    "6:30 PM":0,
    "7:15 PM":0,
    "8:00 PM":0,
    "8:45 PM":0,
    "9:30 PM":0

  };

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if(element.Day==="Monday"){
      
      for(var index=0;index<timeArr.length-1;index++){

        var beginTime= timeArr[index];
        var endTime =timeArr[index+1];

        if(parseDate(beginTime,element,endTime)){
          console.log(element.Regsitered);
          mondayObj[beginTime]=mondayObj[beginTime]+parseInt(element.Registered);
          break;
        }

      }

    }
    else if(element.Day==="Tuesday"){
      
      for(var index=0;index<timeArr.length-1;index++){

        var beginTime= timeArr[index];
        var endTime =timeArr[index+1];

        if(parseDate(beginTime,element,endTime)){
          console.log(element.Regsitered);
          tuesdayObj[beginTime]=tuesdayObj[beginTime]+parseInt(element.Registered);
          break;
        }

      }

    }
    else if(element.Day==="Wednesday"){
      
      for(var index=0;index<timeArr.length-1;index++){

        var beginTime= timeArr[index];
        var endTime =timeArr[index+1];

        if(parseDate(beginTime,element,endTime)){
          console.log(element.Regsitered);
          wednesdayObj[beginTime]=wednesdayObj[beginTime]+parseInt(element.Registered);
          break;
        }

      }

    }
    else if(element.Day==="Thursday"){
      
      for(var index=0;index<timeArr.length-1;index++){

        var beginTime= timeArr[index];
        var endTime =timeArr[index+1];

        if(parseDate(beginTime,element,endTime)){
          console.log(element.Regsitered);
          thursdayObj[beginTime]=thursdayObj[beginTime]+parseInt(element.Registered);
          break;
        }

      }

    }  
    else if(element.Day==="Friday"){
      
      for(var index=0;index<timeArr.length-1;index++){

        var beginTime= timeArr[index];
        var endTime =timeArr[index+1];

        if(parseDate(beginTime,element,endTime)){
          console.log(element.Regsitered);
          fridayObj[beginTime]=fridayObj[beginTime]+parseInt(element.Registered);
         // break;
        }

      }

    }

    
  }
  daysOfWeek.push(mondayObj); daysOfWeek.push(tuesdayObj); daysOfWeek.push(wednesdayObj); daysOfWeek.push(thursdayObj); daysOfWeek.push(fridayObj);

  makeChart(daysOfWeek);

 }

 function makeChart(daysOfWeek){

  //console.log(myObject);

  for(var i=0;i<daysOfWeek.length;i++){
    
    var myObject = daysOfWeek[i];

      var dps = [];
      for(var element in myObject) {
        dps.push({label: element, y: myObject[element]});
      }
      
      var chart = new CanvasJS.Chart("chartContainer"+i+"",
      {        
        data: [
        {
          type: "column",
          dataPoints: dps
        }					
        ]
      });

      chart.render();
 }



  }

  


 //Passs as strings v1 and v3, v2 is object
 function parseDate(v1,v2,v3){

  var timeIntervalStart = v1.substring(0,v1.length-2);
  var classStart= v2.StartTime.substring(0,v2.StartTime.length-2);
  var classEnd = v2.Endtime.substring(0,v2.Endtime.length-2);
  var timeIntervalEnd= v3.substring(0,v3.length-2);

  var timeIntervalStartampm = v1.substring(v1.length-3,v1.length).toUpperCase();
  var classStartampm = v2.StartTime.substring(v2.StartTime.length-2,v2.StartTime.length).toUpperCase();
  var classEndampm = v2.Endtime.substring(v2.Endtime.length-2,v2.Endtime.length).toUpperCase();
  var timeIntervalEndampm = v3.substring(v3.length-3,v3.length).toUpperCase();



  var a = "11/24/2014 "+timeIntervalStart+timeIntervalStartampm;

  var b = "11/24/2014 "+classStart +" "+classStartampm;

  var c = "11/24/2014 "+classEnd +" "+classEndampm;

  var d = "11/24/2014 "+timeIntervalEnd+timeIntervalEndampm;


  var timeIntervalStartDate = new Date(a).getTime();
  var classStartDate = new Date(b).getTime();
  var classEndDate = new Date(c).getTime();
  var timeIntervalEndDate = new Date(d).getTime() - 60000; //To not include the end of time interval


  //If class start < timInt st

  if(classStartDate<=timeIntervalStartDate && classEndDate>=timeIntervalStartDate){
    return true;
  }
  else if (classStartDate>=timeIntervalStartDate && classStartDate<=timeIntervalEndDate){
    return true;
  }

  return false;
 
 }
