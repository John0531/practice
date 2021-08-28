let data = [
  {
    charge: "免費",
    name: "小王充電站",
  },
  {
    charge: "投幣式",
    name: "小名充電站",
  },
  {
    charge: "投幣式",
    name: "小花充電站",
  },
  {
    charge: "投幣式",
    name: "小天充電站",
  },
];

const list = document.querySelector('.list'); //?DOM可以抽離到最外層以重複使用，因為function會向外查找


//!預設載入
function init() {
  /* const list = document.querySelector(".list"); */
  let str = ""; //?設定一個空字串，讓它持續累加

  data.forEach(function (item, index) {
    let content = `<li>${item.name}，${item.charge}</li>`; //?讓資料轉為字串內容
    str += content; //?讓空字串累加字串內容
    /* console.log(str); */
  });

  list.innerHTML = str; //?顯示字串內容到網頁上
}

init(); //?當網頁執行時，先初始化網頁畫面


//!篩選器邏輯
const stationFilter = document.querySelector('.filter');
console.log(stationFilter);
stationFilter.addEventListener('click',function(e){
    if(e.target.value===undefined){
        console.log('妳點到空的地方')
        return //? 強制中斷函式
    } //? 如果點到空的地方(沒有點到免費或投幣式按鈕)，會中斷函式(下面的程式碼不會執行)
    
    let str = "";
    data.forEach(function(item,index){
        if(e.target.value==="全部"){
            str+=`<li>${item.name}，${item.charge}</li>`
        }else if(e.target.value===item.charge){
            str+=`<li>${item.name}，${item.charge}</li>`
        }
    }) //?篩選資料並轉為字串累加
    /* const list = document.querySelector(".list"); */
    list.innerHTML = str; //?將資料顯示到網頁上
})


//!新增資料邏輯
const stationName = document.querySelector('.stationName')
const stationCharge = document.querySelector('.stationCharge')
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(e){
    let obj = {};
    obj.charge = stationCharge.value //?將input資料寫入空物件obj
    obj.name = stationName.value //?將input資料寫入空物件obj
    data.push(obj); //?將物件obj加入到陣列資料data中
    init(); //?執行init函式，列出所有陣列物件，並顯示到網頁上
    stationCharge.value = "免費";
    stationName.value = "";
})