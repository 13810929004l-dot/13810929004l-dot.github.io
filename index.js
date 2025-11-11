// 给所有热点加上 hover 监听
const hotspots = document.querySelectorAll('.hotspot');

hotspots.forEach(hs => {
  const targetSel = hs.getAttribute('data-target');
  const targetImg = document.querySelector(targetSel);

  if (!targetImg) return;

  const addHover = () => targetImg.classList.add('hovering');
  const removeHover = () => targetImg.classList.remove('hovering');

  hs.addEventListener('mouseenter', addHover);
  hs.addEventListener('mouseleave', removeHover);
  hs.addEventListener('touchstart', addHover);
  hs.addEventListener('touchend', removeHover);
});
