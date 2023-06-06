const btn = document.getElementById('calcula');
const valor = document.getElementById('valor');
let notas = [0, 0, 0, 0];

btn.addEventListener('click', ()=>{    
    let dinheiro = valor.value
    valor.value = '';
    const recebe = document.getElementById('recebe').textContent = dinheiro;
    for(let i=0;i<notas.length;i++){
        notas[i] = 0;
    }

    const cem = document.getElementById('cem').textContent = ': 0'
        const cinq = document.getElementById('cinq').textContent = ': 0'
        const dez = document.getElementById('dez').textContent = ': 0'
        const cinco = document.getElementById('cinco').textContent = ': 0';
    console.log(dinheiro);
    if(dinheiro == 0)
    alert('Digite um valor')
    else if (dinheiro < 5)
    alert('Esse caixa possui apenas notas acima de R$ 5,00')
    else{
        while(dinheiro >= 100){
            dinheiro -= 100;
            notas[0] += 1;
        }
        
        while(dinheiro >= 50){
            dinheiro -= 50;
            notas[1] += 1;
        }

        while(dinheiro >= 10){
            dinheiro -= 10;
            notas[2] += 1;
        }

        while(dinheiro >= 5){
            dinheiro -= 5;
            notas[3] += 1;
        }

        console.log(notas)
        console.log(dinheiro)
    }

    if(dinheiro > 0){
        alert('Esse caixa possui apenas notas de R$ 5, R$ 10, R$ 50 e R$ 100')
    }
    else{
        
        const cem = document.getElementById('cem').textContent = ': ' + notas[0];
        const cinq = document.getElementById('cinq').textContent = ': ' + notas[1];
        const dez = document.getElementById('dez').textContent = ': ' + notas[2];
        const cinco = document.getElementById('cinco').textContent = ': ' + notas[3];
    }
})