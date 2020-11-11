function showCongratulations(theButtonClicked){
  let x = document.getElementById("result_display");
        
  if (x.innerHTML === "") {
    x.innerHTML =  "Congratulations, you did it!<p>You got the page to update!</p>"
      theButtonClicked.innerHTML = "Click Me Again!";
  } else {
    x.innerHTML = "";
  }
}