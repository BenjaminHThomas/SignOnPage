const passwordInputs = document.querySelectorAll('input[type="password"]');

function matchPassword(){
    let pw1 = passwordInputs[0].value;
    let pw2 = passwordInputs[1].value;
    let errSpans = document.getElementsByClassName("error");
    if (pw1 !== pw2) {
        for (let i = 0; i < errSpans.length; i++) {
          errSpans[i].innerHTML = "**Passwords do not match";
          const spanHeight = errSpans[i].offsetHeight;
          passwordInputs[i].style.marginBottom = `calc(1rem - ${spanHeight}px)`;
          passwordInputs[i].style.borderColor = "red";
        }
      } else {
        for (let i = 0; i < errSpans.length; i++) {
          errSpans[i].innerHTML = "";
          passwordInputs[i].style.marginBottom = "1rem";
          passwordInputs[i].style.borderColor = "lightgray";
        }
      }
}

passwordInputs.forEach(input => {
    input.addEventListener('input', () => {
      matchPassword();
    });
  });