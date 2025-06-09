<!-- puter.js CDN -->
  <script src="https://js.puter.com/v2/"></script>
  <script>
    // System prompt for Smart Study Circle chatbot
   // Smart Study Circle Chatbot - Improved Implementation
document.addEventListener("DOMContentLoaded", function() {
    // System information for the chatbot
    const smartStudyInfo = {
        founder: "Everlyne Wanjiku",
        location: "Nairobi",
        mission: "To empower students with simple, peer-powered revision groups using WhatsApp",
        vision: "A future where no student revises alone—every learner has a study circle",
        products: {
            reviseGroups: "WhatsApp groups led by peer mentors for high school students",
            examSprints: "Live revision quizzes hosted in the group chat before exams"
        },
        team: [
            { name: "Everlyne Wanjiku", role: "Founder & product lead" },
            { name: "Boaz Maube", role: "Tech & Design" },
            { name: "June Kwamboka", role: "Operations & outreach" },
            { name: "Edmond Ochieng", role: "Head Peer" }
        ],
        features: ["Peer mentor system", "Timed quiz mode", "Collaborative learning"],
        values: ["Reliable", "Supportive", "Friendly"],
        userCount: "1,700+ Users So Far - Growing"
    };

    // Get DOM elements
    const chatBox = document.querySelector('.chatbot-box');
    const input = document.querySelector('.chatbot-input');
    const sendBtn = document.querySelector('.chatbot-send');
    const dotsElement = chatBox.querySelector('.chatbot-dots');
    
    // Enable the send button and input
    sendBtn.style.cursor = 'pointer';
    sendBtn.disabled = false;
    input.disabled = false;
    
    // Initially hide the typing indicator
    toggleTypingIndicator(false);
    
    // Function to show/hide typing indicator
    function toggleTypingIndicator(show) {
        if (dotsElement) {
            dotsElement.style.display = show ? 'flex' : 'none';
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    // Function to add chat bubbles
    function addBubble(text, side = "right") {
        const bubble = document.createElement("div");
        bubble.className = chatbot-bubble chatbot-bubble-${side};
        bubble.textContent = text;
        
        // Insert before the typing indicator
        if (dotsElement) {
            chatBox.insertBefore(bubble, dotsElement);
        } else {
            chatBox.appendChild(bubble);
        }
        
        // Scroll to bottom
        setTimeout(() => {
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 50);
    }
    
    // Enhanced keyword-based response system
    function getSmartResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();
        
        // Greetings
        if (msg.match(/(hi|hello|hey|good morning|good afternoon|good evening)/)) {
            return "Hello! I'm here to help you learn more about Smart Study Circle. What would you like to know?";
        }
        
        // Mission and Vision
        if (msg.includes('mission')) {
            return Our mission is: "${smartStudyInfo.mission}";
        }
        
        if (msg.includes('vision')) {
            return Our vision is: "${smartStudyInfo.vision}";
        }
        
        // Founder and founding
        if (msg.match(/(founder|founded|who started|who created)/)) {
            return Smart Study Circle was founded by ${smartStudyInfo.founder} in ${smartStudyInfo.location} to help students succeed together.;
        }
        
        // Products and services
        if (msg.match(/(product|service|what do you offer|what do you do)/)) {
            return We offer two main products:\n\n1. **Revise-groups**: ${smartStudyInfo.products.reviseGroups}\n\n2. **Exam sprints**: ${smartStudyInfo.products.examSprints};
        }
        
        if (msg.includes('revise') || msg.includes('group')) {
            return Our Revise-groups are ${smartStudyInfo.products.reviseGroups}. They create a supportive learning environment where students help each other succeed.;
        }
        
        if (msg.includes('exam') || msg.includes('sprint') || msg.includes('quiz')) {
            return Exam sprints are ${smartStudyInfo.products.examSprints}. These help students practice under time pressure and boost their confidence before exams.;
        }
        
        // Team information
        if (msg.includes('team') || msg.includes('who works')) {
            const teamList = smartStudyInfo.team.map(member => 
                • ${member.name} - ${member.role}
            ).join('\n');
            return Meet our amazing team:\n\n${teamList};
        }
        
        // Features
        if (msg.includes('feature') || msg.includes('how it works')) {
            return Our key features include:\n• ${smartStudyInfo.features.join('\n• ')}\n\nThese create a positive learning space that boosts memory recall and confidence.;
        }
        
        // Values
        if (msg.includes('value') || msg.includes('principle')) {
            return Our brand values are: ${smartStudyInfo.values.join(', ')}. These guide everything we do at Smart Study Circle.;
        }
        
        // How to join
        if (msg.match(/(join|sign up|register|how to start|get started)/)) {
            return "To join Smart Study Circle, simply fill in your name and number in the contact form below. We'll add you to the appropriate WhatsApp group based on your school and subjects!";
        }
        
        // Contact information
        if (msg.match(/(contact|reach|phone|email|whatsapp)/)) {
            return "You can contact us by:\n• Filling out the form below\n• Following our social media links in the footer\n• We'll get back to you quickly to help you join our study circles!";
        }
        
        // Pricing/cost
        if (msg.match(/(cost|price|fee|money|pay)/)) {
            return "Great question! Our study groups are designed to be accessible to all students. Please contact us through the form below for specific details about joining.";
        }
        
        // WhatsApp specific
        if (msg.includes('whatsapp')) {
            return "Yes! We use WhatsApp because it's accessible to most students in Kenya. Our peer mentors lead discussions and quizzes right in the group chat, making learning convenient and engaging.";
        }
        
        // Success stories
        if (msg.match(/(success|result|help|work|effective)/)) {
            return "Our students love Smart Study Circle! As Faith Mumo said: 'ReviseMate helped me feel less alone before my KCSEs. The group kept me on track!' We currently have 1,700+ users and growing!";
        }
        
        // Location/Kenya specific
        if (msg.match(/(kenya|nairobi|school|kcse|form)/)) {
            return "We're proudly based in Nairobi, Kenya, and we focus on helping Kenyan high school students, especially those preparing for KCSEs. Our peer mentors understand the local curriculum and challenges.";
        }
        
        // Goodbye
        if (msg.match(/(bye|goodbye|see you|thanks|thank you)/)) {
            return "Thank you for your interest in Smart Study Circle! Don't forget to fill out the form below to join our community. We're excited to help you succeed in your studies! 📚✨";
        }
        
        // Default response for unmatched queries
        return "I'd love to help you learn more about Smart Study Circle! You can ask me about:\n• Our mission and vision\n• Our products (Revise-groups & Exam sprints)\n• How to join\n• Our team\n• Success stories\n\nWhat interests you most?";
    }
    
    // Async function to handle bot responses
    async function botReply(userMsg) {
        // Show typing indicator
        toggleTypingIndicator(true);
        
        // Add a realistic delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        
        try {
            // Try to use Puter AI if available
            if (typeof puter !== 'undefined' && puter.ai && puter.ai.chat) {
                const systemPrompt = `You are a helpful assistant for Smart Study Circle, a Kenyan education startup founded by Everlyne Wanjiku in Nairobi. 

Key Information:
- Mission: To empower students with simple, peer-powered revision groups using WhatsApp
- Vision: A future where no student revises alone—every learner has a study circle
- Products: Revise-groups (WhatsApp groups led by peer mentors) and Exam sprints (live revision quizzes)
- Team: Everlyne Wanjiku (Founder), Boaz Maube (Tech & Design), June Kwamboka (Operations), Edmond Ochieng (Head Peer)
- Values: Reliable, Supportive, Friendly
- Current users: 1,700+ and growing

Answer questions based only on this information. Be helpful and encouraging. If you don't know something, suggest they contact us through the form below.`;

                const response = await puter.ai.chat({
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: userMsg }
                    ]
                });
                
                toggleTypingIndicator(false);
                const botResponse = response.content || response.message || response;
                addBubble(typeof botResponse === 'string' ? botResponse : getSmartResponse(userMsg), "left");
                return;
            }
        } catch (error) {
            console.log("AI service not available, using fallback responses");
        }
        
        // Hide typing indicator
        toggleTypingIndicator(false);
        
        // Use our enhanced keyword-based system
        const response = getSmartResponse(userMsg);
        addBubble(response, "left");
    }
    
    // Event listeners
    function handleSend() {
        const msg = input.value.trim();
        if (!msg) return;
        
        // Add user message
        addBubble(msg, "right");
        
        // Clear input
        input.value = "";
        
        // Get bot response
        botReply(msg);
    }
    
    // Send button click
    sendBtn.addEventListener("click", handleSend);
    
    // Enter key press
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    }); 
    
    // Focus input on page load
    input.focus();
    
    // Add a welcome message after a short delay
    setTimeout(() => {
        addBubble("Welcome to Smart Study Circle! 🎓 I'm here to answer any questions about our peer-powered revision groups. What would you like to know?", "left");
    }, 500);
});
  </script>