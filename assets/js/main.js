// ------Navbar (help)-------
const helpElem = document.querySelector('#help');
const helpList = document.querySelector('.help');

helpElem.addEventListener('click', ()=>{
  helpElem.classList.toggle('close-help');

  onClickClose(helpElem, 'close-help', ' ', '', '');
  isVisible(helpElem);
});

// ------Navbar (choose city)-------
const choose = document.querySelector('.header-navbar__choose');
const navbarCity = choose.querySelector('.header-navbar__city');
const cityLabel = choose.querySelectorAll('.header-navbar__city-label');
const cityList = choose.querySelector('.header-navbar__city-list')
const icon = '<i class="fa-solid fa-chevron-down"></i>';
// Toggle menu
navbarCity.addEventListener('click', () => {
  if ('active' === choose.getAttribute('data-state')) {
    choose.setAttribute('data-state', '');
    cityList.style.display = 'none';
  } else {
    choose.setAttribute('data-state', 'active');
    cityList.style.display = 'flex';
  }

  onClickClose(choose, '', '', cityList, 'none');
  isVisible(choose);
});

// Close when click to option
for (let i = 0; i < cityLabel.length; i++) {
  cityLabel[i].addEventListener('click', (e) => {
    navbarCity.innerHTML = e.target.textContent + icon;
    choose.setAttribute('data-state', '');
    cityList.style.display = 'none';
  });
}

// ------func when we dont ckick on the HELP & CHOOSE-CITY-------

function onClickClose(elem, addClass, dataState, children, displayStyle) { // вызвать в момент показа окна, где elem - окно
  function outsideClickListener(event) {
      if (!elem.contains(event.target) && isVisible(elem)) {  // проверяем, что клик не по элементу и элемент виден
          if(addClass !== ''){
            elem.classList.add(addClass); //скрыть
          }
          if (dataState !== ' ' & children !== '' & displayStyle !== ''){
            elem.setAttribute('data-state', dataState);
            children.style.display = displayStyle;
            document.removeEventListener('click', outsideClickListener);
          }
      }
  }
  document.addEventListener('click', outsideClickListener)
};

function isVisible(elem) { //открыто ли условное окно
 return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

// ------Services-------
const servicesList = document.getElementsByClassName('services__list');
const protectP = document.querySelector('.protect').querySelectorAll('p');
const protectP2 = document.querySelector('.protect2').querySelectorAll('p');

const arr = Array.from(protectP);
const arr2 = Array.from(protectP2);

Array.prototype.multiget = function(){
  var args = Array.apply(null, arguments);
  var result = [];
  for(var i = 0; i < args.length; i++){
      result.push(this[args[i]]);
  }

  return result;
};

for(let i = 0; i < servicesList.length; i++){
  servicesList[i].addEventListener('click', ()=>{
    if (servicesList[i].classList.contains('list-open')){
      servicesList[i].classList.remove('list-open');
      servicesList[i].getElementsByTagName('i')[0].classList = 'fa-solid fa-angle-down';

      arr.multiget(8, 9, 10).forEach(el => {
        el.style.height = '40px'
      });
      arr2.multiget(8, 9, 10).forEach(el => {
        el.style.height = '40px'
      });
    } else {
        for (let i = 0; i < servicesList.length; i++){
          servicesList[i].classList.remove('list-open');
          servicesList[i].getElementsByTagName('i')[0].classList = 'fa-solid fa-angle-down';

          arr.multiget(8, 9, 10).forEach(el => {
            el.style.height = '40px'
          });
          arr2.multiget(8, 9, 10).forEach(el => {
            el.style.height = '40px'
          });
        }
        servicesList[i].classList.add('list-open');
        servicesList[i].getElementsByTagName('i')[0].classList = 'fa-solid fa-angle-up';
        if (i == 0){
          protectP[8].style.height = '170px';
          protectP2[8].style.height = '170px';
        } else if (i == 1){
          protectP[9].style.height = '170px';
          protectP2[9].style.height = '170px';
        } else if (i == 2){
          protectP[10].style.height = '170px';
          protectP2[10].style.height = '170px';
        }
    }
  })
}


// ------FAQ-------
const question = document.getElementsByClassName('questions__question');
const arrow = document.getElementsByClassName('fa-solid fa-angle-down');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
      this.classList.toggle("active-question");
      let answer = this.nextElementSibling;
      if (answer.style.display === "flex") {
          answer.style.display = "none";
          question[i].querySelector('i').classList = 'fa-solid fa-angle-down';
      } else {
          answer.style.display = "flex";
          question[i].querySelector('i').classList = 'fa-solid fa-angle-up';
      };
  });
};


// ------INSURANCE-CASES-------

const casesItem = document.getElementsByClassName('cases__item')
const casesAnswer = document.querySelector('.cases-answer')
const casesAnswerItem = document.getElementsByClassName('cases-answer__item')

for (let i = 0; i < casesItem.length; i++) {
  casesItem[i].addEventListener('click', (e) => {

    if (casesItem[i].classList.contains('active') && casesAnswerItem[i].classList.contains('active')){
      casesItem[i].classList.remove('active');
      casesAnswerItem[i].classList.remove('active');
        } else {
          for(let i = 0; i < casesItem.length; i++){
            casesItem[i].classList.remove('active');
            casesAnswerItem[i].classList.remove('active');
          }
          casesItem[i].classList.add('active');
          casesAnswerItem[i].classList.add('active');
        };
  });
};

// ------CHOOSE REGION-------
const selectSingle = document.querySelector('.__select');
const selectSingleTitle = selectSingle.querySelector('.__select__title');
const selectSingleLabels = selectSingle.querySelectorAll('.__select__label');
const selectContent = selectSingle.querySelector('.__select__content')

// Toggle menu
selectSingleTitle.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    selectContent.style.display = 'none';
  } else {
    selectSingle.setAttribute('data-state', 'active');
    selectContent.style.display = 'flex';
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener('click', (e) => {
    selectSingleTitle.textContent = e.target.textContent;
    selectSingle.setAttribute('data-state', '');
    selectContent.style.display = 'none';
  });
}