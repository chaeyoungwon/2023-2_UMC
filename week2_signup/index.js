// js로 로그인 성공, 실패 문구 출력 및 모달 생성
let name = document.querySelector("#name");
let nickname = document.querySelector("#nickname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkingpw = document.querySelector("#checkingpw");
let successMessage = document.querySelector(".success-message");
let failureMessage = document.querySelector(".failure-message");
let successMessage1 = document.querySelector(".success-message1");
let failureMessage1 = document.querySelector(".failure-message1");
let successMessage2 = document.querySelector(".success-message2");
let failureMessage2 = document.querySelector(".failure-message2");
let matchMessage = document.querySelector(".match-message");
let mismatchMessage = document.querySelector(".mismatch-message");
let requiredMessage = document.querySelector(".required-message");
let unrequiredMessage = document.querySelector(".unrequired-message");


var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;

name.onkeyup = function (){ //버튼을 클릭했을 때 이름 확인
    if(name.value == "" ){
        requiredMessage.classList.remove("hide");
        unrequiredMessage.classList.add("hide");
    }
    else{
        requiredMessage.classList.add("hide");
        unrequiredMessage.classList.remove("hide");
    }
}

nickname.onkeyup = function (){ 
    if(Length(nickname.value)){
        successMessage.classList.remove("hide");
        failureMessage.classList.add("hide");
    }
    else{
        failureMessage.classList.remove("hide");
        successMessage.classList.add("hide");
    }
}

email.onkeyup = function (){
    if(exptext.test(email.value)==true){
        successMessage1.classList.remove("hide");
        failureMessage1.classList.add("hide");
    }
    else{
        failureMessage1.classList.remove("hide");
        successMessage1.classList.add("hide");
    }
}

function Length(value){
    if(value.length >=2 && value.length <=5)//value값이 2~5글자이상이면 true반환
        return true;
    else
        return false;
}

password.onkeyup = function () {
    if (password.value.length !== 0) {
      if(strongPassword(password.value)) {
        successMessage2.classList.remove("hide");
        failureMessage2.classList.add("hide"); // 실패 메시지가 가려져야 함
      }
      else {
        failureMessage2.classList.remove("hide");
        successMessage2.classList.add("hide"); // 실패 메시지가 보여야 함
      }
    }
    else {
        failureMessage2.classList.remove("hide");
        successMessage2.classList.add("hide");
    }
}

function strongPassword(str) {
   return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/.test(str);
}

checkingpw.onkeyup = function (){
    if(isMatch(password.value,checkingpw.value)){
    //패스워드 2개가 같다면 true반환으로 아래 코드가 실행됨
    matchMessage.classList.remove("hide");    
    mismatchMessage.classList.add("hide");
    }
    else{//패스워드 2개가 다르다면 false반환으로 아래 코드가 실행됨
        mismatchMessage.classList.remove("hide");
        matchMessage.classList.add("hide");   
    }
}

function isMatch(password1, password2){//패스워드 2개가 같다면 true반환
    if(password1===password2){
        return true;
    }
    return false;
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
    if(name.value!=="" && nickname.value!="" && email.value!="" && password.value!="" && checkingpw.value!="")
        modal.style.display = "flex";
    else{

    }
};

close.onclick = () => {
    modal.style.display = "none";
    location.reload();
};

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    // 모달 열기 로직 추가
});
