fetch('../data/pets.json')
    .then(response => response.json())
    .then(pets => {
        // Retrieve the pet index from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const petIndex = urlParams.get("pet");

        // Check if the pet index is valid and exists in the pets array
        if (petIndex !== null && petIndex >= 0 && petIndex < pets.length) {
            const pet = pets[petIndex]; // Get the selected pet by index
            // Display pet details
            document.getElementById("pet-image").src = pet.img;
            document.getElementById("pet-name").innerText = pet.name;
            document.getElementById("pet-breed").innerText = pet.breed;
            document.getElementById("pet-age").innerText = pet.age;
            document.getElementById("pet-gender").innerText = pet.gender;
            // document.getElementById("pet-bio").innerText = pet.bio;
        } else {
            // If no valid pet index is found, show an error message
            document.getElementById("pet-name").innerText = "Pet not found.";
        }
    })
    .catch(error => console.error("Error loading pet data:", error));
