const people = {
    p2015: {
        Gamio: {
            img: "https://goo.gl/qofS1k",
            name: "Gerardo Gamiochipi",
            occupation: "Businessman in 2016",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nobis possimus cupiditate ut, quis dolorem earum id omnis soluta rerum libero exercitationem accusantium. Repellat est minus, possimus ea eligendi adipisci suscipit ad nulla maiores, reiciendis voluptatibus incidunt, doloribus a doloremque asperiores voluptate! Animi nisi deserunt suscipit aliquam vero facere voluptas itaque odio vel aliquid repellat libero doloribus delectus odit repudiandae, officia sapiente, voluptatibus totam temporibus voluptatum unde, aspernatur dolore saepe. Accusantium, quo natus obcaecati saepe incidunt blanditiis dolore ex possimus.",
            quotes: ["Gamio's quote #1", "Gamio's quote #2"]      
        }
    },
    p2016: {
        Valente: {
            img: "https://goo.gl/uwsPbx",
            name: "Valente Alvarez Ortiz",
            occupation: "Presidente elegido durante la campaña del 2016",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        BetoValdes: {
            img: "https://goo.gl/ZGNPMH",
            name: "Alberto Valdes Rosales",
            occupation: "CEO del grupo REMA",
            descShort: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            descLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        }
    },
    p2017: {
        BetoSalas: {
            img: "https://goo.gl/c6ou4a",
            name: "Alberto Salas",
            occupation: "Presidente elegido durante la campaña del 2017",
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
                newLi.dataset.person = prop;
                newLi.addEventListener('click', fillDetailsCard);        
            }
            break;
        case '2016-list': 
            for (var prop in people.p2016){
                var newLi = document.createElement('li');
                newLi.textContent = people.p2016[prop].name;
                nestedUls[a].appendChild(newLi);
                newLi.addEventListener('click', fillDetailsCard);
                newLi.dataset.person = prop;             
            }
            break;
        case '2017-list': 
            for (var prop in people.p2017){
                var newLi = document.createElement('li');
                newLi.textContent = people.p2017[prop].name;
                nestedUls[a].appendChild(newLi);
                newLi.addEventListener('click', fillDetailsCard);
                newLi.dataset.person = prop;               
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
                createPerson('p2015', people.p2015[prop], prop);
            }
            break;
        case 'p2016':
            peopleContainer.innerHTML = "";
            for (var prop in people.p2016){
                createPerson('p2016', people.p2016[prop], prop);
            }
            break;
        case 'p2017':
            peopleContainer.innerHTML = "";
            for (var prop in people.p2017){
                createPerson('p2017', people.p2017[prop], prop);
            }
            break;
        case 'show-all': 
            peopleContainer.innerHTML = "";
            for (var prop in people.p2015){
                createPerson('p2015', people.p2015[prop], prop);
            }
            for (var prop in people.p2016){
                createPerson('p2016', people.p2016[prop], prop);
            }
            for (var prop in people.p2017){
                createPerson('p2017', people.p2017[prop], prop);
            }
            break;
        default: 
            break;
    }
}
// CREATE INDIVIDUAL CARDS (Shown on the page's content)
function createPerson(year, personObj, personKey){
    // main person's div
    var newPerson = document.createElement('div');
    //add classes for person card, his/her specific year, his/her specific key
    newPerson.classList.add('person');
    newPerson.classList.add(year);
    newPerson.dataset.person = personKey;
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
// Fill details card from chosen person
function fillDetailsCard(e){ 
    var refObj = {};
    var cardRoot;
    detailsCardContainer.classList.add('show');
    detailsCard.classList.add('show');
    switch (e.target.nodeName) {
        //from the sidebar names
        case "LI":
            //the key is embedded in the LI element
            var key = e.target.dataset.person;
            //if it came from the sidebar lists, it checks the parent element for class name, which will give us the year of the person selected, so that we can use the person's key on the proper year, and set that as our reference object to fill up de details card, since that is how the object items are arranged; by year.
            var parent = e.target.parentElement;
            //if the person is from 2015...
            if (parent.classList.contains('2015-list')){
               refObj = people.p2015[key];
            }
            //if the person is from 2016...
            else if (parent.classList.contains('2016-list')){
                refObj = people.p2016[key];
            }
            //if the person is from 2017...
            else if (parent.classList.contains('2017-list')){
                refObj = people.p2017[key];
            }
            break;
        // from the individual cards
        case "DIV":
            // if it comes from a div, it means the user clicked on the red portion of the personal card. We reference the "root" of the card for the dataset property of person and his/her year
        case "SPAN":
            // if it comes from a span, the user clicked on the text of the card. We just need to go one leve deeper to find the card root. EVerything else is the same as with the div
            if (e.target.nodeName === "DIV"){
                cardRoot = e.target.parentElement.parentElement;
            }
            else if (e.target.nodeName === "SPAN"){
                cardRoot = e.target.parentElement.parentElement.parentElement;
            }
            if (cardRoot.classList.contains('p2015')){
                refObj = people.p2015[cardRoot.dataset.person];
            }
            else if (cardRoot.classList.contains('p2016')){
                refObj = people.p2016[cardRoot.dataset.person];                
            }
            else if (cardRoot.classList.contains('p2017')){
                refObj = people.p2017[cardRoot.dataset.person];                
            }
            break
            console.log('this was fired by a <span>');
            break;
    }
    //actually fill the damn thing
    //image
    var imgBlank = document.querySelector('.person-details > .details-img img');
    imgBlank.src = refObj.img;
    //name
    var nameBlank = document.querySelector('.person-details > .details-info > .details-name');
    nameBlank.textContent = refObj.name;
    //occupation
    var occuBlank = document.querySelector('.person-details > .details-info > .details-occu');
    occuBlank.textContent = refObj.occupation;
    //Long description
    var descBlank = document.querySelector('.person-details > .details-info > .details-desc-long');
    descBlank.textContent = refObj.descLong;
    //quote(s)
    var quotBlank = document.querySelector('.person-details > .details-info > .details-quotes');
    quotBlank.innerHTML = "";
    for (var a=0; a < refObj.quotes.length; a++){
        var newLi = document.createElement('li');
        newLi.classList.add('details-quotes');
        newLi.textContent = '"' + refObj.quotes[a] + '"';
        quotBlank.appendChild(newLi);
    }
}

//Closes the details card. Self-explanatory
function closeDetailsCard(e){
    if (e.target.classList.contains('person-details-container')){
        detailsCardContainer.classList.remove('show');
    }
}

//initialize with every card displayed
window.onload = document.querySelector('#show-all').click();

