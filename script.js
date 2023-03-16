let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', ()=>{
  let name = document.getElementById('name').value;
  let ulbox = document.querySelector('.ulbox');
  let list = document.createElement('li');
  list.innerHTML =  name;
  ulbox.appendChild(list);
});