
totalseconds = 12;
timer();
function timer(){
    time = totalseconds;	
    console.log("Starting timer with: " + time);
    time = time + 1;	
    var x = setInterval(function() {
        time = time - 1;	
        document.getElementById("timer").innerHTML = time;
        if (time == 0) {
            console.log("Time is zero");
            console.log("Clearing interval");
            clearInterval(x)
            resttimer(5);
            
            
        }
    },1000);
}
function resttimer(time){
    console.log("Starting rest = timer");
    time = time + 1;	
    var x = setInterval(function() {
        time = time - 1;	
        document.getElementById("timer").innerHTML = "Resting : " + time;
        if (time == 0) {
            console.log("Time is zero");
            console.log("Clearing interval");
            clearInterval(x);
            timer();
            
            
        }
    },1000);
}