
const toggleNavbar = () => {
  const EXPANDED_NAVBAR_CLASS = 'expandableNavbar--expanded';
  const EXPANDED_BACKDROP_CLASS = 'navbarBackdrop--expanded';
  const EXPANDED_ATTRIBUTE = 'aria-expanded';

  const navbar = document.getElementById('navbar');
  const backdrop = document.getElementById('backdrop');
  const isExpanded = navbar.getAttribute(EXPANDED_ATTRIBUTE)
  if (isExpanded === 'true') {
    navbar.classList.remove(EXPANDED_NAVBAR_CLASS);
    backdrop.classList.remove(EXPANDED_BACKDROP_CLASS);
    navbar.setAttribute(EXPANDED_ATTRIBUTE, false)
  } else {
    navbar.classList.add(EXPANDED_NAVBAR_CLASS);
    backdrop.classList.add(EXPANDED_BACKDROP_CLASS);
    navbar.setAttribute(EXPANDED_ATTRIBUTE, true)
  }
}