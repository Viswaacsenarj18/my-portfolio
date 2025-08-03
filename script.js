// Typing Effect for Header Text
const typedText = document.querySelector('.typed-text');
const phrases = ["WEB DEVELOPER", "FULL STACK INTERN", "CSE STUDENT"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const current = phrases[i];
  const updated = current.slice(0, j);
  typedText.textContent = updated;

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

type();
