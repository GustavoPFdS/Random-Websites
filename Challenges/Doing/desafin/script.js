const box = document.querySelector('.box');
let check = 0;

document.addEventListener('click', (event) => {
  if (event.target.id === 'aeae' ) {
    if (check==0) {
        box.classList.toggle('move');
        box.innerHTML = `
        <h2>Olá, amigo(a)!</h2>
        <h3>Insira algumas informações e comece a sua jornada conosco!</h3>
        <button id="aeae" class="btn">QUERO CRIAR UMA CONTA</button>
        `;
        check=1;
        const children = box.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add('animate');
        }
    }else{
        box.classList.toggle('move');
        box.innerHTML = `
        <h2>Bem-vindo de volta!</h2>
        <h3>Se mantenha conectado fazendo login com as suas informações!</h3>
        <button id="aeae" class="btn">JÁ TENHO CONTA</button>
        `;
        check=0;
        const children = box.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add('animate');
        }
    }
  }
});
