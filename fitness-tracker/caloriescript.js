function openWLForm() {
    document.getElementById("popup1").style.display = "block";
}
function openMForm() {
    document.getElementById("popup2").style.display = "block";
}
function openWGForm() {
    document.getElementById("popup3").style.display = "block";
}
function closeWLForm() {
    document.getElementById("popup1").style.display = "none";
}
function closeMForm() {
    document.getElementById("popup2").style.display = "none";
}
function closeWGForm() {
    document.getElementById("popup3").style.display = "none";
}

var submitm = document.getElementById("submitm");
var submitwl = document.getElementById("submitwl");
var submitwg = document.getElementById("submitwg");

submitm.onclick = function () {
    event.preventDefault();
    var weight2 = document.getElementById("weight2").value;
    var height2 = document.getElementById("height2").value;
    var age2 = document.getElementById("age2").value;
    var genderOption = document.getElementById("gender2");
    var gender2 = genderOption.options[genderOption.selectedIndex].text;
    var activityOption = document.getElementById("activity2");
    var activity2 = activityOption.options[activityOption.selectedIndex].text;
    let bmr = bmrCalculator(weight2, height2, age2, gender2);
    let tdee = tdeeCalculator(bmr, activity2).toFixed(0);
    document.getElementById("maintenance").innerText = tdee;
}

submitwl.onclick = function () {
    event.preventDefault();
    var weight1 = document.getElementById("weight1").value;
    var height1 = document.getElementById("height1").value;
    var age1 = document.getElementById("age1").value;
    var genderOption = document.getElementById("gender1");
    var gender1 = genderOption.options[genderOption.selectedIndex].text;
    var activityOption = document.getElementById("activity1");
    var activity1 = activityOption.options[activityOption.selectedIndex].text;
    let bmr = bmrCalculator(weight1, height1, age1, gender1);
    let tdee = tdeeCalculator(bmr, activity1).toFixed(0);
    let calorieswl = parseInt(tdee)-500;
    document.getElementById("weightloss").innerText = calorieswl;
}

submitwg.onclick = function () {
    event.preventDefault();
    var weight3 = document.getElementById("weight3").value;
    var height3 = document.getElementById("height3").value;
    var age3 = document.getElementById("age3").value;
    var genderOption = document.getElementById("gender3");
    var gender3 = genderOption.options[genderOption.selectedIndex].text;
    var activityOption = document.getElementById("activity3");
    var activity3 = activityOption.options[activityOption.selectedIndex].text;
    let bmr = bmrCalculator(weight3, height3, age3, gender3);
    let tdee = tdeeCalculator(bmr, activity3).toFixed(0);
    let calorieswg = parseInt(tdee)+500;
    document.getElementById("weightgain").innerText = calorieswg;
}

function bmrCalculator(weight, height, age, gender) {
    if (gender == "Male") {
        var bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else if (gender == "Female") {
        var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        var bmrInitial = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
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


