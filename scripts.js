// scripts.js

// Simple rating system for reviews page
function submitReview() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById('comment').value;
  
    if (!rating) {
      alert("Please select a rating.");
      return;
    }
  
    const reviewList = document.getElementById('review-list');
    const reviewItem = document.createElement('li');
    reviewItem.textContent = `Rating: ${rating.value} - ${comment}`;
    reviewList.appendChild(reviewItem);
  
    document.getElementById('review-form').reset();
  }
  