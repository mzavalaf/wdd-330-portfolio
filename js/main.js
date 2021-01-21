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

const ul = document.querySelector("list");

for (const item of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    li.appendChild(a);
    
    ul.appendChild(li);
    }

