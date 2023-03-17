//make sure dom is loaded <added to bottom of body
//<script type="text/javascript" src="app.js"></script> <!--future unit 9.3.5 says you can 1, put at end of body (most common) or 
    //2. add an event listener to top of JS to wait for dom to load or 3. or add event listener to load everything based on window being loaded-->
    
//--------------------------------
//check user provided info under Lets Start Button 9.3.3 A
//function termsOfService () {
    //if checked alert thanks for reviewing our termsOfService

document.querySelector('input[type="checkbox"]').addEventListener('click', function(e){
    
    alert('thank you for reading our terms of service')
})
    //else alert please review and check termsOfService
//}


//function yourName - builds on 9.3.4 and 9.3.6 about event objects (evt)
//leverages 9.3.9 for prevent default on form submission

const form = document.querySelector('#userInput');
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    alert('you submitted your first name');
});

//funtion yourEmail
//------------------------------------

//Generate Meme functions using 9.3.4 which is Option C from 9.3.3
//can have multiple event listeners on same object


let formMemeGenerate = document.querySelector('#meme-form'); //dont need to check for blanks/chrome does
let addressURL = document.querySelector('input[name="URL"]');
console.log("this is a bigTest " + addressURL)
let textTop = document.querySelector('input[name="funnyTextTop"]');
console.log("this is a bigTest2 " + textTop)
let textBottom = document.querySelector('input[name="funnyTextBottom"]');
console.log("this is a bigTest3 " + textBottom)
let memeInSection = document.querySelector('#formContainerOutput');

var counter = 0
let searchable = ['funny dog pictures', 'funny dog with hat', 'dog with funny ears', 'Silly Cat picture', 'monkey laughing', 'pig with smile', 'baby chicken']

formMemeGenerate.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log("this is test 2 " + addressURL.value, textTop.value, textBottom.value)
    let newMeme = generateMeme(addressURL.value, textTop.value, textBottom.value);
    alert('Your Meme Is Generating...');
    console.log(newMeme)
    memeInSection.appendChild(newMeme);
    //go back and correct wrappers for more images
    //https://stackoverflow.com/questions/43691890/css-flexbox-max-column-number
    this.reset()
        
});

function generateMeme(webaddress, top, bottom) {
    counter++
    const meme = document.createElement('div');
    meme.id = 'created div'
    meme.className = 'memeDiv'
    meme.innerHTML = top
    
    let img = document.createElement('img')
    img.src = webaddress
    meme.appendChild(img)

    //let testChildren = meme.children //see 9.2.15 for overview of Node vs Element
    //console.log(testChildren)
    //let testChildNodes = meme.childNodes  //see 9.2.15 for overview of Node vs Element
   // console.log(testChildNodes)
   // let testParent = meme.parentElement //see 9.2.14 for overview of Node vs Element
   // console.log(testParent)
//----------------------------------------------------------------
    const memeH1 = document.createElement('h1')
    memeH1.id= 'createdH1'
    memeH1.className = 'memeH1'
    memeH1.innerHTML = bottom
    //
    myArray =[webaddress, top, bottom]
    console.log('this is my array [' + myArray + ' ]')
    //addSaveArrayLocalStorage(myArray);
    //let imgBottom = document.createElement('imgBottom')
    //imgBottom.src = bottom
    meme.appendChild(memeH1)
//------------------------------------------------------------------
   
    const createButton = document.createElement('button')
    var buttonID = "deleteButtonID" + counter.toString()
    createButton.id = buttonID
    
    createButton.className = 'deleteButtonClassName'
    createButton.innerHTML = 'Click Here To Delete Meme'
    createButton.type = 'submit'
    meme.appendChild(createButton)



 //-----------------------------------------------------------------   
    document.body.appendChild(meme)
    const removeTheDiv = document.querySelector("#"+ buttonID);
    //const removeTheDiv = document.querySelector('#deleteButtonID');
    removeTheDiv.addEventListener('click', function(e) {
    e.target.parentElement.remove();
})
    
    return meme
   
}

//search

const searchInputLeave = document.getElementById('search');
const searchWrapperLeave = document.querySelector('.wrapperLeave');
const resultsWrapperLeave = document.querySelector('.resultsLeave');

searchInputLeave.addEventListener('keyup', (evt) => {
    console.log(evt.target.value);
    let resultsLeave =[]
    //console.log(resultsLeave)
    let input=searchInputLeave.value
    console.log(input)
    console.log(input.length);
    if (input.length) {
        resultsLeave = searchable.filter((item) => {
            //console.log(resultsLeave)
            return item.toLowerCase().includes(input.toLowerCase());
        })
    }
    renderResults(resultsLeave);
});

function renderResults(resultsLeave){
    if (!resultsLeave.length) {
        return searchWrapperLeave.classList.remove('show');
    }

    let content = resultsLeave.map((item) => {
        return `<li>${item} </li>`;
    }).join('')
  
    console.log(content + "test Content")
    
    searchWrapperLeave.classList.add('show');

    resultsWrapperLeave.innerHTML = `<ul id="list">${content}</ul>`;

    console.log(resultsWrapperLeave.innerHTML + "this is from results wrappen innerhtml")
    
    mouseover(content)

}
function mouseover(content){
  
    let listItems = document.querySelectorAll('#list li'); 
    console.log(listItems + "this is from mouseover");
    for(let i =0; i< listItems.length; i++){
        listItems[i].onclick = function(){
            document.getElementById("search").value = this.innerHTML;
        }
    }
    
    console.log(content)
    
}
    
    
  //9.3.6 talked about an event created an 'event object'. can name anything e, evt, test, etc.
//memeGenerateButton.addEventListener('click', function() {
//do something
//}


//-----------------------------------------

//submit feedback button with functions 9.3.3 Option B (I wasnt able to get this to work
//passing the value of the range to the message box)
//abanded 3-2-23 and just used alert as in option A from 9.3.3


const value = document.querySelector("#value")
console.log(value)
const input = document.querySelector("#rangeInput")
console.log(input)
const userSlides = input.value
console.log(userSlides)
let userValue = input.addEventListener("input", (event) => {
 value.textContent = event.target.value

 let finalValue = event.target.value
 console.log(finalValue)
 
 let finalFinal = parseInt(finalValue) //range is a text, had to convert to number with parseInt
 console.log(finalFinal)

});
 
const formHappyRange = document.querySelector('#happyRange');
formHappyRange.addEventListener('click', function(evt1) {
    evt1.preventDefault();
    alert('Click "Submit Feedback" to submit your Happiness Score!');
});


 


