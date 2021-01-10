function addEntry() {
  var name = document.getElementById("name").value
  var age = document.getElementById("age").value
  var address = document.getElementById("address").value
  localStorage.setItem(name, age, address)
  document.getElementById("data_saved").innerHTML = "Data is Saved"
  document.getElementById("name").value = ""
  document.getElementById("age").value = ""
  document.getElementById("address").value = ""

}

function showData() {
  document.getElementById("data_saved").innerHTML = ""
  for (var i = 0, len = localStorage.length; i < len; ++i) {
      document.getElementById("data_saved").innerHTML += localStorage.key(i) + ": " + localStorage.getItem(
          localStorage.key(i)) + "<br>";
  }
}

function clearLocalStorage() {
  localStorage.clear();
  document.getElementById("data_saved").innerHTML = "Reset Completed!"
}

