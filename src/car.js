const addCarCard = (car) => {
  const carCard = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  document.querySelector(".cars-list").insertAdjacentHTML("beforeend", carCard);
};

// Get all cars
// 1. Send an AJAX request to get all cars
// 2. For each car
// 2.1 Display car card
const fetchAndDisplayCars = (garage) => {
  fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json())
    .then((data) => {
      data.forEach(addCarCard);
    });
};

export { fetchAndDisplayCars, addCarCard };
