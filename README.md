# Carousel Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/carousel-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable recreation of the uploaded 11.4-second, 720 × 1280, 30fps screen recording.

## What the video shows
- Header title: **Carousel Animation**, yellow text on a charcoal background.
- White carousel stage.
- Three visible dark navy cards labeled **SLIDE 1** through **SLIDE 6**.
- Rounded card corners and a soft shadow.
- Six orange pagination dots; active dot is fully opaque, inactive dots are semi-transparent.
- Slides advance in a circular loop, with the visible sequence moving from 6–1–2 to 1–2–3 and onward.
- The visible HTML imports Swiper 11 from jsDelivr and the JavaScript config shows `slidesPerView: 3`, `spaceBetween: 10`, `loop: true`, `autoplay: { delay: 1000, disableOnInteraction: false }`, clickable pagination, previous/next navigation, and breakpoints.

## CSS values legible in the recording
- `body`: `font-family: Arial, sans-serif`, `margin: 0`, `background: #ffffff`.
- `.case-studies`: `padding: 60px 0`, `background: #ffffff`.
- `.case-studies .container`: `width: 90%`, `max-width: 1200px`, `margin: 0 auto`.
- `.case-card`: `background: #063c73`, `border-radius: 12px`, `box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08)`, `padding: 20px`, `text-align: center`, `max-width: 340px`, `transition: transform 0.3s ease`, `color: #fff`.
- `.case-card:hover`: `transform: translateY(-5px)`.
- `.swiper-pagination-bullet`: `background: #ff4d00`, `opacity: 0.5`; active bullet `opacity: 1`.

## Run
Extract the ZIP and open `index.html` in a modern browser. No external library or install is required; the carousel behavior is implemented in vanilla JavaScript so it works offline.

## Source fidelity
The recording shows the original Swiper-based HTML/CSS/JS in an editor. The visible selectors, values, labels, and Swiper options above are transcribed into the implementation. The page header and a few presentation details are reconstructed from the visible preview. The original full source files are not embedded in the video, so this is a faithful runnable recreation rather than byte-for-byte source recovery.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
