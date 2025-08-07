// Importa módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔑 Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkwiq0TPxlRgsFiQkwdtpI0_-IrX2M6wU",
  authDomain: "esmaltoteca-b8de7.firebaseapp.com",
  projectId: "esmaltoteca-b8de7",
  storageBucket: "esmaltoteca-b8de7.firebasestorage.app",
  messagingSenderId: "940464062944",
  appId: "1:940464062944:web:59f47cab3d4818e552eb85",
  measurementId: "G-71GJKLRE3S"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seleciona elementos do HTML
const btnCadastrar = document.getElementById("btn-cadastrar");
const btnLogin = document.getElementById("btn-login");
const msg = document.getElementById("mensagem");

// Cadastro
btnCadastrar.addEventListener("click", () => {
  const nome = document.getElementById("cadastro-nome").value;
  const email = document.getElementById("cadastro-email").value;
  const senha = document.getElementById("cadastro-senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      msg.innerText = `Usuário cadastrado com sucesso: ${nome}`;
      console.log("Usuário cadastrado:", userCredential.user);
    })
    .catch((error) => {
      msg.innerText = "Erro: " + error.message;
    });
});

// Login
btnLogin.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      window.location.href = "home.html";
      console.log("Usuário logado:", userCredential.user);
    })
    .catch((error) => {
      msg.innerText = "Erro: " + error.message;
    });
});
