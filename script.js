const people = {
    p2015: {
        Gamio: {
            img: "https://goo.gl/qofS1k",
            name: "Gerardo Gamiochipi",
            occupation: "Businessman in 2016",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
            quotes: ["Gamio's quote #1", "Gamio's quote #2"]      
        }
    },
    p2016: {
        Valente: {
            img: "https://goo.gl/uwsPbx",
            name: "Valente Alvarez Ortiz",
            occupation: "Businessman in 2016",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        BetoValdes: {
            img: "https://goo.gl/ZGNPMH",
            name: "Alberto Valdes Rosales",
            occupation: "Businessman in 2016",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        }
    },
    p2017: {
        BetoSalas: {
            img: "https://goo.gl/c6ou4a",
            name: "Alberto Salas",
            occupation: "Businessman in 2016",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        }
    }
}

function dummyFunction(){
    console.log('function fired');
}

//Fill sidebar lists dynamically depending on object's content
var nestedUls = document.querySelectorAll('.nested-uls > ul');
for (var a=0; a< nestedUls.length; a++){
    switch(nestedUls[a].className) {
        case '2015-list':
            for (var prop in people.p2015){
                var newLi = document.createElement('li');
                newLi.textContent = people.p2015[prop].name;
                nestedUls[a].appendChild(newLi);
                newLi.id = prop;
                newLi.addEventListener('click', fillDetailsCard);        
            }
            break;
        case '2016-list': 
            for (var prop in people.p2016){
                var newLi = document.createElement('li');
                newLi.textContent = people.p2016[prop].name;
                nestedUls[a].appendChild(newLi);
                newLi.addEventListener('click', fillDetailsCard);
                newLi.id = prop;             
            }
            break;
        case '2017-list': 
            for (var prop in people.p2017){
                var newLi = document.createElement('li');
                newLi.textContent = people.p2017[prop].name;
                nestedUls[a].appendChild(newLi);
                newLi.addEventListener('click', fillDetailsCard);
                newLi.id = prop;               
            }
            break;
    }
}

// EXPAND SIDEBAR LISTS
const expandYearButtons = document.querySelectorAll('.expand-year');
for (var a=0; a < expandYearButtons.length; a++){
    expandYearButtons[a].addEventListener('click', expandYear);
}
function expandYear(e){
    var targetList = e.target.parentNode.lastElementChild;
    targetList.classList.toggle('expand');
}

// CHOOSE YEAR CARDS
const chooseYearButtons = document.querySelectorAll('.year-list > li');
for (var b=0; b < chooseYearButtons.length; b++){
    chooseYearButtons[b].addEventListener('click', chooseYear);
}
const peopleContainer =  document.querySelector('.people-container');

//filter years
function chooseYear(e){
    switch (e.target.id){
        case 'p2015':
            peopleContainer.innerHTML = "";
            for (var prop in people.p2015){
                createPerson('p2015', people.p2015[prop]);
            }
            break;
        case 'p2016':
            peopleContainer.innerHTML = "";
            for (var prop in people.p2016){
                createPerson('p2016', people.p2016[prop]);
            }
            break;
        case 'p2017':
            peopleContainer.innerHTML = "";
            for (var prop in people.p2017){
                createPerson('p2017', people.p2017[prop]);
            }
            break;
        case 'show-all': 
            peopleContainer.innerHTML = "";
            for (var prop in people.p2015){
                createPerson('p2015', people.p2015[prop]);
            }
            for (var prop in people.p2016){
                createPerson('p2016', people.p2016[prop]);
            }
            for (var prop in people.p2017){
                createPerson('p2017', people.p2017[prop]);
            }
            break;
        default: 
            break;
    }
}
// CREATE INDIVIDUAL CARD
function createPerson(year, personObj){
    // main person's div
    var newPerson = document.createElement('div');
    newPerson.classList.add('person');
    newPerson.classList.add(year);
    // img div
    var newImgDiv = document.createElement('div');
    newImgDiv.classList.add('person-img');
    //create overlay
    var imgOverlay = document.createElement('div');
    imgOverlay.classList.add('img-overlay');
    //add event listener to open the details card (on the red part)
    imgOverlay.addEventListener('click', fillDetailsCard);
    //Create components of overlay 
    var overlayText = document.createElement('span');
    overlayText.textContent = 'more info';
    var plusIcon = document.createElement('span');
    plusIcon.classList.add('flaticon-plus');
    //append to overlay
    imgOverlay.appendChild(overlayText);
    imgOverlay.appendChild(plusIcon);
    //create img
    var newImg = document.createElement('img');
    newImg.src = personObj.img;
    //append stuff to img div
    newImgDiv.appendChild(imgOverlay);
    newImgDiv.appendChild(newImg);

    // person's title
    var newName = document.createElement('h2');
    newName.classList.add('person-name');
    newName.textContent = personObj.name;
    
    //person's occupation
    var newOccupation = document.createElement('h3');
    newOccupation.classList.add('person-occu');
    newOccupation.textContent = personObj.occupation;

    //person's short description
    var newShortDesc = document.createElement('p');
    newShortDesc.classList.add('person-desc');
    newShortDesc.textContent = personObj.descShort;

    //append all to person card
    newPerson.appendChild(newImgDiv);
    newPerson.appendChild(newName);
    newPerson.appendChild(newOccupation);
    newPerson.appendChild(newShortDesc);

    //append to the actual page
    peopleContainer.appendChild(newPerson);
}

var detailsCardContainer = document.querySelector('.person-details-container');
detailsCardContainer.addEventListener('click', closeDetailsCard);

var detailsCard = document.querySelector('.person-details');
// Fill details card from each person
function fillDetailsCard(e){ 
    var refObject = {};
    detailsCardContainer.classList.add('show');
    detailsCard.classList.add('show');
    switch (e.target.nodeName) {
        //from the sidebar names
        case "LI":
            var refYear = e.target.parentElement;
            //if it comes from 2015...
            if (refYear.classList.contains('2015-list')){
                console.log('this came from the 2015 list');
                refObj = people.p2015;
            }
            // if it comes from 2016...
            else if (refYear.classList.contains('2016-list')){
                console.log('this came from the 2016 list');     
                refObj = people.p2016;                
            } 
            //if it comes from 2017...
            else if (refYear.classList.contains('2017-list')){
                console.log('this came from the 2017 list');
                refObj = people.p2017;                
            }

            break;
        // from the individual cards
        case "DIV":
            console.log('this was fired by a <div>');
            break
        case "SPAN":
            console.log('this was fired by a <span>');
            break;
    }
}

//Closes the details card. Self-explanatory
function closeDetailsCard(e){
    if (e.target.classList.contains('person-details-container')){
        detailsCardContainer.classList.remove('show');
        detailsCard.classList.remove('show');
    }
}

//initialize with every card displayed
window.onload = document.querySelector('#show-all').click();