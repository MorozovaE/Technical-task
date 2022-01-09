const main = document.createElement('main');
const mainPhoto = document.createElement('img');
const infoDiv = document.createElement('div');

mainPhoto.src = 'img/myPhoto.jpg';
createAtt(mainPhoto,'class','mainPhoto');

createAtt(infoDiv,'class','info');

let fullName = document.createElement('p');
fullName.append('Lizaveta Morozova');
createAtt(fullName,'class','fullName');

let phone = document.createElement('p');
let spanPhone = document.createElement('span');
phone.append(spanPhone);
phone.append('+375297585145');
createAtt(phone,'class','phone');
createAtt(spanPhone,'class','spanPhone');
spanPhone.append('Phone : ');


let email = document.createElement('p');
let spanMail = document.createElement('span');
email.append(spanMail);
email.append('lizavetamorozova12@gmail.com');
createAtt(email,'class','email');
createAtt(spanMail,'class','spanMail');
spanMail.append('Email : ');

let objective = document.createElement('p');
let spanObj = document.createElement('span');
objective.append(spanObj);
objective.append('Front-end Developer');
createAtt(objective,'class','objective');
createAtt(spanObj,'class','spanObj');
spanObj.append('Objective : ');


let aEduc = document.createElement('a');
let educ = document.createElement('p');
createAtt(aEduc,'href',"http://www.gsu.by/en");
let spanEduc = document.createElement('span');
educ.append(spanEduc);
educ.append(aEduc);
educ.append('(2020 - 2024)');
createAtt(educ,'class','educ');
createAtt(spanEduc,'class','spanEduc');
spanEduc.prepend('Education : ');
aEduc.append('Francisk Skorina Gomel State University');


infoDiv.append(fullName,phone,email,objective,educ);

let divTable = document.createElement('div');
createAtt(divTable,'class','tbl');

let table = document.createElement('table');
let tr1 = document.createElement('tr');
let tr2 = document.createElement('tr');
let tr3 = document.createElement('tr');

let th1 = document.createElement('th');
let th2 = document.createElement('th');
th1.append('IT Knowlege');
th2.append('Date');

let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');

td1.append('WEBsite Development with HTML,CSS,JS(IT-Academy)')
td2.append('28.04.21 - 28.06.21');
td3.append('JavaScript Web Application Development');
td4.append('18.12.21 - 17.01.22');

table.append(tr1,tr2,tr3);
tr1.append(th1,th2);
tr2.append(td1,td2);
tr3.append(td3,td4);

divTable.append(table);

main.append(mainPhoto,infoDiv,divTable);
root.append(main);