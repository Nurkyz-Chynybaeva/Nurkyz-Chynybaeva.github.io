let button = document.querySelector('button');

let inputName = document.querySelector('#name')
let inputMassage = document.querySelector('#massage')
let inputColor = document.querySelector('#color')



button.addEventListener('mousedown',  function(){
  //  console.log(inputName.value)
  //  console.log(inputMassage.value)
  //  console.log(inputColor.value)


let div = document.createElement('div');
let spanName = document.createElement('span');
let spanMessage = document.createElement('span');

document.body.append(div);
div.append(spanName, spanMessage);
spanName.innerText = inputName.value + ": ";
spanMessage.innerText = inputMassage.value;
spanName.style.color = inputColor.value;




fetch(' https://for-tasks-default-rtdb.firebaseio.com/', {
  method:"POST" ,
  body: JSON.stringify({
    name: inputName.value,
            message: inputMessage.value,
            color: inputColor.value,

  })
})

});









