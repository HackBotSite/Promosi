document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu a, .sidebar .nav-list a');
  const sections = document.querySelectorAll('main .section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href.startsWith('#')) return; // biarkan link eksternal jalan normal
      e.preventDefault();

      // reset active link
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // sembunyikan semua section
      sections.forEach(sec => sec.style.display = 'none');

      // tampilkan section sesuai href
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) target.style.display = 'block';
    });
  });
});
