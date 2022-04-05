// get the current date in the header section

let currentDateEl = $("#currentDay");

let today = moment().format("dddd, MMMM Do");
currentDateEl.text(today);
