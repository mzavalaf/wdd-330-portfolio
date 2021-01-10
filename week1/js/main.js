const links =
      [
          {
            label: "Practice 1.1",
            url: "week1/stuff1.html"
              
          },
          
          {
            label: "Practice 1.2",
            url: "week1/stuff2.html" 
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

