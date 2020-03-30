// method to capture form inputs
let submit = document.getElementById('submit');
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    let formName = document.forms['register'];
    let name = formName.name.value;
    let mail = formName.mail.value;
    let msg = formName.msg.value;
    // check if inputs are empty
    if (name === "" || name === null){
        alert('the name is required')
        return false;
    }else if(mail === "" || mail === null){
        alert('Email is required');
        return false;
    }else if(msg === "" || msg === null){
        alert("Message is required");
        return true;
    }else{
         // response
        alert(`Thanks ${name} for your message,I will respond via ${mail}`);
    }
   

});
