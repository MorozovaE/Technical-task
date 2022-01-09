let field = document.createElement('div');
createAtt(field,'class','field');

let title_field_mail = document.createElement('div');
createAtt(title_field_mail,'class','title_field_mail');
title_field_mail.append('Сomment field(email)');

let divTA = document.createElement('div');
let TA = document.createElement('textarea');
let btnEmail = document.createElement('button');
createAtt(TA,'id','TA_id_mail')
btnEmail.append('Check');
createAtt(btnEmail,'class','check-email');
createAtt(btnEmail,'type','submit')
createAtt(TA,'placeholder',"Comment...");
divTA.append(TA);


//////////////////////////////
let fieldPhone = document.createElement('div');
createAtt(fieldPhone,'class','fieldPhone');

let title_field_phone = document.createElement('div');
createAtt(title_field_phone,'class','title_field_phone');
title_field_phone.append('Сomment field(phone)');

let divTAPhone = document.createElement('div');
let TAphone = document.createElement('textarea');
let btnPhone = document.createElement('button');

btnPhone.append('Check');
createAtt(btnPhone,'class','check-phone');
createAtt(TAphone,'placeholder',"Comment...");
divTAPhone.append(TAphone);

btnEmail.onclick = function(){
    let email = 'lizavetamorozova12@gmail.com';
    if(TA.value == ''){
    TA.append(email);
}
}


btnPhone.onclick = function(){
   
    let reg = /^\[+375] \[ |29|33|44]\ [0-9]{7}/ ;

    if(!reg.test(TAphone.value)){
        alert("The number is wrong!");
    } else {
        alert('The number is corremdct!');
    }
}
// +375297585145 [0-9]{7}$/
// btnPhone.onclick= function(TAphone)  {  

//  if(!validate(reg,TAphone.value)) {
//      TAphone.preventDefault();
//      alert("The number is wrong!");  
//     }  
//     else {  
//       alert();
//     }  
// };

// function validate(regex, TAphone){
//     return regex.test(TAphone)
// }



field.append(title_field_mail,divTA,btnEmail);
field.append(title_field_phone,divTAPhone,btnPhone);
main.append(field);
