const links =
      [
          {
            label: "Practice 1",
            url: "week1/practice1.html"
              
          },
          
          {
            label: "Practice 2",
            url: "week1/practice2.html" 
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

