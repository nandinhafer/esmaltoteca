import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔑 Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkwiq0TPxlRgsFiQkwdtpI0_-IrX2M6wU",
  authDomain: "esmaltoteca-b8de7.firebaseapp.com",
  projectId: "esmaltoteca-b8de7",
  storageBucket: "esmaltoteca-b8de7.firebasestorage.app",
  messagingSenderId: "940464062944",
  appId: "1:940464062944:web:59f47cab3d4818e552eb85",
  measurementId: "G-71GJKLRE3S"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const boasVindas = document.getElementById("boas-vindas");
const btnSair = document.getElementById("btn-sair");

// Verifica se o usuário está logado
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Busca o nome no Firestore
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      boasVindas.innerText = `Bem-vindo, ${docSnap.data().nome}!`;
    } else {
      boasVindas.innerText = "Bem-vindo!";
    }
  } else {
    // Se não estiver logado, volta para login
    window.location.href = "index.html";
  }
});

// Botão de sair
btnSair.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});
