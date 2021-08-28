
let data =[]

function renderData(){
    let str=""
    data.forEach(function(item,index){
        str+=`<li>${item.content}<input data-num="${index}" type="button" class="delete" value="刪除代辦"></li>`
    })
    console.log(str)
    
    const list = document.querySelector('.list');
    list.innerHTML = str
}


//?新增待辦
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');

save.addEventListener('click',function(e){
    if(txt.value===""){
        alert('請輸入內容');
        return;
    }
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value = ''
})
//renderData()

//?刪除代辦
const list = document.querySelector('.list');
list.addEventListener('click',function(e){
    if(e.target.getAttribute('class') !== 'delete'){
        alert('妳目前沒點到按鈕');
        return
    }
    let num = e.target.getAttribute('data-num');
    data.splice(num,1);
    renderData();
})