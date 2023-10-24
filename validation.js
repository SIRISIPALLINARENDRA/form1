const form = document.getElementById("form")



const uname = document.getElementById("uname")


const email = document.getElementById("email")

const phone = document.getElementById("phone")

const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")

const tandc= document.getElementById("tc")


form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let phoneValue = phone.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
   

    //User name check

    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
    }
    //email check
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
    }

    //phone number check
    if (phoneValue === '') {
        setError(phone, 'Phone number cannot be empty');
    } else if (!phoneCheck(phoneValue)) {
        setError(phone, 'Enter a valid phone number');
    } else {
        setSuccesss(phone);
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'user name should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
    }

      
    //Confirm Password check

    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccesss(cpassword)
    }

     //Terms and conditions check

     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')        
    }
    else{
        setSuccesss(tc)
    }
    
   
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function phoneCheck(input) {
        
        const phoneReg = /^\d{10}$/;
        return phoneReg.test(input);
    }

    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}

