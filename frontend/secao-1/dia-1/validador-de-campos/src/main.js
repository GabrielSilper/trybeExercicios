import './style.css';
import validator from 'validator';

const dropbox = document.querySelector('select');
const input = document.querySelector('input');
const hLog = document.querySelector('h3');

dropbox.addEventListener('change', () => {
  const { value } = dropbox;
  const opcao = dropbox.options[dropbox.selectedIndex].text;
  const { value: content } = input;
  const verify = {
    email: validator.isEmail(content),
    cpf: validator.isTaxID(content, 'pt-BR'),
    cep: validator.isPostalCode(content, 'BR'),
    data: validator.isDate(content, 'DD/MM/YYYY'),
    fone: validator.isMobilePhone(content, 'pt-BR'),
  };
  if (value === '') {
    hLog.innerText = '...';
  } else if (verify[value]) {
    hLog.innerText = `O campo digitado é um ${value} válido`;
  } else if (!verify[value]) {
    hLog.innerText = `O campo digitado não é um ${opcao} válido`;
  }
});
