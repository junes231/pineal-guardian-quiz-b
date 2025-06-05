
const quizData = [
  {
    question: "How well do you sleep at night?",
    answers: ["I sleep great", "It’s okay", "I struggle", "I feel tired even after 8 hours"]
  },
  {
    question: "Do you often feel foggy or unfocused?",
    answers: ["Every day", "Sometimes", "Rarely", "Didn’t notice"]
  },
  {
    question: "Are you aware of fluoride exposure?",
    answers: ["Yes, daily", "Maybe", "I try to avoid", "No idea"]
  },
  {
    question: "What do you want to improve?",
    answers: ["Mental clarity", "Deep sleep", "Inner peace", "All of the above"]
  },
  {
    question: "Would you try a natural pineal detox?",
    answers: ["Yes", "Maybe", "Not now"]
  }
];

let currentQuestion = 0;
const quizEl = document.getElementById("quiz");
const progressEl = document.getElementById("current");

function showQuestion() {
  const q = quizData[currentQuestion];
  quizEl.innerHTML = `<h2>${q.question}</h2>` + q.answers.map(answer => `
    <button onclick="nextQuestion()">${answer}</button>
  `).join('');
  progressEl.textContent = currentQuestion + 1;
}

function showEmailForm() {
  quizEl.innerHTML = `
    <h2>Your Result: Blocked Potential</h2>
    <p>Your pineal gland may be under stress. 🌿</p>
    <form id="emailForm">
      <input type="email" name="entry.972272214" id="email" placeholder="Enter your email" required>
      <button type="submit">Continue</button>
    </form>
  `;
  document.getElementById("progress").style.display = "none";
  document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (email && email.includes("@")) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://docs.google.com/forms/d/e/1FAIpQLSfUY6xbfWPy6CdapCJQcoVHW1Pfsdsvd9yKwa2J2SyASF0QlA/formResponse";
      form.target = "_blank";

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "entry.972272214";
      input.value = email;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();

      window.location.href = "https://lnk.bio/s/HerSupps/869bb";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showEmailForm();
  }
}

showQuestion();
