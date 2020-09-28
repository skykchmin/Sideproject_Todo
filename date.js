const dateContainer = document.querySelector(".js-date"),
 dateTitle = dateContainer.querySelector("h2");

function getdate(){
    const date = new Date();
    const yeartime = date.getFullYear();
    const monthtime = date.getMonth() + 1;
    const datetime = date.getDate();

    dateTitle.innertext = `${yeartime}-${monthtime}-${datetime}`;
    
}

function init(){
    getdate();
}

init();