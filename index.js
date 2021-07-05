const saveBtn = document.querySelector("button");
const inputField  = document.querySelector("input");
const ulFiled = document.querySelector("ul");

function addItem(){

    const inputValue = inputField.value;

    if(inputValue==''){
        alert("Please input data");
    }else{
        const listItem = document.createElement("li");
        listItem.textContent = inputValue;
        ulFiled.appendChild(listItem);
        inputField.value = '';
    }
}

saveBtn.addEventListener("click", addItem);

