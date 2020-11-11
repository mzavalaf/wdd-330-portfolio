function showNote1(theButtonClicked){
  var note = document.getElementById("textNote");
        
  if (note.innerHTML === "") {
    note.innerHTML =  "One of the things that powerfully caught my attention was the Mobile First course. I'm one of those who focused on a view for desktop devices or laptops, however, this helped me recognize that most of the devices that users are going to use are small screens, although I know that I have always Striving to create very responsive views I know I have to change my design idea and focus first on views and procedures for mobile devices."
      theButtonClicked.innerHTML = "Hide!";
  } else {
    note.innerHTML = ""
      theButtonClicked.innerHTML = "Show Me!";
  }
}


