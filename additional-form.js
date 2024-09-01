// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginButtons = document.querySelectorAll("#login, .login a");
    const signupButtons = document.querySelectorAll("#signup, .sign-in a");

    loginButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "login.html"; // Change to your login page URL
        });
    });

    signupButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "signup.html"; // Change to your signup page URL
        });
    });
});


//

document.addEventListener('DOMContentLoaded', function() {
    const sportSelect = document.getElementById('sport');
    const otherSportContainer = document.getElementById('otherSportContainer');
    const allergyYes = document.getElementById('allergicYes');
    const allergyNo = document.getElementById('allergicNo');
    const allergyDetailContainer = document.getElementById('allergyDetailContainer');
    
    // Function to show or hide allergy detail based on selection
    function toggleAllergyDetail() {
        if (allergyYes.checked) {
            allergyDetailContainer.style.display = 'block';
        } else {
            allergyDetailContainer.style.display = 'none';
        }
    }
    
    // Function to show or hide other sport input based on selection
    function toggleOtherSport() {
        if (sportSelect.value === 'Other') {
            otherSportContainer.style.display = 'block';
        } else {
            otherSportContainer.style.display = 'none';
        }
    }
    
    // Add event listeners to select elements
    sportSelect.addEventListener('change', toggleOtherSport);
    allergyYes.addEventListener('change', toggleAllergyDetail);
    allergyNo.addEventListener('change', toggleAllergyDetail);
    
    // Initial checks
    toggleOtherSport();
    toggleAllergyDetail();
});


//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you would usually handle form data and submission to a server
        // For this example, we'll just redirect to another page

        // Replace 'additional-page.html' with the URL of the page you want to show after signing up
        window.location.href = 'additional-form.html';
    });
});
