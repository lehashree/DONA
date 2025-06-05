document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("donation-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
    alert("Form submitted successfully!");
  });
});
