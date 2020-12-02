const days=document.getElementById(`day`)
    const getCurrDay=()=>{
    var weekno = new Array(7);
    weekno[0] = "Sunday";
    weekno[1] = "Monday";
    weekno[2] = "Tuesday";
    weekno[3] = "Wednesday";
    weekno[4] = "Thursday";
    weekno[5] = "Friday";
    weekno[6] = "Saturday";
    let curTime=new Date();
    let day=weekno[curTime.getDay()];
    days.innerText=day;
    return days;
}
getCurrDay();