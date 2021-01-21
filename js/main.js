const links =
      [
          {
            label: "Home",
            url: "#"
              
          },
          
          {
            label: "Local Storage Sample",
            url: "https://mzavalaf.github.io/wdd-330-portfolio/week1/localstorage.html" 
          } 
         
      ]

const myList = document.querySelector("week1List");

for (let i=0; i < links.length; i++) 
{
    let listItem = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.setAttribute("href", links[i].url);
    anchor.innerText = links[i].label;
    listItem.appendChild(anchor);
    myList.appendChild(listItem);

    }

