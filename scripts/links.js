const baseURL = "https://chighwood.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links');
    linksContainer.innerHTML = '';

    weeks.forEach(week => {
        const weekRow = document.createElement('div');
        weekRow.classList.add('week-row');

        const weekHeader = document.createElement('div');
        weekHeader.classList.add('week-header');
        weekHeader.textContent = week.week;
        weekRow.appendChild(weekHeader);

        const weekLinks = document.createElement('div');
        weekLinks.classList.add('week-links');

        week.links.forEach((link, index) => {
            const linkItem = document.createElement('span');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link.url.startsWith('http') ? link.url : baseURL + link.url;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            weekLinks.appendChild(linkItem);

            if (index < week.links.length - 1) {
                const separator = document.createTextNode(' | ');
                weekLinks.appendChild(separator);
            }
        });

        weekRow.appendChild(weekLinks);
        linksContainer.appendChild(weekRow);
    });
}

getLinks();
