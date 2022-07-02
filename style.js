/* Auto load banner */
var sub_banner = document.querySelectorAll(".banner-one .sub-banner");
var banner = 0;
var total_banner = sub_banner.length;

function auto_load_banner() {
    banner++;
    //Kiểm tra nếu đến banner cuối thì quay lại banner đầu và hiện banner
    (banner == total_banner) ? banner = 0: banner = banner;
    sub_banner[banner].style.display = "block";
    // Kiểm tra nếu đang ở banner đầu thì sẽ ẩn banner cuối không thì ẩn banner-1
    var banner_hidden = 0;
    (banner == 0) ? banner_hidden = total_banner - 1: banner_hidden = banner - 1;
    sub_banner[banner_hidden].style.display = "none";
}
setInterval(auto_load_banner, 3000);

/* ĐÓNG MỞ MENU MOBILE */

var default_header = document.getElementById("header").offsetHeight;

function show_menu_mobile(check) { // Check truyền vào sẽ kiểm tra trường hợp ấn nút home sẽ k show menu
    var check_home = check;
    if (check_home == 0)
        document.getElementById("header").style.height = default_header + "px";
    else {
        if (default_header == document.getElementById("header").offsetHeight)
            document.getElementById("header").style.height = "auto";
        else
            document.getElementById("header").style.height = default_header + "px";
    }
}

/* Click button show menu */
var show_menu_button = document.getElementById("menu-zoom");
show_menu_button.onclick = () => { show_menu_mobile(1) };

/* Click menu close menu */
var button_menu_list = document.querySelectorAll("#header .menu-mobile > li");
for (var i = 1; i < button_menu_list.length; i++)
    button_menu_list[i].onclick = () => { show_menu_mobile(1) };
// Khi click HOME
button_menu_list[0].onclick = () => { show_menu_mobile(0) };

/*  ĐÓNG MỞ POPUP  */
var check_buy_popup = 0; // Giá trị mặc định khi chưa show popup
// function show
function show_buy_popup() {
    if (check_buy_popup == 0) {
        buy_popup.style.display = "block";
        check_buy_popup++;
    } else {
        buy_popup.style.display = "none";
        check_buy_popup = 0;
    }
}

// Lấy element Buy Popup to nhất
var buy_popup = document.querySelector("#buy-popup");

// Lấy các element đảm nhiệm mở popup
var tour_buy_tickets = document.querySelectorAll("#tour .tour-buy");
var count_buy_popup = tour_buy_tickets.length;

// Lấy tất cả element đảm nhiệm đóng popup
var popup_overlay = document.querySelector("#popup-overlay");

var header_popup_close = document.querySelector("#header-popup-close");
var footer_popup_close = document.querySelector("#footer-popup-close");

// Gán sự kiện mở popup
for (var i = 0; i < count_buy_popup; i++)
    tour_buy_tickets[i].onclick = show_buy_popup;

// Gán sự kiện đóng popup
popup_overlay.onclick = show_buy_popup;
header_popup_close.onclick = show_buy_popup;
footer_popup_close.onclick = show_buy_popup;
// NGHIADX