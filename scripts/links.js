async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links'); // Assuming you have an element with id 'links' to insert the links into
  linksContainer.innerHTML = ''; // Clear existing content

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
    });

    weekDiv.appendChild(weekLinks);
    linksContainer.appendChild(weekDiv);
  });
}

