/*-----------------------Feedback--------------------------- */

const infoContactsLink = document.querySelector('.info-contacts-button');

const feedbackPopup = document.getElementById('modal-feedback');
if (feedbackPopup) {


  const feedbackClose = feedbackPopup.querySelector('.modal-close');

  const feedbackForm = feedbackPopup.querySelector('.login-form');
  const feedbackUserName = feedbackPopup.querySelector('#name');
  const feedbackUserEmail = feedbackPopup.querySelector('#mail');
  const feedbackUserEmailContent = feedbackPopup.querySelector('#feedback-content');

  feedbackUserName.removeAttribute('required');
  feedbackUserEmail.removeAttribute('required');


  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem('username');
    storage = localStorage.getItem('useremail');
  } catch (err) {
    isStorageSupport = false;
  }

  infoContactsLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');

    if (storage) {
      feedbackUserName.value = storageUserName;
      feedbackUserEmail.value = storageEmail;
      feedbackUserEmailContent.focus();
    } else {
      feedbackUserName.focus();
    }
  });

  feedbackClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
    feedbackPopup.classList.remove('modal-error');
  });

  feedbackForm.addEventListener('submit', function(evt) {
    if (!feedbackUserName.value || !feedbackUserEmail.value || !feedbackUserEmailContent.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-error');
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add('modal-error');
    } else {
      localStorage.setItem('username', feedbackUserName.value);
      localStorage.setItem('useremail', feedbackUserEmail.value);
    }
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        feedbackPopup.classList.remove('modal-show');
        feedbackPopup.classList.remove('modal-error');
      }
    }
  });
}

/*---------------------------Map----------------------------*/

const mapLink = document.querySelector('.info-contacts-map-link');
const mapPopup = document.querySelector('.modal-map');

if (mapPopup) {
  const mapClose = mapPopup.querySelector('.modal-close');


  mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  mapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        mapPopup.classList.remove('modal-show');
      }
    }
  });
}
/*--------------------------Cart------------------------*/

const cartLinks = document.querySelectorAll('.product-option-link-buy');
const cartPopup = document.querySelector('.modal-cart');
const cartClose = cartPopup.querySelector('.modal-close');

cartLinks.forEach(function(element) {
  element.addEventListener('click', function(evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
  });
});

cartClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      cartPopup.classList.remove('modal-hidden');
    }
  }
});

/* Slider */

const slides = document.getElementsByClassName('slider-item');
const dots = document.getElementsByClassName('slider-dot-item');

let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active-dot', '' );
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active-dot';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


/* Services-menu-slider */

const deliveryLink = document.querySelector('.delivery-link');
const guaranteeLink = document.querySelector('.guarantee-link');
const creditLink = document.querySelector('.credit-link');

const slideDelivery = document.querySelector('.services-content-delivery');
const slideGuarantee = document.querySelector('.services-content-guarantee');
const slideCredit = document.querySelector('.services-content-credit');


deliveryLink.addEventListener('click', function(evt) {
  evt.preventDefault();

  deliveryLink.classList.add('services-details-current');
  guaranteeLink.classList.remove('services-details-current');
  creditLink.classList.remove('services-details-current');

  slideDelivery.classList.remove('services-content-hidden');
  slideGuarantee.classList.add('services-content-hidden');
  slideCredit.classList.add('services-content-hidden');
})


guaranteeLink.addEventListener('click', function(evt) {
  evt.preventDefault();

  guaranteeLink.classList.add('services-details-current');
  deliveryLink.classList.remove('services-details-current');
  creditLink.classList.remove('services-details-current');


  slideGuarantee.classList.remove('services-content-hidden');
  slideDelivery.classList.add('services-content-hidden');
  slideCredit.classList.add('services-content-hidden');
})


creditLink.addEventListener('click', function(evt) {
  evt.preventDefault();

  creditLink.classList.add('services-details-current');
  deliveryLink.classList.remove('services-details-current');
  guaranteeLink.classList.remove('services-details-current');

  slideCredit.classList.remove('services-content-hidden');
  slideDelivery.classList.add('services-content-hidden');
  slideGuarantee.classList.add('services-content-hidden');
})
