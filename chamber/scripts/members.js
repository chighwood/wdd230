document.addEventListener('DOMContentLoaded', () => {
  const membersBox = document.getElementById('members-box');
  const gridButton = document.getElementById('grid');
  const listButton = document.getElementById('list');
  const membersURL = 'data/members.json';

  async function fetchMembers() {
      try {
          const response = await fetch(membersURL);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data.members;
      } catch (error) {
          console.error('Fetch error: ', error);
      }
  }

  function displayGrid(members) {
      membersBox.className = 'members-grid';
      membersBox.innerHTML = '';
      members.forEach(member => {
          const memberItem = document.createElement('div');
          memberItem.className = 'member-item';
          memberItem.innerHTML = `
              <img src="images/${member.image}" alt="${member.name}">
              <h2>${member.name}</h2>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <a href="${member.website}" target="_blank">Website</a>
              <p>${member.membershipLevel}</p>
          `;
          membersBox.appendChild(memberItem);
      });
  }

  function displayList(members) {
      membersBox.className = 'members-list';
      membersBox.innerHTML = '';
      members.forEach(member => {
          const memberItem = document.createElement('div');
          memberItem.className = 'member-item';
          memberItem.innerHTML = `
              <div>
                  <h2>${member.name}</h2>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <a href="${member.website}" target="_blank">Website</a>
                  <p>${member.membershipLevel}</p>
              </div>
              <img src="images/${member.image}" alt="${member.name}">
          `;
          membersBox.appendChild(memberItem);
      });
  }

  gridButton.addEventListener('click', async () => {
      const members = await fetchMembers();
      displayGrid(members);
  });

  listButton.addEventListener('click', async () => {
      const members = await fetchMembers();
      displayList(members);
  });

  // Default display
  (async () => {
      const members = await fetchMembers();
      displayGrid(members);
  })();
});
