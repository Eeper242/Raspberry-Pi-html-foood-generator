let saveTo;

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
    saveTo = 1;
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
    saveTo = 2;
}

function save(){
     const text = document.getElementById('ChangeArea').value;

  fetch('/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        text: text,
        saveTo: saveTo.toString()
     })
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => alert("Error: " + err));
}