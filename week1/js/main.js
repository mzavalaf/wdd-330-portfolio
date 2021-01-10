const links =
      [
          {
            label: "Week 1",
            url: "index.html"
              
          },
          
          {
            label: "Week 2",
            url: "week2/practice1.html" 
          },   
           {
            label: "Go Panthers",
            url: "week3/practice2.html" 
          } 
      ]

const ol = document.querySelector("ol");

for (const item of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    li.appendChild(a);
    
    ol.appendChild(li);
    }

