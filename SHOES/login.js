<script>
    // JavaScript for Login Toggle
    document.addEventListener('DOMContentLoaded', function() {
      const loginLink = document.getElementById('loginLink');
      const loginContainer = document.getElementById('loginContainer');

      loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
          loginContainer.style.display = 'block'
        } else {
          loginContainer.style.display = 'none'
        }
      } );
    
  </script>