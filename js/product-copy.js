    'use strict'
    
    // 통화 동일화
    Number.prototype.printPrice = function () {
        return `₩ ${this.toLocaleString('ko-KR')}`;
        // this : 내가 저장한 숫자값
    }

    const swiper = new Swiper('.swiper_01', {
        direction: 'horizontal',
        loop: true,  //무한스크롤//

        slidesPerView: 2.5,
        spaceBetween: 150,
        freeMode: true,
        
         autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      
    });

    new Swiper('.swiper_02', {
      direction: 'horizontal',
      loop: true,  //무한스크롤//

      slidesPerView: 2,
      freeMode: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
    
    });

    new Swiper('.swiper_03', {
      direction: 'horizontal',
      loop: true,  //무한스크롤//

      slidesPerView: 1,
      freeMode: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
    
    });


    //상단버튼//
    const topBtn = document.querySelector(".gototop");
    topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });  
    };

    //하단버튼//
    const $bottomBtn = document.querySelector(".gotodown");

    $bottomBtn.onclick = () => {
        window.scrollTo({ top: document.body.scrollHeight-1000, behavior: "smooth" });
    };

    
    // filter 버튼
    const $divFilter = document.querySelector('#drop-content_filter');
    const $filterItemList = $divFilter.querySelectorAll('li'); 
    const $btnFilter = document.querySelector('#btn_filter');
    
    $filterItemList.forEach(item => {
        item.addEventListener('click', e => {
            console.log(e.target.textContent);
            // console.log(item);
            // → 클로저 발생 : 메모리를 더 먹기 때문에 e.target을 사용하자
            const str = e.target.textContent;
            $btnFilter.innerText = `${str.substring(3)} ▼`;

            // .textContent : 문자열 그대로 
            // .innerText   : 문자열 그대로
            // .innerHTML   : 태그도 넣고싶다 (위 두개보다 속도가 느리다)
            // (기본 중 기본)

            dp_menu_01();
      });
    });

    function dp_menu_01(){      
      if($divFilter.style.display === "none"){
        $divFilter.style.display = "block";
      } else {
        $divFilter.style.display = "none";
      }
    }
    
    // sort 버튼
    const $divSort = document.getElementById("drop-content_sort");
    const $sortItemList = $divSort.querySelectorAll('li')
    const $bntSort = document.querySelector('#btn_sort');
    
    // msn 
    // 1. filter 미선택 시, alert를 띄워야 한다.
    // 2. sort문자열이 바뀌면 안된다. 
    // 3. 드롭다운은 닫혀야 한다.

    $sortItemList.forEach(item => {
        item.addEventListener('click', e => {

            dp_menu_02();
            if ($btnFilter.textContent === 'Filter ▼') {
                alert('Filter를 선택해주세요') 
                return
            }
            console.log(e.target.textContent);
            $bntSort.textContent = `${e.target.textContent} ▼`;

            switch($btnFilter.textContent) {
                case 'designer ▼':
                    lampList.sort((a, b) => {
                    let leftVal = a.designer_name;
                    let rightVal = b.designer_name;

                    if ($bntSort.textContent === 'Z to A ▼') {
                        leftVal = b.designer_name;
                        rightVal = a.designer_name;
                    }
                    if(leftVal > rightVal) { return 1; }
                    if(leftVal < rightVal) { return -1; }
                    });
                    break;
                
                case 'price ▼':
                    lampList.sort((a, b) => {
                    let leftVal = a.price;
                    let rightVal = b.price;
                        if($bntSort.textContent === 'Z to A ▼') {
                            leftVal = b.price;  
                            rightVal = a.price;
                        }
                        return leftVal - rightVal;
                    });
                    break;
            }
            makeList(lampList);
        })
    })

    function dp_menu_02(){
        if($divSort.style.display === "none"){
            $divSort.style.display = "block";
        } else{
            $divSort.style.display = "none";
        }
}
    
    // 제품 목록 가져오기
    let catalogItem = null;
    let lampList = null;

    function getData() {
        fetch('data/catalog.json')
        .then(res => res.json())
        .then(result2 => {
            catalogItem = result2;
        });

        fetch('js/product.json')
        .then(res => res.json())
        .then(result => {
            lampList = result;
            console.log(result);
            makeList(result);
        });
    }

    function makeList(items) {
        $gridContainer.innerHTML = null;  
        items.forEach((item, idx) => {
            if(idx === 8) {
            const catalogResult = makeCatalog(catalogItem);
            $gridContainer.appendChild(catalogResult);
            }
            const result = makeItem(item);
            $gridContainer.appendChild(result);
        });
    }

    function makeCatalog(item) {
        const div = document.createElement('div');
        div.classList.add('catalog')
        div.innerHTML = `
            <a href="">
                <div class="catalog_img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="catalog_text">
                    <p>${item.text_1}</p>
                    <p>${item.text_2}</p>
                    <p>${item.text_3}</p>
                </div>
            </a>
        `;
        return div;
    }

    function makeItem(item) {      
        const div = document.createElement('div');
        div.classList.add('item');

        let divImageClass = 'image';
        let divProductClass = 'product';
        let imgClass = 'img_picture';
        let imgClassHover = 'img_overEffect';

        if(item.wide) {
            div.classList.add('big_grid_0');      
            divImageClass = 'image_bg';
            divProductClass = 'product_bg';
            imgClass = 'img_picture_bg';
            imgClassHover = 'img_overEffect_bg';
        }

      //big_grid_0
        div.innerHTML = `
            <a href="detail.html">
            <div class="${divImageClass}">
                <img src="${item.img_picture}" class="${imgClass}">
                <img src="${item.img_overEffect}" class="${imgClassHover}"> 
            </div>
            <div class="${divProductClass}">
                <div class="designer_name">${item.designer_name}</div>
                <div class="product_name">${item.product_name}</div>
                <div class="price">${item.price.printPrice()}</div>
            </div>
            </a>
        `;
        return div;
    }

    getData();

    const $gridContainer = document.querySelector('#grid_container');