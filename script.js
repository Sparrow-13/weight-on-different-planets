
/* checks whether weight is a number or not 
    returns boolean result 
*/
function isvalid(weight) {
    let number = Number(weight);
    return !(number == NaN);
}

/* shows error message on screen 
    hides result div 
*/
function error_message() {
    let display_area = document.querySelector('#div_1_3');
    let error_div = document.querySelector('#div_1_2_2').style.display = "flex";
    display_area.style.display = "none";

}

/* removes error message on screen
    restore display of result div
    
*/
function remove_error() {
    let display_area = document.querySelector('#div_1_3');
    let error_div = document.querySelector('#div_1_2_2').style.display = "none";
    display_area.style.display = "flex";

}

/*  calculates the weight , handles result display , provoke error is any .
*/
function calculate() {
    let weight = document.querySelector('#weight_input').value;
    if (!isvalid(weight)) {
        error_message();
        console.log(typeof (weight));
        console.log("error use a number");
        return;
    }
    let planet = document.querySelector('#planets').value;
    changeImage();
    let weigthOnPlanet = weigthOn(planet, weight);
    updateWeight(weigthOnPlanet, planet);


    console.log(weight + ' ' + planet);
}

/*  calculate weight on basis of planet and weigth on earth
    return calculated Weight with 2 decimal precision.
*/
function weigthOn(planet, weight) {
    let number = 0;
    switch (planet) {
        case 'mercury':
            number = (weight * 3.7) / 9.81;
            break;

        case 'venus':
            number = (weight * 8.87) / 9.81;
            break;

        case 'earth':
            return (weight);
            break;

        case 'mars':
            number = (weight * 3.711) / 9.81;
            break;

        case 'jupiter':
            number = (weight * 24.79) / 9.81;
            break;

        case 'saturn':
            number = (weight * 10.44) / 9.81;
            break;

        case 'uranus':
            number = (weight * 8.69) / 9.81;
            break;

        case 'neptune':
            number = (weight * 11.15) / 9.81;
            break;

        case 'moon':
            number = (weight * 1.622) / 9.81;
            break;

        default:
            break;
    }
    return number.toFixed(2);

}

/* 
    changes image of planets on selecting from list.
 */
function changeImage() {
    remove_error();
    let planet = document.querySelector('#planets').value;
    let planet_img = document.querySelector('#planet_img');
    let weight_info_div = document.querySelector('#div_1_3_2').style.display = 'none';
    planet_img.src = 'assets/' + planet + '.png';
    console.log(planet + planet_img.src);
}

/*  
    updates weight on result div
*/
function updateWeight(weight, planet) {
    let weight_info_div = document.querySelector('#div_1_3_2').style.display = 'block';
    let updatedWeight = document.querySelector('#weight_on_planet');
    let actualWeight = document.querySelector('#circle');
    actualWeight.innerHTML = weight + 'KG ';
    updateWeight.innerHTML = 'The Weight of Object on ' + planet + ' is';
}
