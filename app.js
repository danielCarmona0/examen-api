const URL = "https://dog.ceo/api/breeds/image/random";
const dogs=document.getElementById('dog');
const btn_dogs1 =document.getElementById('btn_dog1');
const btn_dogs2 =document.getElementById('btn_dog2');
const btn_dogs3 =document.getElementById('btn_dog3');
const btn_dogs4 =document.getElementById('btn_dog4');


btn_dogs1.addEventListener('click', btn);
btn_dogs2.addEventListener('click', btn);
btn_dogs3.addEventListener('click', btn);
btn_dogs4.addEventListener('click', btn);



function btn(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(data=>{
        dogs.innerHTML=`^<img src="${data.message}"/>"`
    })
}


