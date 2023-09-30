let name = document.getElementById("name");
let password = document.getElementById("password");
let form = document.getElementById( "form");
let errorEl = document.getElementById("error");

form.addEventListener("submit", (e)=>{
  let list = []
  if (name.value === "" || name.vale == null){
    list.push("Enter your name!")
  }
  if (password.value.length <= 8){
    list.push("password must have more than 8-charactors.")
  }
  if (password.value.length >= 12){
    list.push("password must not exceed more than 12-charactors!")
  }
  if (password.value === "password"){
    list.push("password should not be your name!")
  }
  if (list.length > 0){
    e.preventDefault()
    errorEl.innerHTML = list.join(", ")
  }

})