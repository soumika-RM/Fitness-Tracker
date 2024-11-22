var submit = document.getElementById("submit");

submit.onclick = function () {
    event.preventDefault();
    var currentWeight = document.getElementById("currentweight").value;
    var goalWeight = document.getElementById("goalweight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var calories = document.getElementById("everydaycalories").value;
    var genderOption = document.getElementById("gender");
    var gender = genderOption.options[genderOption.selectedIndex].text;
    var activityOption = document.getElementById("activity");
    var activity = activityOption.options[activityOption.selectedIndex].text;
    let bmr = bmrCalculator(currentWeight, goalWeight, height, age, calories, gender, activity);
    let tdee = tdeeCalculator(bmr, activity);
    let goalweightDate = goalweightdateCalculator(tdee, goalWeight, currentWeight, calories);
    document.getElementById("outputdate").innerText = goalweightDate;
}

function bmrCalculator(currentWeight, goalWeight, height, age, calories, gender, activity) {
    if (gender == "Male") {
        var bmr = 66 + (13.7 * currentWeight) + (5 * height) - (6.8 * age);
    } else if (gender == "Female") {
        var bmr = 655 + (9.6 * currentWeight) + (1.8 * height) - (4.7 * age);
    } else {
        var bmrInitial = 655 + (9.6 * currentWeight) + (1.8 * height) - (4.7 * age);
        var bmr = bmrInitial + 113
    }
    return bmr;
}

function tdeeCalculator(bmr, activity) {
    if (activity == "Sedentary Couch Potato"){
        var tdee = bmr * 1.2;
    } else if (activity == "Light exercise 2-3 times a week" ){
        var tdee = bmr * 1.375;
    } else if (activity == "Moderate exercise 2-3 times a week" ){
        var tdee = bmr * 1.55;
    } else if (activity == "Heavy exercise 2-3 times a week" ){
        var tdee = bmr * 1.725;
    } else {
        var tdee = bmr * 1.8;
    }
    return tdee;

}

function goalweightdateCalculator(tdee, goalWeight, currentWeight, calories) {
    var deficit = tdee - calories
    var caloriesLeft = (currentWeight - goalWeight) * 3500;
    var gwDays = Math.round(caloriesLeft/deficit);
    return gwDays;
}





