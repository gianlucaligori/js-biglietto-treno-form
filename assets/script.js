// VARIABILI

let userNameElement = document.querySelector('.user_name');
let userDistanceElement = document.querySelector('.user_distance');
let userAgeElement = document.querySelector('.user_age');
const priceForKm = 0.21;
const discountChildren = 20;
const discountSenior = 40;
// console.log(userNameElement, userDistanceElement, userAgeElement);

/*START INPUT*/

btn_active.addEventListener('click', function () {

    const userName = parseInt(userNameElement.value);
    const userDistance = parseInt(userDistanceElement.value);
    const userAge = parseInt(userAgeElement.value);

    const basePrice = userDistance * priceForKm;
    // console.log(basePrice);

    let discountPercent = 0;

    if (userAge < 18) {
    discountPercent = discountChildren;
    } else if (userAge >= 65) {
	discountPercent = discountSenior;
    }
    // console.log(discountPercent);

    const discount = basePrice * discountPercent / 100;
    // console.log(discount);

    let finalPrice = basePrice - discount;
    finalPrice = parseFloat(finalPrice.toFixed(2));
    document.getElementById('final_price').innerHTML = ('' + finalPrice);
    // console.log(finalPrice);

} );