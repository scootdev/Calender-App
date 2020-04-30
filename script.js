$(document).ready(function () {
    var currentHour;

    // Initiation function
    function init() {
        // Set the current day & update the timer every second
        setInterval(function () {
            $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

        // set current hour
        currentHour = "#hour-" + moment().hour();
        $(currentHour).toggleClass("future").toggleClass("present");

        // set past hours
           if (moment().hour() > 9) {
                for (var i = 9; i < moment().hour(); i++) {
                var pastHour = "#hour-" + i;
                $(pastHour).toggleClass("future").toggleClass("past");
                
            }
        }       
    }



    init();
    console.log(moment().hour());
})