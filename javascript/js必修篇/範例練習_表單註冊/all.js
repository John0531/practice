//?註冊帳號功能
const account = document.querySelector('.account')
const password = document.querySelector('.password')
const send = document.querySelector('.send')

send.addEventListener('click',function(e){
    callSingUp()
})

function callSingUp(){
    if(account.value===""||password.value===""){
        alert('請填寫正確資訊')
        return;
    }//!如果帳號或密碼為空值，中斷函式執行
    let obj = {}
    obj.email = account.value;//!將DOM元素的input資料寫入空物件
    obj.password = password.value;//!將DOM元素的input資料寫入空物件
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
      .then(function (response) {
        console.log(response.data)
        if(response.data.message==="帳號註冊成功"){
            alert('恭喜帳號註冊成功');
        }else{
            alert('註冊失敗，此帳號已經註冊');
        }
        account.value="";
        password.value="";
      })
      .catch(function (error) {
        console.log(error);
      });
}

//?登錄帳號功能
const loadAccount = document.querySelector('.loadAccount')
const loadPassword = document.querySelector('.loadPassword')
const loadSend = document.querySelector('.loadSend')
loadSend.addEventListener('click',function(e){
    callLoad()
})


function callLoad(){
    if(loadAccount.value===""||loadPassword.value===""){
        alert('輸入帳密不正確')
        return
    }
    let obj2 = {}
    obj2.email = loadAccount.value;
    obj2.password = loadPassword.value;
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',obj2)
        .then(function(response){
            if(response.data.message==="登入成功"){
                console.log(response.data);
                alert('恭喜登入成功')
            }else{
                alert('登入失敗，請重新嘗試')
            }
        })
        .catch(function(error){
            console.log(error)
        })
        loadAccount.value = "";
        loadPassword.value = "";
}
