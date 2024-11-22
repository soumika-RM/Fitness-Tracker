var submit = document.getElementById("submit");

submit.onclick = function () {
    event.preventDefault();
    var weight = document.getElementById("userweight").value;
    var height = document.getElementById("userheight").value;
    let userBMI = (weight/(height**2));
    let answer = userBMI.toFixed(1);
    let category = "";
    let ansInt = parseInt(answer);
    if (ansInt < 18.5){
        category = "underweight";
    } else if (ansInt <= 24.9 && ansInt >= 18.5){
        category = "normal";
    } else if (ansInt <= 29.9 && ansInt >= 25){
        category = "overweight"
    } else {
        category = "obese"
    }
    document.getElementById("BMI").innerText = answer;
    document.getElementById("BMICategory").innerText = category;

}