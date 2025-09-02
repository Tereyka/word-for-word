document.addEventListener('DOMContentLoaded', () => {
  fetch('partials/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    });
});
