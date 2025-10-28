document.addEventListener('click', (e) => {
  const t = e.target;

  // ====== 1) ВХОД ======
  if (t.closest('.signin_btn')) {
    const modal = document.querySelector('.signin_modal');
    if (modal) modal.style.display = 'block';
    return;
  }

  // ====== 2) РЕГИСТРАЦИЯ ======
  if (t.closest('.registration_btn')) {
    const modalReg = document.querySelector('.registration_modal');
    if (modalReg) modalReg.style.display = 'block';
    return;
  }

  // ====== 3) ПЕРЕКЛЮЧЕНИЕ: Вход → Регистрация ======
  if (t.closest('.form-bottom-btn') && t.closest('.signin_modal')) {
    const modalSignIn = document.querySelector('.signin_modal');
    const modalReg = document.querySelector('.registration_modal');
    modalSignIn.style.display = 'none';
    modalReg.style.display = 'block';
    return;
  }

  // ====== 4) ПЕРЕКЛЮЧЕНИЕ: Регистрация → Вход ======
  if (t.closest('.form-bottom-btn') && t.closest('.registration_modal')) {
    const modalSignIn = document.querySelector('.signin_modal');
    const modalReg = document.querySelector('.registration_modal');
    modalReg.style.display = 'none';
    modalSignIn.style.display = 'block';
    return;
  }

  // ====== 5) ЗАКРЫТИЕ ПО КЛИКУ НА ФОН ======
  const modalSignIn = document.querySelector('.signin_modal');
  const modalReg = document.querySelector('.registration_modal');
  const signinCloseBtn = document.querySelector('.signin_close_btn');
  const registrationCloseBtn = document.querySelector('.registration_close_btn');
  // const registrationFormBtn = document.querySelector('.registration-form-btn')

  // Если клик был по .signin_modal, а не по внутреннему блоку — закрыть
  if (t === modalSignIn || t === signinCloseBtn) {
    modalSignIn.style.display = 'none';
    return;
  }

  // Если клик был по .registration_modal, а не по внутреннему блоку — закрыть
  if (t === modalReg || t === registrationCloseBtn) {
    modalReg.style.display = 'none';
    return;
  }

  if (t.closest('.registration-form-btn')) {
    const form = document.querySelector('form');
    const email = document.getElementById('registration-email');
    const emailErr = document.querySelector('.email-error');
    const password = document.getElementById('registration-password');
    const passwordErr = document.querySelector('.password-error');
    const confirmPwd = document.getElementById('password-confirm');
    const confirmErr = document.querySelector('.password-confirm-error');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      email.classList.remove('invalid');
      emailErr.classList.remove('active');

      const emailValue = email.value.trim();

      if (!emailValue.includes('@')) {
        email.classList.add('invalid');
        emailErr.classList.add('active');
        return;
      }

      password.classList.remove('invalid');
      passwordErr.classList.remove('active');

      const passwordValue = password.value.trim();

      if (passwordValue.length < 8) {
        password.classList.add('invalid');
        passwordErr.classList.add('active');
        return;
      }

     confirmPwd.classList.remove('invalid');
     confirmErr.classList.remove('active');

    const confirmPwdValue = confirmPwd.value.trim();

     if (passwordValue !== confirmPwdValue) {
        confirmPwd.classList.add('invalid');
       confirmErr.classList.add('active');
        return;
      }
    })
  }
});