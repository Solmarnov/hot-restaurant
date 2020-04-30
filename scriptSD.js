const nameInput = $('#name');
const phoneInput = $('#phone');
const emailInput = $('#email');
const idInput = $('#id');

const reservations = [];
const waitList = [];

function Reservation(name, phone, email, id) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.id = id;
}


$('#submit-btn').on('click', () => {
  const nameVal = nameInput.val().trim();
  const phoneVal = phoneInput.val().trim();
  const emailVal = emailInput.val().trim();
  const idVal = idInput.val().trim();

  const reservation = new Reservation(nameVal, phoneVal, emailVal, idVal);

  if (reservations.length > 5) {
    prompt("Sorry, we're fully booked. We've put you on our waiting list.");

    waitList.push(reservation);
  } else {
    prompt("Thanks for booking a table with us!");

    reservations.push(reservation);
  };
});