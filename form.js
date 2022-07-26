
var num1 = document.querySelector('#num');
var email2 = document.querySelector('#email2');
var pass1 = document.querySelector('#pass1');
var pass2 = document.querySelector('#pass2');


var btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    var first = document.querySelector('.first').value
    var last = document.querySelector('.last').value
    var num = document.querySelector('.num')
    var password = document.querySelector('.password')
    var email = document.querySelector('.email')
    var confirm1 = document.querySelector('.confirm')
    var show = document.querySelector('#show')

    var check1 = document.querySelector('.check1').checked;

    if(check1 == true){

        var Password = document.querySelector('#Password');
    var Confirm2= document.querySelector('#Confirm2');
    var Phone = document.querySelector('#Phone');
    var LastName = document.querySelector('#LastName');
    var FirstName = document.querySelector('#FirstName');
    var Email = document.querySelector('#Email');
    
    }
 
   
    FirstName.textContent=first;
   
    LastName.textContent=last;

    function only() {
        num.value = " ";
        num.focus();
    }

   
    if (num.value.length == 10) {
        
        Phone.textContent = num.value;
    }
    else {

        num1.textContent='Number cannot be empty';
        Phone.textContent =''

        only()
    }



    function email1(){
        email.value=" ";
        email.focus();
    } 

    
        if(email.value == ''){
           
            email2.textContent ='Email cannot be empty'
            Email.innerHTML=''
            email1()
        }
        else{
            Email.innerHTML=email.value;
        }



        function pass(){
            confirm1.focus();
            password.focus();
        }

        if(password.value == '' && confirm1.value == ''){
           
            pass1.textContent ='password cannot be empty'
            pass2.textContent ='confirm password cannot be empty'
            Password.innerHTML=''
            Confirm2.innerHTML=''
           pass()

        }
      
        else if(password.value.length <=6){
            
        
         if(password.value == confirm1.value){
            Password.innerHTML=password.value;
            Confirm2.innerHTML=password.value
        }
        else if(password.value != confirm1.value){
             show.innerHTML='do Not Match';
        }
        
        
    }
        

})



