const links =
      [
          {
            label: "Doing Stuff Week 1.1",
            url: "week1/stuff1.html"
              
          },
          
          {
            label: "Doing Stuff Week 1.2",
            url: "week2/stuff2.html" 
          },   
           {
            label: "Go Panthers",
            url: "week3/index.html" 
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

