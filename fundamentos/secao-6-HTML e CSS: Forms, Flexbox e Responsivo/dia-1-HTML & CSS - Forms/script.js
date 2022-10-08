const btnSubmit = document.querySelector("#btn-submit");
const checkAgreement = document.querySelector("#check-agreement");
btnSubmit.addEventListener("click", (event) => {
  if (checkAgreement.checked) {
    return;
  }
  alert('Só pode participar se concordar com a divulgação de imagens');
  event.preventDefault();
});


