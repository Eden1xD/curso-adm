// ===== EFEITO DIGITAÇÃO =====
const text = "O Futuro da Administração com Inteligência Artificial";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// ===== SCROLL =====
function scrollToSection() {
  document.getElementById("sobre").scrollIntoView();
}

// ===== CHAT SIMPLES =====
function responder() {
  const input = document.getElementById("input");
  const chatBox = document.getElementById("chatBox");

  let pergunta = input.value;

  if (!pergunta) return;

  chatBox.innerHTML += `<p><strong>Você:</strong> ${pergunta}</p>`;

  let resposta = "A IA sugere analisar dados e otimizar processos para resolver isso.";

  if (pergunta.includes("lucro")) {
    resposta = "A IA recomenda reduzir custos e analisar o mercado.";
  }

  if (pergunta.includes("cliente")) {
    resposta = "Use IA para entender comportamento e melhorar atendimento.";
  }

  chatBox.innerHTML += `<p><strong>IA:</strong> ${resposta}</p>`;

  input.value = "";
}

tsParticles.load("particles-js", {
  background: {
    color: "#0a0a0f"
  },
  particles: {
    number: { value: 40 },
    color: { value: "#8a2be2" },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 1
    },
    links: {
      enable: true,
      color: "#8a2be2",
      opacity: 0.3
    }
  }
});