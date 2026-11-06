const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
// Navigation remains fully usable without JavaScript.
const links = [...document.querySelectorAll('nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  for (const link of links) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}

// The rail also works with native touch/trackpad scrolling and without JavaScript.
const certificateTrack = document.getElementById('certificate-track');
if (certificateTrack) {
  const previous = document.getElementById('certificates-prev');
  const next = document.getElementById('certificates-next');
  const controls = document.querySelector('.certificate-controls');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateControls = () => {
    previous.disabled = certificateTrack.scrollLeft <= 2;
    next.disabled = certificateTrack.scrollLeft + certificateTrack.clientWidth >= certificateTrack.scrollWidth - 2;
  };
  const move = direction => {
    const card = certificateTrack.querySelector('li');
    const gap = parseFloat(getComputedStyle(certificateTrack).columnGap) || 0;
    certificateTrack.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  };
  controls.hidden = false;
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  certificateTrack.addEventListener('scroll', updateControls, { passive: true });
  certificateTrack.addEventListener('keydown', event => {
    if (event.target !== certificateTrack) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  window.addEventListener('resize', updateControls);
  updateControls();
}
