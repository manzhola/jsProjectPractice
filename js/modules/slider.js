function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    // Slider
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prevArr = document.querySelector(prevArrow),
        nextArr = document.querySelector(nextArrow),
        currentSlide = document.querySelector(currentCounter),
        sliderField = document.querySelector(field),
        sliderWrapper = document.querySelector(wrapper),
        slideWidth = window.getComputedStyle(sliderWrapper).width;
    let sliderIndex = 1,
        totalSlides = document.querySelector(totalCounter),
        offset = 0;

    sliderField.style.cssText += `
        display: flex; 
        transition: 0.5s all; 
        width: ${100 * slides.length}%;
    `;
    sliderWrapper.style.cssText += `
        overflow: hidden;
    `;

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    totalSlides.innerHTML = getZero(slides.length);
    currentSlide.innerHTML = getZero(sliderIndex);

    slides.forEach(slide => {
        slide.style.width = slideWidth;
    });


    slider.style.position = 'relative';
    const dots = document.createElement('ol'),
        dotsArr = [];
    dots.classList.add('carousel-dots');

    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-index', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = '1';
        }
        dots.append(dot);
        dotsArr.push(dot);
    }

    dotsArr.forEach(dot => {
        dot.addEventListener('click', () => {
            sliderIndex = +dot.dataset.slideIndex;
            offset = returnOnlyNumbers(slideWidth) * (sliderIndex - 1);
            currentSlide.innerHTML = getZero(sliderIndex);
            sliderField.style.transform = `translateX(-${offset}px)`;
            addDotsOpacity();
        });
    });

    nextArr.addEventListener('click', nextSlide);
    prevArr.addEventListener('click', prevSlide);

    const returnOnlyNumbers = (item => +item.replace(/\D/g, ''));


    function addDotsOpacity() {
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[sliderIndex - 1].style.opacity = '1';
    }

    function nextSlide() {
        if (offset == returnOnlyNumbers(slideWidth) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += returnOnlyNumbers(slideWidth);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;
        sliderIndex++;
        if (sliderIndex > slides.length) {
            sliderIndex = 1;
        }
        currentSlide.innerHTML = getZero(sliderIndex);
        addDotsOpacity();
    }

    function prevSlide() {
        if (offset == 0) {
            offset = returnOnlyNumbers(slideWidth) * (slides.length - 1);
        } else {
            offset -= returnOnlyNumbers(slideWidth);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;
        sliderIndex--;
        if (sliderIndex < 1) {
            sliderIndex = slides.length;
        }
        currentSlide.innerHTML = getZero(sliderIndex);
        addDotsOpacity();
    }
}

export default slider;