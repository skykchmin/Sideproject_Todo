const dateContainer = document.querySelector('.js-date');
const dateTitle = dateContainer.querySelector(".date-box");

function getDate(){
    const date = new Date();
    const yeartime = date.getFullYear();
    const monthtime = date.getMonth() + 1;
    const datetime = date.getDate();

    dateTitle.innertext = `${yeartime}-${monthtime}-${datetime}`;
}

function init(){
    getDate();
}

init();