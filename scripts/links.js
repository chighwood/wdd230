const baseURL = "https://chighwood.github.io/wdd230/";
const linksURL = "https://chighwood.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links');
  linksContainer.innerHTML = '';

  weeks.forEach(week => {
    const weekDiv = document.createElement('div');
    const weekHeader = document.createElement('h3');
    weekHeader.textContent = week.week;
    weekDiv.appendChild(weekHeader);

    const weekLinks = document.createElement('ul');
    week.links.forEach(link => {
      const linkItem = document.createElement('li');
      const linkAnchor = document.createElement('a');
      linkAnchor.href = baseURL + link.url;
      linkAnchor.textContent = link.title;
      linkItem.appendChild(linkAnchor);
      weekLinks.appendChild(linkItem);

      if (index < week.links.length - 1) {
        const separator = document.createTextNode(' | ');
        weekLinks.appendChild(separator);
      }
    });

    weekDiv.appendChild(weekLinks);
    linksContainer.appendChild(weekDiv);

    getLinks();
  });
}
