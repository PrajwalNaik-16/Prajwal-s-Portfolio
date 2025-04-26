(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(res => res.json())
  .then(data => {
    if (data.result === 'success') {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(() => alert('Network error.'));
});
