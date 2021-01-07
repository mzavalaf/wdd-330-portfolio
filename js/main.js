const links =
      [
          {
            label: "Week 1",
            url: "week1/index.html"
              
          },
          
          {
            label: "Week 2",
            url: "week2/index.html" 
          },   
          {
            label: "Week 3",
            url: "week3/index.html" 
          }
          {
            label: "Week 4",
            url: "week4/index.html" 
          }  
      ]

const myList = document.getElementById("list");

for (let i=0; i < links.length; i++)
    {
        let listItem = document.createElement("li");
        let anchor = document.createElement("a");
        
        anchor.setAttribute("href", links[i].url);
        anchor.innerText = links[i].label;
        
        listItem.appendChild(anchor);
        myList.appendChild(listItem);
    }

