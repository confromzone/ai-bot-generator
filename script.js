document.addEventListener('DOMContentLoaded', () => {
    // Navigation elements
    const navHome = document.getElementById('nav-home');
    const navMyBots = document.getElementById('nav-mybots');
    const navSupport = document.getElementById('nav-support');
    const navLogin = document.getElementById('nav-login');
    const navSignup = document.getElementById('nav-signup');
    const navLogout = document.getElementById('nav-logout');

    // Sections
    const generatorSection = document.getElementById('generator-section');
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');
    const myBotsSection = document.getElementById('mybots-section');
    const supportSection = document.getElementById('support-section');

    // Forms and messages
    const signupForm = document.getElementById('signup-form');
    const signupMessage = document.getElementById('signup-message');
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const botForm = document.getElementById('bot-form');
    const responseContainer = document.getElementById('response');
    const botList = document.getElementById('bot-list');
    const supportForm = document.getElementById('support-form');
    const supportResponse = document.getElementById('support-response');

    // Helper: show only specified section
    function showSection(section) {
        [generatorSection, signupSection, loginSection, myBotsSection, supportSection].forEach(sec => {
            if (sec) sec.classList.add('hidden');
        });
        if (section) section.classList.remove('hidden');
    }

    // Helper: update navigation visibility based on login state
    function updateNav() {
        const currentUser = localStorage.getItem('currentUser');
        const loggedIn = !!currentUser;
        navMyBots.classList.toggle('hidden', !loggedIn);
        navLogout.classList.toggle('hidden', !loggedIn);
        navLogin.classList.toggle('hidden', loggedIn);
        navSignup.classList.toggle('hidden', loggedIn);
    }

    // Load initial view
    updateNav();
    if (localStorage.getItem('currentUser')) {
        showSection(generatorSection);
    } else {
        showSection(loginSection);
    }

    // Navigation handlers
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        if (localStorage.getItem('currentUser')) {
            showSection(generatorSection);
        } else {
            showSection(loginSection);
        }
    });

    navMyBots.addEventListener('click', (e) => {
        e.preventDefault();
        loadBots();
        showSection(myBotsSection);
    });

    navSupport.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(supportSection);
    });

    navLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(loginSection);
    });

    navSignup.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(signupSection);
    });

    navLogout.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        updateNav();
        showSection(loginSection);
    });

    // Sign-up form submission
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;
            let users = [];
            try {
                users = JSON.parse(localStorage.getItem('users') || '[]');
            } catch (err) {
                users = [];
            }
            if (users.some(u => u.email === email)) {
                signupMessage.textContent = 'An account with this email already exists.';
                return;
            }
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            signupMessage.textContent = 'Account created successfully. Please login.';
            signupForm.reset();
        });
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            let users = [];
            try {
                users = JSON.parse(localStorage.getItem('users') || '[]');
            } catch (err) {
                users = [];
            }
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem('currentUser', email);
                loginMessage.textContent = '';
                updateNav();
                showSection(generatorSection);
                loginForm.reset();
            } else {
                loginMessage.textContent = 'Invalid email or password.';
            }
        });
    }

    // Bot form submission
    if (botForm) {
        botForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const currentUser = localStorage.getItem('currentUser');
            if (!currentUser) {
                responseContainer.innerHTML = '<p>Please log in to generate a bot.</p>';
                responseContainer.classList.remove('hidden');
                return;
            }
            const botName = document.getElementById('bot-name').value.trim();
            const botCategory = document.getElementById('bot-category').value;
            const botDescription = document.getElementById('bot-description').value.trim();
            const bot = {
                name: botName,
                category: botCategory,
                description: botDescription,
                createdAt: new Date().toISOString()
            };
            // Save bot for current user
            let bots = {};
            try {
                bots = JSON.parse(localStorage.getItem('bots') || '{}');
            } catch (err) {
                bots = {};
            }
            if (!bots[currentUser]) {
                bots[currentUser] = [];
            }
            bots[currentUser].push(bot);
            localStorage.setItem('bots', JSON.stringify(bots));
            // Show success message
            const responseHTML = `<h3>Bot Created Successfully!</h3>` +
                `<p><strong>Bot Name:</strong> ${bot.name}</p>` +
                `<p><strong>Category:</strong> ${bot.category}</p>` +
                `<p><strong>Description:</strong> ${bot.description}</p>` +
                `<p>Your bot is ready and listed under "My Bots".</p>`;
            responseContainer.innerHTML = responseHTML;
            responseContainer.classList.remove('hidden');
            botForm.reset();
        });
    }

    // Load bots into My Bots section
    function loadBots() {
        const currentUser = localStorage.getItem('currentUser');
        botList.innerHTML = '';
        if (!currentUser) {
            const li = document.createElement('li');
            li.textContent = 'You are not logged in.';
            botList.appendChild(li);
            return;
        }
        let bots = {};
        try {
            bots = JSON.parse(localStorage.getItem('bots') || '{}');
        } catch (err) {
            bots = {};
        }
        const userBots = bots[currentUser] || [];
        if (userBots.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No bots created yet.';
            botList.appendChild(li);
            return;
        }
        userBots.forEach(bot => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${bot.name}</strong> (${bot.category})<br>${bot.description}`;
            botList.appendChild(li);
        });
    }

    // Support form submission
    if (supportForm) {
        supportForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const message = document.getElementById('support-message').value.trim();
            if (!message) return;
            // Simulated support response
            supportResponse.innerHTML = `<p>Thank you for your message. Our support robot will contact you soon via the provided email.</p>`;
            supportResponse.classList.remove('hidden');
            supportForm.reset();
        });
    }
});