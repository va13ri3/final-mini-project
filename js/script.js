
var hoursWorked = document.getElementById("formGroupExampleInput3").valueAsNumber;
var hourlyRate = document.getElementById("formGroupExampleInput4").valueAsNumber;

var hours = document.getElementById("formGroupExampleInput3").valueAsNumber;
var hourRate = document.getElementById("formGroupExampleInput4").valueAsNumber;

var pointsEarned = document.getElementById("formGroupExampleInput5").valueAsNumber;
var totalPoints = document.getElementById("formGroupExampleInput6").valueAsNumber;
var tankGallons = document.getElementById("formGroupExampleInput7").valueAsNumber;
var perGallon = document.getElementById("formGroupExampleInput8").valueAsNumber;
var tipOutput = document.getElementById("tipOutput");
var totalOutput = document.getElementById("totalOutput");

var paycheckOutput = document.getElementById("paycheckOutput");
let tipButton = document.getElementById("btn1");
let subTotal = document.getElementById("input1").valueAsNumber;
var gradeOutput = document.getElementById("gradeOutput");
let percentage = document.getElementById("input2").valueAsNumber;
let payButton = document.getElementById("btn2");
let gradeButton = document.getElementById("btn3");
let gasButton = document.getElementById("btn4");


tipButton.addEventListener("click", calculateTip);
    

function calculateTip() {
var tipOutput = document.getElementById("tipOutput");
var totalOutput = document.getElementById("totalOutput");
let subTotal = document.getElementById("input1").value;
let percentage = document.getElementById("input2").value;

    let tipAmount = subTotal * percentage;
    let totalBill = subTotal + tipAmount;

     tipOutput.innerHTML = tipAmount.toFixed(2);

    totalOutput.innerHTML = totalBill;
}



payButton.addEventListener("click", calculatePay);
    

function calculatePay() {
var paycheckOutput = document.getElementById("paycheckOutput");
var hoursWorked = document.getElementById("formGroupExampleInput3").value;
var hourlyRate = document.getElementById("formGroupExampleInput4").value;


    let paycheckAmount = hoursWorked * hourlyRate;


    paycheckOutput.innerHTML = paycheckAmount;
}  


gradeButton.addEventListener("click", calculateGrade);
    

function calculateGrade() {
var gradeOutput = document.getElementById("gradeOutput");
var pointsEarned = document.getElementById("formGroupExampleInput5").value;
var totalPoints = document.getElementById("formGroupExampleInput6").value;


    let percentGrade = pointsEarned / totalPoints;


    gradeOutput.innerHTML = percentGrade.toFixed(2);
}  


gasButton.addEventListener("click", calculateGas);
    

function calculateGas() {
var gasOutput = document.getElementById("gasOutput");
var tankGallons = document.getElementById("formGroupExampleInput7").value;
var perGallon = document.getElementById("formGroupExampleInput8").value;


    let gasCost = tankGallons * perGallon;



    gasOutput.innerHTML = gasCost;
}  






