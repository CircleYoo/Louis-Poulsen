(function () {
  ("use strict");

  //상단버튼//
  const topBtn = document.querySelector("#goTop");
  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //하단버튼//
  const $bottomBtn = document.querySelector("#goDown");

  $bottomBtn.onclick = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 1000,
      behavior: "smooth",
    });
  };

  // 스크롤 시 header 높이 줄이기
  const $header = document.querySelector("header");
  const $logoImg = document.querySelector("#logo_img");
  const $logoImgMini = document.querySelector("#logo_img_mini");
  window.onscroll = function () {
    if (window.scrollY > 0) {
      $header.classList.add("scrolled");
      $logoImg.style.display = "none";
      $logoImgMini.style.display = "block";
    } else {
      $header.classList.remove("scrolled");
      $logoImg.style.display = "block";
      $logoImgMini.style.display = "none";
    }
  };

  // 검색창 열고 닫기
  const $searchIcon = document.querySelector(".main_icon .fa-magnifying-glass");
  const $searchBar = document.querySelector("#search_bar");
  const $headerXBtn = document.querySelector(".header_xBtn");

  $searchIcon.addEventListener("click", () => {
    $searchBar.classList.toggle("search_open");
    $headerXBtn.style.display = "block";
  });

  $headerXBtn.addEventListener("click", () => {
    $headerXBtn.style.display = "none";
    $searchBar.classList.toggle("search_open");
  });

  // 장바구니 열고 닫기 + 스크롤 방지 + 뒷 배경 어둡게
  const $cartBtn = document.querySelector(".main_icon .fa-cart-shopping");
  const $cartTap = document.querySelector("#cart");
  const $cartXBtn = document.querySelector("#cart_title > button");
  const $cartOverlay = document.querySelector(".cart_overlay");
  const body = document.getElementsByTagName("body")[0];

  $cartBtn.addEventListener("click", () => {
    $cartTap.classList.toggle("cart_active");
    body.classList.toggle("scrollLock");
    $cartOverlay.style.display = "block";
  });

  $cartXBtn.addEventListener("click", () => {
    $cartOverlay.style.display = "none";
    $cartTap.classList.toggle("cart_active");
    body.classList.toggle("scrollLock");
  });
  // 장바구니 버튼
  const COUNTER = document.getElementById("counter");
  const INCREASE = document.getElementById("increase");
  const DECREASE = document.getElementById("decrease");
  const $listTotal = document.getElementById("list_total");

  let num = parseInt(COUNTER.innerHTML);

  function render() {
    COUNTER.innerHTML = num;
  }

  INCREASE.addEventListener("click", function () {
    num = num + 1;
    render();
  });

  DECREASE.addEventListener("click", function () {
    num = num - 1;
    render();
  });

  // 모바일 메뉴
  const $hamBtn = document.querySelector("#mobile_btn");
  const $mobileXBtn = document.querySelector(".main_icon .fa-xmark");
  const $mobileTap = document.querySelector("#mobile_menu");

  $hamBtn.addEventListener("click", () => {
    $mobileTap.classList.toggle("mobile_menu_active");
    body.classList.toggle("scrollLock");
  });

  // $mobileXBtn.addEventListener('click', () => {
  //     $mobileTap.classList.toggle('mobile_menu_active')
  //     body.classList.toggle('scrollLock');
  // })

  // 브랜드 스토어 오픈
  const $aside = document.querySelector("aside");
  const $asideBtn = document.querySelector("aside > button");

  $asideBtn.addEventListener("click", () => {
    $aside.style.display = "none";
  });
})();