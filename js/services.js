/* Developer note: Update brochure link inside services.html (.services-hero__brochure) when assets/Achyut_Brochure.pdf is added. GSAP helpers invoked: achyut_title_animation() & achyut_img_animation() from js/gsap-animation.js. */

(function () {
  'use strict';

  const initAOS = () => {
    if (window.AOS && typeof window.AOS.init === 'function') {
      window.AOS.init({ duration: 800, once: true });
    }
  };

  const runGsapHelpers = () => {
    if (typeof window.achyut_title_animation === 'function') {
      window.achyut_title_animation();
    }
    if (typeof window.achyut_img_animation === 'function') {
      window.achyut_img_animation();
    }
  };

  const updateFooterYear = () => {
    const targetYear = `${new Date().getFullYear()}`;
    const node = document.querySelector(
      '.achyut-footer-text-area span[data-footer-year], .achyut-footer-text-area span[data-year]'
    );
    if (node) {
      node.textContent = targetYear;
      return;
    }

    const container = document.querySelector('.achyut-footer-copyright-text-area');
    if (container) {
      container.innerHTML = container.innerHTML.replace(/©\s?\d{4}/, `© ${targetYear}`);
    }
  };

  const enhanceStats = () => {
    const stats = document.querySelectorAll('.services-hero__stat');
    if (!stats.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-animated');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    stats.forEach((stat) => observer.observe(stat));
  };

  const wireRequestQuoteButtons = () => {
    document.querySelectorAll('.request-quote-btn').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const serviceName =
          btn.dataset.service ||
          btn
            .closest('.services-card, .achyut-service-style-4')
            ?.querySelector('.achyut-service-title')
            ?.textContent?.trim() ||
          'Service';

        const redirect = `contact-us.html?service=${encodeURIComponent(serviceName)}`;
        if (btn.tagName.toLowerCase() === 'a') {
          event.preventDefault();
          window.location.href = redirect;
        } else {
          window.location.assign(redirect);
        }
      });
    });
  };

  const initHeroSlider = () => {
    const el = document.querySelector('.services-hero-slider');
    if (!el) return;

    if (window.Swiper) {
      new window.Swiper(el, {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        autoplay: {
          delay: 4200,
          disableOnInteraction: false,
        },
        speed: 900,
        pagination: {
          el: '.services-hero-slider__pagination',
          clickable: true,
        },
      });
    } else {
      el.classList.add('swiper-fallback');
    }
  };

  const initGallerySlider = () => {
    const el = document.querySelector('.services-gallery-slider');
    if (!el) return;

    if (window.Swiper) {
      new window.Swiper(el, {
        loop: true,
        spaceBetween: 32,
        autoplay: {
          delay: 3800,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        slidesPerView: 1.1,
        pagination: {
          el: '.services-gallery__pagination',
          clickable: true,
        },
        breakpoints: {
          576: { slidesPerView: 1.4 },
          768: { slidesPerView: 1.8 },
          992: { slidesPerView: 2.2 },
          1200: { slidesPerView: 2.6 },
        },
      });
    } else {
      el.classList.add('swiper-fallback');
    }
  };

  const initCardHoverFallback = () => {
    document.querySelectorAll('.services-card').forEach((card) => {
      card.addEventListener('mouseenter', () => card.classList.add('is-hover'));
      card.addEventListener('mouseleave', () => card.classList.remove('is-hover'));
      card.addEventListener('focusin', () => card.classList.add('is-hover'));
      card.addEventListener('focusout', () => card.classList.remove('is-hover'));
    });
  };

  const initGsapCardHover = () => {
    if (!window.gsap) return;
    document.querySelectorAll('.services-card').forEach((card) => {
      const zoomIn = () =>
        window.gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out', overwrite: true });
      const zoomOut = () =>
        window.gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out', overwrite: true });

      card.addEventListener('mouseenter', zoomIn);
      card.addEventListener('mouseleave', zoomOut);
      card.addEventListener('focusin', zoomIn);
      card.addEventListener('focusout', zoomOut);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    runGsapHelpers();
    updateFooterYear();
    enhanceStats();
    wireRequestQuoteButtons();
    initHeroSlider();
    initGallerySlider();
    initCardHoverFallback();
    initGsapCardHover();
  });
})();