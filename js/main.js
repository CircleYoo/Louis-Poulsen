(function () {
  "use strict";


  // main title 글자 색 + 이미지 변경
  const shapeColor = document.querySelector("#shape");
  const objImg = document.querySelector("#main_png > img");

  let colorArr = ["#055e52", "#f9a02d", "#7eac63", "#ee6f65", "#a16842"];
  let imgArr = new Array();
  imgArr[0] = "img/main/main-01.png";
  imgArr[1] = "img/main/main-02.png";
  imgArr[2] = "img/main/main-03.png";
  imgArr[3] = "img/main/main-04.png";
  imgArr[4] = "img/main/main-05.png";

  let imgIdx = 0;
  let idx = 0;
  setInterval(() => {
    shapeColor.style.color = colorArr[idx++];
    if (colorArr.length === idx) {
      idx = 0;
    }

    objImg.src = imgArr[imgIdx++];
    if (imgArr.length === imgIdx) {
      imgIdx = 0;
    }
  }, 1000);

  // con3 categories - mouseover
  let con3btn = document.querySelectorAll("#con3_text ul a");
  let con3Categories = [
    "pendant",
    "floor",
    "table",
    "wall",
    "outdoor",
    "spare"
  ];

  con3btn.forEach((item, index) => {
    item.addEventListener("mouseover", function (e) {
      let category = con3Categories[index];
      let newData = cateData[category];
      makeCateSlide(newData);
    });
  });

  let cateData;
  fetch("data/catedata.json")
    .then((response) => response.json())
    .then((result) => {
      cateData = result;
      makeCateSlide(cateData.pendant);
    })
    .catch((error) => console.log("cateData 가져오기 실패", error));

  function makeCateSlide(data) {
    let con3Html = ``;
    data.forEach((item) => {
      let temp = `
        <div id="con3_product_left">
          <div class="con3_product">
            <img src="${item.leftImg}" alt="">
            <div class="con3_desc">
              <p id="con3_name_left">${item.leftNm}</p>
              <p id="con3_price_left">₩ ${item.leftPrice.toLocaleString("ko-KR")}</p>
            </div>
          </div>
        </div>
        <div id="con3_product_right">
          <div class="con3_product">
            <img src="${item.rightImg}" alt="">
            <div class="con3_desc">
              <p id="con3_name_right">${item.rightNm}</p>
              <p id="con3_price_right">₩ ${item.rightPrice.toLocaleString("ko-KR")}</p>
            </div>
          </div>
        </div>
    `;
      con3Html += temp;
    });

    const swCon3Wrapper = document.querySelector(".con3_product");
    swCon3Wrapper.innerHTML = con3Html;
  }

  // con5 new arrivals - mouseover
  const $con5 = document.querySelector("#con5");
  const $con5Img = document.querySelector(".con5_img_wrapper img");
  const newList1 = document.querySelector("#con5_li_1 a");
  const newList2 = document.querySelector("#con5_li_2 a");
  const newList3 = document.querySelector("#con5_li_3 a");
  const newList4 = document.querySelector("#con5_li_4 a");
  const newList5 = document.querySelector("#con5_li_5 a");

  newList1.addEventListener("mouseenter", () => {
    $con5.style.backgroundColor = "#f9d0d0";
  });
  newList1.addEventListener("mouseleave", () => {
    $con5.style.backgroundColor = "";
  });

  newList2.addEventListener("mouseenter", () => {
    $con5.style.backgroundColor = "#b4ccd9";
    $con5Img.src = "img/con5/con5-02.jpg";
  });
  newList2.addEventListener("mouseleave", () => {
    $con5.style.backgroundColor = "";
    $con5Img.src = "img/con5/con5-01.jpg";
  });

  newList3.addEventListener("mouseenter", () => {
    $con5.style.backgroundColor = "#a14102";
    $con5Img.src = "img/con5/con5-03.jpg";
  });
  newList3.addEventListener("mouseleave", () => {
    $con5.style.backgroundColor = "";
    $con5Img.src = "img/con5/con5-01.jpg";
  });

  newList4.addEventListener("mouseenter", () => {
    $con5.style.backgroundColor = "#f8f8fa";
    $con5Img.src = "img/con5/con5-04.jpg";
  });
  newList4.addEventListener("mouseleave", () => {
    $con5.style.backgroundColor = "";
    $con5Img.src = "img/con5/con5-01.jpg";
  });

  newList5.addEventListener("mouseenter", () => {
    $con5.style.backgroundColor = "#702920";
    $con5Img.src = "img/con5/con5-05.jpg";
  });
  newList5.addEventListener("mouseleave", () => {
    $con5.style.backgroundColor = "";
    $con5Img.src = "img/con5/con5-01.jpg";
  });

  // con7 store - mouseover
  const $store = document.querySelectorAll("#con7_store > a");

  for (let i = 0; i < $store.length; i++) {
    $store[i].addEventListener("mouseenter", () => {
      console.log($store);
      document.body.style.backgroundColor = "#b4ccd9";
    });
    $store[i].addEventListener("mouseleave", () => {
      console.log($store);
      document.body.style.backgroundColor = "#fff";
    });
  }

  // 뉴스레터 전송 버튼
  const $newsInput = document.querySelector(
    '.email_wrapper input[type="email"]'
  );
  const $newsBtn = document.querySelector(".email_wrapper > button");
  const $newsAlert = document.querySelector("#email_submit");

  $newsBtn.addEventListener("click", (e) => {
    $newsInput.value = "";
    $newsAlert.style.display = "block";
  });

  setInterval(() => {
    if (($newsAlert.style.display = "block")) {
      $newsAlert.style.display = "none";
    }
  }, 5000);
})();
