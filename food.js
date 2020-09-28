var 랜덤음식 = ['한식', '치킨', '피자', '떡볶이', '돈까스', '회', '일식', '쌀국수', '중국집', '족발', '찜'];

const foodContainer = document.querySelector(".js-food"),
    foodtext = foodContainer.querySelector("h3");

function randomfood(food){
    let randomnum = Math.floor(Math.random() * food.length);
    foodtext.innerText = `오늘은 ${랜덤음식[randomnum]} 먹는 날!`;
    
}

randomfood(랜덤음식);
