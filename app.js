/// Button 1 click listener ///
button1.addEventListener("click", (event) => {
  console.log("Button 1 clicked");
})

/// Button 2 click listener ///
button2.addEventListener("click", (event) => {
  console.log("Button 2 clicked");
})

/// Button 3 click listener ///
button3.addEventListener("click", (event) => {
  console.log("Button 3 clicked");
})

/// Button 4 click listener ///
button4.addEventListener("click", (event) => {
  console.log("Button 4 clicked");
})

/// Button press listeners ///
addEventListener('keydown', function (e) {
    if (e.keyCode == 49) {
      console.log("Button 1 pressed");
    }
    if (e.keyCode == 50) {
      console.log("Button 2 pressed");
    }
    if (e.keyCode == 81) {
      console.log("Button 3 pressed");
    }
    if (e.keyCode == 87) {
      console.log("Button 4 pressed");
    }
  })
