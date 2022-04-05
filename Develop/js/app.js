// get the current date in the header section

let currentDateEl = $("#currentDay");

let today = moment().format("dddd, MMMM Do");
currentDateEl.text(today);

// changing the color using current, past nad present classes inside text area
// hours are kept in 24 hour format as moment().hour() return in 24hr format
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentHour = moment().hour();
for (i = 0; i < hours.length; i++) {
  if (currentHour === hours[i]) {
    console.log(i);
    $(`#${i}`).addClass("present");
  }
  if (currentHour > hours[i]) {
    $(`#${i}`).addClass("past");
  }
  if (currentHour < hours[i]) {
    $(`#${i}`).addClass("future");
  }
}
