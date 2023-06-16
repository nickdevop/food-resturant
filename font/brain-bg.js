let cards = document.getElementsByClassName("burger-crousal")[0];



let json_url = "burger.json";
data=[]
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
     cards.appendChild(card);
     i++;

    });
    
  });

  function content_up(id) {
    
    fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {

bigb=document.getElementById("bigb");
smallb=document.getElementById("smallb")
// bigb.innerHTML=`<img src=${data[id].bimg} alt="">`
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