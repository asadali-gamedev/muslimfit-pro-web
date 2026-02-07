/**
 * MuslimFit Pro - Main App Logic
 * Handles navigation, routing, functionality, and page initialization
 */

// ==========================================
// SPLASH SCREEN & INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 MuslimFit Pro Web App Starting...');

    // Show splash screen for 2 seconds
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    const appContainer = document.getElementById('app-container');

    if (splash && appContainer) {
        setTimeout(() => {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                appContainer.classList.add('active');

                // Initialize app after splash
                initializeApp();
            }, 300);
        }, 2000);
    } else {
        // No splash screen, initialize immediately
        if (appContainer) appContainer.classList.add('active');
        initializeApp();
    }
});

// ==========================================
// APP INITIALIZATION
// ==========================================
function initializeApp() {
    console.log('📱 Initializing app...');

    // Initialize navigation
    initNavigation();

    // Initialize menu toggle
    initMenuToggle();

    const hash = window.location.hash.slice(1);

    // Check if data already loaded (event may have fired during splash screen)
    if (window.DATA && !window.DATA.loading) {
        console.log('✅ Data already loaded, rendering page');
        navigateToPage(hash || 'home');
    } else {
        // Wait for data to load
        window.addEventListener('dataLoaded', () => {
            console.log('✅ Data loaded, rendering home page');
            navigateToPage(hash || 'home');
        });
    }
}

// ==========================================
// MENU TOGGLE
// ==========================================
function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');

    if (!menuToggle || !sideMenu) return;

    // Open menu
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('menu-content').style.transform = 'translateX(0)';
        }, 10);
    });

    // Close menu
    const closeMenu = () => {
        document.getElementById('menu-content').style.transform = 'translateX(100%)';
        setTimeout(() => {
            sideMenu.classList.add('hidden');
        }, 300);
    };

    menuClose?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);
}

// ==========================================
// NAVIGATION SYSTEM
// ==========================================
function initNavigation() {
    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const page = window.location.hash.slice(1) || 'home';
        navigateToPage(page);
    });

    // Handle menu item clicks
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = item.dataset.page;
            if (page) {
                window.location.hash = page;
                closeMenu();
            }
        });
    });

    // Handle bottom nav clicks
    document.querySelectorAll('.nav-btn').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = item.dataset.page;
            if (page) {
                window.location.hash = page;
            }
        });
    });
}

function navigateToPage(pageName) {
    console.log('📄 Navigating to:', pageName);

    // Update menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });

    // Update bottom nav
    document.querySelectorAll('.nav-btn').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });

    // Update header title
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) {
        const titles = {
            'home': 'MuslimFit Pro',
            'quran': 'Quran',
            'hadith': 'Hadith',
            'duas': 'Duas',
            'dhikr': 'Dhikr Counter',
            'allah-names': '99 Names of Allah',
            'kalmas': '6 Kalmas',
            'prayer-times': 'Prayer Times',
            'qibla': 'Qibla Finder',
            'namaz-guide': 'Namaz Guide',
            'hajj-guide': 'Hajj Guide',
            'umrah-guide': 'Umrah Guide',
            'pillars': '5 Pillars',
            'ramadan': 'Ramadan Tracker',
            'quran-player': 'Quran Player',
            'prophet-names': 'Names of Muhammad ﷺ',
            'zakat': 'Zakat Calculator',
            'challenges': 'Challenges',
            'exercises': 'Exercise Guide',
            'achievements': 'Achievements',
            'step-counter': 'Step Counter',
            'water-tracker': 'Water Tracker',
            'sleep-tracker': 'Sleep Tracker',
            'nutrition-tracker': 'Nutrition Tracker',
            'profile': 'Profile',
            'settings': 'Settings',
            'health': 'Health Dashboard',
            'more': 'More Features'
        };
        headerTitle.textContent = titles[pageName] || 'MuslimFit Pro';
    }

    // Show/hide back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        if (pageName === 'home') {
            backBtn.classList.add('hidden');
        } else {
            backBtn.classList.remove('hidden');
        }
    }

    // Render page content
    renderPage(pageName);

    // Close menu if open
    closeMenu();

    // Scroll to top
    window.scrollTo(0, 0);
}

function renderPage(pageName) {
    const contentArea = document.getElementById('main-content');
    if (!contentArea) {
        console.error('Content area not found');
        return;
    }

    const page = window.PAGES[pageName];

    if (typeof page === 'function') {
        contentArea.innerHTML = page();
    } else if (typeof page === 'string') {
        contentArea.innerHTML = page;
    } else {
        contentArea.innerHTML = `
            <div class="page-container text-center py-12">
                <i class="fas fa-exclamation-triangle text-4xl text-gray-400 mb-4"></i>
                <h2 class="text-2xl font-bold text-gray-700 mb-2">Page Not Found</h2>
                <p class="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                <a href="#home" class="btn-primary">Go Home</a>
            </div>
        `;
    }

    // Initialize page-specific functionality
    initializePageFunctions(pageName);
}

function closeMenu() {
    const sideMenu = document.getElementById('side-menu');
    const menuContent = document.getElementById('menu-content');
    if (sideMenu && menuContent) {
        menuContent.style.transform = 'translateX(100%)';
        setTimeout(() => {
            sideMenu.classList.add('hidden');
        }, 300);
    }
}

// Back button handler
document.getElementById('back-btn')?.addEventListener('click', () => {
    window.history.back();
});

// ==========================================
// PAGE-SPECIFIC FUNCTIONS
// ==========================================
function initializePageFunctions(pageName) {
    switch (pageName) {
        case 'home':
            initHomePage();
            break;
        case 'dhikr':
            initDhikrCounter();
            break;
        case 'qibla':
            initQiblaFinder();
            break;
        case 'prayer-times':
            initPrayerTimes();
            break;
        case 'ramadan':
            initRamadanTracker();
            break;
        case 'quran-player':
            initQuranPlayer();
            break;
        case 'zakat':
            initZakatCalculator();
            break;
        case 'challenges':
            initChallenges();
            break;
        case 'step-counter':
            initStepCounter();
            break;
        case 'water-tracker':
            initWaterTracker();
            break;
        case 'sleep-tracker':
            initSleepTracker();
            break;
        case 'nutrition-tracker':
            initNutritionTracker();
            break;
        case 'exercises':
            initExercises();
            break;
    }
}

// ==========================================
// DHIKR COUNTER
// ==========================================
let dhikrCount = 0;
let dhikrTarget = 33;
let dhikrSound = true;

function initDhikrCounter() {
    // Load saved count from localStorage
    const saved = localStorage.getItem('dhikrCount');
    if (saved) {
        dhikrCount = parseInt(saved);
        updateDhikrDisplay();
    }
}

window.incrementDhikr = function() {
    dhikrCount++;
    updateDhikrDisplay();
    saveDhikrCount();

    // Visual pulse on counter
    const countEl = document.getElementById('dhikr-count');
    if (countEl) {
        countEl.style.transform = 'scale(1.3)';
        setTimeout(() => { countEl.style.transform = 'scale(1)'; }, 150);
    }

    // Play sound if enabled
    if (dhikrSound) {
        playClickSound();
    }

    // Check if target reached
    if (dhikrCount === dhikrTarget) {
        showCompletionMessage();
    }
};

window.resetDhikr = function() {
    if (confirm('Reset counter to 0?')) {
        dhikrCount = 0;
        updateDhikrDisplay();
        saveDhikrCount();
    }
};

window.setDhikrText = function(text, target) {
    dhikrTarget = target;
    dhikrCount = 0;
    document.getElementById('dhikr-target').textContent = target;
    updateDhikrDisplay();
    saveDhikrCount();
};

window.toggleSound = function() {
    dhikrSound = !dhikrSound;
    const btn = document.getElementById('sound-btn');
    if (btn) {
        const icon = btn.querySelector('i');
        icon.className = dhikrSound ? 'fas fa-volume-up mr-2' : 'fas fa-volume-mute mr-2';
    }
};

function updateDhikrDisplay() {
    const countEl = document.getElementById('dhikr-count');
    const progressEl = document.getElementById('dhikr-progress');

    if (countEl) countEl.textContent = dhikrCount;

    if (progressEl) {
        const percentage = Math.min((dhikrCount / dhikrTarget) * 100, 100);
        progressEl.style.width = percentage + '%';
    }
}

function saveDhikrCount() {
    localStorage.setItem('dhikrCount', dhikrCount.toString());
}

function playClickSound() {
    // Simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Silently fail if audio not supported
    }
}

function showCompletionMessage() {
    showToast('Alhamdulillah! Completed ' + dhikrTarget + ' counts!');
}

// Dhikr preset selection and filtering
window.selectDhikrPreset = function(idx) {
    const dhikrList = window.DATA.dhikrList;
    if (!dhikrList || !dhikrList[idx]) return;

    const d = dhikrList[idx];
    dhikrTarget = d.defaultGoal;
    dhikrCount = 0;

    const arabicEl = document.getElementById('dhikr-current-arabic');
    const meaningEl = document.getElementById('dhikr-current-meaning');
    const targetEl = document.getElementById('dhikr-target');

    if (arabicEl) arabicEl.textContent = d.arabic;
    if (meaningEl) meaningEl.textContent = d.transliteration + ' - ' + d.meaning;
    if (targetEl) targetEl.textContent = d.defaultGoal;

    updateDhikrDisplay();
    saveDhikrCount();

    // Highlight selected card
    document.querySelectorAll('.dhikr-preset-card').forEach(c => c.classList.remove('selected'));
    const card = document.querySelector(`.dhikr-preset-card[data-idx="${idx}"]`);
    if (card) card.classList.add('selected');

    // Scroll to counter
    const counter = document.getElementById('dhikr-counter-section');
    if (counter) counter.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.filterDhikrCategory = function(category) {
    const items = document.querySelectorAll('.dhikr-item');
    const buttons = document.querySelectorAll('#dhikr-categories .category-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    items.forEach(item => {
        item.style.display = (category === 'all' || item.dataset.category === category) ? '' : 'none';
    });
};

window.filterDhikrPresets = function(query) {
    const items = document.querySelectorAll('.dhikr-item');
    const searchQuery = query.toLowerCase();
    items.forEach(item => {
        const searchText = item.dataset.search || '';
        item.style.display = searchText.includes(searchQuery) ? '' : 'none';
    });
};

// ==========================================
// QIBLA FINDER
// ==========================================
let qiblaAngle = 0;
let userLat = 0;
let userLng = 0;

function initQiblaFinder() {
    // Request location
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLat = position.coords.latitude;
                userLng = position.coords.longitude;
                calculateQibla();
                initCompass();
            },
            (error) => {
                document.getElementById('qibla-status').textContent = 'Location access denied. Please enable location.';
            }
        );
    } else {
        document.getElementById('qibla-status').textContent = 'Geolocation not supported by your browser.';
    }
}

function calculateQibla() {
    // Ka'bah coordinates
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;

    // Calculate bearing
    const dLon = (kaabaLng - userLng) * Math.PI / 180;
    const lat1 = userLat * Math.PI / 180;
    const lat2 = kaabaLat * Math.PI / 180;

    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    qiblaAngle = (bearing + 360) % 360;

    // Update display
    const directionEl = document.getElementById('qibla-direction');
    if (directionEl) {
        directionEl.querySelector('div').textContent = Math.round(qiblaAngle) + '°';
    }

    document.getElementById('qibla-status').textContent = 'Point your device in the indicated direction';
}

function initCompass() {
    if ('DeviceOrientationEvent' in window) {
        window.addEventListener('deviceorientation', handleOrientation);
    } else {
        document.getElementById('qibla-status').textContent = 'Device orientation not supported.';
    }
}

function handleOrientation(event) {
    let heading = event.alpha || 0;

    // Calculate needle rotation
    const needleRotation = qiblaAngle - heading;

    const needle = document.getElementById('compass-needle');
    if (needle) {
        needle.style.transform = `rotate(${needleRotation}deg)`;
    }
}

// ==========================================
// PRAYER TIMES
// ==========================================
function initPrayerTimes() {
    loadPrayerTimes();
}

window.refreshPrayerTimes = function() {
    loadPrayerTimes();
};

function loadPrayerTimes() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                try {
                    // Use Aladhan API
                    const date = new Date();
                    const response = await fetch(`https://api.aladhan.com/v1/timings/${Math.floor(date.getTime()/1000)}?latitude=${lat}&longitude=${lng}&method=2`);
                    const data = await response.json();

                    if (data.code === 200) {
                        displayPrayerTimes(data.data);
                    }
                } catch (error) {
                    console.error('Error loading prayer times:', error);
                    document.getElementById('prayer-times-content').innerHTML = `
                        <div class="text-center py-8 text-red-600">
                            <p>Failed to load prayer times. Please try again.</p>
                        </div>
                    `;
                }
            },
            (error) => {
                document.getElementById('prayer-times-content').innerHTML = `
                    <div class="text-center py-8 text-red-600">
                        <p>Location access required. Please enable location services.</p>
                    </div>
                `;
            }
        );
    }
}

function displayPrayerTimes(data) {
    const timings = data.timings;
    const date = data.date;

    const prayers = [
        { name: 'Fajr', icon: 'sunrise', time: timings.Fajr },
        { name: 'Dhuhr', icon: 'sun', time: timings.Dhuhr },
        { name: 'Asr', icon: 'cloud-sun', time: timings.Asr },
        { name: 'Maghrib', icon: 'sunset', time: timings.Maghrib },
        { name: 'Isha', icon: 'moon', time: timings.Isha }
    ];

    const html = `
        <div class="space-y-4">
            <div class="islamic-card text-center">
                <p class="text-sm text-gray-600 mb-1">${date.gregorian.weekday.en}, ${date.gregorian.day} ${date.gregorian.month.en} ${date.gregorian.year}</p>
                <p class="text-sm text-gray-600">${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year} AH</p>
            </div>

            ${prayers.map(prayer => `
                <div class="islamic-card flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                            <i class="fas fa-${prayer.icon} text-primary-main text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-gray-800">${prayer.name}</h3>
                            <p class="text-sm text-gray-600">Salah Time</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-primary-main">${prayer.time}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('prayer-times-content').innerHTML = html;

    // Update location display
    const loc = document.getElementById('prayer-location');
    if (loc) loc.textContent = data.meta ? data.meta.timezone : '';
}

// ==========================================
// RAMADAN TRACKER
// ==========================================
let ramadanDay = 1;

function initRamadanTracker() {
    const saved = localStorage.getItem('ramadanDay');
    if (saved) {
        ramadanDay = parseInt(saved);
        updateRamadanDisplay();
    }
}

window.incrementRamadanDay = function() {
    if (ramadanDay < 30) {
        ramadanDay++;
        updateRamadanDisplay();
        saveRamadanDay();
    }
};

window.decrementRamadanDay = function() {
    if (ramadanDay > 1) {
        ramadanDay--;
        updateRamadanDisplay();
        saveRamadanDay();
    }
};

function updateRamadanDisplay() {
    const dayEl = document.getElementById('ramadan-day');
    const progressEl = document.getElementById('ramadan-progress');

    if (dayEl) dayEl.textContent = ramadanDay;
    if (progressEl) {
        const percentage = (ramadanDay / 30) * 100;
        progressEl.style.width = percentage + '%';
    }
}

function saveRamadanDay() {
    localStorage.setItem('ramadanDay', ramadanDay.toString());
}

window.saveRamadanProgress = function() {
    // Save checklist state
    const checkboxes = document.querySelectorAll('#ramadan-tracker input[type="checkbox"]');
    const state = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem('ramadanChecklist', JSON.stringify(state));
};

// ==========================================
// ZAKAT CALCULATOR
// ==========================================
function initZakatCalculator() {
    // Initialize calculator
}

window.calculateZakat = function() {
    const cash = parseFloat(document.getElementById('zakat-cash')?.value || 0);
    const gold = parseFloat(document.getElementById('zakat-gold')?.value || 0);
    const business = parseFloat(document.getElementById('zakat-business')?.value || 0);
    const investments = parseFloat(document.getElementById('zakat-investments')?.value || 0);
    const other = parseFloat(document.getElementById('zakat-other')?.value || 0);
    const debts = parseFloat(document.getElementById('zakat-debts')?.value || 0);

    const totalWealth = cash + gold + business + investments + other - debts;
    const zakatAmount = totalWealth * 0.025;

    const nisab = 4000; // Approximate USD value

    document.getElementById('total-wealth').textContent = '$' + totalWealth.toFixed(2);
    document.getElementById('zakat-amount').textContent = '$' + zakatAmount.toFixed(2);

    const statusEl = document.getElementById('zakat-status');
    if (totalWealth >= nisab) {
        statusEl.textContent = '✅ You have reached Nisab threshold. Zakat is obligatory.';
    } else if (totalWealth > 0) {
        statusEl.textContent = '⚠️ You have not reached Nisab threshold yet.';
    } else {
        statusEl.textContent = 'Enter your assets to calculate Zakat';
    }
};

// ==========================================
// LANGUAGE MODAL (if implemented in HTML)
// ==========================================
window.openLanguageModal = function() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
};

window.closeLanguageModal = function() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
};

window.selectLanguage = function(lang) {
    console.log('Language selected:', lang);
    localStorage.setItem('selectedLanguage', lang);
    closeLanguageModal();
    // Implement language change logic here
};

// ==========================================
// CHALLENGES SYSTEM
// ==========================================
let challengeData = {
    streak: 0,
    points: 0,
    completed: 0,
    daily: {},
    weekly: {}
};

function initChallenges() {
    const saved = localStorage.getItem('challengeData');
    if (saved) {
        challengeData = JSON.parse(saved);
        updateChallengeDisplay();
    }
}

function updateChallengeDisplay() {
    const streakEl = document.getElementById('challenge-streak');
    const pointsEl = document.getElementById('challenge-points');
    const completedEl = document.getElementById('challenges-completed');

    if (streakEl) streakEl.textContent = challengeData.streak;
    if (pointsEl) pointsEl.textContent = challengeData.points;
    if (completedEl) completedEl.textContent = challengeData.completed;
}

window.markChallengeComplete = function(challengeId) {
    challengeData.completed++;
    challengeData.points += 100;
    challengeData.streak = Math.max(challengeData.streak, 1);
    saveChallengeData();
    updateChallengeDisplay();
    alert('Challenge completed! +100 points');
};

function saveChallengeData() {
    localStorage.setItem('challengeData', JSON.stringify(challengeData));
}

// ==========================================
// STEP COUNTER
// ==========================================
let stepData = {
    count: 0,
    goal: 10000,
    calories: 0,
    distance: 0,
    activeTime: 0
};

function initStepCounter() {
    const saved = localStorage.getItem('stepData');
    if (saved) {
        stepData = JSON.parse(saved);
        updateStepDisplay();
    }
}

window.addSteps = function(steps) {
    stepData.count += steps;
    stepData.calories = Math.floor(stepData.count * 0.04);
    stepData.distance = (stepData.count * 0.0008).toFixed(1);
    stepData.activeTime = Math.floor(stepData.count / 100);
    saveStepData();
    updateStepDisplay();
};

window.updateStepGoal = function(newGoal) {
    stepData.goal = parseInt(newGoal);
    saveStepData();
    updateStepDisplay();
};

function updateStepDisplay() {
    const countEl = document.getElementById('step-count');
    const percentageEl = document.getElementById('step-percentage');
    const circleEl = document.getElementById('step-progress-circle');
    const caloriesEl = document.getElementById('calories-burned');
    const distanceEl = document.getElementById('distance-walked');
    const timeEl = document.getElementById('active-time');

    if (countEl) countEl.textContent = stepData.count.toLocaleString();

    const percentage = Math.min((stepData.count / stepData.goal) * 100, 100);
    if (percentageEl) percentageEl.textContent = Math.round(percentage) + '%';

    if (circleEl) {
        const circumference = 553;
        const offset = circumference - (circumference * percentage) / 100;
        circleEl.style.strokeDashoffset = offset;
    }

    if (caloriesEl) caloriesEl.textContent = stepData.calories;
    if (distanceEl) distanceEl.textContent = stepData.distance;
    if (timeEl) timeEl.textContent = stepData.activeTime;
}

function saveStepData() {
    localStorage.setItem('stepData', JSON.stringify(stepData));
}

// ==========================================
// WATER TRACKER
// ==========================================
let waterData = {
    glasses: 0,
    goal: 8,
    streak: 0,
    glassStates: Array(8).fill(false)
};

function initWaterTracker() {
    const saved = localStorage.getItem('waterData');
    if (saved) {
        waterData = JSON.parse(saved);
        updateWaterDisplay();
    }
}

window.toggleGlass = function(index) {
    waterData.glassStates[index] = !waterData.glassStates[index];
    waterData.glasses = waterData.glassStates.filter(s => s).length;
    saveWaterData();
    updateWaterDisplay();
};

window.resetWaterTracker = function() {
    if (confirm('Reset water tracker for today?')) {
        waterData.glasses = 0;
        waterData.glassStates = Array(8).fill(false);
        saveWaterData();
        updateWaterDisplay();
    }
};

function updateWaterDisplay() {
    const glassesEl = document.getElementById('water-glasses');
    const progressEl = document.getElementById('water-progress-bar');
    const mlEl = document.getElementById('water-ml');

    if (glassesEl) glassesEl.textContent = waterData.glasses;

    const percentage = (waterData.glasses / waterData.goal) * 100;
    if (progressEl) progressEl.style.width = percentage + '%';

    if (mlEl) mlEl.textContent = waterData.glasses * 250;

    // Update glass buttons
    waterData.glassStates.forEach((filled, i) => {
        const btn = document.querySelector(`[data-glass="${i}"]`);
        if (btn) {
            const icon = btn.querySelector('i');
            if (filled) {
                btn.classList.add('bg-blue-500');
                btn.classList.remove('bg-gray-100');
                icon.classList.add('text-white');
                icon.classList.remove('text-gray-300');
            } else {
                btn.classList.remove('bg-blue-500');
                btn.classList.add('bg-gray-100');
                icon.classList.remove('text-white');
                icon.classList.add('text-gray-300');
            }
        }
    });
}

function saveWaterData() {
    localStorage.setItem('waterData', JSON.stringify(waterData));
}

// ==========================================
// SLEEP TRACKER
// ==========================================
let sleepData = {
    hours: 0,
    quality: 0,
    bedtime: '23:00',
    wakeTime: '07:00',
    history: []
};

function initSleepTracker() {
    const saved = localStorage.getItem('sleepData');
    if (saved) {
        sleepData = JSON.parse(saved);
        updateSleepDisplay();
    }
}

window.logSleep = function() {
    const bedtime = document.getElementById('bedtime').value;
    const wakeTime = document.getElementById('wake-time').value;

    // Calculate hours
    const bed = new Date('2000-01-01 ' + bedtime);
    let wake = new Date('2000-01-01 ' + wakeTime);
    if (wake < bed) wake.setDate(wake.getDate() + 1);

    const hours = (wake - bed) / (1000 * 60 * 60);

    sleepData.hours = hours.toFixed(1);
    sleepData.bedtime = bedtime;
    sleepData.wakeTime = wakeTime;

    saveSleepData();
    updateSleepDisplay();
    alert(`Sleep logged: ${sleepData.hours} hours`);
};

window.setSleepQuality = function(quality) {
    sleepData.quality = quality;
    saveSleepData();
    alert(`Sleep quality set to ${quality}/5`);
};

function updateSleepDisplay() {
    const hoursEl = document.getElementById('sleep-hours');
    if (hoursEl) hoursEl.textContent = sleepData.hours;
}

function saveSleepData() {
    localStorage.setItem('sleepData', JSON.stringify(sleepData));
}

// ==========================================
// NUTRITION TRACKER
// ==========================================
let nutritionData = {
    calories: 0,
    goal: 2000,
    protein: 0,
    carbs: 0,
    fats: 0,
    meals: []
};

function initNutritionTracker() {
    const saved = localStorage.getItem('nutritionData');
    if (saved) {
        nutritionData = JSON.parse(saved);
        updateNutritionDisplay();
    }
}

window.logMeal = function() {
    const type = document.getElementById('meal-type').value;
    const name = document.getElementById('meal-name').value;
    const calories = parseInt(document.getElementById('meal-calories').value);

    if (!name || !calories) {
        alert('Please fill in meal name and calories');
        return;
    }

    nutritionData.calories += calories;
    nutritionData.meals.push({
        type,
        name,
        calories,
        time: new Date().toLocaleTimeString()
    });

    saveNutritionData();
    updateNutritionDisplay();
    displayMeals();

    // Clear inputs
    document.getElementById('meal-name').value = '';
    document.getElementById('meal-calories').value = '';
};

window.quickAddMeal = function(name, calories) {
    nutritionData.calories += calories;
    nutritionData.meals.push({
        type: 'snack',
        name,
        calories,
        time: new Date().toLocaleTimeString()
    });

    saveNutritionData();
    updateNutritionDisplay();
    displayMeals();
};

function updateNutritionDisplay() {
    const caloriesEl = document.getElementById('calories-today');
    const progressEl = document.getElementById('calorie-progress-bar');
    const remainingEl = document.getElementById('calories-remaining');

    if (caloriesEl) caloriesEl.textContent = nutritionData.calories;

    const percentage = (nutritionData.calories / nutritionData.goal) * 100;
    if (progressEl) progressEl.style.width = percentage + '%';

    const remaining = nutritionData.goal - nutritionData.calories;
    if (remainingEl) remainingEl.textContent = Math.max(0, remaining);
}

function displayMeals() {
    const listEl = document.getElementById('meals-list');
    if (!listEl) return;

    if (nutritionData.meals.length === 0) {
        listEl.innerHTML = '<p class="text-center text-gray-500 text-sm py-8">No meals logged yet</p>';
        return;
    }

    listEl.innerHTML = nutritionData.meals.map(meal => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
                <h4 class="font-semibold text-gray-800">${meal.name}</h4>
                <p class="text-xs text-gray-600">${meal.type} • ${meal.time}</p>
            </div>
            <div class="text-right">
                <p class="font-bold text-orange-500">${meal.calories}</p>
                <p class="text-xs text-gray-600">cal</p>
            </div>
        </div>
    `).join('');
}

function saveNutritionData() {
    localStorage.setItem('nutritionData', JSON.stringify(nutritionData));
}

// ==========================================
// EXERCISES
// ==========================================
function initExercises() {
    // Exercise filtering already handled in pages.js
}

window.filterExercises = function(category) {
    const sections = document.querySelectorAll('.exercise-section');
    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    sections.forEach(section => {
        if (category === 'all' || section.dataset.category === category) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Format time
function formatTime(time24) {
    const [hours, minutes] = time24.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
}

// ==========================================
// HOME PAGE - PRAYER TIMES & HEALTH STATS
// ==========================================
let homePrayerData = null;
let homePrayerInterval = null;

function initHomePage() {
    loadHomePrayerTimes();
    loadHomeHealthStats();
}

function loadHomeHealthStats() {
    // Steps
    const stepSaved = localStorage.getItem('stepData');
    if (stepSaved) {
        const d = JSON.parse(stepSaved);
        const el = document.getElementById('home-steps');
        if (el) el.textContent = (d.count || 0).toLocaleString();
    }
    // Water
    const waterSaved = localStorage.getItem('waterData');
    if (waterSaved) {
        const d = JSON.parse(waterSaved);
        const el = document.getElementById('home-water');
        if (el) el.textContent = (d.glasses || 0) + '/' + (d.goal || 8);
    }
    // Sleep
    const sleepSaved = localStorage.getItem('sleepData');
    if (sleepSaved) {
        const d = JSON.parse(sleepSaved);
        const el = document.getElementById('home-sleep');
        if (el) el.textContent = (d.hours || 0) + 'h';
    }
    // Calories
    const nutritionSaved = localStorage.getItem('nutritionData');
    if (nutritionSaved) {
        const d = JSON.parse(nutritionSaved);
        const el = document.getElementById('home-calories');
        if (el) el.textContent = (d.calories || 0).toLocaleString();
    }
}

function loadHomePrayerTimes() {
    if (homePrayerInterval) clearInterval(homePrayerInterval);

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const date = new Date();
                    const response = await fetch(`https://api.aladhan.com/v1/timings/${Math.floor(date.getTime()/1000)}?latitude=${lat}&longitude=${lng}&method=2`);
                    const data = await response.json();

                    if (data.code === 200) {
                        homePrayerData = data.data;
                        // Show Hijri date
                        const hijri = data.data.date.hijri;
                        const hijriEl = document.getElementById('home-hijri-date');
                        if (hijriEl) hijriEl.textContent = `${hijri.day} ${hijri.month.en} ${hijri.year} AH`;

                        updateHomePrayerCountdown();
                        homePrayerInterval = setInterval(updateHomePrayerCountdown, 1000);
                    }
                } catch (e) {
                    console.error('Home prayer times error:', e);
                    const el = document.getElementById('home-next-prayer');
                    if (el) el.textContent = 'Enable location';
                }
            },
            () => {
                const el = document.getElementById('home-next-prayer');
                if (el) el.textContent = 'Enable location';
            }
        );
    }
}

function updateHomePrayerCountdown() {
    if (!homePrayerData) return;
    const timings = homePrayerData.timings;
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    const now = new Date();

    let nextPrayer = null;
    let nextTime = null;

    for (const name of prayers) {
        const [h, m] = timings[name].split(':').map(Number);
        const prayerDate = new Date(now);
        prayerDate.setHours(h, m, 0, 0);
        if (prayerDate > now) {
            nextPrayer = name;
            nextTime = prayerDate;
            break;
        }
    }

    if (!nextPrayer) {
        // All prayers done, show tomorrow's Fajr
        nextPrayer = 'Fajr';
        const [h, m] = timings.Fajr.split(':').map(Number);
        nextTime = new Date(now);
        nextTime.setDate(nextTime.getDate() + 1);
        nextTime.setHours(h, m, 0, 0);
    }

    const diff = nextTime - now;
    const hours = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    const nameEl = document.getElementById('home-next-prayer');
    const countdownEl = document.getElementById('home-prayer-countdown');
    const progressEl = document.getElementById('home-prayer-progress');

    if (nameEl) nameEl.textContent = nextPrayer;
    if (countdownEl) countdownEl.textContent = `${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

    // Progress bar (out of 24 hours cycle)
    if (progressEl) {
        const totalMs = 24 * 60 * 60 * 1000;
        const elapsed = totalMs - diff;
        progressEl.style.width = Math.min((elapsed / totalMs) * 100, 100) + '%';
    }
}

// ==========================================
// QURAN READER
// ==========================================
let currentSurahNum = 0;
let currentQuranLang = 'en.asad';

window.switchQuranTab = function(tab) {
    const surahList = document.getElementById('surah-list');
    const juzList = document.getElementById('juz-list');
    const tabSurah = document.getElementById('tab-surah');
    const tabJuz = document.getElementById('tab-juz');

    if (tab === 'surah') {
        if (surahList) surahList.classList.remove('hidden');
        if (juzList) juzList.classList.add('hidden');
        if (tabSurah) tabSurah.classList.add('active');
        if (tabJuz) tabJuz.classList.remove('active');
    } else {
        if (surahList) surahList.classList.add('hidden');
        if (juzList) juzList.classList.remove('hidden');
        if (tabSurah) tabSurah.classList.remove('active');
        if (tabJuz) tabJuz.classList.add('active');
    }
};

window.changeQuranLang = function() {
    const sel = document.getElementById('quran-lang');
    if (sel) {
        currentQuranLang = sel.value;
        if (currentSurahNum > 0) openQuranReader(currentSurahNum);
    }
};

window.openQuranReader = async function(surahNum) {
    currentSurahNum = surahNum;
    const surahList = document.getElementById('surah-list');
    const juzList = document.getElementById('juz-list');
    const reader = document.getElementById('surah-reader');
    const searchBar = document.querySelector('.search-bar');
    const tabs = document.querySelector('#tab-surah')?.parentElement;
    if (surahList) surahList.classList.add('hidden');
    if (juzList) juzList.classList.add('hidden');
    if (searchBar) searchBar.classList.add('hidden');
    if (tabs) tabs.classList.add('hidden');
    if (reader) reader.classList.remove('hidden');

    // Use quranMeta for proper Arabic names
    const meta = window.DATA.quranMeta;
    const metaSurah = meta ? meta.surahs.find(s => s.number === surahNum) : null;
    const fallbackSurah = window.DATA.surahs.find(s => s.num === surahNum);

    if (metaSurah) {
        document.getElementById('reader-surah-name').textContent = metaSurah.transliteration;
        document.getElementById('reader-surah-info').textContent = `${metaSurah.englishName} • ${metaSurah.verses} Verses • ${metaSurah.revelation}`;
        document.getElementById('reader-surah-arabic').textContent = metaSurah.name;
    } else if (fallbackSurah) {
        document.getElementById('reader-surah-name').textContent = fallbackSurah.n;
        document.getElementById('reader-surah-info').textContent = `${fallbackSurah.tr} • ${fallbackSurah.v} Verses`;
        document.getElementById('reader-surah-arabic').textContent = fallbackSurah.ar;
    }

    document.getElementById('prev-surah-btn').disabled = surahNum <= 1;
    document.getElementById('next-surah-btn').disabled = surahNum >= 114;

    // Set language dropdown
    const langSel = document.getElementById('quran-lang');
    if (langSel) langSel.value = currentQuranLang;

    document.getElementById('reader-content').innerHTML = `
        <div class="text-center py-8">
            <i class="fas fa-spinner fa-spin text-3xl mb-3" style="color:#0D7C66;"></i>
            <p style="color:#6B7280;">Loading Surah ${surahNum}...</p>
        </div>
    `;

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/editions/quran-uthmani,${currentQuranLang}`);
        const data = await response.json();

        if (data.code === 200 && data.data && data.data.length >= 2) {
            const arabicAyahs = data.data[0].ayahs;
            const transAyahs = data.data[1].ayahs;
            const isRTL = currentQuranLang.startsWith('ur') || currentQuranLang.startsWith('fa') || currentQuranLang.startsWith('ar');

            let html = '';
            if (surahNum !== 1 && surahNum !== 9) {
                html += `<div class="text-center py-4 mb-4"><p class="text-2xl font-arabic" style="line-height:2;color:#0D7C66;">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p><p class="text-xs mt-1" style="color:#9CA3AF;">In the name of Allah, the Most Gracious, the Most Merciful</p></div>`;
            }

            html += '<div class="space-y-4">';
            arabicAyahs.forEach((ayah, i) => {
                const trans = transAyahs[i];
                html += `
                    <div class="islamic-card">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style="background:rgba(13,124,102,0.08);">
                                <span class="text-xs font-bold" style="color:#0D7C66;">${ayah.numberInSurah}</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-xl font-arabic text-right leading-loose mb-3" style="direction:rtl;line-height:2.5;color:#0A5C4F;">${ayah.text}</p>
                                <p class="text-sm leading-relaxed ${isRTL ? 'font-urdu' : ''}" style="color:#4B5563;${isRTL ? 'direction:rtl;text-align:right;line-height:2;' : ''}">${trans ? trans.text : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';

            document.getElementById('reader-content').innerHTML = html;
        } else {
            throw new Error('Invalid API response');
        }
    } catch (e) {
        console.error('Error loading surah:', e);
        document.getElementById('reader-content').innerHTML = `
            <div class="text-center py-8">
                <i class="fas fa-exclamation-circle text-3xl mb-3" style="color:#EF4444;"></i>
                <p class="mb-3" style="color:#6B7280;">Failed to load Surah. Check your internet connection.</p>
                <button onclick="openQuranReader(${surahNum})" class="px-6 py-2 text-white rounded-lg" style="background:#0D7C66;">Retry</button>
            </div>
        `;
    }
};

window.openJuzReader = async function(juzNum) {
    const meta = window.DATA.quranMeta;
    if (!meta) return;
    const juz = meta.juzInfo.find(j => j.number === juzNum);
    if (!juz) return;
    // Open the first surah of this juz
    openQuranReader(juz.startSurah);
};

window.closeQuranReader = function() {
    const surahList = document.getElementById('surah-list');
    const juzList = document.getElementById('juz-list');
    const reader = document.getElementById('surah-reader');
    const searchBar = document.querySelector('.search-bar');
    const tabs = document.querySelector('#tab-surah')?.parentElement;

    // Show whichever tab was active
    const tabSurah = document.getElementById('tab-surah');
    if (tabSurah && tabSurah.classList.contains('active')) {
        if (surahList) surahList.classList.remove('hidden');
    } else {
        if (juzList) juzList.classList.remove('hidden');
    }
    if (searchBar) searchBar.classList.remove('hidden');
    if (tabs) tabs.classList.remove('hidden');
    if (reader) reader.classList.add('hidden');
};

window.prevSurah = function() {
    if (currentSurahNum > 1) openQuranReader(currentSurahNum - 1);
};

window.nextSurah = function() {
    if (currentSurahNum < 114) openQuranReader(currentSurahNum + 1);
};

window.filterSurahs = function(query) {
    const items = document.querySelectorAll('.surah-item');
    const searchQuery = query.toLowerCase();
    items.forEach(item => {
        const name = item.dataset.name;
        const number = item.dataset.number;
        item.style.display = (name.includes(searchQuery) || number.includes(searchQuery)) ? '' : 'none';
    });
};

// ==========================================
// DUAS - LANGUAGE TOGGLE & HELPERS
// ==========================================
let duaLang = 'en';
let allDuaItems = [];

window.setDuaLang = function(lang) {
    duaLang = lang;
    const buttons = document.querySelectorAll('#lang-toggle button');
    buttons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('bg-primary-main', 'text-white');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('bg-primary-main', 'text-white');
            btn.classList.add('text-gray-600');
        }
    });

    // Toggle EN/UR text
    document.querySelectorAll('.dua-title-en').forEach(el => el.classList.toggle('hidden', lang === 'ur'));
    document.querySelectorAll('.dua-title-ur').forEach(el => el.classList.toggle('hidden', lang === 'en'));
    document.querySelectorAll('.dua-trans-en').forEach(el => el.classList.toggle('hidden', lang === 'ur'));
    document.querySelectorAll('.dua-trans-ur').forEach(el => el.classList.toggle('hidden', lang === 'en'));
    document.querySelectorAll('.dua-benefit-en').forEach(el => el.classList.toggle('hidden', lang === 'ur'));
    document.querySelectorAll('.dua-benefit-ur').forEach(el => el.classList.toggle('hidden', lang === 'en'));
};

window.filterDuaCategory = function(category) {
    const items = document.querySelectorAll('.dua-item');
    const buttons = document.querySelectorAll('#dua-categories .category-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    items.forEach(item => {
        item.style.display = (category === 'all' || item.dataset.category === category) ? '' : 'none';
    });
};

window.copyDua = function(idx) {
    const items = document.querySelectorAll('.dua-item');
    const item = items[idx];
    if (!item) return;
    const arabic = item.querySelector('.font-arabic')?.textContent?.trim() || '';
    const trans = item.querySelector('.dua-trans-en')?.textContent?.trim() || '';
    const text = arabic + '\n\n' + trans;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        showToast('Could not copy');
    });
};

window.shareDua = function(idx) {
    const items = document.querySelectorAll('.dua-item');
    const item = items[idx];
    if (!item) return;
    const arabic = item.querySelector('.font-arabic')?.textContent?.trim() || '';
    const trans = item.querySelector('.dua-trans-en')?.textContent?.trim() || '';
    const text = arabic + '\n\n' + trans + '\n\n— MuslimFit Pro';
    if (navigator.share) {
        navigator.share({ text: text }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => showToast('Copied for sharing!'));
    }
};

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-sm z-50 shadow-lg';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ==========================================
// HADITH CHAPTER READER
// ==========================================
let currentHadithBook = '';
let currentHadithChapter = 1;

window.openHadithBook = async function(bookSlug) {
    currentHadithBook = bookSlug;
    const booksList = document.getElementById('hadith-books-list');
    const chaptersDiv = document.getElementById('hadith-chapters');
    if (booksList) booksList.classList.add('hidden');
    if (chaptersDiv) chaptersDiv.classList.remove('hidden');

    const book = window.DATA.hadithBooks.find(b => b.bookSlug === bookSlug);
    if (book) {
        document.getElementById('hadith-book-title').textContent = book.bookName;
        document.getElementById('hadith-book-info').textContent = `${book.chapters_count} Chapters • ${book.hadiths_count} Hadiths`;
    }

    document.getElementById('hadith-chapters-list').innerHTML = '<div class="text-center py-8"><i class="fas fa-spinner fa-spin text-3xl" style="color:#0D7C66;"></i><p class="mt-2" style="color:#6B7280;">Loading chapters...</p></div>';

    try {
        const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${bookSlug}.json`);
        const data = await res.json();
        if (data && data.hadiths) {
            window._hadithData = data.hadiths;
            // Group by chapter
            const chapters = {};
            data.hadiths.forEach(h => {
                const ch = h.reference ? h.reference.book : (Math.floor(h.hadithnumber / 100) + 1);
                if (!chapters[ch]) chapters[ch] = [];
                chapters[ch].push(h);
            });
            window._hadithChapters = chapters;
            const chapterKeys = Object.keys(chapters);

            let html = '';
            chapterKeys.forEach((ch, i) => {
                const count = chapters[ch].length;
                html += `<div class="islamic-card cursor-pointer hover:shadow-lg transition-all" onclick="openHadithChapter('${ch}',${i})">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(13,124,102,0.08);">
                                <span class="text-sm font-bold" style="color:#0D7C66;">${i + 1}</span>
                            </div>
                            <div>
                                <p class="font-bold" style="color:#1F2937;">Chapter ${ch}</p>
                                <p class="text-xs" style="color:#6B7280;">${count} Hadiths</p>
                            </div>
                        </div>
                        <i class="fas fa-chevron-right text-sm" style="color:#9CA3AF;"></i>
                    </div>
                </div>`;
            });
            document.getElementById('hadith-chapters-list').innerHTML = html;
        }
    } catch (e) {
        document.getElementById('hadith-chapters-list').innerHTML = `<div class="text-center py-8"><i class="fas fa-exclamation-circle text-3xl" style="color:#EF4444;"></i><p class="mt-2" style="color:#6B7280;">Failed to load. Check internet connection.</p><button onclick="openHadithBook('${bookSlug}')" class="mt-3 px-6 py-2 text-white rounded-lg" style="background:#0D7C66;">Retry</button></div>`;
    }
};

window.openHadithChapter = function(chapterKey, index) {
    currentHadithChapter = index;
    const chapters = window._hadithChapters;
    if (!chapters) return;

    const chaptersDiv = document.getElementById('hadith-chapters');
    const readerDiv = document.getElementById('hadith-reader');
    if (chaptersDiv) chaptersDiv.classList.add('hidden');
    if (readerDiv) readerDiv.classList.remove('hidden');

    const chapterKeys = Object.keys(chapters);
    const hadiths = chapters[chapterKey];

    document.getElementById('hadith-chapter-title').textContent = `Chapter ${chapterKey}`;
    document.getElementById('hadith-chapter-info').textContent = `${hadiths.length} Hadiths`;

    document.getElementById('prev-chapter-btn').disabled = index <= 0;
    document.getElementById('next-chapter-btn').disabled = index >= chapterKeys.length - 1;

    let html = '';
    hadiths.forEach(h => {
        html += `<div class="islamic-card">
            <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style="background:rgba(13,124,102,0.08);">
                    <span class="text-xs font-bold" style="color:#0D7C66;">${h.hadithnumber || ''}</span>
                </div>
                <div class="flex-1">
                    <p class="text-sm leading-relaxed" style="color:#374151;">${h.text || ''}</p>
                    ${h.grades && h.grades.length > 0 ? `<p class="text-xs mt-2" style="color:#D4AF37;"><i class="fas fa-check-circle mr-1"></i>${h.grades[0].grade || ''}</p>` : ''}
                </div>
            </div>
        </div>`;
    });
    document.getElementById('hadith-content').innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.closeHadithBook = function() {
    document.getElementById('hadith-books-list').classList.remove('hidden');
    document.getElementById('hadith-chapters').classList.add('hidden');
};

window.closeHadithReader = function() {
    document.getElementById('hadith-chapters').classList.remove('hidden');
    document.getElementById('hadith-reader').classList.add('hidden');
};

window.prevHadithChapter = function() {
    if (currentHadithChapter > 0) {
        const keys = Object.keys(window._hadithChapters);
        openHadithChapter(keys[currentHadithChapter - 1], currentHadithChapter - 1);
    }
};

window.nextHadithChapter = function() {
    const keys = Object.keys(window._hadithChapters);
    if (currentHadithChapter < keys.length - 1) {
        openHadithChapter(keys[currentHadithChapter + 1], currentHadithChapter + 1);
    }
};

// ==========================================
// QURAN AUDIO PLAYER
// ==========================================
let quranAudio = null;
let qpCurrentSurah = 0;
let qpCurrentReciter = 0;
let qpProgressInterval = null;
let qpPlaybackSpeed = 1.0;
const QP_SPEEDS = [0.5, 0.75, 1.0, 1.25, 1.5];
const QP_RECITERS = [
    {id:2,name:'Abdul Basit',server:'https://server7.mp3quran.net/basit/'},
    {id:221,name:'Raad Al Kurdi',server:'https://server6.mp3quran.net/kurdi/'},
    {id:3,name:'Mishary Alafasy',server:'https://server8.mp3quran.net/afs/'},
    {id:4,name:'Abdur-Rahman As-Sudais',server:'https://server11.mp3quran.net/sds/'},
    {id:5,name:'Mahmoud Al-Husary',server:'https://server13.mp3quran.net/husr/'},
    {id:6,name:'Al-Minshawi',server:'https://server10.mp3quran.net/minsh/'},
    {id:7,name:'Saud Al-Shuraim',server:'https://server12.mp3quran.net/shr/'},
    {id:8,name:'Saad Al-Ghamdi',server:'https://server7.mp3quran.net/s_gmd/'}
];

function initQuranPlayer() {
    // Restore last played
    const last = localStorage.getItem('qp_last_surah');
    if (last) qpCurrentSurah = parseInt(last);
}

window.selectReciter = function(idx) {
    qpCurrentReciter = idx;
    document.querySelectorAll('.reciter-card').forEach((c, i) => {
        c.classList.toggle('active', i === idx);
    });
    if (qpCurrentSurah > 0) playQuranSurah(qpCurrentSurah);
};

window.playQuranSurah = function(surahNum) {
    qpCurrentSurah = surahNum;
    localStorage.setItem('qp_last_surah', surahNum);

    const reciter = QP_RECITERS[qpCurrentReciter];
    const paddedNum = String(surahNum).padStart(3, '0');
    const url = reciter.server + paddedNum + '.mp3';

    // Show player
    const player = document.getElementById('qp-player');
    if (player) player.classList.remove('hidden');

    // Update info
    const meta = window.DATA.quranMeta;
    const s = meta ? meta.surahs.find(x => x.number === surahNum) : window.DATA.surahs.find(x => x.num === surahNum);
    document.getElementById('qp-surah-name').textContent = s ? (s.transliteration || s.n) : `Surah ${surahNum}`;
    document.getElementById('qp-reciter-name').textContent = reciter.name;

    // Stop current
    if (quranAudio) {
        quranAudio.pause();
        quranAudio = null;
    }
    if (qpProgressInterval) clearInterval(qpProgressInterval);

    // Create audio
    quranAudio = new Audio(url);
    quranAudio.playbackRate = qpPlaybackSpeed;

    quranAudio.addEventListener('loadedmetadata', () => {
        document.getElementById('qp-duration').textContent = formatTime(quranAudio.duration);
        document.getElementById('qp-progress').max = Math.floor(quranAudio.duration);
    });

    quranAudio.addEventListener('ended', () => {
        document.getElementById('qp-play-icon').className = 'fas fa-play text-xl';
        if (qpProgressInterval) clearInterval(qpProgressInterval);
        // Auto-play next
        if (qpCurrentSurah < 114) {
            qpNextSurah();
        }
    });

    quranAudio.play().then(() => {
        document.getElementById('qp-play-icon').className = 'fas fa-pause text-xl';
        qpProgressInterval = setInterval(updateQPProgress, 500);
    }).catch(() => {
        showToast('Could not play audio. Check connection.');
    });
};

function updateQPProgress() {
    if (!quranAudio) return;
    const cur = document.getElementById('qp-current-time');
    const prog = document.getElementById('qp-progress');
    if (cur) cur.textContent = formatTime(quranAudio.currentTime);
    if (prog) prog.value = Math.floor(quranAudio.currentTime);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
}

window.togglePlayPause = function() {
    if (!quranAudio) return;
    if (quranAudio.paused) {
        quranAudio.play();
        document.getElementById('qp-play-icon').className = 'fas fa-pause text-xl';
        qpProgressInterval = setInterval(updateQPProgress, 500);
    } else {
        quranAudio.pause();
        document.getElementById('qp-play-icon').className = 'fas fa-play text-xl';
        if (qpProgressInterval) clearInterval(qpProgressInterval);
    }
};

window.seekAudio = function(val) {
    if (quranAudio) quranAudio.currentTime = parseFloat(val);
};

window.cyclePlaybackSpeed = function() {
    const idx = QP_SPEEDS.indexOf(qpPlaybackSpeed);
    qpPlaybackSpeed = QP_SPEEDS[(idx + 1) % QP_SPEEDS.length];
    if (quranAudio) quranAudio.playbackRate = qpPlaybackSpeed;
    document.getElementById('qp-speed-btn').textContent = qpPlaybackSpeed + 'x';
};

window.qpPrevSurah = function() {
    if (qpCurrentSurah > 1) playQuranSurah(qpCurrentSurah - 1);
};

window.qpNextSurah = function() {
    if (qpCurrentSurah < 114) playQuranSurah(qpCurrentSurah + 1);
};

window.switchQPTab = function(tab) {
    const popular = document.getElementById('qp-popular-list');
    const all = document.getElementById('qp-all-list');
    const tabPop = document.getElementById('qp-tab-popular');
    const tabAll = document.getElementById('qp-tab-all');
    if (tab === 'popular') {
        if (popular) popular.classList.remove('hidden');
        if (all) all.classList.add('hidden');
        if (tabPop) tabPop.classList.add('active');
        if (tabAll) tabAll.classList.remove('active');
    } else {
        if (popular) popular.classList.add('hidden');
        if (all) all.classList.remove('hidden');
        if (tabPop) tabPop.classList.remove('active');
        if (tabAll) tabAll.classList.add('active');
    }
};

// ==========================================
// RAMADAN TRACKER FUNCTIONS
// ==========================================
window.openRamadanModal = function(type) {
    const modal = document.getElementById('ramadan-' + type + '-modal');
    if (modal) modal.classList.remove('hidden');
};

window.closeRamadanModal = function(type) {
    const modal = document.getElementById('ramadan-' + type + '-modal');
    if (modal) modal.classList.add('hidden');
};

window.toggleRamadanDay = function(type, day) {
    const key = type === 'fasting' ? 'ramadan_fasts' : 'ramadan_taraweeh';
    let saved = JSON.parse(localStorage.getItem(key) || '[]');
    if (saved.includes(day)) {
        saved = saved.filter(d => d !== day);
    } else {
        saved.push(day);
    }
    localStorage.setItem(key, JSON.stringify(saved));
    // Re-render page
    navigateToPage('ramadan');
    setTimeout(() => openRamadanModal(type), 100);
};

window.setRamadanCurrency = function(code) {
    localStorage.setItem('ramadan_currency', code);
    navigateToPage('ramadan');
    setTimeout(() => openRamadanModal('charity'), 100);
};

window.addCharityDonation = function() {
    const amountEl = document.getElementById('charity-amount');
    const descEl = document.getElementById('charity-desc');
    const amount = parseFloat(amountEl?.value);
    if (!amount || amount <= 0) { showToast('Enter a valid amount'); return; }

    const currency = localStorage.getItem('ramadan_currency') || 'USD';
    const currencies = {USD:'$',EUR:'€',GBP:'£',SAR:'SR',AED:'د.إ',PKR:'₨',INR:'₹'};
    const saved = JSON.parse(localStorage.getItem('ramadan_charity') || '[]');
    saved.push({ amount, desc: descEl?.value || '', symbol: currencies[currency] || '$', date: new Date().toISOString() });
    localStorage.setItem('ramadan_charity', JSON.stringify(saved));
    showToast('Charity added!');
    navigateToPage('ramadan');
    setTimeout(() => openRamadanModal('charity'), 100);
};

window.removeCharity = function(idx) {
    const saved = JSON.parse(localStorage.getItem('ramadan_charity') || '[]');
    saved.splice(idx, 1);
    localStorage.setItem('ramadan_charity', JSON.stringify(saved));
    navigateToPage('ramadan');
    setTimeout(() => openRamadanModal('charity'), 100);
};

function initRamadanTracker() {
    // Load Sehri/Iftar times
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            try {
                const date = new Date();
                const res = await fetch(`https://api.aladhan.com/v1/timings/${Math.floor(date.getTime()/1000)}?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&method=2`);
                const data = await res.json();
                if (data.code === 200) {
                    const t = data.data.timings;
                    const sehri = document.getElementById('ramadan-sehri');
                    const iftar = document.getElementById('ramadan-iftar');
                    if (sehri) sehri.textContent = t.Fajr;
                    if (iftar) iftar.textContent = t.Maghrib;
                }
            } catch (e) { /* silent */ }
        });
    }

    // Countdown timer for pre-Ramadan
    const ramadanStart = new Date(2026, 1, 19);
    const now = new Date();
    if (now < ramadanStart) {
        setInterval(() => {
            const diff = ramadanStart - new Date();
            if (diff <= 0) return;
            const days = Math.floor(diff / 86400000);
            const hours = Math.floor((diff % 86400000) / 3600000);
            const mins = Math.floor((diff % 3600000) / 60000);
            const secs = Math.floor((diff % 60000) / 1000);
            const dEl = document.getElementById('ramadan-countdown-days');
            const hEl = document.getElementById('ramadan-countdown-hours');
            const mEl = document.getElementById('ramadan-countdown-mins');
            const sEl = document.getElementById('ramadan-countdown-secs');
            if (dEl) dEl.textContent = days;
            if (hEl) hEl.textContent = hours;
            if (mEl) mEl.textContent = mins;
            if (sEl) sEl.textContent = secs;
        }, 1000);
    }
}

// ==========================================
// PROPHET NAMES FUNCTIONS
// ==========================================
let prophetFontSize = 18;

window.changeProphetFontSize = function(delta) {
    prophetFontSize = Math.max(14, Math.min(28, prophetFontSize + delta));
    document.getElementById('prophet-font-size').textContent = prophetFontSize;
    document.querySelectorAll('.prophet-arabic-name').forEach(el => {
        el.style.fontSize = (prophetFontSize + 4) + 'px';
    });
};

window.filterProphetNames = function(query) {
    const items = document.querySelectorAll('.prophet-name-card');
    const q = query.toLowerCase();
    items.forEach(card => {
        const search = card.dataset.search || '';
        card.style.display = search.includes(q) ? '' : 'none';
    });
};

window.copyProphetName = function(number) {
    const names = window.DATA.prophetNames;
    const name = names.find(n => n.number === number);
    if (!name) return;
    const text = `${name.number}. ${name.arabic}\n${name.transliteration}\n${name.english}\n${name.urdu}\n\nNames of Prophet Muhammad ﷺ`;
    navigator.clipboard.writeText(text).then(() => showToast('Copied!')).catch(() => {});
};

window.shareProphetName = function(number) {
    const names = window.DATA.prophetNames;
    const name = names.find(n => n.number === number);
    if (!name) return;
    const text = `${name.number}. ${name.arabic}\n${name.transliteration}\n${name.english}\n${name.urdu}\n\nNames of Prophet Muhammad ﷺ — MuslimFit Pro`;
    if (navigator.share) {
        navigator.share({ text }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => showToast('Copied for sharing!'));
    }
};

window.copyAllProphetNames = function() {
    const names = window.DATA.prophetNames;
    let text = 'Names of Prophet Muhammad ﷺ\n\n';
    names.forEach(n => {
        text += `${n.number}. ${n.arabic} - ${n.transliteration} - ${n.english}\n`;
    });
    text += '\n— MuslimFit Pro';
    navigator.clipboard.writeText(text).then(() => showToast('All names copied!')).catch(() => {});
};

// Export functions for global access
window.navigateToPage = navigateToPage;

console.log('✅ MuslimFit Pro App Initialized!');
