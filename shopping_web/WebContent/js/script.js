// // header, footer는 추후 분리 후 인클루드 사용 예정.

// header

// 메뉴 고정
window.addEventListener("scroll", function () {
    let hd_menu = document.getElementById("hd_menu");
    let value = window.scrollY;
    // scrollY의 값이 210 초과인 경우 hd_menu에 css 값 추가
    if (value > 210) {
        hd_menu.style.cssText = "position: fixed; margin-top: -210px; border-top: none; width: 1903px;";
    } else {
        hd_menu.style.cssText = "position: static;";
    }
});

// 상품 리스트 뽑아오기
async function callItemsAlpha() {
    const RESP = await fetch("../items2.json");
    const ITEMJSON = await RESP.json();

    let items = ITEMJSON;
    let itemsHTML = "";

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        itemsHTML += `
    <div class="item">
        <img src="${item.img_url}" alt="${item.it_name}" class="it_img">
        <div class="it_cont">
            <span class="it_name">${item.it_name}</span>
            <span class="it_price">${item.price + 'won'}</span>
        </div>
    </div>
    `;
    }

    document.querySelector("#items").innerHTML = itemsHTML;
}

async function callItemsBeta() {
    const RESP = await fetch("../items2.json");
    const ITEMJSON = await RESP.json();

    let ca_items = ITEMJSON;
    let ca_itemsHTML = "";

    for (let i = 0; i < ca_items.length; i++) {
        let ca_item = ca_items[i];
        ca_itemsHTML +=  `
    <div class="ca_item">
        <a href="#">
            <img src="${ca_item.img_url}" alt="${ca_item.it_name}" class="ca_it_img">
            <div class="ca_it_cont">
                <span class="ca_it_name">${ca_item.it_name}</span>
                <hr>
                <span class="ca_it_price">${ca_item.price + 'won'}</span>
            </div>
        <a>
    </div>
    `;
    }

    document.querySelector("#ca_items").innerHTML = ca_itemsHTML;
}

if (document.querySelector("#items") !== null) {
    callItemsAlpha();
} else if(document.querySelector("#ca_items") !== null) {
    callItemsBeta();
}