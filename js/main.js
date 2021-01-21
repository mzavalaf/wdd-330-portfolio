const links =
      [
          {
            label: "Home",
            url: "#"
              
          },
          
          {
            label: "Week 1",
            url: "week1/index.html" 
          } 
         
      ]

const ul = document.querySelector("ul");

for (const item of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    li.appendChild(a);
    
    ul.appendChild(li);
    }

