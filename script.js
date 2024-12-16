// Dynamic inventory loading
const marqueeText = document.getElementById('HELLO');
const cars = [
    { brand: "Tesla", model: "Model S", price: "$80,000", type: "electric", image: "images/tesla-model-s.jpeg" },
    { brand: "Ford", model: "Mustang", price: "$55,000", type: "sedan", image: "images/ford-mustang.jpeg" },
    { brand: "Toyota", model: "Rav4", price: "$65,000", type: "suv", image: "images/toyota-rav4.jpeg" },
    { brand: "BMW", model: "X5", price: "$75,000", type: "suv", image: "images/bmw-x5.jpeg" },
    { brand: "Audi", model: "A4", price: "$45,000", type: "sedan", image: "images/audi-a4.jpeg" },
    { brand: "Mercedes", model: "C-Class", price: "$60,000", type: "sedan", image: "images/mercedes-c-class.webp" },
    { brand: "Chevrolet", model: "Bolt EV", price: "$40,000", type: "electric", image: "images/chevrolet-bolt-ev.jpeg" },
    { brand: "Hyundai", model: "Kona Electric", price: "$50,000", type: "electric", image: "images/hyundai-kona-electric.jpeg" },
    { brand: "Honda", model: "CR-V", price: "$35,000", type: "suv", image: "images/honda-crv.webp" },
    { brand: "Nissan", model: "Altima", price: "$30,000", type: "sedan", image: "images/nissan-altima.webp" }
];

const carList = document.querySelector('.car-list');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');

function loadCars(filter = "all", searchTerm = "") {
    carList.innerHTML = ""; // Clear previous results
    const filteredCars = cars.filter(car => {
        return (filter === "all" || car.type === filter) &&
               (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    // Display the filtered cars
    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image">
            <h3>${car.brand} ${car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Type: ${car.type}</p>
        `;
        carList.appendChild(carCard);
    });
}

// Event listeners for search and filter
searchInput.addEventListener('input', () => loadCars(filterSelect.value, searchInput.value));
filterSelect.addEventListener('change', () => loadCars(filterSelect.value, searchInput.value));

// Initialize cars on page load
loadCars();
function goHome() {
    window.location.href = 'index.html';  // Redirect to the home page (adjust if your homepage is named differently)
}
