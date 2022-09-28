let meta = document.querySelector('#meta');
let weight = window.innerWidth;
    if (weight < 1200 && weight > 600) {
        meta.setAttribute("content", "width=1200")
    } else {
        meta.setAttribute("content", "width=375")
    }