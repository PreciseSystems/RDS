<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
document.querySelectorAll('.main-item').forEach(main => {
  main.addEventListener('mouseenter', () => {
    document.querySelectorAll('.main-item').forEach(m => m.classList.remove('active'));
    main.classList.add('active');

    document.querySelectorAll('.sub-group').forEach(s => s.classList.remove('show'));
    document.querySelector(`.sub-group[data-parent="${main.dataset.main}"]`).classList.add('show');
  });
});

document.querySelectorAll('.sub-item').forEach(sub => {
  sub.addEventListener('mouseenter', () => {
    document.querySelectorAll('.sub-item').forEach(s => s.classList.remove('active'));
    sub.classList.add('active');

    document.querySelectorAll('.product-grid').forEach(p => p.classList.remove('show'));
    document.querySelector(`.product-grid[data-products="${sub.dataset.sub}"]`).classList.add('show');
  });
});     
</script>
    <script>
const cubeCarousel = document.getElementById('heroCarousel');

cubeCarousel.addEventListener('slide.bs.carousel', function (e) {
  const active = cubeCarousel.querySelector('.carousel-item.active');
  const next = e.relatedTarget;

  if (active) {
    active.classList.remove('cube-in');
    active.classList.add('cube-out');
  }

  if (next) {
    next.classList.remove('cube-out');
    next.classList.add('cube-in');
  }
});

cubeCarousel.addEventListener('slid.bs.carousel', function () {
  cubeCarousel.querySelectorAll('.carousel-item').forEach(item => {
    item.classList.remove('cube-out');
  });
});
    

  
      
</script>