/* Reset & Base Styles */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, input, textarea, button, select {
    font-family: var(--font-body) !important;
}

/* Design System for Elegant Graduation Card */
:root {
    /* Academic & Premium Metallic Color Palette */
    --gold: #C5A059;
    --gold-light: #F4EAD4;
    --gold-dark: #8A6D3B;
    --cream: #FAF8F5;
    --vintage-bg: #F7F4EF;
    --ink: #2B2A27;
    --ink-muted: #6E6C66;
    --surface: #FFFFFF;
    
    /* Layering & Depth Assets */
    --glass: rgba(255, 255, 255, 0.75);
    --glass-border: rgba(197, 160, 89, 0.25);
    --shadow-sm: 0 4px 12px rgba(43, 42, 39, 0.03);
    --shadow-md: 0 12px 30px rgba(43, 42, 39, 0.06);
    --shadow-lg: 0 24px 60px rgba(43, 42, 39, 0.1);
    --border-premium: 1px solid rgba(197, 160, 89, 0.3);
    
    /* Typography Configuration */
    --font-display: "Be Vietnam Pro", system-ui, sans-serif;
    --font-body: "Be Vietnam Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-hand: "Imperial Script", cursive;
    --ease-out: cubic-bezier(0.25, 1, 0.5, 1);

}

html {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background: var(--vintage-bg);
    color: var(--ink);
    overscroll-behavior-y: none;
    background-image: 
        radial-gradient(var(--gold-light) 0.5px, transparent 0.5px), 
        radial-gradient(var(--gold-light) 0.5px, var(--vintage-bg) 0.5px);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
}

/* Section Layout & Depth Enhancements */
.section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100dvh;
    overflow: hidden;
    position: relative;
}

.bg-cover {
    position: absolute;
    inset: 0;
    background: transparent;
    z-index: 0;
    pointer-events: none;
}

/* Subtle Graduation Decorative Ornaments */
.bg-cover::before {
    content: '';
    position: absolute;
    inset: 1.5rem;
    border: 1px solid rgba(197, 160, 89, 0.15);
    pointer-events: none;
}

.bg-cover::after {
    content: '';
    position: absolute;
    inset: 1.85rem;
    border: 1px solid rgba(197, 160, 89, 0.05);
    pointer-events: none;
}

.petals {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.petal {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--gold-light);
    border-radius: 50% 0 50% 0;
    opacity: 0;
    animation: fall linear infinite;
}

@keyframes fall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 0.4; }
    90% { opacity: 0.2; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
}

/* Navigation Controls */
#nav-dots {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 100;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(43, 42, 39, 0.15);
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.4s var(--ease-out);
}

.dot:hover {
    background: var(--gold);
}

.dot.active {
    background: var(--gold);
    transform: scale(1.5);
    box-shadow: 0 0 8px rgba(197, 160, 89, 0.5);
}

#music-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: var(--border-premium);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold-dark);
    transition: all 0.3s var(--ease-out);
}

#music-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    color: var(--gold);
}

#music-btn.playing {
    box-shadow: 0 0 16px rgba(197, 160, 89, 0.35);
    animation: pulse 2s infinite var(--ease-out);
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

/* Section 0: Language Gate */
.s0-content-modern {
    position: relative;
    z-index: 2;
    max-width: 500px;
    width: 100%;
    padding: 3rem 2rem;
    background: var(--surface);
    border-radius: 16px;
    border: var(--border-premium);
    box-shadow: var(--shadow-lg);
    text-align: center;
}

.lang-title {
    margin-bottom: 2.5rem;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    color: var(--ink);
}

.lang-group {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
}

.lang-btn {
    background: var(--cream);
    border: 1px solid rgba(197, 160, 89, 0.15);
    color: var(--ink);
    padding: 14px 32px;
    cursor: pointer;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 0.95rem;
    letter-spacing: 0.05em;
    font-weight: 400;
    transition: all 0.3s var(--ease-out);
}

.lang-btn:hover {
    background: var(--gold-light);
    border-color: var(--gold);
    transform: translateY(-1px);
}

.lang-btn.selected {
    background: var(--gold);
    color: var(--surface);
    border-color: var(--gold-dark);
    font-weight: 500;
    box-shadow: var(--shadow-md);
}

/* Section 1: Re-designed Modern Magazine Grid Layout */
.s1-content-modern {
    position: relative;
    z-index: 2;
    max-width: 1050px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 4rem;
    padding: 2rem;
}

.hero-text {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.eyebrow {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 0.75rem;
}

.s1-title {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 400;
    line-height: 1.3;
    color: var(--ink);
    letter-spacing: -0.01em;
}

.hero-portrait {
    width: 100%;
    max-width: 340px;
    justify-self: center;
    position: relative;
    margin: 0;
}

.portrait-frame {
    width: 100%;
    aspect-ratio: 3 / 4;
    background: var(--surface);
    padding: 1rem;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--gold);
    position: relative;
    transform: none;
    transition: transform 0.4s var(--ease-out);
}

.portrait-frame:hover {
    transform: translateY(-4px);
}

.portrait-frame::before {
    content: '';
    position: absolute;
    inset: 1.5rem;
    border: 1px solid var(--gold);
    pointer-events: none;
    z-index: 2;
}

.portrait-frame::after {
    content: '';
    position: absolute;
    inset: 1.75rem;
    border: 1px solid rgba(197, 160, 89, 0.4);
    pointer-events: none;
    z-index: 2;
}

.portrait-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
}

.washi-tape,
.tape-top-left,
.portrait-badge,
.scrapbook-sticker-round {
    display: none !important;
}

.hero-name-block {
    width: 100%;
    margin-top: 1.5rem;
}

.s1-subtitle {
    font-family: var(--font-hand);
    font-size: 2.6rem;
    color: var(--gold-dark);
    line-height: 0.9;
}

.highlight-name {
    display: block;
    font-family: var(--font-hand) !important;
    font-size: clamp(3.8rem, 7vw, 5.5rem);
    font-weight: 400;
    color: var(--ink);
    font-style: normal;
    margin-top: 0.25rem;
    letter-spacing: normal;
    line-height: 1.1;
    text-transform: none;
}

.hero-desc {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--ink-muted);
    max-width: 480px;
    margin: 0;
}

.divider-ornament {
    margin: 1.5rem 0;
    color: var(--gold);
    font-size: 0.9rem;
    letter-spacing: 0.3em;
    opacity: 0.8;
    text-align: left;
}

/* Section 2: Invitation Details & Calendar */
.s2-content-modern {
    position: relative;
    z-index: 2;
    max-width: 520px;
    width: 100%;
    padding: 1.5rem;
}

.calendar-layout {
    background: var(--surface);
    border-radius: 16px;
    padding: 3rem 2.5rem;
    box-shadow: var(--shadow-lg);
    border: var(--border-premium);
    position: relative;
}

.calendar-layout::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(197, 160, 89, 0.15);
    border-radius: 12px;
    pointer-events: none;
}

.time-details-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--gold-light);
    padding-bottom: 1.75rem;
}

.time-col {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.detail-label {
    font-size: 0.75rem;
    color: var(--gold-dark);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
}

.time-col strong {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--ink);
}

.calendar-month {
    text-align: center;
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--ink);
    letter-spacing: 0.03em;
    margin-bottom: 1.75rem;
}

.calendar-days-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ink-muted);
    margin-bottom: 1rem;
    border-bottom: 1px dashed rgba(197, 160, 89, 0.15);
    padding-bottom: 0.5rem;
}

.calendar-cells {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    gap: 10px 0;
    font-size: 0.9rem;
    font-weight: 400;
}

.calendar-cells div {
    padding: 6px 0;
    color: var(--ink);
    display: flex;
    align-items: center;
    justify-content: center;
}

.calendar-cells .marked-day {
    font-weight: 600;
    position: relative;
    z-index: 1;
    color: var(--surface);
}

.calendar-cells .marked-day::before {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    background: var(--gold);
    border-radius: 6px;
    z-index: -1;
    box-shadow: var(--shadow-sm);
}

.heart-icon {
    position: absolute;
    top: -8px;
    right: -4px;
    font-size: 0.75rem;
    color: var(--gold-dark);
}

/* Section 3: Map Location */
.s3-content-modern {
    position: relative;
    z-index: 2;
    max-width: 680px;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
}

.map-icon-marker {
    font-size: 2.2rem;
    margin-bottom: 0.75rem;
    color: var(--gold);
}

.location-address {
    font-size: 0.95rem;
    color: var(--ink-muted);
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.map-container {
    width: 100%;
    height: 360px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-lg);
    border: var(--border-premium);
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.map-overlay-btn {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    background: var(--surface);
    color: var(--ink);
    border: 1px solid rgba(197, 160, 89, 0.2);
    padding: 0.6rem 1.25rem;
    border-radius: 30px;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    box-shadow: var(--shadow-md);
    cursor: pointer;
    transition: all 0.3s var(--ease-out);
}

.map-overlay-btn:hover {
    background: var(--gold);
    color: var(--surface);
    transform: translateY(-1px);
}

/* Section 4: Countdown */
.s4-content-modern {
    position: relative;
    z-index: 2;
    max-width: 600px;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
}

.countdown-wrapper {
    background: var(--surface);
    padding: 3.5rem 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    border: var(--border-premium);
    position: relative;
}

.countdown-wrapper::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px solid rgba(197, 160, 89, 0.12);
    border-radius: 14px;
    pointer-events: none;
}

.countdown-celebrate-title {
    font-family: var(--font-hand);
    font-size: 3.4rem;
    color: var(--gold-dark);
    margin: 0.5rem 0 2.5rem 0;
}

.countdown-grid {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
}

.countdown-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 70px;
}

.countdown-num {
    font-family: var(--font-display);
    font-size: 3.6rem;
    font-weight: 400;
    color: var(--ink);
    line-height: 1;
    letter-spacing: -0.02em;
}

.countdown-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--ink-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 0.75rem;
}

/* Section 5: Photo Gallery Layout */
.s5-content-modern {
    position: relative;
    z-index: 2;
    max-width: 960px;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 220px);
    gap: 20px;
    margin-top: 3rem;
}

.gallery-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 4px solid var(--surface);
    transition: all 0.4s var(--ease-out);
}

.gallery-item:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: var(--shadow-lg);
    border-color: var(--gold-light);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--ease-out);
}

.gallery-item:hover img {
    transform: scale(1.04);
}

.item-1 { grid-column: span 4; grid-row: span 2; }
.item-2 { grid-column: span 4; grid-row: span 1; }
.item-3 { grid-column: span 4; grid-row: span 1; }
.item-4 { grid-column: span 4; grid-row: span 1; }
.item-5 { grid-column: span 4; grid-row: span 1; }

/* Section 6: Guestbook Form & List */
.s6-content-modern {
    position: relative;
    z-index: 2;
    max-width: 620px;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* Reduced from 2.5rem to save vertical space */
    max-height: 90vh; /* Limits content within the viewport height */
    justify-content: center;
}

.wish-form {
    background: var(--surface);
    border-radius: 16px;
    padding: 1.5rem 2.5rem; /* Reduced vertical padding from 3rem */
    box-shadow: var(--shadow-lg);
    border: var(--border-premium);
    flex-shrink: 0; /* Prevents the form from collapsing */
}

.form-title {
    font-family: var(--font-display);
    font-size: 1.4rem; /* Slightly reduced from 1.6rem */
    font-weight: 500;
    margin-bottom: 1.25rem; /* Reduced from 2rem */
    text-align: center;
    color: var(--ink);
    letter-spacing: 0.02em;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
}

.field label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gold-dark);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.field input, .field textarea {
    width: 100%;
    background: var(--cream);
    border: 1px solid rgba(197, 160, 89, 0.2);
    border-radius: 8px;
    color: var(--ink);
    font-family: var(--font-body);
    font-size: 0.9rem;
    padding: 0.75rem 1.1rem; /* Slightly reduced vertical padding */
    outline: none;
    resize: none;
    transition: all 0.3s var(--ease-out);
}

.field input:focus, .field textarea:focus {
    background: var(--surface);
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.12);
}

.submit-btn {
    margin-top: 1rem; /* Reduced from 1.75rem */
    padding: 0.75rem 2.5rem; /* Slightly reduced padding */
    border: none;
    border-radius: 30px;
    background: var(--ink);
    color: var(--vintage-bg);
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: block;
    margin-left: auto;
    transition: all 0.3s var(--ease-out);
    box-shadow: var(--shadow-sm);
}

.submit-btn:hover {
    background: var(--gold);
    color: var(--surface);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.section-label {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 1rem;
    text-align: center;
}

.wishes-container {
    flex-grow: 1; /* Allows container to fill available space dynamically */
    max-height: 250px; /* Reduced to leave safe layout room on standard screens */
    overflow-y: auto;
    padding-right: 0.75rem;
}

.wishes-container::-webkit-scrollbar {
    width: 5px;
}

.wishes-container::-webkit-scrollbar-thumb {
    background: var(--gold-light);
    border-radius: 10px;
}

.wishes-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.wish-card {
    background: var(--surface);
    border: 1px solid rgba(197, 160, 89, 0.15);
    border-radius: 12px;
    padding: 1rem 1.25rem; /* Slightly reduced padding */
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s var(--ease-out);
}

.wish-card:hover {
    transform: translateY(-1px);
}

.wish-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--ink-muted);
    margin-bottom: 0.4rem; /* Reduced from 0.6rem */
}

.wish-name {
    font-weight: 600;
    color: var(--ink);
}

.wish-text {
    font-size: 0.9rem;
    line-height: 1.4; /* Slightly reduced line-height */
    color: var(--ink-muted);
}

/* Section 7: Thank You Note */
.s7-content-modern {
    position: relative;
    z-index: 2;
    max-width: 580px;
    width: 100%;
    padding: 1.5rem;
}

.notebook-layout {
    position: relative;
    width: 100%;
}

.notebook-paper-grid {
    background: var(--surface);
    background-image: 
        linear-gradient(rgba(197, 160, 89, 0.08) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(197, 160, 89, 0.08) 1px, transparent 1px);
    background-size: 24px 24px;
    border: var(--border-premium);
    padding: 4rem 2.5rem;
    box-shadow: var(--shadow-lg);
    border-radius: 4px;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.notebook-paper-grid::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 1px;
    background: rgba(197, 160, 89, 0.25);
}

.notebook-content {
    text-align: center;
    max-width: 420px;
    z-index: 1;
}

.thank-paragraph {
    font-family: var(--font-display);
    font-size: 1.3rem;
    line-height: 1.7;
    font-weight: 400;
    color: var(--ink);
}

.notebook-footer-sign {
    font-family: var(--font-hand);
    font-size: 2.6rem;
    margin-top: 2rem;
    color: var(--gold-dark);
    line-height: 1;
}

.notebook-sticker {
    position: absolute;
    z-index: 3;
}

.sticker-tape {
    top: -12px;
    right: 30px;
    width: 80px;
    height: 26px;
    background: rgba(197, 160, 89, 0.25);
    backdrop-filter: blur(1px);
    transform: rotate(12deg);
    border-left: 1px dashed rgba(255,255,255,0.4);
    border-right: 1px dashed rgba(255,255,255,0.4);
}

/* Global Section Titles & Hints */
.section-title-modern {
    font-family: var(--font-display);
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--ink);
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
}

.scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.45;
    animation: bounce 2s infinite;
    pointer-events: none;
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
}

.scroll-hint span {
    font-size: 0.6rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--ink-muted);
}

.scroll-arrow {
    width: 1px;
    height: 24px;
    background: var(--gold);
}

/* Scroll Animation Engine */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s var(--ease-out), transform 1s var(--ease-out);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Toast Alerts */
#toast {
    position: fixed;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(15px);
    background: var(--ink);
    color: var(--cream);
    padding: 0.85rem 2.25rem;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    box-shadow: var(--shadow-lg);
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s var(--ease-out);
    z-index: 200;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

#toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}

.empty-wishes {
    color: var(--ink-muted);
    font-style: italic;
    text-align: center;
    padding: 1.5rem;
    font-size: 0.9rem;
}

/* Responsive Infrastructure */
@media (max-width: 768px) {
    body {
        background-size: 30px 30px;
    }
    .section {
        padding: 2rem 1rem;
    }
    .s1-content-modern {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        gap: 1.5rem;
        padding: 1rem;
        justify-content: center;
        align-content: center;
    }
    .hero-text {
        text-align: center;
        order: 2;
    }
    .hero-desc {
        margin: 0 auto;
    }
    .hero-portrait {
        max-width: 210px;
        order: 1;
    }
    .divider-ornament {
        text-align: center;
        margin: 1rem 0;
    }
    .s1-title {
        font-size: 1.8rem;
    }
    .s1-subtitle {
        font-size: 2rem;
    }
    .highlight-name {
        font-size: 3.2rem;
    }
    .calendar-layout, .wish-form, .countdown-wrapper {
        padding: 2.5rem 1.5rem;
    }
    .countdown-grid {
        gap: 1.5rem;
    }
    .countdown-num {
        font-size: 2.8rem;
    }
    .gallery-grid {
        grid-template-rows: repeat(5, 160px);
        gap: 12px;
    }
    .gallery-item {
        grid-column: span 12 !important;
        grid-row: span 1 !important;
    }
    .form-row {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    #nav-dots {
        display: none;
    }
}
