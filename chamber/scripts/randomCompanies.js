const membersURL = 'chamber/data/members.json';

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayRandomCompanies(data.members);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

function displayRandomCompanies(members) {
    const filteredMembers = members.filter(member => member.membershipLevel !== 'Bronze');

    if (filteredMembers.length < 3) {
        console.error('Not enough members with Silver or above membership level');
        return;
    }

    const selectedMembers = getRandomUniqueMembers(filteredMembers, 3);

    updateCompanySection('company1', selectedMembers[0]);
    updateCompanySection('company2', selectedMembers[1]);
    updateCompanySection('company3', selectedMembers[2]);
}

function getRandomUniqueMembers(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function updateCompanySection(sectionId, member) {
    const section = document.querySelector(`.${sectionId}`);
    section.querySelector('h4').textContent = member.name;
    section.querySelector('img').src = `images/${member.image}`;
    section.querySelector('img').alt = `${member.name} image`;
    section.querySelector('p').textContent = member.address;
}

getMembers();
