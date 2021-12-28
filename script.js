const size = 3;
const margin = 5;
let howMany = 0;

const divRoot = document.getElementById('root');
let item; let divItem;

for(let i = 0; i<(250 / size); i++){
    divItem = document.createElement('div');
    
    divItem.className = `divItem`
    divItem.style.marginTop = `${margin/2}px`;
    divItem.style.height = `calc(${margin/2}px + ${size}vw)`;
    divItem.style.animation = `${i%2==0?'moveR': 'moveL'} 2s reverse infinite`
    
    for(let i = 0; i<(220 / size); i++){
        item = document.createElement('div');
        item.className = "item";
        item.style.margin = `0px ${margin/2}px 0px ${margin/2}px`;
        item.style.width = `${size}vw`;
        item.style.height = `${size}vw`;        
        divItem.appendChild(item)
        howMany++;
    }
    divRoot.appendChild(divItem);
}
console.log(howMany)

    