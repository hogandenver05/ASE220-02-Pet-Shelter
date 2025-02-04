const petCardsContainer = document.getElementById('pet-cards');

// Fetch pet data from the pets.json file
fetch('../data/pets.json')
    .then(response => response.json())
    .then(pets => {
        pets.forEach((pet, index) => {
            const card = document.createElement('div');
            card.classList.add('col');

            // Create pet card with pet details
            card.innerHTML = `
                <a href="../html/pet-details.html?pet=${index}" style="text-decoration: none;">
                    <div class="card">
                        <img src="${pet.img}" class="card-img-top" alt="${pet.name}">
                        <div class="card-body">
                            <h3 class="card-title"><strong>${pet.name}</strong>, ${pet.age}</h3>
                            <p class="card-text ${pet.gender === 'Male' ? 'gender-male' : 'gender-female'}">${pet.gender}</p>
                        </div>
                    </div>
                </a>
            `;
            petCardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading pet data:", error));
