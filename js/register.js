document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email_field').value;
      const password = document.getElementById('password_field').value;
      
      try {
        const response = await fetch('https://api.twinql.ai/register', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: "HACKER",
            email: email,
            password: password
          })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          alert('Registration successful!');
          registerForm.reset();
        } else {
          alert('Registration failed: ' + (data.message || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    });
  });