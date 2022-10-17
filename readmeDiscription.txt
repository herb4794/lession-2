npm init -y

// import script of wep app Parcel 
npm install --save-dev parcel 

// import script of bootstrap
npm install bootstrap 

//this codes is using to main.scss from bootstrap 
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

If you run sever pls open to package.json file , change main in the 'source' element.

parcel description[

parcel './src/*.html'

{
  "source": "src/index.html"
}
{

  "source": ["src/a.html", "src/b.html"]
}

]
css remake description {

If you want to use the css to control html 'collection-img',

you need to use the 'position-relative' thereby activating the element.

If you want to change the img size, you need to use 'col-md-6' in 'class' element

}

If you want to use favour button , you need to import isotope JS{

website: https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js

<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>

jQuery 語法

jQuery 語法是通過選取HTML 元素，並對選取的元素執行某些操作。

基礎語法：$( selector ). action ()

美元符號定義jQuery
選擇符（selector）"查詢"和"查找" HTML 元素
jQuery 的action() 執行對元素的操作
實例:

$(this).hide() - 隱藏當前元素

$("p").hide() - 隱藏所有<p> 元素

$("p.test").hide() - 隱藏所有class="test" 的<p> 元素

$("#test").hide() - 隱藏id="test" 的元素

}


remake words [getText, toString, isEmpty, equals, Toast, setError, getValue]


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
Error_instruction

function showError(errorElement, errorMessage){
  document.querySelector("."+errorElement).classList.add("display-error");
  document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
  let errors = document.querySelectorAll(".error");
  for(let error of errors){
    error.classList.remove("display-error");
  }
}


.error.display-error{
    display: block;
    margin-bottom: 20px;
    transform: translateY(-20px);
}

.error{
    color: #af4242;
    background-color: #fde8ec;
    padding: 10px;
    display: none;
}
