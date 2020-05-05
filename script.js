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

        
        // retrieve local storage
        for (var i = 9; i < 18; i++) {
            var saveHour = "#hour-" + i;
            var saveContent = localStorage.getItem(saveHour);
            $(saveHour).children().val(saveContent);  
        }
    }

    init();

    
    // when the save button is clicked
    $(".saveBtn").on("click", function() {
        var saveHour = "#hour-" + $(this).data("hour");
        var saveContent = $(saveHour).children().val();
        localStorage.setItem(saveHour, saveContent);
    })
})