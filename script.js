/**
 * LEAD COM Landing Page Script
 * Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollSpy();
  initValuesWheel();
  initPortfolioFilter();
  initClientsMarquee();
  initScrollReveal();
  initContactForm();
});

/**
 * 1. Header Scroll Effect
 */
function initStickyHeader() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * 2. Mobile Burger Menu
 */
function initMobileMenu() {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

/**
 * 3. Navigation Active Link on Scroll (ScrollSpy)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 200; // offset for sticky header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 4. Interactive Values Wheel (Pentagon shape)
 */
function initValuesWheel() {
  const nodes = document.querySelectorAll('.value-node');
  const centerTitle = document.getElementById('value-center-title');
  const centerDesc = document.getElementById('value-center-desc');
  const lines = document.querySelectorAll('.values-line');

  // Default central text
  const defaultTitle = "Value Your Brand !";
  const defaultDesc = "Découvrez nos valeurs en survolant ou en touchant les bulles.";

  nodes.forEach((node, index) => {
    // Hover interactions
    node.addEventListener('mouseenter', () => {
      activateNode(node, index);
    });

    node.addEventListener('mouseleave', () => {
      deactivateNodes();
    });

    // Touch interactions for mobile devices
    node.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const isActive = node.classList.contains('active');
        if (isActive) {
          deactivateNodes();
        } else {
          activateNode(node, index);
        }
      }
    });
  });

  function activateNode(node, index) {
    // Reset other nodes and lines
    nodes.forEach(n => n.classList.remove('active'));
    lines.forEach(l => l.classList.remove('active'));

    // Highlight current node
    node.classList.add('active');

    // Highlight corresponding SVG connector line
    const lineId = `line-val-${index + 1}`;
    const targetLine = document.getElementById(lineId);
    if (targetLine) targetLine.classList.add('active');

    // Update central display content
    centerTitle.textContent = node.dataset.name;
    centerDesc.textContent = node.dataset.desc;
    
    // Smooth transitions for center text container
    const centerCircle = document.querySelector('.values-center-circle');
    centerCircle.style.transform = 'translate(-50%, -50%) scale(1.05)';
    centerCircle.style.background = 'linear-gradient(135deg, var(--lead-blue) 0%, var(--lead-navy) 100%)';
  }

  function deactivateNodes() {
    nodes.forEach(n => n.classList.remove('active'));
    lines.forEach(l => l.classList.remove('active'));

    centerTitle.textContent = defaultTitle;
    centerDesc.textContent = defaultDesc;

    const centerCircle = document.querySelector('.values-center-circle');
    centerCircle.style.transform = 'translate(-50%, -50%) scale(1)';
    centerCircle.style.background = 'linear-gradient(135deg, var(--lead-navy) 0%, var(--lead-navy-dark) 100%)';
  }
}

/**
 * 5. Filtrable Portfolio (Realisations)
 */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.realisations-grid > div');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.dataset.filter;

      items.forEach(item => {
        // Handle goodies gallery card which spans multiple columns
        if (filterValue === 'all') {
          item.style.display = 'block';
        } else if (filterValue === 'goodies') {
          // If filtering for goodies, show both normal goodies case cards and the goodies gallery
          const categories = item.dataset.category ? item.dataset.category.split(' ') : [];
          if (categories.includes('goodies')) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        } else {
          // General matching logic
          const categories = item.dataset.category ? item.dataset.category.split(' ') : [];
          if (categories.includes(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
}

/**
 * 6. Clients Marquee Duplicate (for infinite scrolling)
 */
function initClientsMarquee() {
  const track = document.querySelector('.clients-marquee-track');
  if (!track) return;
  
  const badges = Array.from(track.children);
  
  // Clone the logos to ensure seamless looping scroll
  badges.forEach(badge => {
    const clone = badge.cloneNode(true);
    track.appendChild(clone);
  });
}

/**
 * 7. Scroll Reveal (IntersectionObserver)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12, // element must be 12% visible to trigger
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 8. Contact Form Validation & Envoi (via mailto)
 */
function initContactForm() {
  const form = document.getElementById('lead-contact-form');
  const successMsg = document.getElementById('contact-success-msg');
  const LEAD_CONTACT_EMAIL = 'contact@lead.cm';

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('form-name').value.trim();
    const company = document.getElementById('form-company').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      alert("Veuillez remplir les champs obligatoires (Nom, Email, Message).");
      return;
    }

    // Construction du mail pré-rempli à destination de LEAD COM
    const mailSubject = `[Site Web] Demande — ${subject}`;
    const bodyLines = [
      `Nom complet : ${name}`,
      company ? `Entreprise : ${company}` : null,
      `Email : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      `Marque de service concernée : ${subject}`,
      '',
      'Message :',
      message
    ].filter(Boolean);

    const mailtoUrl = `mailto:${LEAD_CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    // Ouvre le client email du visiteur avec le message pré-rempli
    window.location.href = mailtoUrl;

    // Confirmation visuelle indiquant que le client mail va s'ouvrir
    successMsg.style.display = 'block';
    successMsg.textContent = `Merci ${name} ! Votre logiciel de messagerie va s'ouvrir avec votre demande pré-remplie à destination de ${LEAD_CONTACT_EMAIL}. Il ne vous reste qu'à cliquer sur "Envoyer".`;

    // Scroll to success message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide success message after 10 seconds
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 10000);
  });
}
