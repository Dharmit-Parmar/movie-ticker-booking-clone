const outer_boxes = document.querySelectorAll(".outer-cards");

outer_boxes.forEach(outer_box => {
    let isDragging = false, startx, startscroll;

    const Dragstart = (e) => {
        isDragging = true;
        outer_box.classList.add("dragging");
        startx = e.pageX;
        startscroll = outer_box.scrollLeft;
    };

    const Dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevents text selection   
        outer_box.scrollLeft = startscroll - (e.pageX - startx);
    };

    const Dragstop = () => {
        isDragging = false;
        outer_box.classList.remove("dragging");
    };

    outer_box.addEventListener("mousedown", Dragstart);
    outer_box.addEventListener("mousemove", Dragging);
    outer_box.addEventListener("mouseup", Dragstop);
    outer_box.addEventListener("mouseleave", Dragstop);
});

document.addEventListener('DOMContentLoaded', () => {
    const forwardIcon = document.getElementById('right');
    const backIcon = document.getElementById('left');
    const outerCardRecommend = document.querySelector('.outer-card-recommend');
  
    forwardIcon.addEventListener('click', () => {
      outerCardRecommend.scrollBy({
        left: 300, 
        behavior: 'smooth'
      });
    });
  
    backIcon.addEventListener('click', () => {
      outerCardRecommend.scrollBy({
        left: -300, 
        behavior: 'smooth'
      });
    });
  });