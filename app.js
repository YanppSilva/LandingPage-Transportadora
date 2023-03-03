function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if (e.target.id == modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar');
      }
    })
  }
}

const btnModal1 = document.querySelector('#btn-modal-1');
btnModal1.addEventListener('click', () => iniciaModal('modal-1'));
