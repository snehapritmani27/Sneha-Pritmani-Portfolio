<script>
  // ── TYPEWRITER ──
  const lines = [
    "Building bulletproof test frameworks for BFSI",
    "Selenium · Appium · Rest Assured · BDD",
    "42% faster regression cycles",
    "Zero critical defects to production",
    "Available for QA Automation & SDET roles",
  ];
  let li = 0, ci = 0, deleting = false;
  const el = document.getElementById('typed');
  function type() {
    const line = lines[li];
    if (!deleting) {
      el.textContent = line.slice(0, ci + 1);
      ci++;
      if (ci === line.length) { deleting = true; setTimeout(type, 2200); return; }
    } else {
      el.textContent = line.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; }
    }
    setTimeout(type, deleting ? 38 : 62);
  }
  setTimeout(type, 900);

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── PROFICIENCY BAR ANIMATION ──
  const profObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.prof-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        profObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const ps = document.getElementById('prof-section');
  if (ps) profObserver.observe(ps);
</script>
