const passwordbox=document.getElementById("password");
const length=12;
const upperCase="ABCDEFGIJKLMNOPQRSTUVWXYZ";
const lowCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$^&*()_+~|}{[]></-=";

const allChars=upperCase+lowCase+number+symbol;




function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowCase[Math.floor(Math.random()*lowCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)]; //0dan symbolun
    //uzunlugu kadar bir rassal sayı üret sonra symbolun bir elemanı bu rassal
    //sayının gosterecegi indexteki eleman olsun bu elemanı passworda ekle


    while(length>password.length){

        password+=allChars[Math.floor(Math.random()*allChars.length)];

      

    }

    passwordbox.value=password;



}


function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}
