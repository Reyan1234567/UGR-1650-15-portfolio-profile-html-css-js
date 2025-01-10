document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
  
    function showItem(index) {
      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }
  
    function prevItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    }
  
    prevBtn.addEventListener("click", prevItem);
    nextBtn.addEventListener("click", nextItem);
  
    // Initialize the first item as active
    showItem(currentIndex);
  });
  