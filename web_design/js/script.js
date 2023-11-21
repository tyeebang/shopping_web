// // header, footer는 추후 분리 후 인클루드 사용 예정.

async function callItems() {
    const RES = await fetch("../items.json");
    const JSON = await RES.json();

    let items = JSON;

    let itemsHTML = "";

    for (let i = 0; i < items.length; i++) {
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

callItems();