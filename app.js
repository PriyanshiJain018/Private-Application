// ================================
// CONFIGURATION - CUSTOMIZE HERE!
// ================================
const CONFIG = {
    name: "Anmol",                          // His name
    yourName: "Priyanshi",                      // Your name (for the certificate)
    
    googleScriptURL: "https://script.google.com/macros/s/AKfycbwydRI62if1VW3GBIstP2fh4I-qQytK_DCKFtEkLAsC24Qpz-Y5DNjw_atprbMnaEAYPQ/exec",                  // Your Google Script URL
    
    // ================================
    // 🎁 FINAL SURPRISE — GIFT BOX REVEAL
    // This appears after the certificate!
    // ================================
    giftBox: {
        // Add a photo of you two! (put the image file in same folder, or use a URL)
        // Leave empty "" for no photo (will show emoji instead)
        photoURL: "our-photo.jpg",  // e.g., "our-photo.jpg" or "https://i.imgur.com/xxx.jpg"
        
        // Your personal message that appears with the photo
        message: `Jodi toh jhakkas dikh rahi hai
        
Let's experience adventures together and many lazy Sundays.

Excited for the journey ahead`,
        
        // Signature
        signature: "Batman Fan"
    },
    
    // ================================
    // QUESTIONS WITH WITTY REMARKS
    // ================================
    engagementMonth: {
        correct: "October",
        options: ["August", "September", "October", "I plead the fifth"],
        wrongRemarks: [
            "Interesting. The calendar disagrees, but sure.",
            "Our engagement certificate just shed a tear.",
            "I'll pretend I didn't see that.",
            "Hmm, selective memory detected."
        ],
        hint: "Think Diwali... 🍂"
    },
    
    // ================================
    // TEXT INPUT QUIZ QUESTIONS
    // ================================
    textQuestions: {
        priyanshiBirthday: {
            question: "Priyanshi's birthday is:",
            placeholder: "e.g., 15th March"
        },
        bestNickname: {
            question: "Best nickname you've heard till now for you:",
            placeholder: "Type the nickname..."
        }
    },
    
    firstDate: {
        correct: "Temple",
        options: ["Cafe", "Restaurant", "Movie theater", "Temple"],
        wrongRemarks: [
            "Were we on the same date?",
            "I think you're thinking of a different person...",
            "Concerning. Very concerning.",
            "Should I be worried?"
        ],
        hint: "It is something different from normal couples"
    },
    
    favoriteFood: {
        correct: "Pizza",
        options: ["Pizza", "Pasta", "Sushi", "Biryani"],
        wrongRemarks: [
            "And you call yourself my partner?",
            "We need to have a serious conversation.",
            "How many times have I ordered this in front of you?",
            "*dramatically gasps*"
        ],
        hint: "We ordered it for breakfast on our first date"
    },
    
    betterCook: {
        correct: "We're both disasters",
        options: ["Me, obviously", "You are", "We're both disasters", "Zomato is"],
        wrongRemarks: [
            "Wrong answer, but I admire the confidence.",
            "I'll remember this next time I cook.",
            "Delusion is strong with this one.",
            "At least you're honest... wait, no."
        ],
        hint: "Flattery will get you everywhere 😉"
    },
    
    birthdayQuarter: {
        correct: "Q4",
        options: ["Q1", "Q2", "Q3", "Q4"],
        wrongRemarks: [
            "You forgot your own birthday quarter?",
            "This is literally about YOU.",
            "I'm concerned now.",
            "Do you need me to send you a calendar invite?"
        ],
        hint: "When do I buy your gift? 🎁"
    },

    // ================================
    // FUN LOADING MESSAGES
    // ================================
    loadingMessages: [
        "Calculating love coefficient...",
        "Scanning for red flags... none found ✓",
        "Measuring heart compatibility...",
        "Consulting the universe...",
        "Analyzing fun potential...",
        "Processing inside jokes...",
        "Evaluating snack sharing habits...",
        "Computing future adventures..."
    ],

    // ================================
    // SWIPE CARDS
    // ================================
    swipeCards: [
        "Long walks",
        "Last-minute plans",
        "Talking about ideas",
        "Rewatching things",
        "Silence without awkwardness",
        "Staying in on weekends",
        "Deep conversations till 4am",
        "Wearing matching outfits"
    ],

    // ================================
    // THIS OR THAT QUESTIONS
    // ================================
    thisOrThat: [
        { optionA: "Coffee ☕", optionB: "Chai 🍵" },
        { optionA: "Mountains 🏔️", optionB: "Beach 🏖️" },
        { optionA: "Call 📞", optionB: "Text 💬" },
        { optionA: "Early bird 🌅", optionB: "Night owl 🦉" },
        { optionA: "Plan everything 📋", optionB: "Wing it 🎲" },
        { optionA: "Cook at home 🍳", optionB: "Eat out 🍽️" }
    ],
    
    // ================================
    // DECODE YOURSELF QUESTIONS
    // ================================
    decodeQuestions: [
        {
            id: 'stressed',
            question: "When I'm stressed, I secretly want you to:",
            options: [
                { emoji: "🤗", text: "Just hold me" },
                { emoji: "🍕", text: "Feed me" },
                { emoji: "😶", text: "Exist nearby, silently" },
                { emoji: "🗣️", text: "Let me rant" }
            ]
        },
        {
            id: 'loveLanguage',
            question: "My love language is actually:",
            options: [
                { emoji: "📱", text: "Sending memes at 1am" },
                { emoji: "☕", text: "Making you chai/coffee" },
                { emoji: "👀", text: "Remembering tiny details" },
                { emoji: "🛋️", text: "Parallel existing" }
            ]
        },
        {
            id: 'peaceOffering',
            question: "After a fight, my peace offering is:",
            options: [
                { emoji: "🍫", text: "Snacks, obviously" },
                { emoji: "🫂", text: "A long hug" },
                { emoji: "😅", text: "Pretend it never happened" },
                { emoji: "💬", text: "A heartfelt text" }
            ]
        },
        {
            id: 'dealbreaker',
            question: "My secret dealbreaker is:",
            options: [
                { emoji: "📵", text: "Ignoring my texts" },
                { emoji: "🍿", text: "Bad movie taste" },
                { emoji: "😤", text: "Not sharing food" },
                { emoji: "🙄", text: "No sense of humor" }
            ]
        }
    ],

    // ================================
    // SECRET LOVE NOTE
    // ================================
    secretLoveNote: `
        To the one and only Batman,
        
        If you're reading this, you found the secret.
        Just like you found your way into my heart.
        
        Every moment with you feels like magic.
        This silly little app? It's just a tiny reflection
        of how much thought I put into us.
        
        You're my favorite notification,
        my best good morning,
        and my favorite "goodnight."
        
        Stay safe tonight,
        — Your person 💕
    `,

    // ================================
    // IDLE MESSAGES PER SCREEN
    // ================================
    idleMessages: {
        0: "Don't be shy... tap Start 👆",
        1: "No wrong answers here... promise 😊",
        2: "Take your time... or don't 😏",
        3: "Trust your gut! 💫",
        4: "There's more ahead... keep going ✨",
        5: "Almost there... 💕",
        6: "The buttons are waiting... 💕",
        7: "Screenshot this! 📸",
        8: "Tap the gift! 🎁",
        9: "Enjoy the credits 🎬"
    }
};

// ================================
// APP STATE
// ================================
const state = {
    currentScreen: 0,
    warmupAnswers: {},
    warmupOtherTexts: {},
    quizAnswers: {},
    decodeAnswers: {},
    currentCard: 0,
    swipeResults: [],
    valentineMode: false,
    finalAnswer: null,
    wrongAttempts: {},
    totalWrongPerQuestion: {},
    konamiProgress: 0,
    secretKeyBuffer: '',
    loadingMessageIndex: 0,
    giftOpened: false,
    // New state for enhancements
    thisOrThatIndex: 0,
    thisOrThatResults: [],
    thisOrThatTimer: null,
    thisOrThatTimeLeft: 5,
    idleTimer: null,
    scratchRevealed: false,
    noButtonAttempts: 0,
    noButtonGone: false
};

const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const SCREENS = {
    LANDING: 0,
    WARMUP: 1,
    QUIZ: 2,
    SWIPE: 3,
    THIS_OR_THAT: 4,
    ANALYSIS: 5,
    DECODE: 6,
    ASK: 7,
    FINALE: 8,
    GIFT: 9,
    CREDITS: 10
};

// ================================
// DOM ELEMENTS
// ================================
const app = document.getElementById('app');
const screenWrapper = document.getElementById('screen-wrapper');
const floatingHearts = document.getElementById('floating-hearts');
const transitionOverlay = document.getElementById('transition-overlay');
const easterEgg = document.getElementById('easter-egg');

// ================================
// HAPTIC FEEDBACK HELPER
// ================================
function haptic(pattern) {
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

// ================================
// IDLE ANIMATION SYSTEM
// ================================
function resetIdleTimer() {
    if (state.idleTimer) clearTimeout(state.idleTimer);
    // Remove any existing idle hint
    const existing = document.querySelector('.idle-hint');
    if (existing) existing.remove();
    
    state.idleTimer = setTimeout(() => {
        showIdleHint();
    }, 15000);
}

function showIdleHint() {
    const msg = CONFIG.idleMessages[state.currentScreen];
    if (!msg) return;
    
    // Don't show during transitions or analyzing
    const existing = document.querySelector('.idle-hint');
    if (existing) existing.remove();
    
    const hint = document.createElement('div');
    hint.className = 'idle-hint';
    hint.textContent = msg;
    document.body.appendChild(hint);
    
    setTimeout(() => {
        if (hint.parentElement) hint.remove();
    }, 4000);
}

// Track interaction for idle timer
['click', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, { passive: true });
});

// ================================
// KEYBOARD SECRETS
// ================================
document.addEventListener('keydown', (e) => {
    // Konami code
    if (e.keyCode === KONAMI_CODE[state.konamiProgress]) {
        state.konamiProgress++;
        if (state.konamiProgress === KONAMI_CODE.length) {
            showKonamiEasterEgg();
            state.konamiProgress = 0;
        }
    } else {
        state.konamiProgress = 0;
    }
    
    // Secret word "iloveyou"
    state.secretKeyBuffer += e.key.toLowerCase();
    if (state.secretKeyBuffer.length > 20) {
        state.secretKeyBuffer = state.secretKeyBuffer.slice(-20);
    }
    if (state.secretKeyBuffer.includes('iloveyou')) {
        showSecretLoveNote();
        state.secretKeyBuffer = '';
    }
});

function showKonamiEasterEgg() {
    createSparkleExplosion();
    showToast("🎮 Achievement Unlocked: True Gamer! +100 Love Points 💕");
}

// ================================
// ANIMATED ENVELOPE LOVE NOTE
// ================================
function showSecretLoveNote() {
    haptic([50, 30, 50]);
    const modal = document.createElement('div');
    modal.className = 'envelope-modal';
    modal.innerHTML = `
        <div class="envelope-container" onclick="openEnvelope(this)">
            <div class="envelope-flap"></div>
            <div class="envelope-body">
                <div class="envelope-seal">💌</div>
                <p class="envelope-tap-hint">Tap to open</p>
            </div>
            <div class="letter-content">
                <div class="letter-paper">
                    <div class="love-note-header">💌 Secret Letter</div>
                    <pre class="love-note-text">${CONFIG.secretLoveNote}</pre>
                    <button class="love-note-close" onclick="event.stopPropagation(); this.closest('.envelope-modal').remove()">
                        Close with love
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openEnvelope(el) {
    if (el.classList.contains('opened')) return;
    el.classList.add('opened');
    haptic(50);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

// ================================
// VISUAL EFFECTS
// ================================
function createConfetti() {
    const colors = ['#e86478', '#f4a4b0', '#ffccd5', '#fff0f3', '#ff8fa3', '#ffb3c1', '#ffd700', '#ff69b4'];
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        if (Math.random() > 0.5) confetti.style.borderRadius = '50%';
        confettiContainer.appendChild(confetti);
    }
    
    document.body.appendChild(confettiContainer);
    setTimeout(() => confettiContainer.remove(), 5000);
}

function createSparkleExplosion() {
    const container = document.createElement('div');
    container.className = 'sparkle-container';
    
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.setProperty('--tx', (Math.random() - 0.5) * 300 + 'px');
        sparkle.style.setProperty('--ty', (Math.random() - 0.5) * 300 + 'px');
        container.appendChild(sparkle);
    }
    
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 1500);
}

function createHeartBurst() {
    const container = document.createElement('div');
    container.className = 'sparkle-container';
    
    const hearts = ['💕', '💗', '💖', '💝', '❤️', '💘'];
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'sparkle';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = (16 + Math.random() * 20) + 'px';
        heart.style.setProperty('--tx', (Math.random() - 0.5) * 400 + 'px');
        heart.style.setProperty('--ty', (Math.random() - 0.5) * 400 + 'px');
        container.appendChild(heart);
    }
    
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 1500);
}

function createFloatingEmoji(emoji, x, y) {
    const el = document.createElement('div');
    el.className = 'floating-emoji';
    el.textContent = emoji;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

// ================================
// NEW: CONFETTI VARIANTS
// ================================
function createGreenSparkle() {
    haptic(50);
    const container = document.createElement('div');
    container.className = 'sparkle-container';
    const emojis = ['✅', '🌟', '⭐', '✨', '💚'];
    for (let i = 0; i < 15; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        s.style.left = '50%';
        s.style.top = '50%';
        s.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        s.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        container.appendChild(s);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 1200);
}

function createEmojiRain(emojis) {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    for (let i = 0; i < 40; i++) {
        const e = document.createElement('div');
        e.className = 'emoji-rain';
        e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        e.style.left = Math.random() * 100 + '%';
        e.style.animationDelay = Math.random() * 2 + 's';
        e.style.animationDuration = (Math.random() * 2 + 2) + 's';
        e.style.fontSize = (16 + Math.random() * 16) + 'px';
        container.appendChild(e);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 4000);
}

function createLockUnlock() {
    const overlay = document.createElement('div');
    overlay.className = 'lock-unlock-overlay';
    overlay.innerHTML = `<div class="lock-icon-anim">🔓</div>`;
    document.body.appendChild(overlay);
    haptic([50, 30, 100]);
    setTimeout(() => overlay.remove(), 1500);
}

// ================================
// CAMERA FLASH EFFECT
// ================================
function createCameraFlash() {
    const flash = document.createElement('div');
    flash.className = 'camera-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 600);
}

// ================================
// DATA COLLECTION
// ================================
function collectAndSendData(valentineAnswer) {
    const data = {
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        
        // Warmup answers (includes "Other: custom text" if they typed one)
        defaultMood: state.warmupAnswers.mood === 'Other' 
            ? 'Other: ' + (state.warmupOtherTexts.mood || '') 
            : (state.warmupAnswers.mood || ''),
        superpower: state.warmupAnswers.superpower === 'Other' 
            ? 'Other: ' + (state.warmupOtherTexts.superpower || '') 
            : (state.warmupAnswers.superpower || ''),
        goodEvening: state.warmupAnswers.evening === 'Other' 
            ? 'Other: ' + (state.warmupOtherTexts.evening || '') 
            : (state.warmupAnswers.evening || ''),
        
        // Quiz answers
        engagementGuess: state.quizAnswers.engagementMonth || '',
        priyanshiBirthday: state.quizAnswers.priyanshiBirthday || '',
        bestNickname: state.quizAnswers.bestNickname || '',
        firstDate: state.quizAnswers.firstDate || '',
        favoriteFood: state.quizAnswers.favoriteFood || '',
        betterCook: state.quizAnswers.betterCook || '',
        birthdayQuarter: state.quizAnswers.birthdayQuarter || '',
        totalWrongAttempts: state.totalWrongAttempts || 0,
        
        // Decode answers
        decodeStressed: state.decodeAnswers?.stressed || '',
        decodeLoveLanguage: state.decodeAnswers?.loveLanguage || '',
        decodePeaceOffering: state.decodeAnswers?.peaceOffering || '',
        decodeDealbreaker: state.decodeAnswers?.dealbreaker || '',
        
        // Individual swipe reactions
        swipe1: state.swipeResults[0] ? state.swipeResults[0].reaction : '',
        swipe2: state.swipeResults[1] ? state.swipeResults[1].reaction : '',
        swipe3: state.swipeResults[2] ? state.swipeResults[2].reaction : '',
        swipe4: state.swipeResults[3] ? state.swipeResults[3].reaction : '',
        swipe5: state.swipeResults[4] ? state.swipeResults[4].reaction : '',
        swipe6: state.swipeResults[5] ? state.swipeResults[5].reaction : '',
        swipe7: state.swipeResults[6] ? state.swipeResults[6].reaction : '',
        swipe8: state.swipeResults[7] ? state.swipeResults[7].reaction : '',
        
        // Individual this-or-that choices
        thisOrThat1: state.thisOrThatAnswers?.[0] || '',
        thisOrThat2: state.thisOrThatAnswers?.[1] || '',
        thisOrThat3: state.thisOrThatAnswers?.[2] || '',
        thisOrThat4: state.thisOrThatAnswers?.[3] || '',
        thisOrThat5: state.thisOrThatAnswers?.[4] || '',
        thisOrThat6: state.thisOrThatAnswers?.[5] || '',
        
        // Final answer
        valentineAnswer: valentineAnswer,
        
        // Readable summaries
        allSwipes: state.swipeResults.map(s => `${s.card}: ${s.reaction}`).join(' | '),
        allThisOrThat: (state.thisOrThatAnswers || []).map((ans, i) => {
            const q = CONFIG.thisOrThat[i];
            return q ? `${q.optionA} vs ${q.optionB}: ${ans}` : '';
        }).filter(Boolean).join(' | ')
    };
    
    if (CONFIG.googleScriptURL) {
        fetch(CONFIG.googleScriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(err => console.log('Silent send failed:', err));
    }
}

function getCollectedData(finalAnswer) {
    const swipeSummary = state.swipeResults.map(r => `${r.reaction} ${r.card}`).join(', ');
    const thisOrThatSummary = state.thisOrThatResults.map(r => r.choice).join(', ');
    
    return {
        timestamp: new Date().toISOString(),
        defaultMood: state.warmupAnswers.mood === 'Other' ? `Other: ${state.warmupOtherTexts.mood || ''}` : (state.warmupAnswers.mood || ''),
        superpower: state.warmupAnswers.superpower === 'Other' ? `Other: ${state.warmupOtherTexts.superpower || ''}` : (state.warmupAnswers.superpower || ''),
        goodEvening: state.warmupAnswers.evening === 'Other' ? `Other: ${state.warmupOtherTexts.evening || ''}` : (state.warmupAnswers.evening || ''),
        engagementGuess: state.quizAnswers.engagement || '',
        priyanshiBirthday: state.quizAnswers.priyanshiBirthday || '',
        bestNickname: state.quizAnswers.bestNickname || '',
        firstDate: state.quizAnswers.firstdate || '',
        favoriteFood: state.quizAnswers.food || '',
        betterCook: state.quizAnswers.cook || '',
        birthdayQuarter: state.quizAnswers.birthday || '',
        totalWrongAttempts: Object.values(state.wrongAttempts).reduce((a, b) => a + b, 0),
        decodeStressed: state.decodeAnswers.stressed || '',
        decodeLoveLanguage: state.decodeAnswers.loveLanguage || '',
        decodePeaceOffering: state.decodeAnswers.peaceOffering || '',
        decodeDealbreaker: state.decodeAnswers.dealbreaker || '',
        swipe1: state.swipeResults[0] ? `${state.swipeResults[0].reaction} ${state.swipeResults[0].card}` : '',
        swipe2: state.swipeResults[1] ? `${state.swipeResults[1].reaction} ${state.swipeResults[1].card}` : '',
        swipe3: state.swipeResults[2] ? `${state.swipeResults[2].reaction} ${state.swipeResults[2].card}` : '',
        swipe4: state.swipeResults[3] ? `${state.swipeResults[3].reaction} ${state.swipeResults[3].card}` : '',
        swipe5: state.swipeResults[4] ? `${state.swipeResults[4].reaction} ${state.swipeResults[4].card}` : '',
        swipe6: state.swipeResults[5] ? `${state.swipeResults[5].reaction} ${state.swipeResults[5].card}` : '',
        swipe7: state.swipeResults[6] ? `${state.swipeResults[6].reaction} ${state.swipeResults[6].card}` : '',
        swipe8: state.swipeResults[7] ? `${state.swipeResults[7].reaction} ${state.swipeResults[7].card}` : '',
        thisOrThat: thisOrThatSummary,
        valentineAnswer: finalAnswer,
        allSwipes: swipeSummary
    };
}

// ================================
// EASTER EGG - Long Press
// ================================
let pressTimer = null;

app.addEventListener('mousedown', startPress);
app.addEventListener('touchstart', startPress);
app.addEventListener('mouseup', endPress);
app.addEventListener('mouseleave', endPress);
app.addEventListener('touchend', endPress);
easterEgg.addEventListener('click', () => easterEgg.classList.add('hidden'));

function startPress(e) {
    if (e.target.tagName === 'BUTTON') return;
    if (e.target.tagName === 'CANVAS') return; // Don't trigger on scratch card
    if (e.target.closest && e.target.closest('.scratch-card-container')) return;
    pressTimer = setTimeout(() => easterEgg.classList.remove('hidden'), 1500);
}

function endPress() {
    if (pressTimer) clearTimeout(pressTimer);
}

// ================================
// FLOATING HEARTS
// ================================
function createFloatingHearts() {
    floatingHearts.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = Math.random() > 0.7 ? '💕' : '♥';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.animationDuration = `${3 + Math.random() * 4}s`;
        heart.style.fontSize = `${12 + Math.random() * 16}px`;
        floatingHearts.appendChild(heart);
    }
}

// ================================
// TRANSITIONS (Enhanced with varied animations)
// ================================
function transitionTo(nextScreen) {
    resetIdleTimer();

    // Warmup → Quiz: slide left
    if (nextScreen === SCREENS.QUIZ && state.currentScreen === SCREENS.WARMUP) {
        screenWrapper.classList.add('slide-out-left');
        setTimeout(() => {
            state.currentScreen = nextScreen;
            renderScreen();
            screenWrapper.classList.remove('slide-out-left');
            screenWrapper.classList.add('slide-in-right');
            setTimeout(() => screenWrapper.classList.remove('slide-in-right'), 500);
        }, 400);
        return;
    }

    // Quiz → Swipe: card flip
    if (nextScreen === SCREENS.SWIPE && state.currentScreen === SCREENS.QUIZ) {
        screenWrapper.classList.add('flip-out');
        setTimeout(() => {
            state.currentScreen = nextScreen;
            renderScreen();
            screenWrapper.classList.remove('flip-out');
            screenWrapper.classList.add('flip-in');
            setTimeout(() => screenWrapper.classList.remove('flip-in'), 600);
        }, 400);
        return;
    }

    // Analysis → Decode: heartbeat fade through dark
    if (nextScreen === SCREENS.DECODE) {
        screenWrapper.classList.add('heartbeat-out');
        setTimeout(() => {
            state.valentineMode = true;
            app.classList.remove('normal-mode');
            app.classList.add('valentine-mode');
            createFloatingHearts();
            floatingHearts.classList.add('active');
            state.currentScreen = nextScreen;
            renderScreen();
            screenWrapper.classList.remove('heartbeat-out');
            screenWrapper.classList.add('heartbeat-in');
            setTimeout(() => screenWrapper.classList.remove('heartbeat-in'), 600);
        }, 500);
        return;
    }
    
    // Decode → Ask: dramatic zoom to darkness
    if (nextScreen === SCREENS.ASK) {
        screenWrapper.classList.add('zoom-out-dark');
        setTimeout(() => {
            transitionOverlay.classList.remove('hidden');
            transitionOverlay.classList.add('animate');
            createSparkleExplosion();
            setTimeout(() => {
                state.currentScreen = nextScreen;
                renderScreen();
                transitionOverlay.classList.add('hidden');
                transitionOverlay.classList.remove('animate');
                screenWrapper.classList.remove('zoom-out-dark');
                screenWrapper.classList.add('zoom-in-reveal');
                setTimeout(() => screenWrapper.classList.remove('zoom-in-reveal'), 600);
            }, 600);
        }, 400);
        return;
    }
    
    if (nextScreen === SCREENS.FINALE) {
        screenWrapper.classList.add('fade-out');
        setTimeout(() => {
            state.currentScreen = nextScreen;
            renderScreen();
            screenWrapper.classList.remove('fade-out');
            setTimeout(() => {
                createConfetti();
                createCameraFlash();
            }, 300);
        }, 300);
        return;
    }
    
    if (nextScreen === SCREENS.GIFT || nextScreen === SCREENS.CREDITS) {
        screenWrapper.classList.add('fade-out');
        setTimeout(() => {
            state.currentScreen = nextScreen;
            renderScreen();
            screenWrapper.classList.remove('fade-out');
        }, 300);
        return;
    }
    
    // Default transition
    screenWrapper.classList.add('fade-out');
    setTimeout(() => {
        state.currentScreen = nextScreen;
        renderScreen();
        screenWrapper.classList.remove('fade-out');
    }, 300);
}

// ================================
// QUIZ HANDLERS
// ================================
function showWittyRemark(questionId, selectedAnswer, configKey) {
    const config = CONFIG[configKey];
    
    if (selectedAnswer === config.correct) {
        return true;
    } else {
        haptic([50, 30, 50]); // double buzz for wrong
        if (!state.wrongAttempts[questionId]) state.wrongAttempts[questionId] = 0;
        if (!state.totalWrongPerQuestion[questionId]) state.totalWrongPerQuestion[questionId] = 0;
        
        state.wrongAttempts[questionId]++;
        state.totalWrongPerQuestion[questionId]++;
        
        const remarkIndex = Math.floor(Math.random() * config.wrongRemarks.length);
        let remark = config.wrongRemarks[remarkIndex];
        
        if (state.totalWrongPerQuestion[questionId] >= 3 && config.hint) {
            remark += `<br><span class="hint">Hint: ${config.hint}</span>`;
        }
        
        const remarkEl = document.getElementById(`remark-${questionId}`);
        if (remarkEl) {
            remarkEl.innerHTML = remark;
            remarkEl.classList.remove('hidden');
            remarkEl.classList.add('shake');
            setTimeout(() => remarkEl.classList.remove('shake'), 500);
        }
        
        return false;
    }
}

function selectQuizAnswer(questionId, answer, configKey) {
    const isCorrect = showWittyRemark(questionId, answer, configKey);
    
    if (isCorrect) {
        haptic(50); // short pulse for correct
        createGreenSparkle(); // green sparkle burst
        state.quizAnswers[questionId] = answer;
        const remarkEl = document.getElementById(`remark-${questionId}`);
        if (remarkEl) remarkEl.classList.add('hidden');
        createFloatingEmoji('✓', window.innerWidth / 2, window.innerHeight / 2);
        renderScreen();
    }
}

function updateQuizText(questionId, value) {
    state.quizAnswers[questionId] = value;
    const mcqIds = ['engagement', 'firstdate', 'food', 'cook', 'birthday'];
    const textIds = ['priyanshiBirthday', 'bestNickname'];
    const allMcq = mcqIds.every(id => state.quizAnswers[id]);
    const allText = textIds.every(id => state.quizAnswers[id] && state.quizAnswers[id].trim().length > 0);
    const allAnswered = allMcq && allText;
    const btn = document.querySelector('.screen-content > .primary-btn');
    if (btn) {
        if (allAnswered) {
            btn.classList.remove('disabled');
            btn.disabled = false;
            btn.setAttribute('onclick', `transitionTo(${SCREENS.SWIPE})`);
        } else {
            btn.classList.add('disabled');
            btn.disabled = true;
            btn.removeAttribute('onclick');
        }
    }
}

// ================================
// GIFT BOX HANDLER
// ================================
function openGiftBox() {
    if (state.giftOpened) return;
    state.giftOpened = true;
    
    const giftBox = document.querySelector('.gift-box');
    const giftContent = document.querySelector('.gift-content');
    
    giftBox.classList.add('opening');
    createHeartBurst();
    haptic([100, 50, 100, 50, 200]);
    
    setTimeout(() => {
        giftBox.classList.add('opened');
        giftContent.classList.add('revealed');
    }, 600);
}

// ================================
// DISABLED BUTTON SHAKE
// ================================
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('disabled') || (e.target.closest && e.target.closest('.disabled'))) {
        e.target.classList.add('shake-disabled');
        haptic(30);
        setTimeout(() => e.target.classList.remove('shake-disabled'), 500);
    }
});

// ================================
// SCREEN TEMPLATES
// ================================
function getLandingScreen() {
    return `
        <div class="screen-content">
            <div class="landing-icon">👋</div>
            <h1 class="landing-title">Hello, ${CONFIG.name}</h1>
            <p class="landing-subtitle">
                This is a small experiment.<br>
                No right answers. No judgment. No pressure.
            </p>
            <button class="primary-btn" onclick="transitionTo(${SCREENS.WARMUP})">
                Start the experiment
                <span class="btn-arrow">→</span>
            </button>
            <p class="version-text">Version 2.0 | Built with curiosity & love</p>
            <p class="secret-hint">psst... there are secrets hidden here 🤫</p>
        </div>
    `;
}

function getWarmupScreen() {
    const questions = [
        {
            id: 'mood',
            question: "Your default mood most days?",
            options: ["Calm", "Overthinking but pretending not to", "Hungry", "Depends on coffee"]
        },
        {
            id: 'superpower',
            question: "Pick one superpower (purely hypothetical):",
            options: ["Time travel (with bugs)", "Invisibility (limited battery)", "Mind reading (opt-out allowed)", "Unlimited focus for 2 hours/day"]
        },
        {
            id: 'evening',
            question: "Your idea of a good evening:",
            options: ["Doing something productive", "Doing nothing, professionally", "Long conversations", "A mix of chaos and comfort"]
        }
    ];
    
    let html = questions.map((q, idx) => `
        <div class="question-block">
            <p class="question-number">Q${idx + 1}</p>
            <p class="question-text">${q.question}</p>
            <div class="options-grid">
                ${q.options.map(opt => `
                    <button class="option-btn ${state.warmupAnswers[q.id] === opt ? 'selected' : ''}" 
                            onclick="selectWarmupAnswer('${q.id}', '${opt.replace(/'/g, "\\'")}')">
                        ${opt}
                    </button>
                `).join('')}
                <button class="option-btn other-option-btn ${state.warmupAnswers[q.id] === 'Other' ? 'selected' : ''}" 
                        onclick="selectWarmupOther('${q.id}')">
                    ✏️ Others
                </button>
            </div>
            <div class="other-input-container ${state.warmupAnswers[q.id] === 'Other' ? 'visible' : ''}">
                <input type="text" class="other-input" 
                       id="other-input-${q.id}"
                       placeholder="Type your answer..."
                       value="${state.warmupOtherTexts[q.id] || ''}"
                       oninput="updateOtherText('${q.id}', this.value)"
                       maxlength="100">
            </div>
        </div>
    `).join('');
    
    const allAnswered = questions.every(q => {
        if (state.warmupAnswers[q.id] === 'Other') {
            return state.warmupOtherTexts[q.id] && state.warmupOtherTexts[q.id].trim().length > 0;
        }
        return !!state.warmupAnswers[q.id];
    });
    
    return `
        <div class="screen-content">
            <h2 class="section-heading">Let's see how well this app knows you.</h2>
            <div class="questions-container">${html}</div>
            <button class="primary-btn ${!allAnswered ? 'disabled' : ''}" 
                    onclick="${allAnswered ? `transitionTo(${SCREENS.QUIZ})` : ''}"
                    ${!allAnswered ? 'disabled' : ''}>
                Proceed →
            </button>
        </div>
    `;
}

function getQuizScreen() {
    const mcqQuestions = [
        { id: 'engagement', configKey: 'engagementMonth', question: "Our engagement month was:" },
        { id: 'firstdate', configKey: 'firstDate', question: "Our first date was at:" },
        { id: 'food', configKey: 'favoriteFood', question: "My favorite food is:" },
        { id: 'cook', configKey: 'betterCook', question: "Who's the better cook?" },
        { id: 'birthday', configKey: 'birthdayQuarter', question: "Your birthday falls in:" }
    ];
    
    const textQuestions = [
        { id: 'priyanshiBirthday', configKey: 'priyanshiBirthday' },
        { id: 'bestNickname', configKey: 'bestNickname' }
    ];
    
    let qNumber = 0;
    
    let mcqHtml = mcqQuestions.map((q) => {
        qNumber++;
        const config = CONFIG[q.configKey];
        return `
            <div class="question-block">
                <p class="question-number">Q${qNumber}</p>
                <p class="question-text">${q.question}</p>
                <div class="options-grid ${q.id === 'birthday' ? 'quarter-options' : ''}">
                    ${config.options.map(opt => `
                        <button class="option-btn ${state.quizAnswers[q.id] === opt ? 'selected correct' : ''}" 
                                onclick="selectQuizAnswer('${q.id}', '${opt.replace(/'/g, "\\'")}', '${q.configKey}')"
                                ${state.quizAnswers[q.id] ? 'disabled' : ''}>
                            ${opt}
                        </button>
                    `).join('')}
                </div>
                <div id="remark-${q.id}" class="witty-remark hidden"></div>
            </div>
        `;
    }).join('');
    
    let textHtml = textQuestions.map((q) => {
        qNumber++;
        const config = CONFIG.textQuestions[q.configKey];
        return `
            <div class="question-block">
                <p class="question-number">Q${qNumber}</p>
                <p class="question-text">${config.question}</p>
                <input type="text" class="quiz-text-input" 
                       id="quiz-text-${q.id}"
                       placeholder="${config.placeholder}"
                       value="${state.quizAnswers[q.id] || ''}"
                       oninput="updateQuizText('${q.id}', this.value)"
                       maxlength="100">
            </div>
        `;
    }).join('');
    
    const allMcqAnswered = mcqQuestions.every(q => state.quizAnswers[q.id]);
    const allTextAnswered = textQuestions.every(q => state.quizAnswers[q.id] && state.quizAnswers[q.id].trim().length > 0);
    const allAnswered = allMcqAnswered && allTextAnswered;
    
    return `
        <div class="screen-content">
            <h2 class="section-heading">How well do you know us? 🤔</h2>
            <p class="quiz-subtitle">Choose wisely. Wrong answers will be judged.</p>
            <div class="questions-container">${mcqHtml}${textHtml}</div>
            <button class="primary-btn ${!allAnswered ? 'disabled' : ''}" 
                    onclick="${allAnswered ? `transitionTo(${SCREENS.SWIPE})` : ''}"
                    ${!allAnswered ? 'disabled' : ''}>
                Continue →
            </button>
        </div>
    `;
}

function getSwipeScreen() {
    const card = CONFIG.swipeCards[state.currentCard];
    
    return `
        <div class="screen-content">
            <h2 class="section-heading">Rapid fire. Don't overthink.</h2>
            <p class="swipe-instruction">React to each card</p>
            
            <div class="card-stack">
                <div class="swipe-card" id="swipe-card">
                    <p class="card-text">${card}</p>
                </div>
                <div class="card-progress">
                    ${state.currentCard + 1} / ${CONFIG.swipeCards.length}
                </div>
            </div>
            
            <div class="swipe-buttons">
                <button class="swipe-btn dislike" onclick="handleSwipe('👎', event)">👎</button>
                <button class="swipe-btn meh" onclick="handleSwipe('🤷', event)">🤷</button>
                <button class="swipe-btn like" onclick="handleSwipe('👍', event)">👍</button>
            </div>
        </div>
    `;
}

// ================================
// THIS OR THAT SCREEN
// ================================
function getThisOrThatScreen() {
    const q = CONFIG.thisOrThat[state.thisOrThatIndex];
    return `
        <div class="screen-content this-or-that-screen">
            <h2 class="section-heading">This or That ⚡</h2>
            <p class="tot-subtitle">Quick! Pick one. Timer's ticking.</p>
            
            <div class="tot-timer-bar">
                <div class="tot-timer-fill" id="tot-timer-fill"></div>
            </div>
            <div class="tot-timer-text" id="tot-timer-text">${state.thisOrThatTimeLeft}s</div>
            
            <div class="tot-progress">${state.thisOrThatIndex + 1} / ${CONFIG.thisOrThat.length}</div>
            
            <div class="tot-card" id="tot-card">
                <div class="tot-options">
                    <button class="tot-btn tot-btn-a" onclick="handleThisOrThat('${q.optionA.replace(/'/g, "\\'")}')">
                        ${q.optionA}
                    </button>
                    <div class="tot-vs">VS</div>
                    <button class="tot-btn tot-btn-b" onclick="handleThisOrThat('${q.optionB.replace(/'/g, "\\'")}')">
                        ${q.optionB}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function startThisOrThatTimer() {
    state.thisOrThatTimeLeft = 5;
    const fill = document.getElementById('tot-timer-fill');
    const text = document.getElementById('tot-timer-text');
    
    if (fill) {
        fill.style.transition = 'none';
        fill.style.width = '100%';
        requestAnimationFrame(() => {
            fill.style.transition = 'width 5s linear';
            fill.style.width = '0%';
        });
    }
    
    if (state.thisOrThatTimer) clearInterval(state.thisOrThatTimer);
    
    state.thisOrThatTimer = setInterval(() => {
        state.thisOrThatTimeLeft--;
        if (text) text.textContent = state.thisOrThatTimeLeft + 's';
        
        if (state.thisOrThatTimeLeft <= 0) {
            clearInterval(state.thisOrThatTimer);
            handleThisOrThat('⏰ Skipped');
        }
    }, 1000);
}

function handleThisOrThat(choice) {
    if (state.thisOrThatTimer) clearInterval(state.thisOrThatTimer);
    haptic(30);
    
    const q = CONFIG.thisOrThat[state.thisOrThatIndex];
    state.thisOrThatResults.push({
        question: `${q.optionA} vs ${q.optionB}`,
        choice: choice
    });
    
    const card = document.getElementById('tot-card');
    if (card) {
        card.style.transform = 'scale(0.9)';
        card.style.opacity = '0';
    }
    
    setTimeout(() => {
        if (state.thisOrThatIndex < CONFIG.thisOrThat.length - 1) {
            state.thisOrThatIndex++;
            renderScreen();
            startThisOrThatTimer();
        } else {
            // All done, go to analyzing
            screenWrapper.innerHTML = getAnalyzingScreen();
            const loadingInterval = startLoadingAnimation();
            setTimeout(() => {
                clearInterval(loadingInterval);
                state.currentScreen = SCREENS.ANALYSIS;
                renderScreen();
            }, 3000);
        }
    }, 300);
}

function getAnalyzingScreen() {
    return `
        <div class="screen-content analyzing">
            <div class="loader"></div>
            <p class="analyzing-text" id="loading-message">${CONFIG.loadingMessages[0]}</p>
        </div>
    `;
}

function startLoadingAnimation() {
    let index = 0;
    return setInterval(() => {
        index = (index + 1) % CONFIG.loadingMessages.length;
        const el = document.getElementById('loading-message');
        if (el) {
            el.style.opacity = 0;
            setTimeout(() => {
                el.textContent = CONFIG.loadingMessages[index];
                el.style.opacity = 1;
            }, 200);
        }
    }, 600);
}

function getAnalysisScreen() {
    const totalWrong = Object.values(state.wrongAttempts).reduce((a, b) => a + b, 0);
    
    let memoryRating = "Photographic 📸";
    if (totalWrong > 8) memoryRating = "Needs GPS 🗺️";
    else if (totalWrong > 5) memoryRating = "Selective hearing 👂";
    else if (totalWrong > 2) memoryRating = "Minor glitches 🔧";
    else if (totalWrong > 0) memoryRating = "Almost perfect ✨";
    
    let personality = "A beautiful mystery";
    if (state.warmupAnswers.mood === 'Other') {
        personality = "Uniquely themselves 🌟";
    } else if (state.warmupAnswers.mood === "Overthinking but pretending not to") {
        personality = "Secretly deep thinker 🧠";
    } else if (state.warmupAnswers.mood === "Hungry") {
        personality = "Food-motivated genius 🍕";
    } else if (state.warmupAnswers.mood === "Calm") {
        personality = "Zen master in training 🧘";
    } else if (state.warmupAnswers.mood === "Depends on coffee") {
        personality = "Caffeine-powered human ☕";
    }
    
    return `
        <div class="screen-content">
            <h2 class="section-heading">Preliminary Results 🧪</h2>
            
            <div class="results-container">
                <div class="result-item">
                    <span class="result-label">Compatibility Score</span>
                    <span class="result-value highlight">Off the charts 💕</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Personality Type</span>
                    <span class="result-value">${personality}</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Memory Rating</span>
                    <span class="result-value">${memoryRating}</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Wrong Guesses</span>
                    <span class="result-value">${totalWrong} ${totalWrong === 1 ? 'oops' : 'oopsies'}</span>
                </div>
            </div>
            
            <p class="disclaimer">Model accuracy: questionable. Intentions: extremely sincere.</p>
            
            <button class="primary-btn" onclick="transitionTo(${SCREENS.DECODE})">
                Continue anyway
            </button>
        </div>
    `;
}

function getDecodeScreen() {
    let html = CONFIG.decodeQuestions.map((q, idx) => {
        const selected = state.decodeAnswers[q.id];
        return `
            <div class="decode-question-block">
                <p class="decode-question-text">${q.question}</p>
                <div class="decode-options-grid">
                    ${q.options.map(opt => `
                        <button class="decode-option-btn ${selected === opt.text ? 'selected' : ''}" 
                                onclick="selectDecodeAnswer('${q.id}', '${opt.text.replace(/'/g, "\\'")}')">
                            <span class="decode-option-emoji">${opt.emoji}</span>
                            <span class="decode-option-text">${opt.text}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    const allAnswered = CONFIG.decodeQuestions.every(q => state.decodeAnswers[q.id]);
    
    return `
        <div class="screen-content decode-screen">
            <div class="decode-icon">🔒</div>
            <h2 class="decode-heading">Decode yourself.</h2>
            <p class="decode-subtitle"><em>No wrong answers. Only revealing ones.</em></p>
            
            <div class="decode-questions-container">${html}</div>
            
            <button class="primary-btn valentine-btn ${!allAnswered ? 'disabled' : ''}" 
                    onclick="${allAnswered ? `handleDecodeComplete()` : ''}"
                    ${!allAnswered ? 'disabled' : ''}>
                Continue →
            </button>
        </div>
    `;
}

function handleDecodeComplete() {
    createLockUnlock(); // 🔓 unlock animation
    setTimeout(() => transitionTo(SCREENS.ASK), 800);
}

function selectDecodeAnswer(questionId, answer) {
    haptic(30);
    state.decodeAnswers[questionId] = answer;
    renderScreen();
}

// ================================
// ASK SCREEN — SCRATCH CARD
// ================================
function getAskScreen() {
    return `
        <div class="screen-content ask-screen">
            <div class="heart-icon">♥</div>
            <h2 class="final-heading">One last thing...</h2>
            
            <div class="scratch-card-container">
                <div class="scratch-card-under">
                    <p class="highlight-text">Will you be my Valentine?</p>
                </div>
                <canvas id="scratch-canvas" class="scratch-canvas" width="320" height="100"></canvas>
                <p class="scratch-hint" id="scratch-hint">✨ Scratch to reveal ✨</p>
            </div>
            
            <div id="ask-error" class="error-toast hidden">
                Nice try. That option doesn't exist here 💕
            </div>
            
            <div class="ask-buttons" id="ask-buttons" style="opacity: 0; pointer-events: none;">
                <button class="yes-btn" onclick="handleYes('Yes')">Yes</button>
                <button class="yes-btn confident" onclick="handleYes('Yes, absolutely')">Yes, absolutely</button>
                <button class="runaway-no" id="runaway-no" onclick="handleRunawayNo(event)">No</button>
            </div>
        </div>
    `;
}

function initScratchCard() {
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Scale canvas for retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    // Draw golden scratch surface
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#d4a953');
    gradient.addColorStop(0.3, '#f5d280');
    gradient.addColorStop(0.5, '#edc967');
    gradient.addColorStop(0.7, '#f5d280');
    gradient.addColorStop(1, '#c49b3d');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Add shimmer dots
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(Math.random() * rect.width, Math.random() * rect.height, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Add text on scratch surface
    ctx.font = '600 14px JetBrains Mono, monospace';
    ctx.fillStyle = 'rgba(120, 80, 20, 0.5)';
    ctx.textAlign = 'center';
    ctx.fillText('🎟️  SCRATCH ME  🎟️', rect.width / 2, rect.height / 2 + 5);
    
    // Scratch logic
    let isScratching = false;
    let scratchedPixels = 0;
    const totalPixels = rect.width * rect.height;
    
    function scratch(x, y) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
        
        // Check scratch progress
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let transparent = 0;
        for (let i = 3; i < imageData.data.length; i += 4) {
            if (imageData.data[i] === 0) transparent++;
        }
        const percent = transparent / (imageData.data.length / 4);
        
        if (percent > 0.2 && !state.scratchRevealed) {
            state.scratchRevealed = true;
            // Reveal fully
            canvas.style.transition = 'opacity 0.5s ease';
            canvas.style.opacity = '0';
            const hint = document.getElementById('scratch-hint');
            if (hint) hint.style.opacity = '0';
            
            haptic([100, 50, 100]);
            createSparkleExplosion();
            
            setTimeout(() => {
                const buttons = document.getElementById('ask-buttons');
                if (buttons) {
                    buttons.style.transition = 'opacity 0.5s ease';
                    buttons.style.opacity = '1';
                    buttons.style.pointerEvents = 'auto';
                }
            }, 500);
        }
    }
    
    function getPos(e) {
        const r = canvas.getBoundingClientRect();
        const touch = e.touches ? e.touches[0] : e;
        return { x: touch.clientX - r.left, y: touch.clientY - r.top };
    }
    
    canvas.addEventListener('mousedown', (e) => { isScratching = true; const p = getPos(e); scratch(p.x, p.y); });
    canvas.addEventListener('mousemove', (e) => { if (isScratching) { const p = getPos(e); scratch(p.x, p.y); } });
    canvas.addEventListener('mouseup', () => isScratching = false);
    canvas.addEventListener('mouseleave', () => isScratching = false);
    
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); isScratching = true; const p = getPos(e); scratch(p.x, p.y); }, { passive: false });
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (isScratching) { const p = getPos(e); scratch(p.x, p.y); } }, { passive: false });
    canvas.addEventListener('touchend', () => isScratching = false);
}

function handleYes(answer) {
    haptic([100, 50, 100, 50, 200]); // celebration pattern
    state.finalAnswer = answer;
    collectAndSendData(answer);
    transitionTo(SCREENS.FINALE);
}

function handleRunawayNo(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (state.noButtonGone) return;
    
    state.noButtonAttempts++;
    haptic([50, 30, 50]);
    
    const btn = document.getElementById('runaway-no');
    if (!btn) return;
    
    const messages = [
        "No",
        "Are you sure?",
        "Think again...",
        "Really?!",
        "Stop it 😤",
        "I'm leaving!",
        "You can't catch me",
        "Fine, I'll disappear",
        "Bye forever 💨"
    ];
    
    const attempt = state.noButtonAttempts;
    
    if (attempt >= messages.length) {
        // Final disappearance
        btn.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        btn.style.transform = 'scale(0) rotate(720deg)';
        btn.style.opacity = '0';
        state.noButtonGone = true;
        haptic(100);
        showToast("The 'No' button has left the chat 💕");
        setTimeout(() => btn.remove(), 600);
        return;
    }
    
    // Update text
    btn.textContent = messages[Math.min(attempt, messages.length - 1)];
    
    // Shrink progressively
    const scale = Math.max(0.5, 1 - (attempt * 0.07));
    
    // Calculate random position within the screen-content bounds
    const container = btn.closest('.screen-content') || btn.closest('.ask-screen') || document.querySelector('.screen-content');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Make it flee!
    btn.classList.add('fleeing');
    btn.style.position = 'absolute';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    btn.style.transform = `scale(${scale}) rotate(${(Math.random() - 0.5) * 30}deg)`;
    btn.style.zIndex = '10';
    
    // Flash a taunt
    if (attempt === 2) showToast("It's getting nervous 😏");
    if (attempt === 5) showToast("Almost got it! ...not really 😂");
}

function getFinaleScreen() {
    const today = new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });
    
    return `
        <div class="screen-content finale">
            <div class="finale-hearts">
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
            </div>
            
            <h2 class="finale-heading">You've made me the happiest</h2>
            <p class="finale-text">Position: My Valentine. Start date: Immediately.</p>
            
            <div class="certificate">
                <div class="certificate-inner">
                    <div class="certificate-header">Certificate of</div>
                    <div class="certificate-title">Being My Valentine</div>
                    <div class="certificate-body">
                        This certifies that<br>
                        <span class="certificate-name">${CONFIG.name}</span><br>
                        has officially agreed to be the Valentine of<br>
                        <span class="certificate-name">${CONFIG.yourName}</span>
                    </div>
                    <div class="certificate-date">${today}</div>
                    <div class="certificate-seal">💕</div>
                </div>
            </div>
            
            <div class="screenshot-hint" id="screenshot-hint">
                <span class="screenshot-icon">📸</span> Screenshot this. It's legally binding.*
                <br><span class="tiny">*not actually legally binding</span>
            </div>
            
            <button class="primary-btn valentine-btn" onclick="transitionTo(${SCREENS.GIFT})" style="margin-top: 24px;">
                Wait... there's more! 🎁
            </button>
        </div>
    `;
}

function getGiftScreen() {
    const hasPhoto = CONFIG.giftBox.photoURL && CONFIG.giftBox.photoURL.length > 0;
    
    const photoContent = hasPhoto 
        ? `<img src="${CONFIG.giftBox.photoURL}" alt="Us" class="gift-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
           <div class="gift-photo-fallback" style="display:none;">📸</div>`
        : `<div class="gift-photo-fallback">💑</div>`;
    
    return `
        <div class="screen-content gift-screen">
            <h2 class="section-heading">One more surprise...</h2>
            <p class="gift-instruction">Tap the gift to open it 🎁</p>
            
            <div class="gift-box" onclick="openGiftBox()">
                <div class="gift-lid">
                    <div class="gift-bow"></div>
                </div>
                <div class="gift-base"></div>
            </div>
            
            <div class="gift-content">
                <div class="gift-photo-container">
                    ${photoContent}
                </div>
                <div class="gift-message">
                    ${CONFIG.giftBox.message.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
                <div class="gift-signature">${CONFIG.giftBox.signature}</div>
            </div>
            
            <div class="final-note">
                <p>Thank you for going through all of this.</p>
                <p>You mean everything to me. 💕</p>
                <button class="primary-btn valentine-btn" onclick="transitionTo(${SCREENS.CREDITS})" style="margin-top: 24px;">
                    Roll the credits 🎬
                </button>
            </div>
        </div>
    `;
}

// ================================
// END CREDITS SCREEN
// ================================
function getCreditsScreen() {
    return `
        <div class="screen-content credits-screen">
            <div class="credits-scroll" id="credits-scroll">
                <div class="credits-spacer"></div>
                <div class="credits-block">
                    <p class="credits-label">Written & Directed by</p>
                    <p class="credits-name">${CONFIG.yourName}</p>
                </div>
                <div class="credits-block">
                    <p class="credits-label">Starring</p>
                    <p class="credits-name">${CONFIG.name}</p>
                </div>
                <div class="credits-block">
                    <p class="credits-label">Executive Producer</p>
                    <p class="credits-name">Late nights & too much coffee</p>
                </div>
                <div class="credits-block">
                    <p class="credits-label">Music</p>
                    <p class="credits-name">Imagine Dragons</p>
                </div>
                <div class="credits-block">
                    <p class="credits-label">Special Thanks</p>
                    <p class="credits-name">The internet and Claude Code</p>
                </div>
                <div class="credits-block">
                    <p class="credits-label">Catering</p>
                    <p class="credits-name">Blinkit</p>
                </div>
                <div class="credits-block credits-disclaimer">
                    <p>No hearts were broken in the making of this app.</p>
                </div>
                <div class="credits-block credits-fin">
                    <p class="credits-fin-text">FIN</p>
                    <p class="credits-fin-heart">💕</p>
                </div>
                <div class="credits-spacer"></div>
            </div>
        </div>
    `;
}

// ================================
// RENDER
// ================================
function renderScreen() {
    resetIdleTimer();
    
    // Save scroll position before re-render
    const prevContent = screenWrapper.querySelector('.screen-content');
    const savedScroll = prevContent ? prevContent.scrollTop : 0;
    const sameScreen = screenWrapper.dataset.currentScreen == state.currentScreen;
    
    const screens = {
        [SCREENS.LANDING]: getLandingScreen,
        [SCREENS.WARMUP]: getWarmupScreen,
        [SCREENS.QUIZ]: getQuizScreen,
        [SCREENS.SWIPE]: getSwipeScreen,
        [SCREENS.THIS_OR_THAT]: getThisOrThatScreen,
        [SCREENS.ANALYSIS]: getAnalysisScreen,
        [SCREENS.DECODE]: getDecodeScreen,
        [SCREENS.ASK]: getAskScreen,
        [SCREENS.FINALE]: getFinaleScreen,
        [SCREENS.GIFT]: getGiftScreen,
        [SCREENS.CREDITS]: getCreditsScreen
    };
    
    screenWrapper.dataset.currentScreen = state.currentScreen;
    screenWrapper.innerHTML = screens[state.currentScreen]();
    
    // Restore scroll position if we're on the same screen
    if (sameScreen && savedScroll > 0) {
        const newContent = screenWrapper.querySelector('.screen-content');
        if (newContent) newContent.scrollTop = savedScroll;
    }
    
    // Post-render hooks
    if (state.currentScreen === SCREENS.ASK) {
        setTimeout(initScratchCard, 300);
    }
    if (state.currentScreen === SCREENS.THIS_OR_THAT) {
        setTimeout(startThisOrThatTimer, 200);
    }
    if (state.currentScreen === SCREENS.FINALE) {
        setTimeout(() => {
            const hint = document.getElementById('screenshot-hint');
            if (hint) hint.classList.add('visible');
        }, 2000);
    }
}

// ================================
// EVENT HANDLERS
// ================================
function selectWarmupAnswer(questionId, answer) {
    haptic(30);
    state.warmupAnswers[questionId] = answer;
    delete state.warmupOtherTexts[questionId];
    renderScreen();
}

function selectWarmupOther(questionId) {
    haptic(30);
    state.warmupAnswers[questionId] = 'Other';
    renderScreen();
    setTimeout(() => {
        const input = document.getElementById(`other-input-${questionId}`);
        if (input) input.focus();
    }, 50);
}

function updateOtherText(questionId, value) {
    state.warmupOtherTexts[questionId] = value;
    const questions = [{ id: 'mood' }, { id: 'superpower' }, { id: 'evening' }];
    const allAnswered = questions.every(q => {
        if (state.warmupAnswers[q.id] === 'Other') {
            return state.warmupOtherTexts[q.id] && state.warmupOtherTexts[q.id].trim().length > 0;
        }
        return !!state.warmupAnswers[q.id];
    });
    const btn = document.querySelector('.primary-btn');
    if (btn) {
        if (allAnswered) {
            btn.classList.remove('disabled');
            btn.disabled = false;
            btn.setAttribute('onclick', `transitionTo(${SCREENS.QUIZ})`);
        } else {
            btn.classList.add('disabled');
            btn.disabled = true;
            btn.removeAttribute('onclick');
        }
    }
}

function handleSwipe(reaction, event) {
    haptic(30); // light tap
    if (event) {
        const rect = event.target.getBoundingClientRect();
        createFloatingEmoji(reaction, rect.left + rect.width/2, rect.top);
    }
    
    const card = document.getElementById('swipe-card');
    if (card) {
        card.style.transform = reaction === '👍' ? 'translateX(100px) rotate(10deg)' : 
                               reaction === '👎' ? 'translateX(-100px) rotate(-10deg)' : 
                               'translateY(-50px)';
        card.style.opacity = '0';
    }
    
    state.swipeResults.push({
        card: CONFIG.swipeCards[state.currentCard],
        reaction: reaction
    });
    
    setTimeout(() => {
        if (state.currentCard < CONFIG.swipeCards.length - 1) {
            state.currentCard++;
            renderScreen();
        } else {
            // Swipe done → emoji rain, then go to This or That
            createEmojiRain(['👍', '👎', '🤷']);
            setTimeout(() => {
                state.currentScreen = SCREENS.THIS_OR_THAT;
                renderScreen();
                startThisOrThatTimer();
            }, 800);
        }
    }, 300);
}

// ================================
// INITIALIZE
// ================================
renderScreen();
resetIdleTimer();
