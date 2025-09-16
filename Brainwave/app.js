// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Handle contact form
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    
    if (name && email && message) {
      formMessage.textContent = "Thank you for contacting us, " + name + "!";
      formMessage.style.color = "green";
      this.reset();
    } else {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    }
  });

  // -------- Slideshow --------
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }  

  const eventDate = new Date("Sep 15, 2025 10:00:00").getTime(); // set your event date here

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("timer").innerHTML = "🎉 The Event Has Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
// teachers
// Animation on scroll for teacher cards
const teacherCards = document.querySelectorAll('.teacher-card');

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;

  teacherCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards); // Run on page load too

// form
// Form submission
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const guardian = document.getElementById('guardianName').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    if (fullname && email && guardian) {
      formMessage.textContent = "✅ Registration successful! Thank you, " + fullname + ".";
      formMessage.style.color = "green";
      this.reset();
      document.getElementById('previewImage').style.display = "none"; // Hide preview after reset
    } else {
      formMessage.textContent = "❌ Please fill in all required fields.";
      formMessage.style.color = "red";
    }
  });
  
  // Passport preview
  document.getElementById('passport').addEventListener('change', function(event) {
    const preview = document.getElementById('previewImage');
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });
// subject selection
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const guardian = document.getElementById('guardianName').value.trim();
    const subject2 = document.getElementById('subject2').value.trim();
    const subject3 = document.getElementById('subject3').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    if (fullname && email && guardian && subject2 && subject3) {
      formMessage.textContent = "✅ Registration successful! Thank you, " + fullname + ".";
      formMessage.style.color = "green";
      this.reset();
      document.getElementById('previewImage').style.display = "none";
    } else {
      formMessage.textContent = "❌ Please fill in all required fields, including subjects.";
      formMessage.style.color = "red";
    }
  });
// chatbot
function toggleChat() {
    const chat = document.getElementById("chatContainer");
    chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
  }

  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    // Display user message
    addMessage(message, "user-message");

    // Bot reply
    setTimeout(() => {
      const reply = getBotReply(message);
      addMessage(reply, "bot-message");
    }, 600);

    input.value = "";
  }

  function addMessage(text, className) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
  }

  function getBotReply(userMessage) {
    const msg = userMessage.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! 👋 Welcome to our school website.";
    } else if (msg.includes("admission")) {
      return "Our admission is currently open. You can register online.";
    } else if (msg.includes("contact")) {
      return "Reach us at: 📞 080-123-4567 or ✉️ info@ourschool.com";
    } else if (msg.includes("thanks")) {
      return "You're welcome! 😊";
    } else if (msg.includes("jamb2026")) {
      return "Here is the link. http://127.0.0.1:5500/Brainwave/registeration.html";
    } else if(msg.includes("good morning")) {
      return "morning, how are You Doing!";
    } else if (msg.includes("am doing fine!")){
      return "That's Great. How can we Help You."
    } else {
      return "Sorry, I don’t understand that. Try asking about 'admission', 'contact', or 'hello'" ;
    }
  

  }