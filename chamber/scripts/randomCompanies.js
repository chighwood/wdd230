const membersURL = 'data/members.json';

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

function updateCompanySection(sectionClass, member) {
    const section = document.querySelector(`.${sectionClass}`);
    if (!section) {
        console.error(`Section with class ${sectionClass} not found`);
        return;
    }

    const h4 = section.querySelector('h4');
    const p = section.querySelector('p');
    const p2 = section.querySelector('email');

    if (!h4 || !p) {
        console.error(`Missing elements in section ${sectionClass}`);
        return;
    }

    h4.textContent = member.name;
    p.textContent = member.address;
    p2.textContent = member.website;
}

getMembers();

