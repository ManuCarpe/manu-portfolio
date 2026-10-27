// Home page scroll story: smooth scrolling (Lenis) + scroll-driven animation (GSAP ScrollTrigger).
//
//  intro   pinned: the #E0E0E0 layer pushes up over the portrait (which shrinks), carrying the
//          words on its top edge → the case study cards, stacked in the middle, slide out to
//          their places → the row scrolls sideways.
//  play    pinned: the playground canvas drifts with the scroll → the Connect sheet pushes up.
//
// Tweak the pacing with the numbers in INTRO and PLAY (in screen-heights of scrolling).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const INTRO = { push: 1, spread: 0.75, slide: 0.6, hold: 0.3 };
const PLAY = { drift: 0.8, sheet: 0.7 };

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector<HTMLElement>('[data-header]');
const intro = document.querySelector<HTMLElement>('[data-intro]')!;
const play = document.querySelector<HTMLElement>('[data-play]')!;
const canvas = play.querySelector<HTMLElement>('[data-canvas]');

type Key = 'home' | 'case-study' | 'playground' | 'connect';
let targets: Record<Key, () => number> = {
  home: () => 0,
  'case-study': () => offsetTop(document.getElementById('case-study')),
  playground: () => offsetTop(play),
  connect: () => offsetTop(document.getElementById('connect')),
};
function offsetTop(el: HTMLElement | null) {
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
}

let lenis: Lenis | null = null;

if (!reduce) {
  document.documentElement.classList.add('motion');

  // ---------- Smooth scroll ----------
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const vh = () => window.innerHeight;

  // ---------- Home → case studies ----------
  const layer = intro.querySelector<HTMLElement>('[data-layer]')!;
  const photo = intro.querySelector<HTMLElement>('[data-photo]')!;
  const strip = intro.querySelector<HTMLElement>('[data-strip]')!;
  const cards = gsap.utils.toArray<HTMLElement>('[data-card]', intro);
  const mid = (cards.length - 1) / 2;
  cards.forEach((c, i) => (c.style.zIndex = String(10 - Math.round(Math.abs(i - mid) * 2))));

  document.documentElement.classList.add('motion-ready');
  const travel = () => Math.max(0, strip.scrollWidth - window.innerWidth);
  const introLength = () => vh() * (INTRO.push + INTRO.spread + INTRO.slide + INTRO.hold);
  // distance from a card's own place to the middle of the screen
  const toCentre = (el: HTMLElement) => window.innerWidth / 2 - (el.offsetLeft + el.offsetWidth / 2);

  const introTl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: intro,
      start: 'top top',
      end: () => `+=${introLength()}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  // the layer pushes up; the words ride on its top edge
  introTl.fromTo(layer, { yPercent: 100 }, { yPercent: 0, ease: 'power2.inOut', duration: INTRO.push }, 0);
  // the portrait shrinks and drifts up a little slower than the page (parallax)
  introTl.fromTo(photo, { scale: 1, yPercent: 0 }, { scale: 0.55, yPercent: -14, ease: 'power1.in', duration: INTRO.push }, 0);
  // cards arrive stacked in the middle…
  introTl.fromTo(
    cards,
    {
      x: (_i: number, el: HTMLElement) => toCentre(el),
      rotation: (i: number) => (i - mid) * 4,
      scale: 0.82,
    },
    { x: (_i: number, el: HTMLElement) => toCentre(el), rotation: (i: number) => (i - mid) * 4, scale: 0.82, duration: INTRO.push },
    0
  );
  // …then slide out to their places, left and right
  introTl.to(cards, { x: 0, rotation: 0, scale: 1, ease: 'power3.inOut', duration: INTRO.spread }, INTRO.push);
  // then the row scrolls sideways (left → right through the list)
  introTl.to(strip, { x: () => -travel(), ease: 'power1.inOut', duration: INTRO.slide }, INTRO.push + INTRO.spread);
  introTl.to({}, { duration: INTRO.hold });

  // ---------- Playground → connect ----------
  const sheet = play.querySelector<HTMLElement>('[data-sheet]')!;
  const dim = play.querySelector<HTMLElement>('[data-dim]')!;
  const playTl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: play,
      start: 'top top',
      end: () => `+=${vh() * (PLAY.drift + PLAY.sheet)}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  playTl.to({}, { duration: PLAY.drift });
  playTl.fromTo(sheet, { yPercent: 100 }, { yPercent: 0, ease: 'power2.out', duration: PLAY.sheet }, PLAY.drift);
  playTl.fromTo(dim, { opacity: 0 }, { opacity: 1, duration: PLAY.sheet }, PLAY.drift);

  // the canvas drifts with the scroll, from the moment it comes into view
  if (canvas) {
    ScrollTrigger.create({
      trigger: play,
      start: 'top bottom',
      end: () => playTl.scrollTrigger!.end,
      onUpdate: (self) => {
        const scrolled = self.progress * (self.end - self.start);
        canvas.dispatchEvent(new CustomEvent('canvas:scroll', { detail: scrolled * 0.45 }));
      },
    });
  }

  targets = {
    home: () => 0,
    'case-study': () => introTl.scrollTrigger!.start + vh() * (INTRO.push + INTRO.spread * 0.9),
    playground: () => playTl.scrollTrigger!.start,
    connect: () => playTl.scrollTrigger!.end,
  };
}

// ---------- Menu: active item, header blur, smooth jumps ----------
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];

function current(): Key {
  const y = window.scrollY;
  const h = window.innerHeight;
  if (y >= targets.connect() - h * 0.35) return 'connect';
  if (y >= targets.playground() - h * 0.5) return 'playground';
  if (y >= targets['case-study']() - h * 0.75) return 'case-study';
  return 'home';
}
let lastKey: Key | null = null;
function updateNav() {
  const key = current();
  if (key === lastKey) return;
  lastKey = key;
  links.forEach((a) => {
    if (!a.classList.contains('roll')) return;
    const on = a.dataset.navLink === key;
    a.classList.toggle('dim', !on);
    if (on) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
  header?.classList.toggle('is-blurred', key === 'playground' || key === 'connect');
}

function go(key: Key, immediate = false) {
  const y = targets[key]();
  lenis?.resize();
  if (lenis) lenis.scrollTo(y, { immediate, duration: 1.6, force: true });
  else window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' });
  history.replaceState(null, '', key === 'home' ? '/' : `/#${key}`);
}

links.forEach((a) =>
  a.addEventListener('click', (e) => {
    const key = a.dataset.navLink as Key;
    if (!(key in targets)) return;
    e.preventDefault();
    go(key);
  })
);

window.addEventListener('scroll', updateNav, { passive: true });

// Arriving with /#case-study etc. (from another page): jump there once everything is measured
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const start = () => {
  ScrollTrigger.refresh();
  lenis?.resize();
  const hash = location.hash.slice(1) as Key;
  if (hash && hash in targets) {
    window.scrollTo(0, targets[hash]());
    lenis?.scrollTo(targets[hash](), { immediate: true, force: true });
  }
  updateNav();
};
if (document.readyState === 'complete') setTimeout(start, 50);
else window.addEventListener('load', () => setTimeout(start, 50));
updateNav();
