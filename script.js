document.addEventListener('DOMContentLoaded', () => {
    // Translation definitions
    const translations = {
        en: {
            title: 'Welcome to the AI Bot Generator Platform',
            subtitle: 'Create your customized AI bot easily and instantly!',
            home: 'Home',
            myBots: 'Dashboard',
            support: 'Support',
            pricing: 'Pricing',
            login: 'Login',
            signup: 'Sign Up',
            logout: 'Logout',
            botName: 'Bot Name:',
            chooseCategory: 'Choose Category:',
            categoryPlaceholder: 'Select a category',
            categories: {
                chatbot: 'Chatbot',
                social: 'Social Media Bot',
                trading: 'Trading Bot',
                analysis: 'Data Analysis Bot',
                automation: 'Automation Bot'
            },
            descriptionFeatures: 'Description & Features:',
            descriptionPlaceholder: 'Describe what you want your bot to do',
            generateBot: 'Generate Bot',
            botCreatedTitle: 'Bot Created Successfully!',
            botCreatedDesc: (bot) => `Your bot is ready and listed under \"My Bots\".`,
            createdBotName: 'Bot Name',
            createdBotCategory: 'Category',
            createdBotDescription: 'Description',
            signupTitle: 'Create Account',
            signupEmail: 'Email:',
            signupPassword: 'Password:',
            signupButton: 'Sign Up',
            signupSuccess: 'Account created successfully. Please login.',
            loginTitle: 'Login',
            loginEmail: 'Email:',
            loginPassword: 'Password:',
            loginButton: 'Login',
            loginError: 'Invalid email or password.',
            myBotsTitle: 'Dashboard',
            noBots: 'You have not created any bots yet.',
            notLoggedIn: 'You are not logged in.',
            pricingTitle: 'Subscription Plans',
            basicPlanTitle: 'Basic Plan',
            basicPlanDesc: 'Up to 5 bots. Suitable for individuals.',
            basicPlanPrice: '€10/month',
            proPlanTitle: 'Pro Plan',
            proPlanDesc: 'Up to 15 bots. Advanced features for growing teams.',
            proPlanPrice: '€25/month',
            enterprisePlanTitle: 'Enterprise Plan',
            enterprisePlanDesc: 'Unlimited bots. Custom solutions for enterprises.',
            enterprisePlanPrice: 'Contact us',
            supportTitle: 'Custom Support',
            supportIntro: 'If you need help, contact our support robot using the form below or send an email to',
            supportMessage: 'Your Message:',
            supportButton: 'Send Message',
            supportResponse: 'Thank you for your message. Our support robot will contact you soon via the provided email.'
        },
        lt: {
            title: 'Sveiki atvykę į AI Botų kūrimo platformą',
            subtitle: 'Sukurkite savo AI botą lengvai ir akimirksniu!',
            home: 'Pagrindinis',
            myBots: 'Valdymo skydelis',
            support: 'Pagalba',
            pricing: 'Planai',
            login: 'Prisijungti',
            signup: 'Registruotis',
            logout: 'Atsijungti',
            botName: 'Boto vardas:',
            chooseCategory: 'Pasirinkti kategoriją:',
            categoryPlaceholder: 'Pasirinkite kategoriją',
            categories: {
                chatbot: 'Pokalbių botas',
                social: 'Socialinių tinklų botas',
                trading: 'Prekybos botas',
                analysis: 'Duomenų analizės botas',
                automation: 'Automatizavimo botas'
            },
            descriptionFeatures: 'Aprašymas ir funkcijos:',
            descriptionPlaceholder: 'Aprašykite, ką norite, kad jūsų botas darytų',
            generateBot: 'Generuoti botą',
            botCreatedTitle: 'Botas sėkmingai sukurtas!',
            botCreatedDesc: (bot) => `Jūsų botas paruoštas ir įtrauktas į \"Mano botai\".`,
            createdBotName: 'Boto vardas',
            createdBotCategory: 'Kategorija',
            createdBotDescription: 'Aprašymas',
            signupTitle: 'Sukurti paskyrą',
            signupEmail: 'El. paštas:',
            signupPassword: 'Slaptažodis:',
            signupButton: 'Registruotis',
            signupSuccess: 'Paskyra sėkmingai sukurta. Prašome prisijungti.',
            loginTitle: 'Prisijungti',
            loginEmail: 'El. paštas:',
            loginPassword: 'Slaptažodis:',
            loginButton: 'Prisijungti',
            loginError: 'Neteisingas el. paštas arba slaptažodis.',
            myBotsTitle: 'Valdymo skydelis',
            noBots: 'Botų dar nesukūrėte.',
            notLoggedIn: 'Jūs neprisijungę.',
            pricingTitle: 'Prenumeratos planai',
            basicPlanTitle: 'Pagrindinis planas',
            basicPlanDesc: 'Iki 5 botų. Tinka individams.',
            basicPlanPrice: '€10/mėn',
            proPlanTitle: 'Pro planas',
            proPlanDesc: 'Iki 15 botų. Pažangios funkcijos augančioms komandoms.',
            proPlanPrice: '€25/mėn',
            enterprisePlanTitle: 'Verslo planas',
            enterprisePlanDesc: 'Neriboti botai. Individualūs sprendimai verslui.',
            enterprisePlanPrice: 'Susisiekite su mumis',
            supportTitle: 'Individuali pagalba',
            supportIntro: 'Jei jums reikia pagalbos, susisiekite su mūsų pagalbos robotu naudodami žemiau esančią formą arba siųskite el. laišką adresu',
            supportMessage: 'Jūsų žinutė:',
            supportButton: 'Siųsti žinutę',
            supportResponse: 'Ačiū už jūsų žinutę. Mūsų pagalbos robotas netrukus su jumis susisieks nurodytu el. paštu.'
        }
        ,
        es: {
            title: 'Bienvenido a la plataforma de generación de bots AI',
            subtitle: '¡Crea tu bot AI personalizado fácil y al instante!',
            home: 'Inicio',
            myBots: 'Panel de control',
            support: 'Soporte',
            pricing: 'Planes',
            login: 'Iniciar sesión',
            signup: 'Registrarse',
            logout: 'Cerrar sesión',
            botName: 'Nombre del bot:',
            chooseCategory: 'Elegir categoría:',
            categoryPlaceholder: 'Selecciona una categoría',
            categories: {
                chatbot: 'Chatbot',
                social: 'Bot de redes sociales',
                trading: 'Bot de trading',
                analysis: 'Bot de análisis de datos',
                automation: 'Bot de automatización'
            },
            descriptionFeatures: 'Descripción y funciones:',
            descriptionPlaceholder: 'Describe lo que quieres que haga tu bot',
            generateBot: 'Generar bot',
            botCreatedTitle: '¡Bot creado con éxito!',
            botCreatedDesc: (bot) => `Tu bot está listo y aparece en \"Mis bots\".`,
            createdBotName: 'Nombre del bot',
            createdBotCategory: 'Categoría',
            createdBotDescription: 'Descripción',
            signupTitle: 'Crear cuenta',
            signupEmail: 'Correo electrónico:',
            signupPassword: 'Contraseña:',
            signupButton: 'Registrarse',
            signupSuccess: 'Cuenta creada con éxito. Por favor inicia sesión.',
            loginTitle: 'Iniciar sesión',
            loginEmail: 'Correo electrónico:',
            loginPassword: 'Contraseña:',
            loginButton: 'Iniciar sesión',
            loginError: 'Correo electrónico o contraseña inválidos.',
            myBotsTitle: 'Panel de control',
            noBots: 'No has creado bots todavía.',
            notLoggedIn: 'No has iniciado sesión.',
            pricingTitle: 'Planes de suscripción',
            basicPlanTitle: 'Plan Básico',
            basicPlanDesc: 'Hasta 5 bots. Adecuado para individuos.',
            basicPlanPrice: '€10/mes',
            proPlanTitle: 'Plan Pro',
            proPlanDesc: 'Hasta 15 bots. Características avanzadas para equipos en crecimiento.',
            proPlanPrice: '€25/mes',
            enterprisePlanTitle: 'Plan Empresarial',
            enterprisePlanDesc: 'Bots ilimitados. Soluciones personalizadas para empresas.',
            enterprisePlanPrice: 'Contáctanos',
            supportTitle: 'Soporte personalizado',
            supportIntro: 'Si necesitas ayuda, contacta con nuestro robot de soporte usando el formulario abajo o envía un correo a',
            supportMessage: 'Tu mensaje:',
            supportButton: 'Enviar mensaje',
            supportResponse: 'Gracias por tu mensaje. Nuestro robot de soporte se pondrá en contacto pronto usando el correo proporcionado.'
        }
    };

    // Function to apply translations based on selected language
    function applyTranslations(lang) {
        const t = translations[lang] || translations.en;
        // Header
        const headerTitle = document.querySelector('header h1');
        if (headerTitle) headerTitle.textContent = t.title;
        const headerSub = document.querySelector('header p');
        if (headerSub) headerSub.textContent = t.subtitle;
        // Navigation
        navHome.textContent = t.home;
        navMyBots.textContent = t.myBots;
        navSupport.textContent = t.support;
        if (navPricing) navPricing.textContent = t.pricing;
        navLogin.textContent = t.login;
        navSignup.textContent = t.signup;
        navLogout.textContent = t.logout;
        // Generator labels
        const botNameLabel = document.querySelector('#generator-section label[for="bot-name"]');
        if (botNameLabel) botNameLabel.textContent = t.botName;
        const botCategoryLabel = document.querySelector('#generator-section label[for="bot-category"]');
        if (botCategoryLabel) botCategoryLabel.textContent = t.chooseCategory;
        const botDescriptionLabel = document.querySelector('#generator-section label[for="bot-description"]');
        if (botDescriptionLabel) botDescriptionLabel.textContent = t.descriptionFeatures;
        const botNameInput = document.getElementById('bot-name');
        if (botNameInput) botNameInput.placeholder = t.botName.replace(/:$/, '');
        const botCategorySelect = document.getElementById('bot-category');
        if (botCategorySelect) {
            // First option is placeholder
            const opts = botCategorySelect.options;
            if (opts.length > 0) opts[0].textContent = t.categoryPlaceholder;
            // Update categories labels
            for (let i = 1; i < opts.length; i++) {
                const val = opts[i].value;
                opts[i].textContent = t.categories[val] || opts[i].textContent;
            }
        }
        const descriptionTextarea = document.getElementById('bot-description');
        if (descriptionTextarea) descriptionTextarea.placeholder = t.descriptionPlaceholder;
        const generateBtn = botForm ? botForm.querySelector('button') : null;
        if (generateBtn) generateBtn.textContent = t.generateBot;
        // Sign up section
        const signupHeader = document.querySelector('#signup-section h2');
        if (signupHeader) signupHeader.textContent = t.signupTitle;
        const signupEmailLabel = document.querySelector('#signup-section label[for="signup-email"]');
        if (signupEmailLabel) signupEmailLabel.textContent = t.signupEmail;
        const signupPasswordLabel = document.querySelector('#signup-section label[for="signup-password"]');
        if (signupPasswordLabel) signupPasswordLabel.textContent = t.signupPassword;
        const signupBtn = signupForm ? signupForm.querySelector('button') : null;
        if (signupBtn) signupBtn.textContent = t.signupButton;
        // Login section
        const loginHeader = document.querySelector('#login-section h2');
        if (loginHeader) loginHeader.textContent = t.loginTitle;
        const loginEmailLabel = document.querySelector('#login-section label[for="login-email"]');
        if (loginEmailLabel) loginEmailLabel.textContent = t.loginEmail;
        const loginPasswordLabel = document.querySelector('#login-section label[for="login-password"]');
        if (loginPasswordLabel) loginPasswordLabel.textContent = t.loginPassword;
        const loginBtn = loginForm ? loginForm.querySelector('button') : null;
        if (loginBtn) loginBtn.textContent = t.loginButton;
        // My Bots section
        const myBotsHeader = document.querySelector('#mybots-section h2');
        if (myBotsHeader) myBotsHeader.textContent = t.myBotsTitle;
        // Pricing section
        const pricingHeader = document.querySelector('#pricing-section h2');
        if (pricingHeader) pricingHeader.textContent = t.pricingTitle;
        const basicTitle = document.getElementById('basic-title');
        if (basicTitle) basicTitle.textContent = t.basicPlanTitle;
        const basicDesc = document.getElementById('basic-desc');
        if (basicDesc) basicDesc.textContent = t.basicPlanDesc;
        const basicPrice = document.getElementById('basic-price');
        if (basicPrice) basicPrice.textContent = t.basicPlanPrice;
        const proTitle = document.getElementById('pro-title');
        if (proTitle) proTitle.textContent = t.proPlanTitle;
        const proDesc = document.getElementById('pro-desc');
        if (proDesc) proDesc.textContent = t.proPlanDesc;
        const proPrice = document.getElementById('pro-price');
        if (proPrice) proPrice.textContent = t.proPlanPrice;
        const enterpriseTitle = document.getElementById('enterprise-title');
        if (enterpriseTitle) enterpriseTitle.textContent = t.enterprisePlanTitle;
        const enterpriseDesc = document.getElementById('enterprise-desc');
        if (enterpriseDesc) enterpriseDesc.textContent = t.enterprisePlanDesc;
        const enterprisePrice = document.getElementById('enterprise-price');
        if (enterprisePrice) enterprisePrice.textContent = t.enterprisePlanPrice;
        // Support section
        const supportHeader = document.querySelector('#support-section h2');
        if (supportHeader) supportHeader.textContent = t.supportTitle;
        const supportIntro = document.querySelector('#support-section p');
        if (supportIntro) supportIntro.innerHTML = `${t.supportIntro} <a href="mailto:emmari609@gmail.com">emmari609@gmail.com</a>.`;
        const supportMessageLabel = document.querySelector('#support-section label[for="support-message"]');
        if (supportMessageLabel) supportMessageLabel.textContent = t.supportMessage;
        const supportBtn = supportForm ? supportForm.querySelector('button') : null;
        if (supportBtn) supportBtn.textContent = t.supportButton;
    }

    // Navigation elements
    const navHome = document.getElementById('nav-home');
    const navMyBots = document.getElementById('nav-mybots');
    const navSupport = document.getElementById('nav-support');
    const navPricing = document.getElementById('nav-pricing');
    const navLogin = document.getElementById('nav-login');
    const navSignup = document.getElementById('nav-signup');
    const navLogout = document.getElementById('nav-logout');

    // Sections
    const generatorSection = document.getElementById('generator-section');
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');
    const myBotsSection = document.getElementById('mybots-section');
    const supportSection = document.getElementById('support-section');
    const pricingSection = document.getElementById('pricing-section');

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

    // Language selector
    const languageSelect = document.getElementById('language-select');

    // Apply initial language based on localStorage or default
    const savedLang = localStorage.getItem('language') || 'en';
    if (languageSelect) {
        languageSelect.value = savedLang;
        languageSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('language', selectedLang);
            applyTranslations(selectedLang);
        });
    }

    // Helper: show only specified section
    function showSection(section) {
        [generatorSection, signupSection, loginSection, myBotsSection, supportSection, pricingSection].forEach(sec => {
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

    // Apply translations after setting up initial view
    applyTranslations(savedLang);

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

    if (navPricing) {
        navPricing.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(pricingSection);
        });
    }

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
            // Show localized signup success message
            const currentLang = localStorage.getItem('language') || 'en';
            const t = translations[currentLang] || translations.en;
            signupMessage.textContent = t.signupSuccess;
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
                // Localized login error message
                const currentLang = localStorage.getItem('language') || 'en';
                const t = translations[currentLang] || translations.en;
                loginMessage.textContent = t.loginError;
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
            // Build localized response for bot creation
            const currentLang = localStorage.getItem('language') || 'en';
            const t = translations[currentLang] || translations.en;
            const responseHTML = `<h3>${t.botCreatedTitle}</h3>` +
                `<p><strong>${t.createdBotName}:</strong> ${bot.name}</p>` +
                `<p><strong>${t.createdBotCategory}:</strong> ${t.categories[bot.category] || bot.category}</p>` +
                `<p><strong>${t.createdBotDescription}:</strong> ${bot.description}</p>` +
                `<p>${t.botCreatedDesc(bot)}</p>`;
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
            const currentLang = localStorage.getItem('language') || 'en';
            const t = translations[currentLang] || translations.en;
            li.textContent = t.notLoggedIn;
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
            const currentLang = localStorage.getItem('language') || 'en';
            const t = translations[currentLang] || translations.en;
            li.textContent = t.noBots;
            botList.appendChild(li);
            return;
        }
        userBots.forEach(bot => {
            const li = document.createElement('li');
            // Localize category name
            const currentLang = localStorage.getItem('language') || 'en';
            const t = translations[currentLang] || translations.en;
            const categoryName = t.categories[bot.category] || bot.category;
            li.innerHTML = `<strong>${bot.name}</strong> (${categoryName})<br>${bot.description}`;
            botList.appendChild(li);
        });
    }

    // Support form submission
    if (supportForm) {
        supportForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const message = document.getElementById('support-message').value.trim();
            if (!message) return;
            // Simulated support response with localization
            const currentLang = localStorage.getItem('language') || 'en';
            const t = translations[currentLang] || translations.en;
            supportResponse.innerHTML = `<p>${t.supportResponse}</p>`;
            supportResponse.classList.remove('hidden');
            supportForm.reset();
        });
    }
});