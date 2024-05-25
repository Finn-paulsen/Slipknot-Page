document.getElementById('menu-icon').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Get all member profile buttons
const memberProfileButtons = document.querySelectorAll('.member-profile-button');

// Add click event listener to each button
memberProfileButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the member ID from the data-member-id attribute of the parent card
    const memberId = button.closest('.member-card').dataset.memberId;

    // Redirect to the corresponding member profile page using the member ID
    window.location.href = `member-profile.php?id=${memberId}`;
  });
});
