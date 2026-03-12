// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

const items = document.querySelectorAll(".dropdown-item");
const button = document.querySelector(".dropdown-toggle");
const categoryInput = document.querySelector("#categoryInput");

items.forEach(item => {
  item.addEventListener("click", function(e){
    e.preventDefault();

    let value = this.dataset.value;
    button.innerText = value;
    categoryInput.value = value;
  });
});

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click" , () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  // console.log(taxInfo);
  for(info of taxInfo){
    if(info.style.display != "inline"){
    info.style.display = "inline";
    }else{
      info.style.display = "none";
    }
  }
});