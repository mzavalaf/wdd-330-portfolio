const links =
      [
          {
            label: "Home",
            url: "https://mzavalaf.github.io/wdd-330-portfolio/index.html"  
          },
           
           {
            label: "Local Storage Sample",
            url: "localstorage.html" 
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

