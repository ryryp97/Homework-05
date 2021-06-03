var currentDayP = $("#currentDay");

        //This displays the current date and time real time
        $(document).ready(function () {
            setInterval(function () {
                var now = moment();
                currentDayP.text(now);
            }, 1000);
        });

        var currentTime = moment();

        //These if else statements control the background color of each of the time slots
        if (currentTime.isBefore(moment("09:00:00 am", "hh:mm:ss a"))) {
            $("#time9").removeClass("past");
            $("#time9").addClass("future");
        } else if (currentTime.isBetween(moment('09:00:00 am', "hh:mm:ss a"), moment('10:00:00 am', "hh:mm:ss a"))) {
            $("#time9").removeClass("future");
            $("#time9").addClass("present");
        } else {
            $("#time9").removeClass("present");
            $("#time9").addClass("past");
        }

        if (currentTime.isBefore(moment("10:00:00 am", "hh:mm:ss a"))) {
            $("#time10").removeClass("past");
            $("#time10").addClass("future");
        } else if (currentTime.isBetween(moment('10:00:00 am', "hh:mm:ss a"), moment('11:00:00 am', "hh:mm:ss a"))) {
            $("#time10").removeClass("future");
            $("#time10").addClass("present");
        } else {
            $("#time10").removeClass("present");
            $("#time10").addClass("past");
        }

        if (currentTime.isBefore(moment("11:00:00 am", "hh:mm:ss a"))) {
            $("#time11").removeClass("past");
            $("#time11").addClass("future");
        } else if (currentTime.isBetween(moment('11:00:00 am', "hh:mm:ss a"), moment('12:00:00 pm', "hh:mm:ss a"))) {
            $("#time11").removeClass("future");
            $("#time11").addClass("present");
        } else {
            $("#time11").removeClass("present");
            $("#time11").addClass("past");
        }

        if (currentTime.isBefore(moment("12:00:00 pm", "hh:mm:ss a"))) {
            $("#time12").removeClass("past");
            $("#time12").addClass("future");
        } else if (currentTime.isBetween(moment('12:00:00 pm', "hh:mm:ss a"), moment('01:00:00 pm', "hh:mm:ss a"))) {
            $("#time12").removeClass("future");
            $("#time12").addClass("present");
        } else {
            $("#time12").removeClass("present");
            $("#time12").addClass("past");
        }

        if (currentTime.isBefore(moment("01:00:00 pm", "hh:mm:ss a"))) {
            $("#time1").removeClass("past");
            $("#time1").addClass("future");
        } else if (currentTime.isBetween(moment('01:00:00 pm', "hh:mm:ss a"), moment('02:00:00 pm', "hh:mm:ss a"))) {
            $("#time1").removeClass("future");
            $("#time1").addClass("present");
        } else {
            $("#time1").removeClass("present");
            $("#time1").addClass("past");
        }

        if (currentTime.isBefore(moment("02:00:00 pm", "hh:mm:ss a"))) {
            $("#time2").removeClass("past");
            $("#time2").addClass("future");
        } else if (currentTime.isBetween(moment('02:00:00 pm', "hh:mm:ss a"), moment('03:00:00 pm', "hh:mm:ss a"))) {
            $("#time2").removeClass("future");
            $("#time2").addClass("present");
        } else {
            $("#time2").removeClass("present");
            $("#time2").addClass("past");
        }

        if (currentTime.isBefore(moment("03:00:00 pm", "hh:mm:ss a"))) {
            $("#time3").removeClass("past");
            $("#time3").addClass("future");
        } else if (currentTime.isBetween(moment('03:00:00 pm', "hh:mm:ss a"), moment('04:00:00 pm', "hh:mm:ss a"))) {
            $("#time3").removeClass("future");
            $("#time3").addClass("present");
        } else {
            $("#time3").removeClass("present");
            $("#time3").addClass("past");
        }

        if (currentTime.isBefore(moment("04:00:00 pm", "hh:mm:ss a"))) {
            $("#time4").removeClass("past");
            $("#time4").addClass("future");
        } else if (currentTime.isBetween(moment('04:00:00 pm', "hh:mm:ss a"), moment('05:00:00 pm', "hh:mm:ss a"))) {
            $("#time4").removeClass("future");
            $("#time4").addClass("present");
        } else {
            $("#time4").removeClass("present");
            $("#time4").addClass("past");
        }

        if (currentTime.isBefore(moment("05:00:00 pm", "hh:mm:ss a"))) {
            $("#time5").removeClass("past");
            $("#time5").addClass("future");
        } else if (currentTime.isBetween(moment('05:00:00 pm', "hh:mm:ss a"), moment('06:00:00 pm', "hh:mm:ss a"))) {
            $("#time5").removeClass("future");
            $("#time5").addClass("present");
        } else {
            $("#time5").removeClass("present");
            $("#time5").addClass("past");
        }
        //These lines of code allow the info typed in the text area to be stored in local storage;
        var saveBtn9 = $("#saveBtn9");

        saveBtn9.on("click", function() {
            event.preventDefault;
            var text9 = $("#text9").val();
            console.log(text9);
            localStorage.setItem("text9", text9);
        })

        var newText9 = localStorage.getItem("text9");
        var updatedText9 = $("#text9");
        updatedText9.val(newText9);

        var saveBtn10 = $("#saveBtn10");

        saveBtn10.on("click", function() {
            event.preventDefault;
            var text10 = $("#text10").val();
            console.log(text10);
            localStorage.setItem("text10", text10);
        })

        var newText10 = localStorage.getItem("text10");
        var updatedText10 = $("#text10");
        updatedText10.val(newText10);

        var saveBtn11 = $("#saveBtn11");

        saveBtn11.on("click", function() {
            event.preventDefault;
            var text11 = $("#text11").val();
            console.log(text11);
            localStorage.setItem("text11", text11);
        })

        var newText11 = localStorage.getItem("text11");
        var updatedText11 = $("#text11");
        updatedText11.val(newText11);

        var saveBtn12 = $("#saveBtn12");

        saveBtn12.on("click", function() {
            event.preventDefault;
            var text12 = $("#text12").val();
            console.log(text12);
            localStorage.setItem("text12", text12);
        })

        var newText12 = localStorage.getItem("text12");
        var updatedText12 = $("#text12");
        updatedText12.val(newText12);

        var saveBtn1 = $("#saveBtn1");

        saveBtn1.on("click", function() {
            event.preventDefault;
            var text1 = $("#text1").val();
            console.log(text1);
            localStorage.setItem("text1", text1);
        })

        var newText1 = localStorage.getItem("text1");
        var updatedText1 = $("#text1");
        updatedText1.val(newText1);

        var saveBtn2 = $("#saveBtn2");

        saveBtn2.on("click", function() {
            event.preventDefault;
            var text2 = $("#text2").val();
            console.log(text2);
            localStorage.setItem("text2", text2);
        })

        var newText2 = localStorage.getItem("text2");
        var updatedText2 = $("#text2");
        updatedText2.val(newText2);

        var saveBtn3 = $("#saveBtn3");

        saveBtn3.on("click", function() {
            event.preventDefault;
            var text3 = $("#text3").val();
            console.log(text3);
            localStorage.setItem("text3", text3);
        })

        var newText3 = localStorage.getItem("text3");
        var updatedText3 = $("#text3");
        updatedText3.val(newText3);

        var saveBtn4 = $("#saveBtn4");

        saveBtn4.on("click", function() {
            event.preventDefault;
            var text4 = $("#text4").val();
            console.log(text4);
            localStorage.setItem("text4", text4);
        })

        var newText4 = localStorage.getItem("text4");
        var updatedText4 = $("#text4");
        updatedText4.val(newText4);

        var saveBtn5 = $("#saveBtn5");

        saveBtn5.on("click", function() {
            event.preventDefault;
            var text5 = $("#text5").val();
            console.log(text5);
            localStorage.setItem("text5", text5);
        })

        var newText5 = localStorage.getItem("text5");
        var updatedText5 = $("#text5");
        updatedText5.val(newText5);