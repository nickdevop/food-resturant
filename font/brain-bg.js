let cards = document.getElementsByClassName("burger-crousal")[0];


 // function uses the fetch() API to fetch the JSON data from burger.json.
//  The fetch() API returns a promise, which is then resolved with the JSON data from the file.
//  The then() method of the promise is used to handle the successful response from the fetch() API. 
// The then() method takes two functions as arguments: a success callback and an error callback.

let json_url = "burger.json";
data=[]  //array to store array object of burger
fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data);
    let i = 0;
    data.forEach((element) => {
        let card = document.createElement("div");
        card.classList.add("bur-img");
        card.innerHTML = 
`<img src=${element.bimg} alt="" onclick=content_up(${i})>`

    //  console.log(element.title);
     cards.appendChild(card);         //append html of number of burger avaliable in json and inject as html
     i++;

    });
    
  });




  // This function is called when an image is clicked. It fetches the JSON data from burger.json and displays the details of the burger in the bigb and smallb elements.
  // The content_up() function uses the innerHTML property to set the content of the bigb and smallb elements.

  function content_up(id) {
    
    fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
// for big burger
bigb=document.getElementById("bigb");
// for small burger
smallb=document.getElementById("smallb")
// bigb.innerHTML=`<img src=${data[id].bimg} alt="">`

// this piecce of code is used for the animation of bibg and small burger on click 

bigb.classList.add('show3');
bigb.style.width="0px"
bigb.style.height="0px"
smallb.style.width="0px"
smallb.style.height="0px"
document.getElementById("burger_name").classList.add("show1")
setTimeout(() => {
    bigb.style.width="350px"
    bigb.style.height="350px"
    bigb.innerHTML=`<img src=${data[id].bimg} alt="">`
    document.getElementById("burger_name").innerText = data[id].title;
    document.getElementById("burger_name").classList.remove("show1")
document.getElementById("price").innerText = data[id].price;
document.getElementById("calo-txt").innerText = data[id].calorie;
document.getElementById("fat-txt").innerText = data[id].fat;
document.getElementById("pro-txt").innerText = data[id].protein;

}, 1600);
setTimeout(() => {
    bigb.classList.remove('show3');
    // bigb.style.display="block"

}, 1700);


if (id==6) {
    id=0;
}
smallb.classList.add('show2');
setTimeout(() => {
    smallb.style.width="210px"
    smallb.style.height="210px"
    smallb.classList.remove('show2');
    smallb.innerHTML=`<img src=${data[id+1].bimg} alt="">`
}, 2700);


});
  }

// variables used
//   cards: This variable stores the div element with the class name burger-crousal.
// json_url: This variable stores the URL of the burger.json file.
// data: This variable stores the JSON data from burger.json.
// id: This variable stores the index of the burger image that is currently being displayed.
// bigb: This variable stores the img element with the id bigb.
// smallb: This variable stores the img element with the id smallb.