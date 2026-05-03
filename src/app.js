document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    initGuide();
    initFlashcards();
    initQuiz();
    initChat();
});

// Timeline Logic
function initTimeline() {
    const container = document.getElementById('timeline-items');
    const detail = document.getElementById('timeline-detail');

    electionData.timeline.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `timeline-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <span>${item.title}</span>
        `;
        div.addEventListener('click', () => {
            document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
            div.classList.add('active');
            showTimelineDetail(item);
        });
        container.appendChild(div);
    });

    showTimelineDetail(electionData.timeline[0]);
}

function showTimelineDetail(item) {
    const detail = document.getElementById('timeline-detail');
    detail.classList.remove('show');
    
    setTimeout(() => {
        detail.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;">
                <span style="font-size: 3rem;">${item.icon}</span>
                <div>
                    <h3 style="font-size: 2rem;">${item.title}</h3>
                    <p style="color: var(--primary); font-weight: 600;">${item.date}</p>
                </div>
            </div>
            <p style="font-size: 1.1rem; color: var(--text-muted);">${item.description}</p>
        `;
        detail.classList.add('show');
    }, 100);
}

// Guide Logic
function initGuide() {
    const container = document.querySelector('.guide-steps');
    electionData.guideSteps.forEach(step => {
        const div = document.createElement('div');
        div.className = 'guide-step';
        div.innerHTML = `
            <div class="step-num">${step.num}</div>
            <h3>${step.title}</h3>
            <p style="color: var(--text-muted); margin-top: 1rem;">${step.content}</p>
        `;
        container.appendChild(div);
    });
}

// Flashcards Logic
let currentCardIndex = 0;
function initFlashcards() {
    const deck = document.getElementById('flashcard-deck');
    const prevBtn = document.getElementById('prev-card');
    const nextBtn = document.getElementById('next-card');
    const progress = document.getElementById('card-progress');

    function updateCard() {
        const cardData = electionData.flashcards[currentCardIndex];
        deck.innerHTML = `
            <div class="flashcard" id="active-card">
                <div class="card-face card-front">
                    <h3>${cardData.term}</h3>
                    <p style="margin-top: 1rem; opacity: 0.8;">Click to reveal</p>
                </div>
                <div class="card-face card-back">
                    <p>${cardData.definition}</p>
                </div>
            </div>
        `;
        
        const card = document.getElementById('active-card');
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        
        progress.innerText = `${currentCardIndex + 1} / ${electionData.flashcards.length}`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < electionData.flashcards.length - 1) {
            currentCardIndex++;
            updateCard();
        }
    });

    updateCard();
}

// Quiz Logic
let currentQuestionIndex = 0;
let score = 0;
function initQuiz() {
    const startBtn = document.getElementById('start-quiz');
    const overlay = document.getElementById('quiz-overlay');
    const closeBtn = document.getElementById('close-quiz');
    const nextBtn = document.getElementById('next-question');

    startBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        resetQuiz();
        showQuestion();
    });

    closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < electionData.quiz.length) {
            showQuestion();
        } else {
            showResults();
        }
    });
}

function showQuestion() {
    const q = electionData.quiz[currentQuestionIndex];
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const stepEl = document.getElementById('quiz-step');
    const nextBtn = document.getElementById('next-question');

    stepEl.innerText = `Question ${currentQuestionIndex + 1} / ${electionData.quiz.length}`;
    questionEl.innerText = q.question;
    optionsEl.innerHTML = '';
    nextBtn.disabled = true;

    q.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.addEventListener('click', () => {
            if (nextBtn.disabled) { // Only allow selection once
                const options = optionsEl.querySelectorAll('.quiz-option');
                options.forEach(o => o.classList.remove('selected'));
                btn.classList.add('selected');
                
                // Show correct/wrong immediately
                if (index === q.answer) {
                    btn.classList.add('correct');
                    score++;
                } else {
                    btn.classList.add('wrong');
                    options[q.answer].classList.add('correct');
                }
                
                nextBtn.disabled = false;
            }
        });
        optionsEl.appendChild(btn);
    });
}

function showResults() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const nextBtn = document.getElementById('next-question');
    
    questionEl.innerText = `Quiz Complete!`;
    optionsEl.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <p style="font-size: 4rem; margin-bottom: 1rem;">${score === electionData.quiz.length ? '🏆' : '📚'}</p>
            <h3>You scored ${score} out of ${electionData.quiz.length}</h3>
            <p style="color: var(--text-muted); margin-top: 1rem;">${score === electionData.quiz.length ? "You're an election expert!" : "Keep learning to become a pro voter."}</p>
        </div>
    `;
    nextBtn.innerText = "Close";
    nextBtn.onclick = () => document.getElementById('quiz-overlay').classList.add('hidden');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-question').innerText = "Next";
}

// Chat Logic
function initChat() {
    const toggle = document.getElementById('chat-toggle');
    const container = document.getElementById('chat-container');
    const close = document.getElementById('close-chat');
    const input = document.getElementById('chat-input');
    const send = document.getElementById('send-message');
    const messages = document.getElementById('chat-messages');
    const quickBtns = document.querySelectorAll('.quick-btn');

    toggle.addEventListener('click', () => container.classList.toggle('hidden'));
    close.addEventListener('click', () => container.classList.add('hidden'));

    function addMessage(text, type) {
        const msg = document.createElement('div');
        msg.className = `message ${type}`;
        msg.innerText = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    function handleInput() {
        const text = input.value.trim();
        if (text) {
            addMessage(text, 'user');
            input.value = '';
            
            // Simple logic
            setTimeout(() => {
                const lowerText = text.toLowerCase();
                let response = electionData.chatResponses.default;
                
                for (const key in electionData.chatResponses) {
                    if (lowerText.includes(key)) {
                        response = electionData.chatResponses[key];
                        break;
                    }
                }
                addMessage(response, 'system');
            }, 600);
        }
    }

    send.addEventListener('click', handleInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleInput();
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            input.value = btn.innerText;
            handleInput();
        });
    });
}
