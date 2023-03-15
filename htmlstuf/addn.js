const btn=document.querySelector('.btn');
// btn.addEventListener('click',(b)=>{
//     b.preventDefault();
//     console.log(b);
// })
btn.addEventListener('mouseover',(m)=>{
    m.preventDefault();
    document.querySelector('#my-form').style.background='#9999cc';
    document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
})
btn.addEventListener('mouseout',(mo)=>{
    mo.preventDefault();
    document.querySelector('#my-form').style.background='#cc3333';
    document.querySelector('body').classList.add('bg-success');
    
})

const newForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');
newForm.addEventListener('submit',onSubmit);
function onSubmit(f){
    f.preventDefault();
    if(nameInput.value ===''||emailInput.value ==''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    } 
    else {
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);
        localStorage.setItem('useripname',nameInput.value);
        localStorage.setItem('useremail',emailInput.value);

        nameInput.value='';
        emailInput.value='';
    }
} 
