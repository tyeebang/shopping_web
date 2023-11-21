// header, footer는 추후 분리 후 인클루드 사용 예정.

function callItems() {
    let items = [
    {
        it_name : "와이드 루즈핏 빅사이즈 남성 멜란",
        price : 13900,
        img_url : "./img/aa.jpg"
    },
    {
        it_name : "오버핏 꽈배기 브이넥 니트",
        price : 27900,
        img_url : "./img/bb.jpg"
    },
    {
        it_name : "루즈핏 브이넥 박시 조끼 여성의류",
        price : 15000,
        img_url : "./img/cc.jpg"
    },
    {
        it_name : "브이넥 울니트 조끼",
        price : 36700,
        img_url : "./img/dd.jpg"
    }
]

let itemsHTML = "";

for(let i = 0; i < items.length; i++) {
    let item = items[i]
    itemsHTML += `
    <div class="item">
        <img src="${item.img_url}" alt="${item.it_name}" class="it_img">
        <div class="it_cont">
            <span class="it_name">${item.it_name}</span>
            <span class="it_price">${item.price + 'won'}</span>
        </div>
    </div>
    `
}

document.querySelector("#items").innerHTML = itemsHTML;
}

// callItems();

fetch('../items.json')
  .then((data) => data.json())
  .then((obj) => {
    console.log(obj);
  });