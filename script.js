/* ==========================================
   VYVIDH '26 - JAVASCRIPT
   Interactivity for Main Events Modal, Gallery Lightbox,
  Native Page Scrolling, Intro Split Curtain,
   Navbar Auto-Hide on Scroll, and Text Reveal Animations
   ========================================== */

// Main Events Data Structure with updated metadata
const mainEventsData = [
  {
    title: "AVISHKAR",
    logo: "MAIN EVENTS/AVISHKAR.png",
    description: "Got a cool project? Show it off, impress the crowd, and compete for the prize pool. This is your stage — own it!",
    prize: "₹15,000",
    date: "15/10/2026",
    type: "Project Expo",
    staff: "Ms. Bini(Asst. Prof, CE Dept) - 9895996155, Ms. Mayasree K M (Asst. Prof, AS Dept) - 8281501539",
    student: "Anupa V J (CE) - 8075971998, Anitha N K (CE) - 9497801034"
  },
  {
    title: "FLUXFORUM",
    logo: "MAIN EVENTS/FLEX_FORUM.png",
    description: "Take the stage, share your perspective, and challenge the status quo. Show off your research and compete for the top spot!",
    prize: "₹6,000",
    date: "15/10/2026",
    type: "Paper Presentation",
    staff: "Ms. Vismaya N Sasi (Asst. Prof, AIML Dept) - 9188507504",
    student: "Aswin Krishna A R (AIML) -8590776636"
  },
  {
    title: "IDEAGRAM",
    logo: "MAIN EVENTS/IDEAGRAM.png",
    description: "Bring your ideas, roll up your sleeves, and build something epic. Learn, create, and have fun doing it!",
    prize: "Certificates & Rewards",
    date: "15/10/2026",
    type: "Workshop",
    staff: "Ms. Soumya C J (Asst. Prof, CSE Dept) - 9645965402",
    student: "Acquine Leo T(CSE) - 7902966214, Hari Krishnan K J (CSE) - 9605843649"
  },
  {
    title: "NAVAYUVA",
    logo: "MAIN EVENTS/NAVAYUVA.png",
    description: "Calling all young innovators! Bring your best projects, battle it out with other brilliant minds, and grab the top spot.",
    prize: "₹25,000",
    date: "15/10/2026",
    type: "School Project Expo",
    staff: "Dr. Devika Mahesh (Asst. Prof, AS Dept) - 9567317150, Ms. Salkala K S (Asst. Prof, MCA Dept) - 9747552526",
    student: "Anika Viju (MCA) - 8281335105, Angel Maria Shaju (MCA) - 8086218076"
  },
  {
    title: "REELRUSH",
    logo: "MAIN EVENTS/REEL_RUSH.png",
    description: "Got a story to tell? Grab your camera, get creative, and make a reel that steals the show!",
    prize: "₹25,000",
    date: "15/10/2026 - 17/10/2026",
    type: "Reel & Short Film Contest",
    staff: "Dr. Neenu Thomas (Asst.Prof, EEE Dept) - 9446723144, Mr. Navven T P (Asst Prof, ME Dept) - 7034339904",
    student: "Varna V V (ECE) -9895682740"
  }
];

/* ==========================================
   1. FAST SPLIT-SCREEN INTRO CURTAIN OPENING
   ========================================== */
function initIntroCurtain() {
  const curtain = document.getElementById('intro-curtain');
  if (!curtain) return;

  // Open curtain fast and smoothly on load
  setTimeout(() => {
    curtain.classList.add('open');
  }, 100);
}

/* ==========================================
   2. NAVBAR HIDE ON SCROLL DOWN / SHOW ON SCROLL UP
   ========================================== */
function initNavbarScrollBehavior() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      // Scroll Down -> Hide Navbar
      navbar.classList.add('nav-hidden');
    } else {
      // Scroll Up or Top -> Show Navbar
      navbar.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* ==========================================
   3. ANIMATE TEXTS & DESCRIPTIONS ON SCROLL
   ========================================== */
function initTextScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================
   4. COLLEGE IMAGE BOTTOM-TO-TOP ANIMATION
   ========================================== */
function initCollegeImageAnimation() {
  const collegeImg = document.querySelector('.college-full-img');
  if (!collegeImg) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        collegeImg.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(collegeImg);
}

/* ==========================================
  5. MAIN EVENT MODAL HANDLER
   ========================================== */
function openMainEventModal(index) {
  const event = mainEventsData[index];
  if (!event) return;

  const titleEl = document.getElementById('modal-event-title');
  const logoEl = document.getElementById('modal-event-logo');
  const descEl = document.getElementById('modal-event-desc');
  const prizeEl = document.getElementById('modal-event-prize');
  const dateEl = document.getElementById('modal-event-date');
  const typeEl = document.getElementById('modal-event-type');
  const staffEl = document.getElementById('modal-event-staff');
  const studentEl = document.getElementById('modal-event-student');

  if (titleEl) titleEl.textContent = event.title;
  if (logoEl) {
    logoEl.src = event.logo;
    logoEl.alt = event.title + " Logo";
  }
  if (descEl) descEl.textContent = event.description;
  if (prizeEl) prizeEl.textContent = event.prize;
  if (dateEl) dateEl.textContent = event.date;
  if (typeEl) typeEl.textContent = event.type;
  if (staffEl) staffEl.textContent = event.staff;
  if (studentEl) studentEl.textContent = event.student;

  const modal = document.getElementById('event-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMainEventModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) {
    return;
  }
  const modal = document.getElementById('event-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleRegister() {
  const title = document.getElementById('modal-event-title').textContent;
  alert(`Thank you for registering for ${title}! Registration details have been opened.`);
}

/* ==========================================
  6. GALLERY LIGHTBOX
   ========================================== */
function initGalleryLightbox() {
  const puzzleItems = document.querySelectorAll('.puzzle-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  puzzleItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.puzzle-img');
      const caption = item.querySelector('.puzzle-overlay span');
      if (img && lightbox) {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption ? caption.textContent : 'Vyvidh Gallery';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================
  7. MOBILE MENU TOGGLE & SCROLL SPY
   ========================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const animate = () => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const rect = aboutSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.75 && !animated) {
      animated = true;
      statNumbers.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const speed = Math.ceil(target / 40);

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.textContent = `${count}+`;
            setTimeout(updateCount, 30);
          } else {
            counter.textContent = `${target}+`;
          }
        };
        updateCount();
      });
    }
  };

  window.addEventListener('scroll', animate, { passive: true });
  animate();
}

// ESC Key Listener to Close Modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMainEventModal();
    closeLightbox();
  }
});

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initIntroCurtain();
  initNavbarScrollBehavior();
  initTextScrollAnimations();
  initGalleryLightbox();
  initMobileMenu();
  initScrollSpy();
  initAnimatedCounters();
  initCollegeImageAnimation();
});
