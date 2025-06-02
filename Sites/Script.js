const { response } = require("express");

function genMMeal() {
    fetch("Meals/MMeals.txt")
        .then(response => response.text())
        .then(data => {
            var word = data.split(",");

            word = word.filter(w => w.trim() !== '')
            var para=document.querySelector('#MMeal');
            para.innerHTML = word[Math.floor(Math.random()*word.length)];
    });
}

function genSoup() {
    fetch("Meals/Soups.txt")
        .then(response => response.text())
        .then(data => {
           var word = data.split(",");

           word = word.filter(w => w.trim() !== '')
            var para=document.querySelector('#soup');
           para.innerHTML = word[Math.floor(Math.random()*word.length)];
    });
}

function loadMMeal(){
    fetch("Meals/MMeals.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("ChangeArea").value = data;
        })
        .catch(error => {
            console.error("Error loading MMeals.txt:", error)
        })
}

function loadSoup(){
    fetch("Meals/Soups.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("ChangeArea").value = data;
        })
        .catch(error => {
            console.error("Error loading Soups.txt:", error)
        })
}