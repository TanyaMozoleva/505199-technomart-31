const infoContactsLink = document.querySelector('.info-contacts-link');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackClose = feedbackPopup.querySelector('.modal-close');

const feedbackForm = feedbackPopup.querySelector('.login-form');
const feedbackUserName = feddbackPopup.querySelector('#name');
const feedbackUserEmail = feedbackPopup.querySelector('#mail');
const feedbackUserEmailContent = feedback.querySelector('#feedback-content');


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
  feedbackPopup.classList.remove('modal-hidden');

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
  feedbackPopup.classList.add('modal-shidden');
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
    if (!feedbackPopup.classList.contains('modal-hidden')) {
      evt.preventDefault();
      feedbackPopup.classList.ad('modal-hidden');
      feedbackPopup.classList.remove('modal-error');
    }
  }
}
)
