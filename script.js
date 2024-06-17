const submitBtn = document.querySelector(".submit-btn"); 
const message = document.getElementsByClassName("msg")[0];
const thankyouPage = document.querySelector(".thankyou-page");
const page1=document.getElementsByClassName("container")[0];
const changePage=()=>{
    thankyouPage.classList.toggle("hidden");
    page1.classList.toggle("hidden");
}
const changeText=(value)=>{
    message.innerHTML=`You selected ${value} out of 5`;
    changePage();
}
const getValue=()=>{
    let value = document.querySelector("input[name='star']:checked").value;
    changeText(value);

}
submitBtn.addEventListener("click",getValue);