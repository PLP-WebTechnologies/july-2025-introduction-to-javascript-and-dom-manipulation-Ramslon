// 🎯 Part 1: Basics
function greetUser() {
  let name = document.getElementById("userName").value;
  if (name) {
    document.getElementById("greetOutput").textContent = "Hello, " + name + "! Welcome to JavaScript.";
  } else {
    document.getElementById("greetOutput").textContent = "Please enter your name first.";
  }
}

// ❤️ Part 2: Functions
function calculateTotal() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  function add(a, b) {
    return a + b;
  }

  if (!isNaN(n1) && !isNaN(n2)) {
    document.getElementById("totalOutput").textContent = "Total = " + add(n1, n2);
  } else {
    document.getElementById("totalOutput").textContent = "Enter valid numbers!";
  }
}

// 🔁 Part 3: Loops
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear before each run
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// 🌐 Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function() {
  let msg = document.getElementById("toggleMsg");
  msg.classList.toggle("hidden");
});
