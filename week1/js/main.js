const links =
      [
          {
            label: "Home",
            url: "https://mzavalaf.github.io/wdd-330-portfolio/index.html"  
          },
          
          {
            label: "Practice 1",
            url: "practice1.html" 
          },  
           
           {
            label: "Practice 2",
            url: "practice2.html" 
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

