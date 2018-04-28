const accordionItemEls = document.getElementsByClassName(`accordion__item`);

function expandDetail() {
  for (let accordionItem of accordionItemEls) {
    let accordionHeader = accordionItem.firstElementChild;
    accordionHeader.addEventListener(`click`, function () {
      let accordionDetails = this.nextElementSibling;
      let accordionIcon = this.lastElementChild;
      accordionIcon.firstElementChild.classList.toggle(`change`);
      accordionIcon.lastElementChild.classList.toggle(`change`);
      if (accordionDetails.style.maxHeight) {
        accordionDetails.style.maxHeight = null;
      } else {
        accordionDetails.style.maxHeight = accordionDetails.scrollHeight + `px`;
      }
    })
  }
}

expandDetail();