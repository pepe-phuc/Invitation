const i18n = {
    vi: {
        choose_lang: 'Chọn ngôn ngữ · Choose language',
        to: '✦ Trân trọng kính mời ✦',
        hero_title: 'Lễ Tốt Nghiệp',
        hero_body: 'Sự hiện diện của bạn là niềm vinh hạnh lớn đối với tôi trong cột mốc ý nghĩa này.',
        from: 'TÂN THẠC SĨ',
        date_label: 'Ngày tổ chức',
        time_label: 'Vào lúc',
        calendar_month: 'Tháng 07 · 2026',
        calendar_days: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        location_label: '✦ Địa điểm ✦',
        dress_label: '✦ Đếm ngược sự kiện ✦',
        lbl_days: 'Ngày', lbl_hours: 'Giờ', lbl_minutes: 'Phút',
        wishes_label: '✦ Gallery ✦',
        wish_title: 'Sổ Lưu Bút',
        name_ph: 'Nhập tên của bạn',
        relation_ph: 'Quan hệ',
        msg_ph: 'Nhập lời chúc của bạn',
        submit_btn: 'Gửi lời chúc',
        empty_wishes: 'Chưa có lời chúc nào.',
        toast_ok: 'Lời chúc đã được gửi thành công',
        toast_err: 'Vui lòng điền đầy đủ thông tin',
        thank_p1: 'Một hành trình khép lại, một chặng đường mới mở ra.',
        thank_p2: 'Rất mong có sự hiện diện của những người thương yêu để cùng đánh dấu cột mốc đặc biệt này.'
    },
    en: {
        choose_lang: 'Choose language · Chọn ngôn ngữ',
        to: '✦ Cordially Invites You ✦',
        hero_title: 'Graduation Ceremony',
        hero_body: 'Your presence would be a great honor for me at this meaningful milestone.',
        from: 'Of Bachelor',
        date_label: 'Date',
        time_label: 'Time',
        calendar_month: 'July · 2026',
        calendar_days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        location_label: '✦ Venue ✦',
        dress_label: '✦ Event Countdown ✦',
        lbl_days: 'Days', lbl_hours: 'Hours', lbl_minutes: 'Mins',
        wishes_label: '✦ Gallery ✦',
        wish_title: 'Guestbook',
        name_ph: 'Your Name',
        relation_ph: 'Relationship',
        msg_ph: 'Send your best wishes...',
        submit_btn: 'Send Wishes',
        empty_wishes: 'No wishes yet.',
        toast_ok: 'Wish sent successfully',
        toast_err: 'Please fill in all fields',
        thank_p1: 'One journey ends, a new chapter unfolds.',
        thank_p2: 'Looking forward to the presence of loved ones to mark this special milestone.'
    },
    fr: {
        choose_lang: 'Choisir la langue · Chọn ngôn ngữ',
        to: '✦ Vous Invite Cordonnément ✦',
        hero_title: 'Cérémonie de Remise des Diplômes',
        hero_body: 'Votre présence serait un grand honneur pour moi à ce jalons significatif.',
        from: 'De bachelière',
        date_label: 'Date',
        time_label: 'Heure',
        calendar_month: 'Juillet · 2026',
        calendar_days: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        location_label: '✦ Lieu ✦',
        dress_label: '✦ Compte à Rebours ✦',
        lbl_days: 'Jours', lbl_hours: 'Heures', lbl_minutes: 'Min',
        wishes_label: '✦ Galerie ✦',
        wish_title: 'Livre d\'or',
        name_ph: 'Votre Nom',
        relation_ph: 'Relation',
        msg_ph: 'Envoyez vos meilleurs vœux...',
        submit_btn: 'Envoyer les Vœux',
        empty_wishes: 'Pas encore de vœux.',
        toast_ok: 'Vœux envoyés avec succès',
        toast_err: 'Veuillez remplir tous les champs',
        thank_p1: 'Un voyage se termine, un nouveau chapitre s\'ouvre.',
        thank_p2: 'Au plaisir de voir les êtres chers réunis pour marquer ce moment marquant.'
    }
};

let lang = 'vi';
let wishes = JSON.parse(localStorage.getItem('card_wishes') || '[]');
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');

function applyLang(l) {
    lang = l;
    const t = i18n[l];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    const calMonth = document.getElementById('calendar-month-val');
    const calDaysHeader = document.getElementById('calendar-days-header-val');
    const lblDays = document.getElementById('lbl-days');
    const lblHours = document.getElementById('lbl-hours');
    const lblMinutes = document.getElementById('lbl-minutes');

    if (calMonth) { calMonth.textContent = t.calendar_month; }
    if (lblDays) { lblDays.textContent = t.lbl_days; }
    if (lblHours) { lblHours.textContent = t.lbl_hours; }
    if (lblMinutes) { lblMinutes.textContent = t.lbl_minutes; }
    
    if (calDaysHeader && t.calendar_days) {
        calDaysHeader.innerHTML = t.calendar_days.map(d => `<div>${d}</div>`).join('');
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.lang === l);
    });
    
    renderWishes();
}

function createPetals(containerId, count = 12) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'petal';
        p.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${3 + Math.random() * 6}px;
            height: ${3 + Math.random() * 6}px;
            animation-duration: ${8 + Math.random() * 14}s;
            animation-delay: ${Math.random() * 10}s;
            opacity: 0;
        `;
        container.appendChild(p);
    }
}
createPetals('petals', 14);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const idx = [...sections].indexOf(entry.target);
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === idx);
            });
            entry.target.querySelectorAll('.reveal').forEach(el => {
                el.classList.add('visible');
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(s => {
    observer.observe(s);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        sections[+dot.dataset.s].scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLang(btn.dataset.lang);
        setTimeout(() => {
            sections[1].scrollIntoView({ behavior: 'smooth' });
        }, 250);
    });
});

const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let playing = false;

if (musicBtn && audio) {
    musicBtn.addEventListener('click', () => {
        if (playing) {
            audio.pause();
            playing = false;
            musicBtn.classList.remove('playing');
        } else {
            audio.play().catch(() => {});
            playing = true;
            musicBtn.classList.add('playing');
        }
    });

    document.addEventListener('click', () => {
        if (!playing && audio.paused) {
            audio.play().then(() => {
                playing = true;
                musicBtn.classList.add('playing');
            }).catch(() => {});
        }
    }, { once: true });
}

function showToast(msg) {
    const t = document.getElementById('toast');
    if (t) {
        t.textContent = msg;
        t.classList.add('show');
        setTimeout(() => {
            t.classList.remove('show');
        }, 3000);
    }
}

function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderWishes() {
    const list = document.getElementById('wishes-list');
    if (!list) {
        return;
    }
    const t = i18n[lang];
    if (wishes.length === 0) {
        list.innerHTML = `<p class="empty-wishes">${t.empty_wishes}</p>`;
        return;
    }
    list.innerHTML = [...wishes].reverse().map(w => `
        <div class="wish-card">
            <div class="wish-header">
                <span class="wish-name">${escHtml(w.name || '')}</span>
                <span class="wish-time">${new Date(w.ts).toLocaleDateString()}</span>
            </div>
            <p class="wish-text">${escHtml(w.msg || '')}</p>
        </div>
    `).join('');
}

const submitBtn = document.getElementById('submit-wish');
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const nameEl = document.getElementById('wish-name');
        const msgEl = document.getElementById('wish-msg');
        
        if (!nameEl || !msgEl) {
            return;
        }

        const name = nameEl.value.trim();
        const msg = msgEl.value.trim();
        const t = i18n[lang];
        
        if (!name || !msg) {
            showToast(t.toast_err);
            return;
        }
        
        wishes.push({ name, msg, ts: Date.now() });
        localStorage.setItem('card_wishes', JSON.stringify(wishes));
        
        nameEl.value = '';
        msgEl.value = '';
        
        showToast(t.toast_ok);
        renderWishes();
    });
}

const targetDate = new Date('2026-07-05T10:30:00').getTime();
function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;
    if (diff <= 0) {
        clearInterval(countdownInterval);
        return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const dEl = document.getElementById('days');
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('minutes');

    if (dEl) { dEl.textContent = String(d).padStart(2, '0'); }
    if (hEl) { hEl.textContent = String(h).padStart(2, '0'); }
    if (mEl) { mEl.textContent = String(m).padStart(2, '0'); }
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

renderWishes();