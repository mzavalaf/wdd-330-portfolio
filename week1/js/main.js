const links =
      [
          {
            label: "Doing Stuff 1.1",
            url: "week1/stuff1.html"
              
          },
          
          {
            label: "Doing Stuff 1.2",
            url: "week1/stuff2.html" 
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

