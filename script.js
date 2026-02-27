const slidesData = [
    {
        tag: "24X7 Claims support",
        title: "Track Claims Anytime,<br>Get Instant Help",
        content: `
            <div class="benefit-visual">
                <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <div class="status-tracker">
                    <div class="tracker-item active"><span class="dot"></span><p>Claim Raised</p></div>
                    <div class="tracker-item active"><span class="dot"></span><p>Received</p></div>
                    <div class="tracker-item"><span class="dot"></span><p>Approved</p></div>
                    <div class="tracker-item"><span class="dot"></span><p>Settled</p></div>
                </div>
            </div>
        `
    },
    {
        tag: "Access to exclusive offers & Rewards",
        title: "Unlock Special Deals and Perks",
        content: `
            <div class="benefit-visual">
                <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 8 22 12 18 16"></polyline><polyline points="6 8 2 12 6 16"></polyline><line x1="2" y1="12" x2="22" y2="12"></line></svg>
                <div class="perks-grid">
                    <div class="perk-item glass"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg> Gym Membership</div>
                    <div class="perk-item glass"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg> Health Checkups</div>
                </div>
            </div>
        `
    },
    {
        tag: "Extra coverage through Flexi-Top up",
        title: "Increase your Coverage<br>up to ₹30L",
        content: `
            <div class="benefit-visual">
                <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                <div class="coverage-info">
                    <p>Lifelong Coverage | Tax Savings</p>
                    <p>Easy Conversion | 24/7 Claims Help</p>
                </div>
            </div>
        `
    }
];


let currentSlide = 0;
const carousel = document.getElementById('benefit-carousel');

function renderSlide(index) {
    const slide = slidesData[index];
    const slideHTML = `
        <div class="carousel-slide active">
            <p class="slide-tag">${slide.tag}</p>
            <h1 class="slide-title">${slide.title}</h1>
            <div class="benefit-card glass">
                <div class="card-content">
                    ${slide.content}
                </div>
            </div>
        </div>
    `;
    carousel.innerHTML = slideHTML;
}

function nextSlide() {
    // Apply exit animation (blur + fade)
    const activeSlide = carousel.querySelector('.carousel-slide');
    if (activeSlide) {
        activeSlide.style.opacity = '0';
        activeSlide.style.filter = 'blur(20px)';
    }

    setTimeout(() => {
        currentSlide = (currentSlide + 1) % slidesData.length;
        renderSlide(currentSlide);
    }, 800);
}

// Initial render
renderSlide(0);

// Auto-play
setInterval(nextSlide, 5000);

// Basic Form handling for demo
document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Demo Login Successful!');
});
