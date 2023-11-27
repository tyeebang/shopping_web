// // header, footer는 추후 분리 후 인클루드 사용 예정.

// header

// 메뉴 고정
window.addEventListener("scroll", function() {
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
	const RESP = await fetch("/shopping_web/items.json?um");
	const ITEMJSON = await RESP.json();

	let items = ITEMJSON;
	let itemsHTML = "";

	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		if (item.category.length != 0) {
			itemsHTML += `
    		<div class="item">
				<a href="#">
        			<img src="${item.img_url}" alt="${item.it_name}" class="it_img">
        			<div class="it_cont">
            			<span class="it_name">${item.it_name}</span>
            			<span class="it_price">${item.price + 'won'}</span>
        			</div>
				</a>
    		</div>
    		`;
		}
	}

	document.querySelector("#items").innerHTML = itemsHTML;
}

async function callItemsTop() {
	const RESP = await fetch("/shopping_web/items.json?um");
	const ITEMJSON = await RESP.json();

	let ca_items = ITEMJSON;
	let ca_itemsHTML = "";

	for (let i = 0; i < ca_items.length; i++) {
		let ca_item = ca_items[i];
		if (ca_item.category == 'top') {
			ca_itemsHTML += `
	    	<div class="top_item">
	        	<a href="#">
	            	<img src="${ca_item.img_url}" alt="${ca_item.it_name}" class="ca_it_img">
	            	<div class="ca_it_cont">
	                	<span class="ca_it_name">${ca_item.it_name}</span>
	                	<hr>
	                	<span class="ca_it_price">${ca_item.price + 'won'}</span>
	            	</div>
	        	</a>
	    	</div>
	    	`;
		}
	}

	document.querySelector("#top_items").innerHTML = ca_itemsHTML;
}

async function callItemsBottom() {
	const RESP = await fetch("/shopping_web/items.json?um");
	const ITEMJSON = await RESP.json();

	let ca_items = ITEMJSON;
	let ca_itemsHTML = "";

	for (let i = 0; i < ca_items.length; i++) {
		let ca_item = ca_items[i];
		if (ca_item.category == 'bottom') {
			ca_itemsHTML += `
	    	<div class="bot_item">
	        	<a href="#">
	            	<img src="${ca_item.img_url}" alt="${ca_item.it_name}" class="ca_it_img">
	            	<div class="ca_it_cont">
	                	<span class="ca_it_name">${ca_item.it_name}</span>
	                	<hr>
	                	<span class="ca_it_price">${ca_item.price + 'won'}</span>
	            	</div>
	        	</a>
	    	</div>
	    	`;
		}
	}

	document.querySelector("#bot_items").innerHTML = ca_itemsHTML;
}

async function callItemsOuter() {
	const RESP = await fetch("/shopping_web/items.json?um");
	const ITEMJSON = await RESP.json();

	let ca_items = ITEMJSON;
	let ca_itemsHTML = "";

	for (let i = 0; i < ca_items.length; i++) {
		let ca_item = ca_items[i];
		if (ca_item.category == 'outer') {
			ca_itemsHTML += `
	    	<div class="out_item">
	        	<a href="#">
	            	<img src="${ca_item.img_url}" alt="${ca_item.it_name}" class="ca_it_img">
	            	<div class="ca_it_cont">
	                	<span class="ca_it_name">${ca_item.it_name}</span>
	                	<hr>
	                	<span class="ca_it_price">${ca_item.price + 'won'}</span>
	            	</div>
	        	</a>
	    	</div>
	    	`;
		}
	}

	document.querySelector("#out_items").innerHTML = ca_itemsHTML;
}

async function callItemsOps() {
	const RESP = await fetch("/shopping_web/items.json?um");
	const ITEMJSON = await RESP.json();

	let ca_items = ITEMJSON;
	let ca_itemsHTML = "";

	for (let i = 0; i < ca_items.length; i++) {
		let ca_item = ca_items[i];
		if (ca_item.category == 'ops') {
			ca_itemsHTML += `
	    	<div class="ops_item">
	        	<a href="#">
	            	<img src="${ca_item.img_url}" alt="${ca_item.it_name}" class="ca_it_img">
	            	<div class="ca_it_cont">
	                	<span class="ca_it_name">${ca_item.it_name}</span>
	                	<hr>
	                	<span class="ca_it_price">${ca_item.price + 'won'}</span>
	            	</div>
	        	</a>
	    	</div>
	    	`;
		}
	}

	document.querySelector("#ops_items").innerHTML = ca_itemsHTML;
}

async function callItemsSkirt() {
	const RESP = await fetch("/shopping_web/items.json?um");
	const ITEMJSON = await RESP.json();

	let ca_items = ITEMJSON;
	let ca_itemsHTML = "";

	for (let i = 0; i < ca_items.length; i++) {
		let ca_item = ca_items[i];
		if (ca_item.category == 'skirt') {
			ca_itemsHTML += `
	    	<div class="skirt_item">
	        	<a href="#">
	            	<img src="${ca_item.img_url}" alt="${ca_item.it_name}" class="ca_it_img">
	            	<div class="ca_it_cont">
	                	<span class="ca_it_name">${ca_item.it_name}</span>
	                	<hr>
	                	<span class="ca_it_price">${ca_item.price + 'won'}</span>
	            	</div>
	        	</a>
	    	</div>
	    	`;
		}
	}

	document.querySelector("#skirt_items").innerHTML = ca_itemsHTML;
}


if (document.querySelector("#items") !== null) {
	callItemsAlpha();
} else if (document.querySelector("#top_items") !== null) {
	callItemsTop();
} else if (document.querySelector("#bot_items") !== null) {
	callItemsBottom();
} else if (document.querySelector("#out_items") !== null) {
	callItemsOuter();
} else if (document.querySelector("#ops_items") !== null) {
	callItemsOps();
} else if (document.querySelector("#skirt_items") !== null) {
	callItemsSkirt();
}