(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  function closeNavigation() {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.dataset.open = 'false';
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.dataset.open = String(open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      toggle.focus();
    }
  });

  const filterGroup = document.querySelector('.category-filters');
  const filters = Array.from(filterGroup.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('.menu-card'));
  const count = document.querySelector('.menu-count');
  function applyFilter(button) {
    const category = button.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      card.hidden = card.dataset.category !== category;
      if (!card.hidden) visible++;
    });
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    document.querySelector('.menu-grid').dataset.count = String(visible);
    count.textContent = `${visible} ${visible === 1 ? 'opção' : 'opções'} · ${button.textContent.trim()}`;
  }
  filters.forEach(button => button.addEventListener('click', () => applyFilter(button)));
  applyFilter(filters[0]);
  filterGroup.hidden = false;
  count.hidden = false;

  const gallery = Array.from(document.querySelectorAll('[data-gallery-index]'));
  const dialog = document.querySelector('.lightbox');
  const image = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('figcaption');
  const counter = dialog.querySelector('.lightbox-counter');
  const close = dialog.querySelector('.lightbox-close');
  let activeIndex = 0;
  let opener = null;

  function showImage(index) {
    activeIndex = (index + gallery.length) % gallery.length;
    const selected = gallery[activeIndex];
    image.src = selected.querySelector('img').getAttribute('src');
    image.alt = selected.querySelector('img').alt;
    caption.textContent = selected.dataset.caption;
    counter.textContent = `${activeIndex + 1} / ${gallery.length}`;
  }
  gallery.forEach((button, index) => button.addEventListener('click', () => {
    if (typeof dialog.showModal !== 'function') {
      window.open(button.querySelector('img').src, '_blank', 'noopener,noreferrer');
      return;
    }
    opener = button;
    showImage(index);
    dialog.showModal();
    document.body.classList.add('modal-open');
    close.focus();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-direction]').forEach(button => {
    button.addEventListener('click', () => showImage(activeIndex + Number(button.dataset.direction)));
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    opener?.focus();
  });
})();
