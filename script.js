/* ==========================================================================
   MUZAFFARGARH SKILLS ACADEMY - MAIN SCRIPT (script.js)
   Beginner-friendly, well-commented, viva-ready JavaScript.
   No complex frameworks. Pure Vanilla JS.
   ========================================================================== */

// ==========================================================================
// 1. DATA CONFIGURATION (Course Fees & Details)
// ==========================================================================
// Monthly fees in Pakistani Rupees (PKR)
const courseFees = {
  webDevelopment: 5000,
  graphicDesign: 4000,
  aiCourse: 7000,
  freelancing: 3500
};

// Friendly course display titles for outputs
const courseDisplayNames = {
  webDevelopment: "Web Development",
  graphicDesign: "Graphic Design",
  aiCourse: "AI Course (Advanced & Agentic)",
  freelancing: "Freelancing Masterclass"
};

// ==========================================================================
// 2. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize dark mode from localStorage
  initTheme();

  // Setup mobile navigation toggle
  setupMobileNav();

  // Setup FAQ Accordion
  setupFAQ();

  // Highlight active nav item on scroll
  setupScrollSpy();
});

// ==========================================================================
// 3. DARK MODE FUNCTIONALITY (Extra Feature with localStorage)
// ==========================================================================
// Function to initialize theme from localStorage
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  // If user previously chose dark theme, apply it
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  // Add click event listener to toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleDarkMode);
  }
}

// Function to toggle between Light and Dark mode
function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    // Switch to Light Mode
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    // Switch to Dark Mode
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// ==========================================================================
// 4. MOBILE NAVIGATION (Hamburger Menu)
// ==========================================================================
function setupMobileNav() {
  const hamburgerBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-apply-btn");

  if (!hamburgerBtn || !mobileNav) return;

  // Toggle mobile navigation when hamburger icon is clicked
  hamburgerBtn.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("open");
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile navigation when any link is clicked
  mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================================================
// 5. STUDENT ADMISSION ELIGIBILITY CHECKER
// ==========================================================================
function checkEligibility() {
  // 1. Get input elements
  const nameInput = document.getElementById("student-name");
  const marksInput = document.getElementById("student-marks");
  const courseInput = document.getElementById("eligibility-course");

  // Error message elements
  const nameError = document.getElementById("name-error");
  const marksError = document.getElementById("marks-error");
  const courseError = document.getElementById("course-error");

  // Result display elements
  const resultBox = document.getElementById("eligibility-result");
  const resultIcon = document.getElementById("eligibility-result-icon");
  const resultGreeting = document.getElementById("eligibility-result-greeting");
  const resultStatus = document.getElementById("eligibility-result-status");
  const resultNote = document.getElementById("eligibility-result-note");

  // Reset error messages and styles
  nameError.textContent = "";
  marksError.textContent = "";
  courseError.textContent = "";
  nameInput.classList.remove("is-invalid");
  marksInput.classList.remove("is-invalid");
  courseInput.classList.remove("is-invalid");
  resultBox.style.display = "none";
  resultBox.className = "result-box"; // reset status classes

  // 2. Read values and trim whitespace
  const studentName = nameInput.value.trim();
  const marksValue = marksInput.value.trim();
  const selectedCourse = courseInput.value;

  let isValid = true;

  // Validation: Student Name
  if (studentName === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("is-invalid");
    isValid = false;
  }

  // Validation: Marks (%)
  if (marksValue === "") {
    marksError.textContent = "Marks are required.";
    marksInput.classList.add("is-invalid");
    isValid = false;
  } else {
    const marks = Number(marksValue);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      marksError.textContent = "Marks must be between 0 and 100.";
      marksInput.classList.add("is-invalid");
      isValid = false;
    }
  }

  // Validation: Course
  if (selectedCourse === "") {
    courseError.textContent = "Please select a course.";
    courseInput.classList.add("is-invalid");
    isValid = false;
  }

  // If any field is invalid, stop execution
  if (!isValid) {
    return;
  }

  // 3. Eligibility Decision Logic based on marks
  const marks = Number(marksValue);
  let resultTitle = "";
  let resultMessage = "";
  let icon = "";
  let statusClass = "";

  // IF marks >= 70: Direct Admission
  if (marks >= 70) {
    statusClass = "status-direct";
    icon = "🎉";
    resultTitle = `Congratulations ${studentName}!`;
    resultMessage = "You are eligible for Direct Admission.";
    resultNote.textContent = `Excellent academic score of ${marks}%. You meet all criteria to join the ${selectedCourse} program immediately.`;
  }
  // IF marks >= 50 AND marks < 70: Eligible, counselling recommended
  else if (marks >= 50 && marks < 70) {
    statusClass = "status-counselling";
    icon = "📋";
    resultTitle = `Welcome ${studentName}!`;
    resultMessage = "You are eligible, but counselling is recommended.";
    resultNote.textContent = `Your score of ${marks}% qualifies you for admission into ${selectedCourse}. An academic counselor will assist you to succeed.`;
  }
  // IF marks < 50: Contact admission counsellor
  else {
    statusClass = "status-counsellor";
    icon = "📞";
    resultTitle = `Hello ${studentName},`;
    resultMessage = "Please contact our admission counsellor.";
    resultNote.textContent = `Your score is ${marks}%. Please speak directly with our advisors for foundation batch options and assessment guidance.`;
  }

  // 4. Update and display result
  resultBox.classList.add(statusClass);
  resultIcon.textContent = icon;
  resultGreeting.textContent = resultTitle;
  resultStatus.textContent = resultMessage;
  resultBox.style.display = "flex";
}

// ==========================================================================
// 6. COURSE FEE CALCULATOR
// ==========================================================================
function calculateFee() {
  // 1. Get input elements
  const courseSelect = document.getElementById("fee-course");
  const monthsInput = document.getElementById("fee-months");

  // Error elements
  const courseError = document.getElementById("fee-course-error");
  const monthsError = document.getElementById("fee-months-error");

  // Result display elements
  const resultCard = document.getElementById("fee-result");
  const summaryCourse = document.getElementById("summary-course");
  const summaryMonthlyFee = document.getElementById("summary-monthly-fee");
  const summaryDuration = document.getElementById("summary-duration");
  const summaryOriginalFee = document.getElementById("summary-original-fee");
  const summaryDiscount = document.getElementById("summary-discount");
  const summaryFinalFee = document.getElementById("summary-final-fee");

  // Reset errors and styles
  courseError.textContent = "";
  monthsError.textContent = "";
  courseSelect.classList.remove("is-invalid");
  monthsInput.classList.remove("is-invalid");
  resultCard.style.display = "none";

  // 2. Read values
  const selectedCourseKey = courseSelect.value;
  const monthsValue = monthsInput.value.trim();

  let isValid = true;

  // Validation: Course required
  if (!selectedCourseKey || !courseFees[selectedCourseKey]) {
    courseError.textContent = "Please select a valid course.";
    courseSelect.classList.add("is-invalid");
    isValid = false;
  }

  // Validation: Months required, positive integer, no 0, no negative, no NaN
  const numberOfMonths = Number(monthsValue);
  if (monthsValue === "") {
    monthsError.textContent = "Please enter the number of months.";
    monthsInput.classList.add("is-invalid");
    isValid = false;
  } else if (isNaN(numberOfMonths) || !Number.isInteger(numberOfMonths) || numberOfMonths <= 0) {
    monthsError.textContent = "Months must be a whole positive number (e.g. 1, 3, 6).";
    monthsInput.classList.add("is-invalid");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // 3. Mathematical Calculations
  const monthlyFee = courseFees[selectedCourseKey];
  const originalFee = monthlyFee * numberOfMonths;

  // Determine Discount Percentage:
  // If months == 3: 5% discount
  // If months >= 6: 10% discount
  // Otherwise: 0% discount
  let discountPercentage = 0;
  if (numberOfMonths === 3) {
    discountPercentage = 5;
  } else if (numberOfMonths >= 6) {
    discountPercentage = 10;
  } else {
    discountPercentage = 0;
  }

  // Formula:
  // discountAmount = originalFee * discountPercentage / 100
  // finalFee = originalFee - discountAmount
  const discountAmount = Math.round((originalFee * discountPercentage) / 100);
  const finalFee = originalFee - discountAmount;

  // 4. Update the summary display
  summaryCourse.textContent = courseDisplayNames[selectedCourseKey];
  summaryMonthlyFee.textContent = `Rs. ${monthlyFee.toLocaleString()}`;
  summaryDuration.textContent = `${numberOfMonths} Month${numberOfMonths > 1 ? "s" : ""}`;
  summaryOriginalFee.textContent = `Rs. ${originalFee.toLocaleString()}`;

  if (discountPercentage > 0) {
    summaryDiscount.textContent = `${discountPercentage}% (Save Rs. ${discountAmount.toLocaleString()})`;
  } else {
    summaryDiscount.textContent = "0% (No discount for this duration)";
  }

  summaryFinalFee.textContent = `Rs. ${finalFee.toLocaleString()}`;

  // Make the summary card visible
  resultCard.style.display = "block";
}

// Helper to pre-select course when user clicks "View Course" on courses section
function selectCourseInCalculator(courseKey) {
  const courseSelect = document.getElementById("fee-course");
  const eligibilityCourseSelect = document.getElementById("eligibility-course");

  if (courseSelect && courseKey) {
    courseSelect.value = courseKey;
  }

  // Also map course name to eligibility dropdown for convenience
  const courseNamesMap = {
    webDevelopment: "Web Development",
    graphicDesign: "Graphic Design",
    aiCourse: "AI Course",
    freelancing: "Freelancing"
  };

  if (eligibilityCourseSelect && courseNamesMap[courseKey]) {
    eligibilityCourseSelect.value = courseNamesMap[courseKey];
  }
}

function updateCourseFeePreview() {
  // If calculator already calculated, auto recalculate if inputs are filled
  const monthsInput = document.getElementById("fee-months");
  if (monthsInput && monthsInput.value.trim() !== "") {
    calculateFee();
  }
}

// ==========================================================================
// 7. FAQ ACCORDION (One open at a time)
// ==========================================================================
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all other FAQ items first
      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove("active");
        const otherBtn = otherItem.querySelector(".faq-question");
        const otherAns = otherItem.querySelector(".faq-answer");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        if (otherAns) otherAns.style.maxHeight = null;
      });

      // If clicked item was not active, open it
      if (!isActive) {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ==========================================================================
// 8. CONTACT FORM VALIDATION (Frontend Only)
// ==========================================================================
function validateContactForm() {
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");

  const nameError = document.getElementById("contact-name-error");
  const emailError = document.getElementById("contact-email-error");
  const messageError = document.getElementById("contact-message-error");
  const successBox = document.getElementById("contact-success-msg");

  // Reset previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  nameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-invalid");
  messageInput.classList.remove("is-invalid");
  successBox.style.display = "none";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("is-invalid");
    isValid = false;
  }

  // Email validation with standard regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Please enter your email address.";
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email format.";
    emailInput.classList.add("is-invalid");
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Please write a message.";
    messageInput.classList.add("is-invalid");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Show friendly success confirmation (No backend needed)
  successBox.style.display = "flex";

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}

// ==========================================================================
// 9. SCROLL SPY (Active Nav Link on Scroll)
// ==========================================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
