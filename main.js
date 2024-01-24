const doc = document;
const inputEmail = doc.querySelector('#input');

const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const alertP = doc.querySelector('#alert');

const btn = doc.querySelector('#btn');

const capturarEmail = () => {

  const email = inputEmail.value;  

  if(regExp.test(email)){
    console.log(email);
    alertP.classList.add('alert-p');
    inputEmail.classList.remove('border')
  }else{
    alertP.classList.remove('alert-p');
    inputEmail.classList.add('border')
  }
 
}






btn.addEventListener('click', capturarEmail)
