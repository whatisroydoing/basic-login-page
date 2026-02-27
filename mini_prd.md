# Mini PRD: Healthysure Login Page - "Atmospheric Aurora"

## Project Overview
A premium, dark-themed login page demo for Healthysure. The goal is to showcase a high-end "Atmospheric Aurora" aesthetic that feels modern, trustworthy, and brand-focused. This is a frontend-only demo for presentation purposes.

---

## 1. Visual Design Strategy
The design focuses on depth, elegance, and soft lighting to create a calm yet premium user experience.

*   **Color Palette**:
    *   **Primary Background**: Deep Forest Green (`#041C16`) transitioning into a cool Charcoal.
    *   **Atmospheric Accents**: Subtle "Aurora" beams—soft, flowing light trails in muted emerald and teal that move slowly in the background.
    *   **Typography**: Clean, high-contrast white/off-white text for maximum readability against dark backgrounds.
*   **Key Design Elements**:
    *   **Floating Card**: The main login form sits on a semi-transparent card (glassmorphism) with a blurred background effect.
    *   **Brand Identity**: A scalable, emerald-green inline SVG Healthysure logo (#00FF9D) guaranteed to render perfectly against the dark background. Ensures contrast and brand consistency.


---

## 2. Page Structure & Features
The page is split into two main sections (as seen in the original reference but with fixed dark themes).

### A. Left Section: Benefit Showcase
*   **Carousel**: A smooth, auto-playing carousel highlighting member benefits (e.g., "Track Claims", "Unlock Special Deals"). Features custom emerald SVG iconography with glow effects and spacious layout for legibility.
*   **Transitions**: Uses a "blur-fade" animation—where cards softly blur out while fading to switch to the next benefit.
*   **QR Section**: A footer element with a floating, borderless QR code for mobile app downloads, creating a clean aesthetic.


### B. Right Section: Secure Entry
*   **Engagement Text**: "Let's Get Started" header with instructional subtext.
*   **Input Field**: A single, elegant field for Phone or Email with a subtle glow on focus.
*   **Primary CTA**: A prominent "CONTINUE" button with a smooth hover state.
*   **Social Logins**: Refined, dark-theme compatible buttons for "Login with Google" and "Login with Microsoft".

---

## 3. User Experience (UX) Goals
*   **Premium Feel**: Every interaction (hover, transition) should feel deliberate and smooth.
*   **Focus**: The floating card design draws the user's eye directly to the login action.
*   **Modern Branding**: Moving away from the current light/medical look to a more sophisticated "FinTech-meets-Health" aesthetic.
*   **Seamless Mobile Experience**: The transition from desktop to mobile should feel natural, with the login card becoming the primary focus.

---

## 4. Technical Scope (Demo)
*   **Stack**: HTML5, Vanilla CSS (for maximum design control), and lightweight JavaScript for the carousel and aurora animations.
*   **Responsive Strategy**:
    *   **Desktop/Laptop**: Side-by-side layout (Benefit Carousel on left, Login Card on right).
    *   **Mobile (< 768px)**: Vertical stack where the Login Card takes center stage. The Benefit Carousel is moved above the login. The Healthysure logo is strictly left-aligned and scaled down to fit mobile headers conventionally. The QR code is hidden on mobile screens.
    *   **Full Height Layout**: The aurora background will span the entire viewport on all devices.

