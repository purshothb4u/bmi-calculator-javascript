document.getElementById("ppfForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  //   calculate();
});

function calculate() {
  let heightElement = Number(document.getElementById("height").value);
  let weightElement = Number(document.getElementById("weight").value);

  let bmiElement = document.getElementById("bmi");
  let bmiPrimeElement = document.getElementById("bmiPrime");
  let healthyWeightElement = document.getElementById("healthyWeight");
  let loseWeightElement = document.getElementById("loseWeight");
  
  if(heightElement >= 1 && weightElement >= 1){
    let meterHeight = heightElement / 100;
    let BMI = weightElement / (meterHeight * meterHeight);
    let BMI_Prime = BMI / 25;
    let healthyWeight = 25 * (meterHeight * meterHeight);
    let loseWeight = weightElement - healthyWeight;

    bmiElement.innerHTML = BMI.toFixed(1);
    bmiPrimeElement.innerHTML = BMI_Prime.toFixed(2);
    healthyWeightElement.innerHTML = healthyWeight.toFixed(1) + "kg";
    loseWeightElement.innerHTML = loseWeight.toFixed(1) + "kg";

    updateStatus(BMI);
  }
  }
 
 function updateStatus(BMI) {
   console.log("updateStatus");
   let status = "";
   if (BMI < 18.5) {
     status = "Underweight";
   } else if (BMI >= 18.5 && BMI < 25) {
     status = "Normal weight";
   } else if (BMI >= 25 && BMI < 30) {
     status = "Overweight";
   } else {
     status = "Obese";
   }
   let statusBar = document.getElementById("statusBar");
   let statusLabel = document.getElementById("statusLabel"); 

   switch (status) {
     case "Underweight":
       statusBar.className = "progress-bar";
       statusBar.style.width = "25%";
       statusBar.style.backgroundColor = "#3498db";
       statusLabel.textContent = "Underweight";
       break;
     case "Normal weight":
       statusBar.className = "progress-bar ";
       statusBar.style.width = "50%";
       statusBar.style.backgroundColor = "#2ecc71";
       statusLabel.textContent = "Normal weight";
       break;
     case "Overweight":
       statusBar.className = "progress-bar";
       statusBar.style.width = "75%";
       statusBar.style.backgroundColor = "#f1c40f";
       statusLabel.textContent = "Overweight";
       break;
     case "Obese":
       statusBar.className = "progress-bar";
       statusBar.style.width = "100%";
       statusBar.style.backgroundColor = "#e74c3c";
       statusLabel.textContent = "Obese";
       break;
   }
 }

function clearValues() {

  document.getElementById("bmi").innerHTML = "";
  document.getElementById("bmiPrime").innerHTML = "";
 document.getElementById("healthyWeight").innerHTML = "";
   document.getElementById("loseWeight").innerHTML = "";
   document.getElementById("statusLabel").innerHTML = "";
    document.getElementById("statusBar").style.width = "0%";

}
