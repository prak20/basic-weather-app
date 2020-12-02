const display_c=()=>{
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('getCurrTime()',refresh)
    }

const datex=document.getElementById(`today_data`)
    const getCurrTime =()=>{
    var currDate = new Date();
    var months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ]
    var month = months[currDate.getMonth()]; // Since getMonth() returns month from 0-11 not 1-12
    var date = currDate.getDate();
    //  var month=currDate.getMonth()+1; 
    var year=currDate.getFullYear();
    let hours=currDate.getHours();
    let mins=currDate.getMinutes();
    let sec=currDate.getSeconds()
    let periods='AM';
    if(hours>11){
        periods='PM';
        if (hours>12) hours-=12;
    }
    if(mins<10){
        mins="0"+mins;
    }
    let date1= `${month} ${date} | ${hours}:${mins}:${sec} ${periods}`
    datex.innerText=date1
    display_c();
}
getCurrTime();
    