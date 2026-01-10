const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    console.error("Speech Recognition API is not supported in this browser.");
} else {
    console.log("Speech Recognition API is available.");

    const recognition = new SpeechRecognition();
    recognition.continuous = false; // Stop automatically after speech input
    recognition.interimResults = true; // Allow real-time text update
    recognition.lang = "en-US";

    const txtMessage = document.getElementById("TxtMessage");
    const startVoiceButton = document.getElementById("startVoice");

    recognition.onstart = () => {
        console.log("Voice recognition started...");
        txtMessage.placeholder = "Listening...";
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
    };

    recognition.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = 0; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript + " ";
            } else {
                interimTranscript += transcript + " ";
            }
        }

        txtMessage.value = finalTranscript || interimTranscript; // Show interim results live
    };

    recognition.onend = () => {
        console.log("Voice recognition stopped.");
        txtMessage.placeholder = "Type a message...";
    };

    startVoiceButton.addEventListener("click", () => {
        recognition.start();
    });
}
//////////////////////////////////////////////////////////////////STYLES CSS DARK AND LIGHT MODE//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const toggleButton = document.querySelector('.dark-light');
const colors = document.querySelectorAll('.color');

colors.forEach(color => {
  color.addEventListener('click', (e) => {
    colors.forEach(c => c.classList.remove('selected'));
    const theme = color.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    color.classList.add('selected');
  });
});

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');  
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////ADD DIV TOGGLE///////////
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add");
    const backButton = document.querySelector(".go-back");  // Button to go back to recent chats
    const recentsArea = document.querySelector(".msg-detail");
    const registeredUsers = document.querySelector(".registeredusers");

    // When the 'Add' button is clicked, show registered users and hide recent chats
    addButton.addEventListener("click", function () {
        recentsArea.style.display = "none"; 
        registeredUsers.style.display = "flex"; // Use flex to match registered-users layout
    });

    // When the 'Go Back' button is clicked, show recent chats and hide registered users
    backButton.addEventListener("click", function () {
        registeredUsers.style.display = "none";
        recentsArea.style.display = "block";  // Show recent chats
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////Settings Toggle////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const settingsIcon = document.getElementById("settings-icon");
    const settingsMenu = document.getElementById("settings-menu");

    // Toggle dropdown visibility
    settingsIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents closing when clicking the icon
        settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!settingsIcon.contains(event.target) && !settingsMenu.contains(event.target)) {
            Menu.style.display = "none";
        }
    });
});

// Logout function (modify as needed)
function logout() {
    alert("Logging out..."); // Replace with actual logout logic
}
