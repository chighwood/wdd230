
async function displayMembers() {
    try {
      const response = await fetch('data/members.json');
      const data = await response.json();
  
      const members = data.members;
  
      const membersContainer = document.getElementById('members-box');
      membersContainer.innerHTML = '';
  
      members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
  
        memberCard.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
          <p>${member.otherInfo}</p>
        `;
  
        membersContainer.appendChild(memberCard);
      });
    } 
    catch (error) {
      console.error('Error fetching or parsing JSON data:', error);
    }
  }

  document.getElementById('grid').addEventListener('click', function() {
    document.getElementById('members-box').classList.remove('members-list');
    document.getElementById('members-box').classList.add('members-grid');
  });
  
  document.getElementById('list').addEventListener('click', function() {
    document.getElementById('members-box').classList.remove('members-grid');
    document.getElementById('members-box').classList.add('members-list');
  });
  
  displayMembers();