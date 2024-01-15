// nav tabs
function navtabs(tabs) {
    const tabshow = document.querySelectorAll('.tabshow')
    const tabbtn = document.querySelectorAll('.tabs button')
    tabshow.forEach(content => {
        content.style.display = 'none'
    })
  
    const selecttoshow = document.getElementById(tabs)
    selecttoshow.style.display = 'block'
  
    tabbtn.forEach(content => {
      content.classList.remove('bg-blue-800')
      content.classList.remove('text-red-600')
    })
    
    
    const activetab = document.querySelector(`button[onclick = "navtabs('${tabs}')"]`)
    activetab.classList.add("bg-blue-800")
    activetab.classList.add("text-red-600")
    activetab.classList.add("duration-300")
  }
  navtabs('tab1');
//   navtabs

// counterapp
const number = document.getElementById('number');
const addBtn = document.getElementById('add_btn');
const saveBtn = document.getElementById('save');
const reset = document.getElementById('reset');
const store = document.getElementById('store');

addBtn.addEventListener("click" , function(){
    number.innerHTML = +number.innerHTML + 1;
    saveBtn.classList.replace("btn-disable" , "save_btn")

});

saveBtn.addEventListener("click" , function(){
    if (number.innerHTML == 0) {
        saveBtn.classList.replace("save_btn" , "btn-disable");
    } else {
        if (store.innerHTML == 0) {
            store.innerHTML = number.innerHTML;
        } else {
            store.innerHTML=store.innerHTML+" ," +number.innerHTML;
        }
        number.innerHTML=0;
    }
});
reset.addEventListener("click", function(){
    store.innerHTML = 0;
    number.innerHTML=0;
}
)
// counterapp