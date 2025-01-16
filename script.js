const loginForm = document.getElementById('loginForm')
const formRreg = document.getElementById('formReg')
const formSucc = document.getElementById('formSucc')
const displayEerror = document.getElementById('displayEerror')
const emailInput = document.getElementById('email')
const dismissBtn = document.getElementById('dismissBtn')

loginForm.addEventListener('submit',(e)=>{
e.preventDefault()
const formData = new FormData(loginForm).entries()
const {email} = Object.fromEntries(formData)
const isvalid = emailValidation(email)
if (isvalid === "valid"){
    displayEerror.style.visibility ="hidden"
    formRreg.style.visibility = "hidden"
    formSucc.style.visibility = "visible"

}
if (isvalid === "invalid"){
    displayEerror.style.visibility ="visible"
    emailInput.classList.add("errorstyle")

}
console.log(isvalid)

})
function emailValidation(email){
    const validity = /^\S+@\S+\.com$/g

    if(validity.test(email)){
        return ("valid")
    }else{
        return("invalid")
    }}

    dismissBtn.addEventListener('click',()=>{
        formSucc.style.visibility = "hidden"
        formRreg.style.visibility = "visible"
        emailInput.value = ""
    })