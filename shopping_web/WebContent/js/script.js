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