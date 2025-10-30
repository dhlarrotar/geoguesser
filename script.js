document.addEventListener('DOMContentLoaded', () => {
            // --- I18N & TRANSLATIONS ---
            const translations = {
                en: {
                    title: "Geo-Guesser: World Tour",
                    welcomeTitle: "Geo-Guesser",
                    welcomeSubtitle: "Test your knowledge of world geography. Pan, zoom, and guess the country before the time runs out!",
                    welcomeButton: "Start Your Adventure",
                    mainTitle: "Geo-Guesser",
                    mainSubtitle: "Zoom and pan the map to find the country!",
                    findCountry: "Find this country:",
                    score: "SCORE",
                    question: "QUESTION",
                    time: "TIME",
                    resetView: "Reset View",
                    feedbackCorrect: "Correct! ⭐",
                    feedbackIncorrect: "Not Quite!",
                    feedbackTimeUp: "Time's Up! ⏰",
                    feedbackCorrectDetail: (name) => `That's ${name}!`,
                    feedbackIncorrectDetail: (name) => `You clicked on ${name}.`,
                    feedbackTimeUpDetail: (name) => `The correct answer was ${name}.`,
                    yourGuess: "Your Guess",
                    correctAnswer: "Correct Answer",
                    nextButton: "Next ➡️",
                    challengeTitle: "Choose Your Challenge",
                    challengeSubtitle: "Select a difficulty to begin your world tour!",
                    easy: "Easy",
                    medium: "Medium",
                    hard: "Hard",
                    gameOverTitle: "🏆 Game Over! 🏆",
                    gameOverMessageGood: "Good effort! Keep exploring the world. 🗺️",
                    gameOverMessageGreat: "Great job, world traveler! ✈️",
                    gameOverMessageWizard: "You're a geography wizard! 🌟",
                    playAgain: "🔁 Play Again",
                    shareScore: "Share Score",
                    footer: "© 2025 Geo-Guesser. All Rights Reserved.",
                    mapError: (msg) => `Could not load the world map. Please check your connection. <br><small>${msg}</small>`
                },
                es: {
                    title: "Geo-Guesser: Gira Mundial",
                    welcomeTitle: "Geo-Guesser",
                    welcomeSubtitle: "Pon a prueba tu conocimiento de geografía mundial. ¡Desplaza, haz zoom y adivina el país antes de que se acabe el tiempo!",
                    welcomeButton: "Comienza Tu Aventura",
                    mainTitle: "Geo-Guesser",
                    mainSubtitle: "¡Haz zoom y desplaza el mapa para encontrar el país!",
                    findCountry: "Encuentra este país:",
                    score: "PUNTAJE",
                    question: "PREGUNTA",
                    time: "TIEMPO",
                    resetView: "Reiniciar Vista",
                    feedbackCorrect: "¡Correcto! ⭐",
                    feedbackIncorrect: "¡No del todo!",
                    feedbackTimeUp: "¡Se acabó el tiempo! ⏰",
                    feedbackCorrectDetail: (name) => `¡Eso es ${name}!`,
                    feedbackIncorrectDetail: (name) => `Hiciste clic en ${name}.`,
                    feedbackTimeUpDetail: (name) => `La respuesta correcta era ${name}.`,
                    yourGuess: "Tu Intento",
                    correctAnswer: "Respuesta Correcta",
                    nextButton: "Siguiente ➡️",
                    challengeTitle: "Elige Tu Desafío",
                    challengeSubtitle: "¡Selecciona una dificultad para comenzar tu gira mundial!",
                    easy: "Fácil",
                    medium: "Medio",
                    hard: "Difícil",
                    gameOverTitle: "🏆 ¡Fin del Juego! 🏆",
                    gameOverMessageGood: "¡Buen esfuerzo! Sigue explorando el mundo. 🗺️",
                    gameOverMessageGreat: "¡Gran trabajo, viajero del mundo! ✈️",
                    gameOverMessageWizard: "¡Eres un mago de la geografía! 🌟",
                    playAgain: "🔁 Jugar de Nuevo",
                    shareScore: "Compartir Puntaje",
                    footer: "© 2025 Geo-Guesser. Todos los derechos reservados.",
                    mapError: (msg) => `No se pudo cargar el mapa mundial. Por favor revisa tu conexión. <br><small>${msg}</small>`
                },
                fr: {
                    title: "Geo-Guesser: Tour du Monde",
                    welcomeTitle: "Geo-Guesser",
                    welcomeSubtitle: "Testez vos connaissances en géographie mondiale. Zoomez, déplacez-vous et devinez le pays avant la fin du temps imparti !",
                    welcomeButton: "Commencez Votre Aventure",
                    mainTitle: "Geo-Guesser",
                    mainSubtitle: "Zoomez et déplacez la carte pour trouver le pays !",
                    findCountry: "Trouvez ce pays :",
                    score: "SCORE",
                    question: "QUESTION",
                    time: "TEMPS",
                    resetView: "Réinitialiser la Vue",
                    feedbackCorrect: "Correct ! ⭐",
                    feedbackIncorrect: "Pas tout à fait !",
                    feedbackTimeUp: "Temps écoulé ! ⏰",
                    feedbackCorrectDetail: (name) => `C'est ${name} !`,
                    feedbackIncorrectDetail: (name) => `Vous avez cliqué sur ${name}.`,
                    feedbackTimeUpDetail: (name) => `La bonne réponse était ${name}.`,
                    yourGuess: "Votre Essai",
                    correctAnswer: "Bonne Réponse",
                    nextButton: "Suivant ➡️",
                    challengeTitle: "Choisissez Votre Défi",
                    challengeSubtitle: "Sélectionnez une difficulté pour commencer votre tour du monde !",
                    easy: "Facile",
                    medium: "Moyen",
                    hard: "Difficile",
                    gameOverTitle: "🏆 Fin de la Partie ! 🏆",
                    gameOverMessageGood: "Bel effort ! Continuez à explorer le monde. 🗺️",
                    gameOverMessageGreat: "Bravo, voyageur du monde ! ✈️",
                    gameOverMessageWizard: "Vous êtes un sorcier de la géographie! 🌟",
                    playAgain: "🔁 Rejouer",
                    shareScore: "Partager le Score",
                    footer: "© 2025 Geo-Guesser. Tous droits réservés.",
                    mapError: (msg) => `Impossible de charger la carte du monde. Veuillez vérifier votre connexion. <br><small>${msg}</small>`
                }
            };
            let currentLang = 'en';

            function setLanguage(lang) {
                if (!translations[lang]) lang = 'en';
                currentLang = lang;
                document.documentElement.lang = lang;

                // Update all elements with data-i18n attribute
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) {
                        el.textContent = translations[lang][key];
                    }
                });

                // Update titles
                document.title = translations[lang].title;
                resetViewBtn.title = translations[lang].resetView;

                // Update language buttons style
                document.querySelectorAll('.lang-btn').forEach(btn => {
                    if (btn.dataset.lang === lang) {
                        btn.classList.add('opacity-100');
                        btn.classList.remove('opacity-70');
                         if (btn.closest('#welcome-screen')) {
                             btn.classList.add('border-b-2', 'border-white', 'pb-1');
                        } else {
                             btn.classList.add('text-indigo-600');
                             btn.classList.remove('text-gray-500');
                        }
                    } else {
                        btn.classList.remove('opacity-100', 'border-b-2', 'border-white', 'pb-1', 'text-indigo-600');
                        btn.classList.add('opacity-70');
                         if (!btn.closest('#welcome-screen')) {
                             btn.classList.add('text-gray-500');
                        }
                    }
                });
            }


            // --- DOM ELEMENTS ---
            const welcomeScreen = document.getElementById('welcome-screen');
            const startAdventureBtn = document.getElementById('start-adventure-btn');
            const mainContent = document.getElementById('main-content');
            const countryNameEl = document.getElementById('country-name');
            const countryFlagEl = document.getElementById('country-flag');
            const scoreEl = document.getElementById('score');
            const questionCounterEl = document.getElementById('question-counter');
            const timerEl = document.getElementById('timer');
            const mapContainer = document.getElementById('map-container');
            const mapParent = document.getElementById('map-parent');
            const loader = document.getElementById('loader');
            const feedbackModal = document.getElementById('feedback-modal');
            const feedbackTextEl = document.getElementById('feedback-text');
            const feedbackDetailsEl = document.getElementById('feedback-details');
            const countryShapeDisplay = document.getElementById('country-shape-display');
            const nextButton = document.getElementById('next-button');
            const startModal = document.getElementById('start-modal');
            const gameOverModal = document.getElementById('game-over-modal');
            const finalScoreEl = document.getElementById('final-score');
            const endGameMessageEl = document.getElementById('end-game-message');
            const playAgainButton = document.getElementById('play-again-button');
            const shareButton = document.getElementById('share-button');
            const zoomInBtn = document.getElementById('zoom-in-btn');
            const zoomOutBtn = document.getElementById('zoom-out-btn');
            const resetViewBtn = document.getElementById('reset-view-btn');
            const easyBtn = document.getElementById('easy-btn');
            const mediumBtn = document.getElementById('medium-btn');
            const hardBtn = document.getElementById('hard-btn');

            // --- COMPLETE COUNTRY DATABASE (with translations) ---
            const fullCountryList = [
                {code: "AF", name: "Afghanistan", name_es: "Afganistán", name_fr: "Afghanistan"},
                {code: "AO", name: "Angola", name_es: "Angola", name_fr: "Angola"},
                {code: "AL", name: "Albania", name_es: "Albania", name_fr: "Albanie"},
                {code: "AE", name: "United Arab Emirates", name_es: "Emiratos Árabes Unidos", name_fr: "Émirats arabes unis"},
                {code: "AR", name: "Argentina", name_es: "Argentina", name_fr: "Argentine"},
                {code: "AM", name: "Armenia", name_es: "Armenia", name_fr: "Arménie"},
                {code: "AU", name: "Australia", name_es: "Australia", name_fr: "Australie"},
                {code: "AT", name: "Austria", name_es: "Austria", name_fr: "Autriche"},
                {code: "AZ", name: "Azerbaijan", name_es: "Azerbaiyán", name_fr: "Azerbaïdjan"},
                {code: "BI", name: "Burundi", name_es: "Burundi", name_fr: "Burundi"},
                {code: "BE", name: "Belgium", name_es: "Bélgica", name_fr: "Belgique"},
                {code: "BJ", name: "Benin", name_es: "Benín", name_fr: "Bénin"},
                {code: "BF", name: "Burkina Faso", name_es: "Burkina Faso", name_fr: "Burkina Faso"},
                {code: "BD", name: "Bangladesh", name_es: "Bangladés", name_fr: "Bangladesh"},
                {code: "BG", name: "Bulgaria", name_es: "Bulgaria", name_fr: "Bulgarie"},
                {code: "BA", name: "Bosnia and Herzegovina", name_es: "Bosnia y Herzegovina", name_fr: "Bosnie-Herzégovine"},
                {code: "BY", name: "Belarus", name_es: "Bielorrusia", name_fr: "Biélorussie"},
                {code: "BZ", name: "Belize", name_es: "Belice", name_fr: "Belize"},
                {code: "BO", name: "Bolivia", name_es: "Bolivia", name_fr: "Bolivie"},
                {code: "BR", name: "Brazil", name_es: "Brasil", name_fr: "Brésil"},
                {code: "BN", name: "Brunei Darussalam", name_es: "Brunéi", name_fr: "Brunei"},
                {code: "BT", name: "Bhutan", name_es: "Bután", name_fr: "Bhoutan"},
                {code: "BW", name: "Botswana", name_es: "Botsuana", name_fr: "Botswana"},
                {code: "CF", name: "Central African Republic", name_es: "República Centroafricana", name_fr: "République centrafricaine"},
                {code: "CA", name: "Canada", name_es: "Canadá", name_fr: "Canada"},
                {code: "CH", name: "Switzerland", name_es: "Suiza", name_fr: "Suisse"},
                {code: "CL", name: "Chile", name_es: "Chile", name_fr: "Chili"},
                {code: "CN", name: "China", name_es: "China", name_fr: "Chine"},
                {code: "CI", name: "Ivory Coast", name_es: "Costa de Marfil", name_fr: "Côte d'Ivoire"},
                {code: "CM", name: "Cameroon", name_es: "Camerún", name_fr: "Cameroun"},
                {code: "CD", name: "DR Congo", name_es: "RD del Congo", name_fr: "RD du Congo"},
                {code: "CG", name: "Republic of the Congo", name_es: "República del Congo", name_fr: "République du Congo"},
                {code: "CO", name: "Colombia", name_es: "Colombia", name_fr: "Colombie"},
                {code: "CR", name: "Costa Rica", name_es: "Costa Rica", name_fr: "Costa Rica"},
                {code: "CU", name: "Cuba", name_es: "Cuba", name_fr: "Cuba"},
                {code: "CY", name: "Cyprus", name_es: "Chipre", name_fr: "Chypre"},
                {code: "CZ", name: "Czech Republic", name_es: "República Checa", name_fr: "République tchèque"},
                {code: "DE", name: "Germany", name_es: "Alemania", name_fr: "Allemagne"},
                {code: "DJ", name: "Djibouti", name_es: "Yibuti", name_fr: "Djibouti"},
                {code: "DK", name: "Denmark", name_es: "Dinamarca", name_fr: "Danemark"},
                {code: "DO", name: "Dominican Republic", name_es: "República Dominicana", name_fr: "République dominicaine"},
                {code: "DZ", name: "Algeria", name_es: "Argelia", name_fr: "Algérie"},
                {code: "EC", name: "Ecuador", name_es: "Ecuador", name_fr: "Équateur"},
                {code: "EG", name: "Egypt", name_es: "Egipto", name_fr: "Égypte"},
                {code: "ER", name: "Eritrea", name_es: "Eritrea", name_fr: "Érythrée"},
                {code: "EE", name: "Estonia", name_es: "Estonia", name_fr: "Estonie"},
                {code: "ET", name: "Ethiopia", name_es: "Etiopía", name_fr: "Éthiopie"},
                {code: "FI", name: "Finland", name_es: "Finlandia", name_fr: "Finlande"},
                {code: "FJ", name: "Fiji", name_es: "Fiyi", name_fr: "Fidji"},
                {code: "GA", name: "Gabon", name_es: "Gabón", name_fr: "Gabon"},
                {code: "GB", name: "United Kingdom", name_es: "Reino Unido", name_fr: "Royaume-Uni"},
                {code: "GE", name: "Georgia", name_es: "Georgia", name_fr: "Géorgie"},
                {code: "GH", name: "Ghana", name_es: "Ghana", name_fr: "Ghana"},
                {code: "GN", name: "Guinea", name_es: "Guinea", name_fr: "Guinée"},
                {code: "GM", name: "Gambia", name_es: "Gambia", name_fr: "Gambie"},
                {code: "GW", name: "Guinea-Bissau", name_es: "Guinea-Bisáu", name_fr: "Guinée-Bissau"},
                {code: "GQ", name: "Equatorial Guinea", name_es: "Guinea Ecuatorial", name_fr: "Guinée équatoriale"},
                {code: "GR", name: "Greece", name_es: "Grecia", name_fr: "Grèce"},
                {code: "GL", name: "Greenland", name_es: "Groenlandia", name_fr: "Groenland"},
                {code: "GT", name: "Guatemala", name_es: "Guatemala", name_fr: "Guatemala"},
                {code: "GY", name: "Guyana", name_es: "Guyana", name_fr: "Guyana"},
                {code: "HN", name: "Honduras", name_es: "Honduras", name_fr: "Honduras"},
                {code: "HR", name: "Croatia", name_es: "Croacia", name_fr: "Croatie"},
                {code: "HT", name: "Haiti", name_es: "Haití", name_fr: "Haïti"},
                {code: "HU", name: "Hungary", name_es: "Hungría", name_fr: "Hongrie"},
                {code: "ID", name: "Indonesia", name_es: "Indonesia", name_fr: "Indonésie"},
                {code: "IN", name: "India", name_es: "India", name_fr: "Inde"},
                {code: "IE", name: "Ireland", name_es: "Irlanda", name_fr: "Irlande"},
                {code: "IR", name: "Iran", name_es: "Irán", name_fr: "Iran"},
                {code: "IQ", name: "Iraq", name_es: "Irak", name_fr: "Irak"},
                {code: "IS", name: "Iceland", name_es: "Islandia", name_fr: "Islande"},
                {code: "IL", name: "Israel", name_es: "Israel", name_fr: "Israël"},
                {code: "IT", name: "Italy", name_es: "Italia", name_fr: "Italie"},
                {code: "JM", name: "Jamaica", name_es: "Jamaica", name_fr: "Jamaïque"},
                {code: "JO", name: "Jordan", name_es: "Jordania", name_fr: "Jordanie"},
                {code: "JP", name: "Japan", name_es: "Japón", name_fr: "Japon"},
                {code: "KZ", name: "Kazakhstan", name_es: "Kazajistán", name_fr: "Kazakhstan"},
                {code: "KE", name: "Kenya", name_es: "Kenia", name_fr: "Kenya"},
                {code: "KG", name: "Kyrgyzstan", name_es: "Kirguistán", name_fr: "Kirghizistan"},
                {code: "KH", name: "Cambodia", name_es: "Camboya", name_fr: "Cambodge"},
                {code: "KR", name: "South Korea", name_es: "Corea del Sur", name_fr: "Corée du Sud"},
                {code: "XK", name: "Kosovo", name_es: "Kosovo", name_fr: "Kosovo"},
                {code: "KW", name: "Kuwait", name_es: "Kuwait", name_fr: "Koweït"},
                {code: "LA", name: "Lao", name_es: "Laos", name_fr: "Laos"},
                {code: "LB", name: "Lebanon", name_es: "Líbano", name_fr: "Liban"},
                {code: "LR", name: "Liberia", name_es: "Liberia", name_fr: "Libéria"},
                {code: "LY", name: "Libya", name_es: "Libia", name_fr: "Libye"},
                {code: "LK", name: "Sri Lanka", name_es: "Sri Lanka", name_fr: "Sri Lanka"},
                {code: "LS", name: "Lesotho", name_es: "Lesoto", name_fr: "Lesotho"},
                {code: "LT", name: "Lithuania", name_es: "Lituania", name_fr: "Lituanie"},
                {code: "LU", name: "Luxembourg", name_es: "Luxemburgo", name_fr: "Luxembourg"},
                {code: "LV", name: "Latvia", name_es: "Letonia", name_fr: "Lettonie"},
                {code: "MA", name: "Morocco", name_es: "Marruecos", name_fr: "Maroc"},
                {code: "MD", name: "Moldova", name_es: "Moldavia", name_fr: "Moldavie"},
                {code: "MG", name: "Madagascar", name_es: "Madagascar", name_fr: "Madagascar"},
                {code: "MX", name: "Mexico", name_es: "México", name_fr: "Mexique"},
                {code: "MK", name: "North Macedonia", name_es: "Macedonia del Norte", name_fr: "Macédoine du Nord"},
                {code: "ML", name: "Mali", name_es: "Malí", name_fr: "Mali"},
                {code: "MM", name: "Myanmar", name_es: "Myanmar", name_fr: "Myanmar"},
                {code: "ME", name: "Montenegro", name_es: "Montenegro", name_fr: "Monténégro"},
                {code: "MN", name: "Mongolia", name_es: "Mongolia", name_fr: "Mongolie"},
                {code: "MZ", name: "Mozambique", name_es: "Mozambique", name_fr: "Mozambique"},
                {code: "MR", name: "Mauritania", name_es: "Mauritania", name_fr: "Mauritanie"},
                {code: "MW", name: "Malawi", name_es: "Malaui", name_fr: "Malawi"},
                {code: "MY", name: "Malaysia", name_es: "Malasia", name_fr: "Malaisie"},
                {code: "NA", name: "Namibia", name_es: "Namibia", name_fr: "Namibie"},
                {code: "NC", name: "New Caledonia", name_es: "Nueva Caledonia", name_fr: "Nouvelle-Calédonie"},
                {code: "NE", name: "Niger", name_es: "Níger", name_fr: "Niger"},
                {code: "NG", name: "Nigeria", name_es: "Nigeria", name_fr: "Nigéria"},
                {code: "NI", name: "Nicaragua", name_es: "Nicaragua", name_fr: "Nicaragua"},
                {code: "NL", name: "Netherlands", name_es: "Países Bajos", name_fr: "Pays-Bas"},
                {code: "NO", name: "Norway", name_es: "Noruega", name_fr: "Norvège"},
                {code: "NP", name: "Nepal", name_es: "Nepal", name_fr: "Népal"},
                {code: "NZ", name: "New Zealand", name_es: "Nueva Zelanda", name_fr: "Nouvelle-Zélande"},
                {code: "OM", name: "Oman", name_es: "Omán", name_fr: "Oman"},
                {code: "PK", name: "Pakistan", name_es: "Pakistán", name_fr: "Pakistan"},
                {code: "PA", name: "Panama", name_es: "Panamá", name_fr: "Panama"},
                {code: "PE", name: "Peru", name_es: "Perú", name_fr: "Pérou"},
                {code: "PH", name: "Philippines", name_es: "Filipinas", name_fr: "Philippines"},
                {code: "PG", name: "Papua New Guinea", name_es: "Papúa Nueva Guinea", name_fr: "Papouasie-Nouvelle-Guinée"},
                {code: "PL", name: "Poland", name_es: "Polonia", name_fr: "Pologne"},
                {code: "PR", name: "Puerto Rico", name_es: "Puerto Rico", name_fr: "Porto Rico"},
                {code: "KP", name: "North Korea", name_es: "Corea del Norte", name_fr: "Corée du Nord"},
                {code: "PT", name: "Portugal", name_es: "Portugal", name_fr: "Portugal"},
                {code: "PY", name: "Paraguay", name_es: "Paraguay", name_fr: "Paraguay"},
                {code: "PS", name: "Palestine", name_es: "Palestina", name_fr: "Palestine"},
                {code: "QA", name: "Qatar", name_es: "Catar", name_fr: "Qatar"},
                {code: "RO", name: "Romania", name_es: "Rumania", name_fr: "Roumanie"},
                {code: "RU", name: "Russia", name_es: "Rusia", name_fr: "Russie"},
                {code: "RW", name: "Rwanda", name_es: "Ruanda", name_fr: "Rwanda"},
                {code: "EH", name: "Western Sahara", name_es: "Sahara Occidental", name_fr: "Sahara occidental"},
                {code: "SA", name: "Saudi Arabia", name_es: "Arabia Saudita", name_fr: "Arabie saoudite"},
                {code: "SD", name: "Sudan", name_es: "Sudán", name_fr: "Soudan"},
                {code: "SS", name: "South Sudan", name_es: "Sudán del Sur", name_fr: "Soudan du Sud"},
                {code: "SN", name: "Senegal", name_es: "Senegal", name_fr: "Sénégal"},
                {code: "SL", name: "Sierra Leone", name_es: "Sierra Leona", name_fr: "Sierra Leone"},
                {code: "SV", name: "El Salvador", name_es: "El Salvador", name_fr: "Salvador"},
                {code: "RS", name: "Serbia", name_es: "Serbia", name_fr: "Serbie"},
                {code: "SR", name: "Suriname", name_es: "Surinam", name_fr: "Suriname"},
                {code: "SK", name: "Slovakia", name_es: "Eslovaquia", name_fr: "Slovaquie"},
                {code: "SI", name: "Slovenia", name_es: "Eslovenia", name_fr: "Slovénie"},
                {code: "SE", name: "Sweden", name_es: "Suecia", name_fr: "Suède"},
                {code: "SZ", name: "Eswatini", name_es: "Esuatini", name_fr: "Eswatini"},
                {code: "SY", name: "Syria", name_es: "Siria", name_fr: "Syrie"},
                {code: "TD", name: "Chad", name_es: "Chad", name_fr: "Tchad"},
                {code: "TG", name: "Togo", name_es: "Togo", name_fr: "Togo"},
                {code: "TH", name: "Thailand", name_es: "Tailandia", name_fr: "Thaïlande"},
                {code: "TJ", name: "Tajikistan", name_es: "Tayikistán", name_fr: "Tadjikistan"},
                {code: "TM", name: "Turkmenistan", name_es: "Turkmenistán", name_fr: "Turkménistan"},
                {code: "TL", name: "Timor-Leste", name_es: "Timor Oriental", name_fr: "Timor oriental"},
                {code: "TR", name: "Turkey", name_es: "Turquía", name_fr: "Turquie"},
                {code: "TW", name: "Taiwan", name_es: "Taiwán", name_fr: "Taïwan"},
                {code: "TZ", name: "Tanzania", name_es: "Tanzania", name_fr: "Tanzanie"},
                {code: "UG", name: "Uganda", name_es: "Uganda", name_fr: "Ouganda"},
                {code: "UA", name: "Ukraine", name_es: "Ucrania", name_fr: "Ukraine"},
                {code: "UY", name: "Uruguay", name_es: "Uruguay", name_fr: "Uruguay"},
                {code: "US", name: "United States", name_es: "Estados Unidos", name_fr: "États-Unis"},
                {code: "UZ", name: "Uzbekistan", name_es: "Uzbekistán", name_fr: "Ouzbékistan"},
                {code: "VE", name: "Venezuela", name_es: "Venezuela", name_fr: "Venezuela"},
                {code: "VN", name: "Vietnam", name_es: "Vietnam", name_fr: "Viêt Nam"},
                {code: "VU", name: "Vanuatu", name_es: "Vanuatu", name_fr: "Vanuatu"},
                {code: "YE", name: "Yemen", name_es: "Yemen", name_fr: "Yémen"},
                {code: "ZA", name: "South Africa", name_es: "Sudáfrica", name_fr: "Afrique du Sud"},
                {code: "ZM", name: "Zambia", name_es: "Zambia", name_fr: "Zambie"},
                {code: "ZW", name: "Zimbabwe", name_es: "Zimbabue", name_fr: "Zimbabwe"}
            ];
            
            const countryDataByLevel = {
                easy: fullCountryList.filter(c => ['RU', 'CN', 'US', 'CA', 'BR', 'AU', 'IN', 'AR', 'KZ', 'DZ', 'SA', 'MX', 'ID', 'GB', 'FR', 'DE', 'ES', 'IT', 'JP', 'ZA'].includes(c.code)),
                medium: fullCountryList.filter(c => !['RU', 'CN', 'US', 'CA', 'BR', 'AU', 'IN', 'AR'].includes(c.code) && c.name.length > 5),
                hard: fullCountryList
            };

            // --- GAME & MAP STATE ---
            let score = 0, currentQuestionIndex = 0, questions = [], isGameActive = true;
            const QUESTIONS_PER_ROUND = 10;
            const TIME_PER_QUESTION = 10;
            let worldMapSVG = null;
            let scale = 1.9; // Increased initial scale
            let panX = 300; // Adjusted initial pan for better centering if needed
            let panY = -100; // Adjusted initial pan for better centering if needed
            let isPanning = false, hasMoved = false,
                pointerStart = {x: 0, y: 0},
                panStart = {x: 0, y: 0},
                initialPinchDistance = 0,
                activeLevel = 'medium',
                timerInterval = null,
                timeLeft = TIME_PER_QUESTION;

            // --- MAIN FUNCTIONS ---
            function startGame(level) {
                activeLevel = level;
                startModal.classList.add('hidden');
                gameOverModal.classList.add('hidden');
                score = 0;
                currentQuestionIndex = 0;
                let questionPool = [...countryDataByLevel[level]]; // Clone array
                shuffleArray(questionPool);
                questions = questionPool.slice(0, QUESTIONS_PER_ROUND);
                resetMapTransform();
                updateScoreUI();
                displayQuestion();
            }
            
            function displayQuestion() {
                isGameActive = true;
                resetMapStyles();
                feedbackModal.classList.add('hidden');
                const question = questions[currentQuestionIndex];
                const langName = question[`name_${currentLang}`] || question.name; // Use translated name
                countryNameEl.textContent = langName;
                countryFlagEl.src = `https://flagcdn.com/w160/${question.code.toLowerCase()}.png`;
                countryFlagEl.classList.remove('hidden');
                questionCounterEl.textContent = `${currentQuestionIndex + 1}/${QUESTIONS_PER_ROUND}`;
                startTimer();
            }

            function handleCountryClick(e) {
                if (!isGameActive || !e.target) return;
                const clickedElement = e.target.closest('g[id], path[id]');
                if (!clickedElement) return;

                clearInterval(timerInterval);
                const clickedLocationCode = clickedElement.id.toUpperCase();
                
                isGameActive = false;
                const correctLocation = questions[currentQuestionIndex];
                const correctLangName = correctLocation[`name_${currentLang}`] || correctLocation.name;
                
                if (clickedLocationCode === correctLocation.code.toUpperCase()) {
                    score++;
                    feedbackTextEl.textContent = translations[currentLang].feedbackCorrect;
                    feedbackDetailsEl.textContent = translations[currentLang].feedbackCorrectDetail(correctLangName);
                    showFeedbackShapes(null, correctLocation.code);
                } else {
                    feedbackTextEl.textContent = translations[currentLang].feedbackIncorrect;
                    const clickedCountry = fullCountryList.find(c => c.code.toUpperCase() === clickedLocationCode);
                    const clickedCountryName = clickedCountry ? (clickedCountry[`name_${currentLang}`] || clickedCountry.name) : translations[currentLang].yourGuess;
                    
                    feedbackDetailsEl.textContent = translations[currentLang].feedbackIncorrectDetail(clickedCountryName);
                    showFeedbackShapes(clickedLocationCode, correctLocation.code);
                }
                updateScoreUI();
                feedbackModal.classList.remove('hidden');
            }
            
            function handleTimeUp() {
                isGameActive = false;
                const correctLocation = questions[currentQuestionIndex];
                const correctLangName = correctLocation[`name_${currentLang}`] || correctLocation.name;
                feedbackTextEl.textContent = translations[currentLang].feedbackTimeUp;
                feedbackDetailsEl.textContent = translations[currentLang].feedbackTimeUpDetail(correctLangName);
                showFeedbackShapes(null, correctLocation.code);
                updateScoreUI();
                feedbackModal.classList.remove('hidden');
            }

            function showFeedbackShapes(clickedCode, correctCode) {
                countryShapeDisplay.innerHTML = ''; 
                
                if (clickedCode) {
                    const clickedCountry = fullCountryList.find(c => c.code.toUpperCase() === clickedCode.toUpperCase());
                    const clickedCountryName = clickedCountry ? (clickedCountry[`name_${currentLang}`] || clickedCountry.name) : translations[currentLang].yourGuess;
                    const clickedShapeHTML = createCountryShapeHTML(clickedCode, clickedCountryName, 'incorrect');
                    countryShapeDisplay.appendChild(clickedShapeHTML);
                }

                const correctCountry = fullCountryList.find(c => c.code.toUpperCase() === correctCode.toUpperCase());
                const correctCountryName = correctCountry ? (correctCountry[`name_${currentLang}`] || correctCountry.name) : translations[currentLang].correctAnswer;
                const correctShapeHTML = createCountryShapeHTML(correctCode, correctCountryName, 'correct');
                countryShapeDisplay.appendChild(correctShapeHTML);
            }

            function createCountryShapeHTML(countryCode, countryName, statusClass) {
                const container = document.createElement('div');
                container.className = 'flex flex-col items-center';

                const countryGroup = worldMapSVG.querySelector(`[id="${countryCode.toUpperCase()}"]`);
                if (!countryGroup) return container;

                const clonedGroup = countryGroup.cloneNode(true);
                const bbox = countryGroup.getBBox();
                if (bbox.width === 0 || bbox.height === 0) return container;

                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
                svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                
                const paths = clonedGroup.querySelectorAll('path');
                paths.forEach(path => {
                    path.style.vectorEffect = 'none'; // Ensure strokes scale properly
                });

                svg.appendChild(clonedGroup);
                
                const wrapper = document.createElement('div');
                wrapper.className = `${statusClass} shape-container`;
                wrapper.appendChild(svg);
                
                container.appendChild(wrapper);

                const nameTag = document.createElement('p');
                nameTag.className = 'mt-2 text-sm font-semibold text-gray-700 text-center max-w-[150px]';
                nameTag.textContent = countryName;
                container.appendChild(nameTag);

                return container;
            }


            function nextQuestion() {
                resetMapTransform();
                currentQuestionIndex++;
                if (currentQuestionIndex >= QUESTIONS_PER_ROUND) endGame();
                else displayQuestion();
            }

            function endGame() {
                if (timerInterval) clearInterval(timerInterval);
                feedbackModal.classList.add('hidden');
                finalScoreEl.textContent = `${score}/${QUESTIONS_PER_ROUND}`;
                
                if (score >= 8) endGameMessageEl.textContent = translations[currentLang].gameOverMessageWizard;
                else if (score >= 5) endGameMessageEl.textContent = translations[currentLang].gameOverMessageGreat;
                else endGameMessageEl.textContent = translations[currentLang].gameOverMessageGood;
                
                gameOverModal.classList.remove('hidden');
            }

            function startTimer() {
                if (timerInterval) clearInterval(timerInterval);
                timeLeft = TIME_PER_QUESTION;
                updateTimerUI();
                timerInterval = setInterval(() => {
                    timeLeft--;
                    updateTimerUI();
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        handleTimeUp();
                    }
                }, 1000);
            }
            
            function formatTime(seconds) {
                return `00:${String(seconds).padStart(2, '0')}`;
            }

            function updateTimerUI() {
                timerEl.textContent = formatTime(timeLeft);
                if (timeLeft <= 3) timerEl.classList.add('timer-warning');
                else timerEl.classList.remove('timer-warning');
            }

            function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }
            function updateScoreUI() { scoreEl.textContent = score; }
            function resetMapStyles() { if (worldMapSVG) worldMapSVG.querySelectorAll('path, g').forEach(p => p.classList.remove('correct', 'incorrect')); }
            
            // --- MAP FIX: Reverted to original applyTransform logic ---
            function applyTransform() { 
                if (worldMapSVG) {
                    // Ensure pan values keep the map within reasonable bounds
                    const mapWidth = worldMapSVG.viewBox.baseVal.width * scale;
                    const mapHeight = worldMapSVG.viewBox.baseVal.height * scale;
                    const containerWidth = mapContainer.clientWidth;
                    const containerHeight = mapContainer.clientHeight;

                    const maxX = Math.max(0, mapWidth - containerWidth);
                    const maxY = Math.max(0, mapHeight - containerHeight);

                    panX = Math.max(Math.min(panX, 0), -maxX);
                    panY = Math.max(Math.min(panY, 0), -maxY);
                    
                    worldMapSVG.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
                }
            }

            // --- MAP FIX: Reverted to original resetMapTransform logic ---
            function resetMapTransform() { 
                scale = 1.9; // Reset to the new default initial zoom
                panX = 300; // Reset to the new default initial pan
                panY = -100; // Reset to the new default initial pan
                applyTransform(); 
            }

            function onPointerDown(e) {
                if (e.type === 'mousedown' && e.button !== 0) return;
                e.preventDefault();
                const coords = e.touches ? e.touches[0] : e;
                pointerStart = { x: coords.clientX, y: coords.clientY };
                panStart = { x: panX, y: panY };
                isPanning = true;
                hasMoved = false;
                if (e.touches && e.touches.length === 2) initialPinchDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                window.addEventListener('mousemove', onPointerMove);
                window.addEventListener('touchmove', onPointerMove, { passive: false });
                window.addEventListener('mouseup', onPointerUp);
                window.addEventListener('touchend', onPointerUp);
            }

            function onPointerMove(e) {
                if (!isPanning) return;
                e.preventDefault();
                const currentCoords = e.touches ? e.touches[0] : e;
                if (!hasMoved && Math.hypot(currentCoords.clientX - pointerStart.x, currentCoords.clientY - pointerStart.y) > 5) hasMoved = true;
                if (e.touches && e.touches.length === 2) {
                    const newPinchDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                    const oldScale = scale;
                    scale = Math.max(1, Math.min(scale * (newPinchDistance / initialPinchDistance), 15));
                    const rect = mapContainer.getBoundingClientRect();
                    const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
                    const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
                    panX = centerX - (centerX - panX) * (scale / oldScale);
                    panY = centerY - (centerY - panY) * (scale / oldScale);
                    initialPinchDistance = newPinchDistance;
                } else if (!e.touches || e.touches.length === 1) {
                    panX = panStart.x + (currentCoords.clientX - pointerStart.x);
                    panY = panStart.y + (currentCoords.clientY - pointerStart.y);
                }
                applyTransform();
            }

            function onPointerUp(e) {
                isPanning = false;
                window.removeEventListener('mousemove', onPointerMove);
                window.removeEventListener('touchmove', onPointerMove);
                window.removeEventListener('mouseup', onPointerUp);
                window.removeEventListener('touchend', onPointerUp);
                if (!hasMoved) handleCountryClick(e);
            }

            function onWheel(e) {
                e.preventDefault();
                const oldScale = scale;
                scale = Math.max(1, Math.min(scale * (e.deltaY > 0 ? 1 / 1.2 : 1.2), 15));
                const rect = mapContainer.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                panX = mouseX - (mouseX - panX) * (scale / oldScale);
                panY = mouseY - (mouseY - panY) * (scale / oldScale);
                applyTransform();
            }
            
            // --- MAP FIX: Reverted to original loadMap logic ---
            async function loadMap() {
                 try {
                     const response = await fetch('https://www.amcharts.com/lib/3/maps/svg/worldHigh.svg');
                     if (!response.ok) throw new Error(`Network response: ${response.statusText}`);
                     let svgText = await response.text();
                     svgText = svgText.replace(/<\?xml.*?\?>/, '').replace(/<style[\s\S]*?<\/style>/, '').replace(/<metadata[\s\S]*?<\/metadata>/, '');
                     loader.classList.add('hidden');
                     mapContainer.innerHTML = svgText;
                     worldMapSVG = mapContainer.querySelector('svg');
                     worldMapSVG.id = 'world-map';
                     worldMapSVG.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                     worldMapSVG.setAttribute('viewBox', '0 0 2048 1024'); 
                     applyTransform(); // Apply initial scale and pan after loading
                 } catch (error) {
                     loader.classList.add('hidden');
                     mapContainer.innerHTML = `<p class="text-red-500 text-center p-4">${translations[currentLang].mapError(error.message)}</p>`;
                 }
            }
            
            async function shareScore() {
                // Share score logic would go here
                // For now, just a placeholder
                const shareText = `I scored ${score}/${QUESTIONS_PER_ROUND} on Geo-Guesser (${activeLevel})! Can you beat me?`;
                try {
                    if (navigator.share) {
                        await navigator.share({
                            title: 'Geo-Guesser Score',
                            text: shareText,
                            url: window.location.href
                        });
                    } else {
                        // Fallback for desktop or unsupported browsers
                        console.log("Share API not supported. Implement a custom share modal or copy to clipboard.");
                    }
                } catch (err) {
                    console.error('Error sharing score:', err);
                }
            }

            // --- EVENT LISTENERS ---
            startAdventureBtn.addEventListener('click', () => {
                welcomeScreen.style.transition = 'opacity 0.5s ease-out';
                welcomeScreen.style.opacity = '0';
                setTimeout(() => {
                    welcomeScreen.classList.add('hidden');
                    mainContent.classList.remove('hidden');
                    startModal.classList.remove('hidden');
                }, 500);
            });

            // Add event listeners for lang buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    setLanguage(btn.dataset.lang);
                });
            });

            easyBtn.addEventListener('click', () => startGame('easy'));
            mediumBtn.addEventListener('click', () => startGame('medium'));
            hardBtn.addEventListener('click', () => startGame('hard'));
            playAgainButton.addEventListener('click', () => {
                gameOverModal.classList.add('hidden');
                startModal.classList.remove('hidden');
            });
            nextButton.addEventListener('click', nextQuestion);
            shareButton.addEventListener('click', shareScore);
            zoomInBtn.addEventListener('click', () => onWheel({ preventDefault: () => {}, deltaY: -100, clientX: mapContainer.clientWidth/2, clientY: mapContainer.clientHeight/2 }));
            zoomOutBtn.addEventListener('click', () => onWheel({ preventDefault: () => {}, deltaY: 100, clientX: mapContainer.clientWidth/2, clientY: mapContainer.clientHeight/2 }));
            resetViewBtn.addEventListener('click', resetMapTransform);
            mapContainer.addEventListener('wheel', onWheel);
            mapContainer.addEventListener('mousedown', onPointerDown);
            mapContainer.addEventListener('touchstart', onPointerDown, { passive: false });
            
            // --- INITIALIZATION ---
            setLanguage(currentLang); // Set initial language
            loadMap();
        });;
