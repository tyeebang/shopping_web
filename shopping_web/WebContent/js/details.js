async function callItems() {
    const RES = await fetch("/shopping_web/items.json");
    const ITEMJSON = await RES.json();

    let items = ITEMJSON;
    let itemsHTML = "";

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.num == itemId) {
            itemsHTML += `
            <img src="${item.img_url}" alt="${item.it_name}">
            <form id="de_box">
                <div id="detail_cont">
                    <input type="text" name="it_name" value="${item.it_name}" readonly>
                    <div>
                        <span>가격 :&nbsp;</span>
                        <input type="text" name="price" value="${item.price}" readonly>
                        <span>원</span>
                    </div>
                    <p>배송비 : 무료</p>
                    <p>성별 : ${item.gender}</p>
                    <p>카테고리 : ${item.category}</p>
                </div>
                <input type="submit" value="구매">
            </form>
            `;
        }
    }

    document.querySelector("#de_items").innerHTML = itemsHTML;
}

if (window.location.pathname.endsWith('/detailed.jsp')) {
    function getItemID(name, url) {
        url = window.location.href
        name = name.replace(/[[]]/g, "\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace( /\ + /g , " " ));
    }

    var itemId = getItemID('id');

    console.log(itemId);
    callItems();
}