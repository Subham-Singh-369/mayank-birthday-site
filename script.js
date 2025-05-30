function checkName() {
  const input = document.getElementById('nameInput').value.trim().toLowerCase();
  const feedback = document.getElementById('feedback');

  if (input === "mayank") {
    window.location.href = "wish.html";
  } else if (input === "") {
    feedback.textContent = "Don't leave it blank! Try the name of your best friend 😉";
  } else {
    feedback.textContent = "Hmm, not quite right. Try again!";
  }
}
