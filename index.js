"use strict";

function getDogImages(input) {
  if (input <= 50) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  } else {
    alert("Please choose a number equal to or less than 50");
  }
}

function watchForm() {
  $("#dog-form").submit(event => {
    event.preventDefault();
    let userInput = $("#dog-number").val();

    getDogImages(userInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
