const accordionItemEls = document.getElementsByClassName(`accordion__item`);

function expandDetail() {
  for (let accordionItem of accordionItemEls) {
    let accordionHeader = accordionItem.firstElementChild;
    accordionHeader.addEventListener(`click`, function () {
      let accordionDetails = this.nextElementSibling;
      let accordionIcon = this.lastElementChild;
      if (accordionDetails.style.maxHeight) {
        accordionDetails.style.maxHeight = null;
        accordionIcon.firstElementChild.style.transform = `rotate(-90deg)`;
        accordionIcon.lastElementChild.style.transform = `rotate(-180deg)`;
      } else {
        accordionDetails.style.maxHeight = accordionDetails.scrollHeight + `px`;
        accordionIcon.firstElementChild.style.transform = `rotate(180deg)`;
        accordionIcon.lastElementChild.style.transform = `rotate(180deg)`;
      }
    })
  }
}

expandDetail();