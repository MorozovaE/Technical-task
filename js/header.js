const root = document.createElement('div');
const header = document.createElement('header');
const logo = document.createElement('img');
const nameDiv = document.createElement('div');
const spanFN = document.createElement('span');
const spanLN = document.createElement('span');

let createAtt = function(el,att,val){
    el.setAttribute(att,val);
};
nameDiv>spanFN.append('Elizaveta');
nameDiv>spanLN.append('Morozova');

root.id = 'root';
logo.src = 'img/logo.png';
createAtt(logo,'class','logo');
createAtt(spanFN,'class','first-name');
createAtt(spanLN,'class','last-name');

nameDiv.append(spanFN,spanLN);
header.append(logo,nameDiv);



const navEl = ['main','info','education','contacts'];


navEl.forEach(el => {
    let div = document.createElement('div');
    div.append(el);
    header.append(div);
});

root.append(header);
document.body.append(root);