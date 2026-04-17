const wheel = document.getElementById("wheel"),
    modal = document.getElementById("imageModal"),
    modalImage = document.getElementById("modalImage"),
    modalTitle = document.getElementById("modalTitle"),
    modalDesc = document.getElementById("modalDesc"),
    closeModal = document.getElementById("closeModal"),
    prevBtn = document.getElementById("prevBtn"),
    nextBtn = document.getElementById("nextBtn");
let rotation = 0,
    lastScrollY = window.scrollY,
    currentImageIndex = 0;
const images = [{
    src: "https://images.unsplash.com/photo-1689795801155-384d3717f519?w=800",
    title: "Photographe",
    desc: "Plorian Yvinec sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1514870231399-3fb76b3c379e?w=800",
    title: "Photographe",
    desc: "Denisse Leon sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1768545547119-2153bcb77150?w=800",
    title: "Photographe",
    desc: "Liana S sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1580758547427-33ad9417f650?w=800",
    title: "Photographe",
    desc: "Robert Bottman sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1562043929-9a496f01f73d?w=800",
    title: "Photographe",
    desc: "Alice Alinari sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1758916922430-fa1583c15e8e?w=800",
    title: "Photographe",
    desc: "Marek Piwnicki sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1753249602958-ef2cffcd6abc?w=800",
    title: "Photographe",
    desc: "Nik sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1738334845118-da104aa38d9d?=600",
    title: "Photographe",
    desc: "Lisette Harzing sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1556463808-b023dcaaddfc?w=800",
    title: "Photographe",
    desc: "Jr Korpa sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1768094710146-1fe9a17648ea?w=800",
    title: "Photographe",
    desc: "Marina Nazina sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1597830431353-c2652882f02b?w=800",
    title: "Photographe",
    desc: "Clément Falize sur Unsplash.com"
}, {
    src: "https://images.unsplash.com/photo-1527334039600-76d08e1643d5?w=800",
    title: "Photographe",
    desc: "Aryan Safabakhsh sur Unsplash.com"
}];

function updateItemRotations() {
    let e = document.querySelectorAll(".item");
    e.forEach((e, t) => {
        let o = 360 * t / 12,
            s = -(o + rotation);
        e.style.transform = `rotate(${o}deg) translate(400px) rotate(${s}deg)`
    })
}

function setupItemHover() {
    let e = document.querySelectorAll(".item");
    e.forEach((e, t) => {
        let o = 360 * t / 12;
        e.addEventListener("mouseenter", function() {
            let e = -(o + rotation);
            this.style.transform = `rotate(${o}deg) translate(400px) rotate(${e}deg) scale(1.2)`, this.style.zIndex = "10", this.style.boxShadow = "0 0 30px rgba(255, 215, 0, 0.8)"
        }), e.addEventListener("mouseleave", function() {
            let e = -(o + rotation);
            this.style.transform = `rotate(${o}deg) translate(400px) rotate(${e}deg)`, this.style.zIndex = "", this.style.boxShadow = ""
        })
    })
}

function openModal(e) {
    let t = images[e];
    modalImage.src = t.src, modalTitle.textContent = t.title, modalDesc.textContent = t.desc, modal.classList.add("active"), document.body.style.overflow = "hidden"
}

function closeModalFunc() {
    modal.classList.remove("active"), document.body.style.overflow = "auto"
}
window.addEventListener("scroll", function() {
    let e = window.scrollY,
        t = e - lastScrollY;
    rotation += .15 * t, wheel.style.transform = `rotate(${rotation}deg)`, updateItemRotations(), lastScrollY = e
}), document.addEventListener("DOMContentLoaded", function() {
    updateItemRotations(), setupItemHover()
}), document.querySelectorAll(".item").forEach((e, t) => {
    e.addEventListener("click", () => {
        openModal(currentImageIndex = t)
    })
}), closeModal.addEventListener("click", closeModalFunc), modal.addEventListener("click", e => {
    e.target === modal && closeModalFunc()
}), prevBtn.addEventListener("click", () => {
    openModal(currentImageIndex = (currentImageIndex - 1 + images.length) % images.length)
}), nextBtn.addEventListener("click", () => {
    openModal(currentImageIndex = (currentImageIndex + 1) % images.length)
}), document.addEventListener("keydown", e => {
    modal.classList.contains("active") && ("Escape" === e.key && closeModalFunc(), "ArrowLeft" === e.key && prevBtn.click(), "ArrowRight" === e.key && nextBtn.click())
});


const lenis = new Lenis({
    duration: 3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)