// create component parent div
const fundInq = document.createElement('div');

// create the sticky btn and modal component
fundInq.innerHTML = `
<img src="../img/rfo-icon.png" style="width: 200px;" class="ml-0 lazyload" alt=""  style="z-index: 5;" id="sticky">
  `;

//append component to host page
document.getElementById('fundInqBtnSet').appendChild(fundInq);
