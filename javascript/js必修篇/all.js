//?if 包 if 多層判斷練習
/* let sex = 'male';
let cm = 82;

if(sex==='male'){
    if(cm>=90){
        console.log('男生體型過胖')
    }else{
        console.log('男生體型正常')
    }
}else if(sex==='female'){
    if(cm>=80){
        console.log('女生體型過胖')
    }else{
        console.log('女生體型正常')
    }
}else{
    console.log('資料錯誤')
}

console.log('計算結束') */

//?if練習
/* let myDegree = 38;
console.log(myDegree>=38)
if(myDegree>=37.5){
    console.log('您不得進入')
}else{
    console.log('您可以進入')
}
console.log('結束')
 */

//?在條件中新增邏輯運算子
/* let score = 50;

if(score>=80){
    console.log('優秀')
}else if(score>=60 && 79>=score){
    console.log('普通')
}else{
    console.log('不及格')
}
 */

//?寫入資料到陣列
/* let colors = [];
colors[0]='blue'
colors[1]='red'
colors[2]='black'
colors[5]='pink'

console.log(colors)
console.log(colors[4])
console.log(colors.length) */

//?刪除陣列指定資料
/* let colors = ['blue','red','black']
colors.splice(1,1)
console.log(colors)
 */

//?新增屬性資料到物件中
/* let home = {};
home.motherName = 'Mary';
home.dogs = 3;
home.isWakeUp = false;
console.log(home) */

//?修改物件中的屬性資料
/* let home = {
    motherName:'Mary',
    fatherName:'Tom',
    dogs:3,
    isWakeUp:false
};
home.motherName = 'Jane';
home.dogs+=1;
console.log(home) */

//?刪除物件的屬性資料
/* let home = {
    motherName:'Mary',
    fatherName:'Tom',
    dogs:3,
    isWakeUp:false
};
delete home.dogs;
delete home.motherName;
console.log(home);
console.log(home.dogs) */


//?物件搭配if練習
/* let tomStatus = {
    name:'Tom',
    age:'30',
    status:''
}
tomStatus.degree=36.5;

if(tomStatus.degree>=37.5){
    console.log('您不得進入');
    tomStatus.status='您不得進入';
}else{
    console.log('您可以進入');
    tomStatus.status='您可以進入';
}
console.log(tomStatus) */


//?陣列物件他配if
/* let peopleStatus = [
    {
        name:'Tom',
        age:'30',
        status:''
    }
]
peopleStatus[0].degree = 36.5;

if(peopleStatus[0].degree>=37.5){
    peopleStatus[0].status='您不可進入'
    console.log('您不可進入')
}else{
    peopleStatus[0].status='您可以進入'
    console.log('您可以進入')
}
console.log(peopleStatus) */


//?function搭配if使用
/* function checkScore(score){
    if (score>=60){
        return '及格';
    }else{
        return '不及格';
    }
}

let tomScore = checkScore(30);
console.log(tomScore) */


//?判斷數字是否為偶數，且記錄函式執行了幾次
/* let count = 0

function checkNum(myInput){
    count+=1 //!在函式中沒有變數count，會自動向函式外查找，運算function外的變數
    if(myInput%2==0){
        return '是偶數'
    }else{
        return '不是偶數'
    }
}

let check7 = checkNum(7)
console.log(check7)
let check8 = checkNum(8)
console.log(check8)

console.log(`您一共計算了${count}次`) */


//?取得DOM元素並動態修改文字內容
/* const el = document.querySelector('h1');
el.textContent = 'Hello World' */

//?在DOM元素中插入並覆蓋HTML標籤
/* const main = document.querySelector('.main')
main.innerHTML = `<h1 class="header">標題</h1>` */

//?在DOM元素標籤中新增或修改屬性內容
/* const link = document.querySelector('a');
link.setAttribute("href","https://www.yahoo.com.tw");
link.setAttribute("class","red"); */

//?取得與修改表單的value值
/* const txt = document.querySelector('.txt');
console.log(txt.value);
txt.value = "hello" */

//?DOM元素綁定監聽事件
/* const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
btn.addEventListener("click",function(e){
    title.textContent = "按鈕已經被點擊";
}) */

//?加法器製作
/* const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

let count = 0;//!如果將count放在函式中，則每執行一次值就會消失
btn.addEventListener("click",function(e){
    count+=1;
    title.textContent = count;
}) */


//?使用forEach和if篩選資料
/* let data = [30,40,100,3333,55694];
let total = 0;
let newData = [];

data.forEach(function(item){
    console.log(item);//!印出所有陣列的資料
    if(item%2===0){
        total+=1;//!算出篩選的資料有幾筆
        newData.push(item);//!將篩選的資料加入新陣列
    }
})
console.log(total)
console.log(newData) */


//?使用axios套件發出網路請求
/* console.log(axios)
axios.get('https://hexschool.github.io/ajaxHomework/data.json') //!發出網路請求
  .then(function (response) {  //!伺服器回傳會觸發then裡面的函式
    console.log(response);  //!response為一個物件，代表回傳的結果
    console.log(response.data); //!json資料
    console.log(response.status); //!狀態碼
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }); */


//?將取得的資料顯示到網頁上
/* let ary = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function(response){
      ary = response.data //!將資料賦予到陣列ary
      const title1 = document.querySelector('.title1');
      title1.textContent = ary[0].name;//!更改DOM元素資料
  }) */


//?使用post註冊帳號
    /* let obj = {
        email: '45689991@gmail.com',
        password: '12355647'
    }//!要傳到伺服器驗證的資料
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
      .then(function (response) {
        console.log(response);
      })//!驗證成功，帳號成功註冊
      .catch(function (error) {
        console.log(error);
      });//!驗證失敗，帳號已經被註冊 */