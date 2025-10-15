document.addEventListener('DOMContentLoaded', () => {
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

            // --- COMPLETE COUNTRY DATABASE ---
            const fullCountryList = [
                {code: "AF", name: "Afghanistan"}, {code: "AO", name: "Angola"}, {code: "AL", name: "Albania"}, {code: "AE", name: "United Arab Emirates"}, {code: "AR", name: "Argentina"}, {code: "AM", name: "Armenia"}, {code: "AU", name: "Australia"}, {code: "AT", name: "Austria"}, {code: "AZ", name: "Azerbaijan"}, {code: "BI", name: "Burundi"}, {code: "BE", name: "Belgium"}, {code: "BJ", name: "Benin"}, {code: "BF", name: "Burkina Faso"}, {code: "BD", name: "Bangladesh"}, {code: "BG", name: "Bulgaria"}, {code: "BA", name: "Bosnia and Herzegovina"}, {code: "BY", name: "Belarus"}, {code: "BZ", name: "Belize"}, {code: "BO", name: "Bolivia"}, {code: "BR", name: "Brazil"}, {code: "BN", name: "Brunei Darussalam"}, {code: "BT", name: "Bhutan"}, {code: "BW", name: "Botswana"}, {code: "CF", name: "Central African Republic"}, {code: "CA", name: "Canada"}, {code: "CH", name: "Switzerland"}, {code: "CL", name: "Chile"}, {code: "CN", name: "China"}, {code: "CI", name: "Ivory Coast"}, {code: "CM", name: "Cameroon"}, {code: "CD", name: "DR Congo"}, {code: "CG", name: "Republic of the Congo"}, {code: "CO", name: "Colombia"}, {code: "CR", name: "Costa Rica"}, {code: "CU", name: "Cuba"}, {code: "CY", name: "Cyprus"}, {code: "CZ", name: "Czech Republic"}, {code: "DE", name: "Germany"}, {code: "DJ", name: "Djibouti"}, {code: "DK", name: "Denmark"}, {code: "DO", name: "Dominican Republic"}, {code: "DZ", name: "Algeria"}, {code: "EC", name: "Ecuador"}, {code: "EG", name: "Egypt"}, {code: "ER", name: "Eritrea"}, {code: "EE", name: "Estonia"}, {code: "ET", name: "Ethiopia"}, {code: "FI", name: "Finland"}, {code: "FJ", name: "Fiji"}, {code: "GA", name: "Gabon"}, {code: "GB", name: "United Kingdom"}, {code: "GE", name: "Georgia"}, {code: "GH", name: "Ghana"}, {code: "GN", name: "Guinea"}, {code: "GM", name: "Gambia"}, {code: "GW", name: "Guinea-Bissau"}, {code: "GQ", name: "Equatorial Guinea"}, {code: "GR", name: "Greece"}, {code: "GL", name: "Greenland"}, {code: "GT", name: "Guatemala"}, {code: "GY", name: "Guyana"}, {code: "HN", name: "Honduras"}, {code: "HR", name: "Croatia"}, {code: "HT", name: "Haiti"}, {code: "HU", name: "Hungary"}, {code: "ID", name: "Indonesia"}, {code: "IN", name: "India"}, {code: "IE", name: "Ireland"}, {code: "IR", name: "Iran"}, {code: "IQ", name: "Iraq"}, {code: "IS", name: "Iceland"}, {code: "IL", name: "Israel"}, {code: "IT", name: "Italy"}, {code: "JM", name: "Jamaica"}, {code: "JO", name: "Jordan"}, {code: "JP", name: "Japan"}, {code: "KZ", name: "Kazakhstan"}, {code: "KE", name: "Kenya"}, {code: "KG", name: "Kyrgyzstan"}, {code: "KH", name: "Cambodia"}, {code: "KR", name: "South Korea"}, {code: "XK", name: "Kosovo"}, {code: "KW", name: "Kuwait"}, {code: "LA", name: "Lao"}, {code: "LB", name: "Lebanon"}, {code: "LR", name: "Liberia"}, {code: "LY", name: "Libya"}, {code: "LK", name: "Sri Lanka"}, {code: "LS", name: "Lesotho"}, {code: "LT", name: "Lithuania"}, {code: "LU", name: "Luxembourg"}, {code: "LV", name: "Latvia"}, {code: "MA", name: "Morocco"}, {code: "MD", name: "Moldova"}, {code: "MG", name: "Madagascar"}, {code: "MX", name: "Mexico"}, {code: "MK", name: "North Macedonia"}, {code: "ML", name: "Mali"}, {code: "MM", name: "Myanmar"}, {code: "ME", name: "Montenegro"}, {code: "MN", name: "Mongolia"}, {code: "MZ", name: "Mozambique"}, {code: "MR", name: "Mauritania"}, {code: "MW", name: "Malawi"}, {code: "MY", name: "Malaysia"}, {code: "NA", name: "Namibia"}, {code: "NC", name: "New Caledonia"}, {code: "NE", name: "Niger"}, {code: "NG", name: "Nigeria"}, {code: "NI", name: "Nicaragua"}, {code: "NL", name: "Netherlands"}, {code: "NO", name: "Norway"}, {code: "NP", name: "Nepal"}, {code: "NZ", name: "New Zealand"}, {code: "OM", name: "Oman"}, {code: "PK", name: "Pakistan"}, {code: "PA", name: "Panama"}, {code: "PE", name: "Peru"}, {code: "PH", name: "Philippines"}, {code: "PG", name: "Papua New Guinea"}, {code: "PL", name: "Poland"}, {code: "PR", name: "Puerto Rico"}, {code: "KP", name: "North Korea"}, {code: "PT", name: "Portugal"}, {code: "PY", name: "Paraguay"}, {code: "PS", name: "Palestine"}, {code: "QA", name: "Qatar"}, {code: "RO", name: "Romania"}, {code: "RU", name: "Russia"}, {code: "RW", name: "Rwanda"}, {code: "EH", name: "Western Sahara"}, {code: "SA", name: "Saudi Arabia"}, {code: "SD", name: "Sudan"}, {code: "SS", name: "South Sudan"}, {code: "SN", name: "Senegal"}, {code: "SL", name: "Sierra Leone"}, {code: "SV", name: "El Salvador"}, {code: "RS", name: "Serbia"}, {code: "SR", name: "Suriname"}, {code: "SK", name: "Slovakia"}, {code: "SI", name: "Slovenia"}, {code: "SE", name: "Sweden"}, {code: "SZ", name: "Eswatini"}, {code: "SY", name: "Syria"}, {code: "TD", name: "Chad"}, {code: "TG", name: "Togo"}, {code: "TH", name: "Thailand"}, {code: "TJ", name: "Tajikistan"}, {code: "TM", name: "Turkmenistan"}, {code: "TL", name: "Timor-Leste"}, {code: "TR", name: "Turkey"}, {code: "TW", name: "Taiwan"}, {code: "TZ", name: "Tanzania"}, {code: "UG", name: "Uganda"}, {code: "UA", name: "Ukraine"}, {code: "UY", name: "Uruguay"}, {code: "US", name: "United States"}, {code: "UZ", name: "Uzbekistan"}, {code: "VE", name: "Venezuela"}, {code: "VN", name: "Vietnam"}, {code: "VU", name: "Vanuatu"}, {code: "YE", name: "Yemen"}, {code: "ZA", name: "South Africa"}, {code: "ZM", name: "Zambia"}, {code: "ZW", name: "Zimbabwe"}
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
            let panX =300; // Adjusted initial pan for better centering if needed
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
                let questionPool = countryDataByLevel[level];
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
                countryNameEl.textContent = question.name;
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
                
                if (clickedLocationCode === correctLocation.code.toUpperCase()) {
                    score++;
                    feedbackTextEl.textContent = "Correct! ⭐";
                    feedbackDetailsEl.textContent = `That's ${correctLocation.name}!`;
                    showFeedbackShapes(null, correctLocation.code);
                } else {
                    feedbackTextEl.textContent = "Not Quite!";
                    const clickedCountryName = fullCountryList.find(c => c.code.toUpperCase() === clickedLocationCode)?.name || 'that region';
                    feedbackDetailsEl.textContent = `You clicked on ${clickedCountryName}.`;
                    showFeedbackShapes(clickedLocationCode, correctLocation.code);
                }
                updateScoreUI();
                feedbackModal.classList.remove('hidden');
            }
            
            function handleTimeUp() {
                isGameActive = false;
                const correctLocation = questions[currentQuestionIndex];
                feedbackTextEl.textContent = "Time's Up! ⏰";
                feedbackDetailsEl.textContent = `The correct answer was ${correctLocation.name}.`;
                showFeedbackShapes(null, correctLocation.code);
                updateScoreUI();
                feedbackModal.classList.remove('hidden');
            }

            function showFeedbackShapes(clickedCode, correctCode) {
                countryShapeDisplay.innerHTML = ''; 
                
                if (clickedCode) {
                    const clickedCountryName = fullCountryList.find(c => c.code.toUpperCase() === clickedCode.toUpperCase())?.name || 'Your Guess';
                    const clickedShapeHTML = createCountryShapeHTML(clickedCode, clickedCountryName, 'incorrect');
                    countryShapeDisplay.appendChild(clickedShapeHTML);
                }

                const correctCountryName = fullCountryList.find(c => c.code.toUpperCase() === correctCode.toUpperCase())?.name || 'Correct Answer';
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
                nameTag.className = 'mt-2 text-sm font-semibold text-gray-700';
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
                if (score >= 8) endGameMessageEl.textContent = "You're a geography wizard! 🌟";
                else if (score >= 5) endGameMessageEl.textContent = "Great job, world traveler! ✈️";
                else endGameMessageEl.textContent = "Good effort! Keep exploring the world. 🗺️";
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
                     mapContainer.innerHTML = `<p class="text-red-500 text-center p-4">Could not load the world map. Please check your connection. <br><small>${error.message}</small></p>`;
                 }
            }
            
            async function shareScore() {
                // Share score logic would go here
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
            
            loadMap();
        });;
