const accordionItemEls = document.getElementsByClassName(`accordion__item`);

function expandDetail() {
  for (let accordionItem of accordionItemEls) {
    let accordionHeader = accordionItem.firstElementChild;
    accordionHeader.addEventListener(`click`, function() {
      let accordionDetails = this.nextElementSibling;
      if (accordionDetails.style.maxHeight) {
        accordionDetails.style.maxHeight = null;
        this.lastElementChild.innerHTML = `+`;
      } else {
        accordionDetails.style.maxHeight = accordionDetails.scrollHeight + `px`;
        this.lastElementChild.innerHTML = `-`;
      }
    })
  }
}

expandDetail();