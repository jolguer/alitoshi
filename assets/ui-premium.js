(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress gives the long-form landing page a subtle sense of movement.
  if (!reduce) {
    const progress = document.createElement('div');
    progress.setAttribute('aria-hidden', 'true');
    Object.assign(progress.style, {
      position:'fixed', left:'0', top:'0', height:'3px', width:'0%', zIndex:'9999',
      background:'linear-gradient(90deg,#8f3d2a,#d3a05b,#748d68)',
      transformOrigin:'left center', pointerEvents:'none', transition:'width .08s linear'
    });
    document.body.appendChild(progress);
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%';
    };
    window.addEventListener('scroll', update, {passive:true});
    update();
  }

  // Add gentle reveal behavior to sections that are not already animated.
  if (!reduce && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ui-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -40px'});
    document.querySelectorAll('.design-card,.testimonial-card,.spec-row,.solution-text').forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('ui-reveal');
        observer.observe(el);
      }
    });
  }

  // Keep focus states strong for keyboard users and make cards feel tactile.
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      if (reduce || window.innerWidth < 900) return;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
      card.style.transform = `perspective(700px) rotateX(${(-y * 1.4).toFixed(2)}deg) rotateY(${(x * 1.4).toFixed(2)}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  // Ensure mobile menu closes after selecting a section.
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      const hamburger = document.querySelector('.hamburger');
      if (menu) menu.classList.remove('open');
      if (hamburger) hamburger.classList.remove('active');
    });
  });
})();
