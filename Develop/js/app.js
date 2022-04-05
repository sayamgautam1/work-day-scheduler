// get the current date in the header section

let currentDateEl = $("#currentDay");

let today = moment().format("dddd, MMMM Do");
currentDateEl.text(today);

// changing the color using current, past nad present classes inside text area
// hours are kept in 24 hour format as moment().hour() return in 24hr format
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentHour = moment().hour();
let saveBtnEl = $(".saveBtn");
for (i = 0; i < hours.length; i++) {
  if (currentHour === hours[i]) {
    $(`#description${i}`).addClass("present");
  }
  if (currentHour > hours[i]) {
    $(`#description${i}`).addClass("past");
  }
  if (currentHour < hours[i]) {
    $(`#description${i}`).addClass("future");
  }
}
// to save a value
saveBtnEl.on("click", function () {
  let time = $(this).siblings(".hour").text();
  let toDo = $(this).siblings(".description").val();
  // set the item into local storage
  localStorage.setItem(time, toDo);
});
