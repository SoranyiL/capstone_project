const resourceForm = document.getElementById('resourceForm');
const feedbackForm = document.getElementById('feedbackForm');

let submittedResources = JSON.parse(localStorage.getItem('resources')) || [];
let submittedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];

resourceForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const newResource = {
    name: document.getElementById('name').value,
    category: document.getElementById('category').value,
    address: document.getElementById('address').value,
    hours: document.getElementById('hours').value
  };

  submittedResources.push(newResource);
  localStorage.setItem('resources', JSON.stringify(submittedResources));
  alert("Resource submitted successfully!");
  resourceForm.reset();
});

feedbackForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const feedback = {
    username: document.getElementById('username').value,
    message: document.getElementById('message').value
  };

  submittedFeedback.push(feedback);
  localStorage.setItem('feedback', JSON.stringify(submittedFeedback));
  alert("Thank you for your feedback!");
  feedbackForm.reset();
});
