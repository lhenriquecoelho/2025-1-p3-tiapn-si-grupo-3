const container = document.getElementById('container');
    document.getElementById('sign-up').addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
    document.getElementById('sign-in').addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o reload da página

    const nome = signUpForm.querySelector('input[placeholder="Name"]').value.trim();
    const email = signUpForm.querySelector('input[placeholder="Email"]').value.trim();
    const senha = signUpForm.querySelector('input[placeholder="Password"]').value.trim();
    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    console.log({nome, email, senha});
});