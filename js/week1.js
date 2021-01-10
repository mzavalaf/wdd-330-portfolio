function addEntry() {
  var name = document.getElementById("name").value
  var address = document.getElementById("address").value
  localStorage.setItem(name, address)
  document.getElementById("address_list").innerHTML = name + "'s address added!"
  document.getElementById("name").value = ""
  document.getElementById("address").value = ""

}

function displayAddress() {
  document.getElementById("address_list").innerHTML = ""
  for (var i = 0, len = localStorage.length; i < len; ++i) {
      document.getElementById("address_list").innerHTML += localStorage.key(i) + ": " + localStorage.getItem(
          localStorage.key(i)) + "<br>";
  }
}

function clearLocalStorage() {
  localStorage.clear();
  document.getElementById("address_list").innerHTML = "Address book cleared!"
}
