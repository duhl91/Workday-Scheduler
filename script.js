// uses Moment to add date and time to the page
var dateInfo = moment().format("[Schedule for ]  dddd, MMMM Do YYYY. [ The current time is ] h:mm");

$("#currentDay").text(dateInfo);

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var input = $(this).prev().val();
    console.log(input)
    localStorage.setItem($(this).prev().attr("id"), input)

});

var currentTime = moment().format('HH');
console.log(currentTime)

$("input").each(function () {
    var blockTime = parseInt($(this).attr("id"));

    if (blockTime > currentTime) {
        $(this).addClass("future")

    } else if (blockTime == currentTime) {

        $(this).addClass("present")

    }
    else {
        $(this).addClass("past")

    };

    $("#" + blockTime).val(localStorage.getItem(blockTime))
});