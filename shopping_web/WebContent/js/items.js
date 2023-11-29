// 상품 리스트 뽑아오기

async function callItems() {
	const RESP = await fetch("/shopping_web/items.json");
	const ITEMJSON = await RESP.json();

	let items = ITEMJSON;
	let itemsHTML = "";

	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		itemsHTML += `
    		<div class="item">
				<a href="./detailed.jsp?id=${item.num}">
        			<img src="${item.img_url}" alt="${item.it_name}" class="it_img">
        			<div class="it_cont">
            			<span class="it_name">${item.it_name}</span>
            			<span class="it_price">${item.price + 'won'}</span>
        			</div>
				</a>
    		</div>
    		`;
	}

	document.querySelector("#items").innerHTML = itemsHTML;
}

if (window.location.pathname.endsWith('/index.jsp')) {
	callItems();
}

async function callCategory() {
	const RES = await fetch("/shopping_web/items.json");
	const ITEMJSON = await RES.json();

	let items = ITEMJSON;
	let itemsHTML = "";

	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		if (item.category == category) {
			itemsHTML += `
    		<div class="ca_item">
				<a href="./detailed.jsp?id=${item.num}">
        			<img src="${item.img_url}" alt="${item.it_name}" class="ca_it_img">
        			<div class="ca_it_cont">
            			<span class="ca_it_name">${item.it_name}</span>
            			<span class="ca_it_price">${item.price + 'won'}</span>
        			</div>
				</a>
    		</div>
    		`;
		}
	}

	document.querySelector("#ca_items").innerHTML = itemsHTML;
}

if (window.location.pathname.endsWith('/items.jsp')) {
    function getItemCategory(name, url) {
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

    var category = getItemCategory('category');

    console.log(category);
	callCategory();
	
}