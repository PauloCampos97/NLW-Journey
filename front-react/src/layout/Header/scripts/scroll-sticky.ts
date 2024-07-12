export function ScrollStick() {
  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      const header = document.querySelector("header");
      if (!header) return; 

      if (window.scrollY > 0) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-zinc-500');
        header.classList.add('sticky');
      } else {
        header.classList.remove('bg-zinc-500');
        header.classList.add('bg-transparent');
        header.classList.add('fixed');
      }
    });
  });
}
