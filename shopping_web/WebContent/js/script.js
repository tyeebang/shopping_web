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
function callItemsAlpha() {

    let items = [
        {
            "it_name": "와이드 루즈핏 빅사이즈 남성 멜란",
            "price": 13900,
            "img_url": "./img/items/aa.jpg"
        },
        {
            "it_name": "오버핏 꽈배기 브이넥 니트",
            "price": 27900,
            "img_url": "./img/items/bb.jpg"
        },
        {
            "it_name": "루즈핏 브이넥 박시 조끼 여성의류",
            "price": 15000,
            "img_url": "./img/items/cc.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        }, {
            "it_name": "와이드 루즈핏 빅사이즈 남성 멜란",
            "price": 13900,
            "img_url": "./img/items/aa.jpg"
        },
        {
            "it_name": "오버핏 꽈배기 브이넥 니트",
            "price": 27900,
            "img_url": "./img/items/bb.jpg"
        },
        {
            "it_name": "루즈핏 브이넥 박시 조끼 여성의류",
            "price": 15000,
            "img_url": "./img/items/cc.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        }, {
            "it_name": "와이드 루즈핏 빅사이즈 남성 멜란",
            "price": 13900,
            "img_url": "./img/items/aa.jpg"
        },
        {
            "it_name": "오버핏 꽈배기 브이넥 니트",
            "price": 27900,
            "img_url": "./img/items/bb.jpg"
        },
        {
            "it_name": "루즈핏 브이넥 박시 조끼 여성의류",
            "price": 15000,
            "img_url": "./img/items/cc.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        }
    ];

    let itemsHTML = "";

    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        itemsHTML +=  `
    <div class="item">
        <a href="#">
            <img src="${item.img_url}" alt="${item.it_name}" class="it_img">
            <div class="it_cont">
                <span class="it_name">${item.it_name}</span>
                <hr>
                <span class="it_price">${item.price + 'won'}</span>
            </div>
        <a>
    </div>
    `
    }

    document.querySelector("#items").innerHTML = '<h1>임시</h1>';
    document.querySelector("#items").innerHTML = itemsHTML;
}

function callItemsBeta() {

    let ca_items = [
        {
            "it_name": "와이드 루즈핏 빅사이즈 남성 멜란",
            "price": 13900,
            "img_url": "./img/items/aa.jpg"
        },
        {
            "it_name": "오버핏 꽈배기 브이넥 니트",
            "price": 27900,
            "img_url": "./img/items/bb.jpg"
        },
        {
            "it_name": "루즈핏 브이넥 박시 조끼 여성의류",
            "price": 15000,
            "img_url": "./img/items/cc.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        }, {
            "it_name": "와이드 루즈핏 빅사이즈 남성 멜란",
            "price": 13900,
            "img_url": "./img/items/aa.jpg"
        },
        {
            "it_name": "오버핏 꽈배기 브이넥 니트",
            "price": 27900,
            "img_url": "./img/items/bb.jpg"
        },
        {
            "it_name": "루즈핏 브이넥 박시 조끼 여성의류",
            "price": 15000,
            "img_url": "./img/items/cc.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        }, {
            "it_name": "와이드 루즈핏 빅사이즈 남성 멜란",
            "price": 13900,
            "img_url": "./img/items/aa.jpg"
        },
        {
            "it_name": "오버핏 꽈배기 브이넥 니트",
            "price": 27900,
            "img_url": "./img/items/bb.jpg"
        },
        {
            "it_name": "루즈핏 브이넥 박시 조끼 여성의류",
            "price": 15000,
            "img_url": "./img/items/cc.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        },
        {
            "it_name": "브이넥 울니트 조끼",
            "price": 36700,
            "img_url": "./img/items/dd.jpg"
        }
    ];

    let ca_itemsHTML = "";

    for (let i = 0; i < ca_items.length; i++) {
        let ca_item = ca_items[i]
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
    `
    }

    document.querySelector("#ca_items").innerHTML = '<h1>임시</h1>';
    document.querySelector("#ca_items").innerHTML = ca_itemsHTML;
}

if (document.querySelector("#items") !== null) {
    callItemsAlpha();
} else if(document.querySelector("#ca_items") !== null) {
    callItemsBeta();
}