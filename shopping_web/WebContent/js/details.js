async function callItems() {
	const RES = await fetch("/shopping_web/items.json");
	const ITEMJSON = await RES.json();

	let items = ITEMJSON;
	let itemsHTML = "";

	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		if (item.num == itemId) {
			itemsHTML += `
        <div class="de_item">
            <img src="${item.img_url}" alt="${item.it_name}">
            <div id="de_box">
                <div id="detail_cont">
                    <h3>${item.it_name}</h3>
                    <p>판매가 : ${item.price} won</p>
                    <p>배송비 : 무료</p>
                    <p>성별 : ${item.gender}</p>
                    <p>카테고리 : ${item.category}</p>
                </div>
                <button>구매</button>
            </div>
        </div>
    		`;
		}
	}

	document.querySelector("#de_item").innerHTML = itemsHTML;
}

if (window.location.pathname.endsWith('/detailed.jsp')) {
	function getItemID(name, url) {
		url = window.location.href
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
		if (!results) {
			return null;
		}
		if (!results[2]) {
			return '';
		}
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var itemId = getItemID('id');

	console.log(itemId);
	callItems();
}