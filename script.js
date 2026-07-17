document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-toggle');
  var nav = document.querySelector('.navlinks');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    var endpoint = form.dataset.formspreeEndpoint;
    var submitBtn = form.querySelector('button[type="submit"]');
    var btnLabel = submitBtn ? submitBtn.querySelector('.btn-label') : null;
    var success = document.querySelector('.form-success');
    var errorNote = form.querySelector('.form-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorNote) errorNote.classList.remove('show');

      if (!endpoint || endpoint.indexOf('YOUR_FORM_ID') !== -1) {
        if (errorNote) errorNote.classList.add('show');
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (btnLabel) btnLabel.textContent = 'Sending…';

      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.style.display = 'none';
          if (success) success.classList.add('show');
        } else {
          throw new Error('submission failed');
        }
      }).catch(function () {
        if (errorNote) errorNote.classList.add('show');
        if (submitBtn) submitBtn.disabled = false;
        if (btnLabel) btnLabel.textContent = 'Request my free automation review';
      });
    });
  }

  var header = document.querySelector('header.site');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
});
