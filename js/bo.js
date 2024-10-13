// const wrapper3 = document.querySelector(".carousel3");
// const carousel3 = document.querySelector(".carousel3");
// const arrowBtns2 = document.querySelectorAll(".desktop11c i");
// const firstCardWidth2 = document.querySelector(".blog").offsetWidth;
// const carousellChildren2 = [...carousel3.children];

// let isDragging = false, startX, startScrollLeft;
// let timeoutId2;

// // Get the number of cards that can fit in the carousel at once 
// let cardPerView2 = Math.round(carousel3.offsetWidth / firstCardWidth2);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carousellChildren2.slice(-cardPerView2).reverse().forEach(blog => {
//     carousel3.insertAdjacentHTML("afterbegin", blog.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carousellChildren2.slice(0, cardPerView2).forEach(blog => {
//     carousel3.insertAdjacentHTML("beforeend", blog.outerHTML);
// });

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns2.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel3.scrollLeft += btn.id === "left3" ? -firstCardWidth2 : firstCardWidth2;
//     });
// });

// const dragStart3 = (e) => {
//     isDragging = true;
//     carousel3.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel3.scrollLeft;
// }

// const dragging3 = (e) => {
//     if (!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel3.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop3 = () => {
//     isDragging = false;
//     carousel3.classList.remove("dragging");
// }

// const autoPlay3 = () => {
//     if (window.innerWidth < 800) return; // return if window is smaller than 800
//     // Autoplay the carousel by setting a timeout to scroll right
//     timeoutId2 = setTimeout(() => carousel3.scrollLeft += firstCardWidth2, 2500);
// }

// const infiniteScroll3 = () => {
//     // if the carousel is at the beginning, scroll to the end
//     if (carousel3.scrollLeft === 0) {
//         carousel3.classList.add("no-transition");
//         carousel3.scrollLeft = carousel3.scrollWidth - (2 * carousel3.offsetWidth);
//         carousel3.classList.remove("no-transition");
//     // if the carousel is at the end, scroll to the beginning
//     } else if (Math.ceil(carousel3.scrollLeft) >= carousel3.scrollWidth - carousel3.offsetWidth) {
//         carousel3.classList.add("no-transition");
//         carousel3.scrollLeft = carousel3.offsetWidth;
//         carousel3.classList.remove("no-transition");
//     }
//     // Clear existing timeout & start autoplay if mouse is not hovering over carousel3
//     clearTimeout(timeoutId2);
//     if (!wrapper3.matches(":hover")) autoPlay3();
// }

// carousel3.addEventListener("mousedown", dragStart3);
// carousel3.addEventListener("mousemove", dragging3);
// document.addEventListener("mouseup", dragStop3);
// carousel3.addEventListener("scroll", infiniteScroll3);
// wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
// wrapper3.addEventListener("mouseleave", autoPlay3);

// // Initial call to start autoplay
// autoPlay3();

const wrapper2 = document.querySelector(".wrapper2");
const console1 = document.querySelector(".console1");
const arrowBtns1 = document.querySelectorAll(".wrapper2 i");
const firstCardWidth1 = console1.querySelector(".book22").offsetWidth;
const carousellChildren1 = [...console1.children];

let isDrag = false, startXX, startScrollLeftt, timeoutId;

// Get the number of cards that can fit in the carousel at once 
let cardPerView1 = Math.round(console1.offsetWidth / firstCardWidth1);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carousellChildren1.slice(-cardPerView1).reverse().forEach(book11 => {
  console1.insertAdjacentHTML("afterbegin", book11.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carousellChildren1.slice(0, cardPerView1).forEach(book11 => {
  console1.insertAdjacentHTML("beforeend", book11.outerHTML);
});

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns1.forEach(btn => {
  btn.addEventListener("click", () => {
    console1.scrollLeft += btn.id === "left1" ? -firstCardWidth1 : firstCardWidth1;
  });
});

const dragStart1 = (e) => {
  isDrag = true;
  console1.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel 
  startXX = e.pageX;
  startScrollLeftt = console1.scrollLeft;
}

const drag1 = (e) => {
  if (!isDrag) return;
  // updates the scroll position of the carousel based on the cursor movement
  console1.scrollLeft = startScrollLeftt - (e.pageX - startXX);
}

const dragStop1 = () => {
  isDrag = false;
  console1.classList.remove("dragging");
}

const autoPlay = () => {
  if (window.innerWidth < 800) return; // return if window is smaller than 800
  // Autoplay the carousel by setting a timeout to scroll right
  timeoutId = setTimeout(() => console1.scrollLeft += firstCardWidth1, 2500);
}
autoPlay();

const infiniteScroll1 = () => {
  // if the carousel is at the beginning, scroll to the end
  if (console1.scrollLeft === 0) {
    console1.classList.add("no-transition");
    console1.scrollLeft = console1.scrollWidth - (2 * console1.offsetWidth);
    console1.classList.remove("no-transition");
  // if the carousel is at the end, scroll to the beginning
  } else if (Math.ceil(console1.scrollLeft) === console1.scrollWidth - console1.offsetWidth) {
    console1.classList.add("no-transition");
    console1.scrollLeft = console1.offsetWidth;
    console1.classList.remove("no-transition");
  }
  // clear existing timeout & start autoplay if mouse is not hovering over console1
  clearTimeout(timeoutId);
  if (!wrapper2.matches(":hover")) autoPlay();
}

console1.addEventListener("mousedown", dragStart1);
console1.addEventListener("mousemove", drag1);
document.addEventListener("mouseup", dragStop1);
console1.addEventListener("scroll", infiniteScroll1);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId));
console1.addEventListener("mouseleave", autoPlay);

// الجزء الثاني من الشيفرة
const carousell = document.querySelector(".carousell");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousell.querySelector(".book1, .book2, .book3, .book4, .book5").offsetWidth;
const carousellChildren = [...carousell.children];

let isDragging = false;
let startX;
let startScrollLeft;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousell.offsetWidth / firstCardWidth);

carousellChildren.slice(-cardPerView).reverse().forEach(book1 => {
    carousell.insertAdjacentHTML("afterbegin", book1.outerHTML);
});
carousellChildren.slice(0, cardPerView).forEach(book1 => {
    carousell.insertAdjacentHTML("beforeend", book1.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousell.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart2 = (e) => {
    isDragging = true;
    carousell.classList.add("dragging");
    // Record the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousell.scrollLeft;
}

const dragging2 = (e) => {
    if (!isDragging) return;
    // Update the scroll position of the carousel based on the cursor movement
    carousell.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop2 = () => {
    isDragging = false;
    carousell.classList.remove("dragging");
}

const infiniteScroll2 = () => {
    if (carousell.scrollLeft === 0) {
        carousell.scrollLeft = carousell.scrollWidth - (2 * carousell.offsetWidth);
    } else if (Math.ceil(carousell.scrollLeft) >= carousell.scrollWidth - carousell.offsetWidth) {
        carousell.scrollLeft = carousell.offsetWidth;
    }
}

carousell.addEventListener("mousedown", dragStart2);
carousell.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousell.addEventListener("scroll", infiniteScroll2);

// الجزء الثالث من الشيفرة
const wrapper3 = document.querySelector(".carousel3");
const carousel3 = document.querySelector(".carousel3");
const arrowBtns2 = document.querySelectorAll(".desktop11c i");
const firstCardWidth2 = document.querySelector(".blog").offsetWidth;
const carousellChildren2 = [...carousel3.children];

let isDragging2 = false, startX2, startScrollLeft2;
let timeoutId2;

// Get the number of cards that can fit in the carousel at once 
let cardPerView2 = Math.round(carousel3.offsetWidth / firstCardWidth2);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carousellChildren2.slice(-cardPerView2).reverse().forEach(blog => {
    carousel3.insertAdjacentHTML("afterbegin", blog.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carousellChildren2.slice(0, cardPerView2).forEach(blog => {
    carousel3.insertAdjacentHTML("beforeend", blog.outerHTML);
});

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id === "left3" ? -firstCardWidth2 : firstCardWidth2;
    });
});

const dragStart3 = (e) => {
    isDragging2 = true;
    carousel3.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX2 = e.pageX;
    startScrollLeft2 = carousel3.scrollLeft;
}

const dragging3 = (e) => {
    if (!isDragging2) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel3.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop3 = () => {
    isDragging2 = false;
    carousel3.classList.remove("dragging");
}

const autoPlay3 = () => {
    if (window.innerWidth < 800) return; // return if window is smaller than 800
    // Autoplay the carousel by setting a timeout to scroll right
    timeoutId2 = setTimeout(() => carousel3.scrollLeft += firstCardWidth2, 2500);
}

const infiniteScroll3 = () => {
    // if the carousel is at the beginning, scroll to the end
    if (carousel3.scrollLeft === 0) {
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.scrollWidth - (2 * carousel3.offsetWidth);
        carousel3.classList.remove("no-transition");
    // if the carousel is at the end, scroll to the beginning
    } else if (Math.ceil(carousel3.scrollLeft) >= carousel3.scrollWidth - carousel3.offsetWidth) {
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.offsetWidth;
        carousel3.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel3
    clearTimeout(timeoutId2);
    if (!wrapper3.matches(":hover")) autoPlay3();
}

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("mousemove", dragging3);
carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("mousemove", dragging3);
document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("scroll", infiniteScroll3);
wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper3.addEventListener("mouseleave", autoPlay3);

// Initial call to start autoplay
autoPlay3();