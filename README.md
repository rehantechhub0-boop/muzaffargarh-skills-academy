# Muzaffargarh Skills Academy

A modern, responsive academy website built using semantic HTML5, Vanilla CSS3, and beginner-friendly JavaScript.

## 🎓 About The Project
Muzaffargarh Skills Academy website provides digital education information, interactive admission eligibility assessment, tuition fee calculation with real-time discounts, course tracks, FAQs, and contact capabilities.

## ✨ Features
- **Responsive Design**: Optimized for Desktop (1920px, 1440px, 1280px), Tablet (1024px, 768px), and Mobile devices (430px down to 360px).
- **Dark Mode**: Integrated theme toggle with persistent preference via `localStorage`.
- **Student Admission Eligibility Checker**: Dynamic validation and status decision based on marks percentage:
  - $\ge 70\%$: Direct Admission
  - $50\% - 69\%$: Eligible, counselling recommended
  - $< 50\%$: Contact admission counsellor
- **Course Fee Calculator**: Accurate duration and discount computation:
  - Web Development: Rs. 5,000 / month
  - Graphic Design: Rs. 4,000 / month
  - AI Course: Rs. 7,000 / month
  - Freelancing: Rs. 3,500 / month
  - **Discounts**: 3 Months $\rightarrow$ 5% off | 6+ Months $\rightarrow$ 10% off
- **FAQ Accordion**: Expandable questions with single-panel focus.
- **Contact Form**: Client-side validation with clean feedback.
- **Floating WhatsApp Quick Contact**: One-click direct chat with admissions desk.
- **Viva-Friendly Codebase**: Clean variable naming, explanatory comments, and straightforward control flows.
- **GitHub Pages Compatible**: Completely zero build tools, relative asset paths, no backend or database required.

## 📂 File Structure
```
muzaffargarh-skills-academy/
│
├── index.html     # Semantic HTML5 markup
├── style.css      # Custom styling, dark mode variables & responsive queries
├── script.js      # Vanilla JavaScript logic, forms & calculations
└── README.md      # Project overview and documentation
```

## 🚀 How to Run Locally
1. Double click `index.html` to open directly in any web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve via VS Code Live Server or Python HTTP server:
   ```bash
   python -m http.server 8000
   ```

## 🌐 Deploy to GitHub Pages
1. Push this folder to a GitHub repository.
2. In GitHub, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---
*Created for Muzaffargarh Skills Academy educational project.*
