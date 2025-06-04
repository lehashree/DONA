const paymentMode = document.getElementById('paymentMode');
const upiQR = document.getElementById('upiQR');
const bankDetails = document.getElementById('bankDetails');

// Show/hide UPI or Bank info based on payment mode selection
paymentMode.addEventListener('change', () => {
  upiQR.style.display = 'none';
  bankDetails.style.display = 'none';

  if (paymentMode.value === 'UPI') {
    upiQR.style.display = 'block';
  } else if (paymentMode.value === 'Bank') {
    bankDetails.style.display = 'block';
  }
});

// Reset form and hide payment info
function resetForm() {
  document.getElementById("donationForm").reset();
  upiQR.style.display = 'none';
  bankDetails.style.display = 'none';
}

// Form submission
document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  alert("Thank you for your donation!");
  this.reset(); // Clear form
  upiQR.style.display = 'none';
  bankDetails.style.display = 'none';
});


