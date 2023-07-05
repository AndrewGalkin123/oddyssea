import React, { useEffect, useRef } from 'react';
import "./Slider.css";
import pointer from "../../../../assets/sliderImages/pointer.png";
import odessaStreet from "../../../../assets/sliderImages/odessaStreet.jpg";
import castle from '../../../../assets/sliderImages/castle.jpg';
import odessa from '../../../../assets/sliderImages/odessa.jpg';

const Slider = () => {
  const sliderLineRef = useRef(null);
  const sliderImagesRef = useRef([]);
  const sliderDotsRef = useRef([]);
  const sliderBtnNextRef = useRef(null);
  const sliderBtnPrevRef = useRef(null);
  let sliderCount = 0;
  let sliderWidth;

  useEffect(() => {
    showSlide();
    window.addEventListener('resize', showSlide);

    return () => {
      window.removeEventListener('resize', showSlide);
    };
  }, []);

  function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLineRef.current.style.width = sliderWidth * sliderImagesRef.current.length + 'px';
    sliderImagesRef.current.forEach(item => (item.style.width = sliderWidth + 'px'));

    rollSlider();
  }

  function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImagesRef.current.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
  }

  function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImagesRef.current.length - 1;

    rollSlider();
    thisSlide(sliderCount);
  }

  function rollSlider() {
    sliderLineRef.current.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }

  function thisSlide(index) {
    sliderDotsRef.current.forEach(item => item.classList.remove('active-dot'));
    sliderDotsRef.current[index].classList.add('active-dot');
  }

  function handleDotClick(index) {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  }

  return (
    <div className='slider'>
      <div className='slider_line' ref={sliderLineRef}>
        <img className='slider_img' src={odessa} alt='odessa' ref={el => sliderImagesRef.current[0] = el} />
        <img className='slider_img' src={odessaStreet} alt='odessa-street' ref={el => sliderImagesRef.current[1] = el} />
        <img className='slider_img' src={castle} alt='odessa-castle' ref={el => sliderImagesRef.current[2] = el} />
      </div>

      <button className='slider_btn-prev' onClick={prevSlide} ref={sliderBtnPrevRef}>
        <img src={pointer} alt='pointer' />
      </button>
      <button className='slider_btn-next' onClick={nextSlide} ref={sliderBtnNextRef}>
        <img src={pointer} alt='pointer' />
      </button>

      <div className='slider_wrapper'>
        <div className='slider_dot active-dot' ref={el => (sliderDotsRef.current[0] = el)} onClick={() => handleDotClick(0)}></div>
        <div className='slider_dot' ref={el => (sliderDotsRef.current[1] = el)} onClick={() => handleDotClick(1)}></div>
        <div className='slider_dot' ref={el => (sliderDotsRef.current[2] = el)} onClick={() => handleDotClick(2)}></div>
      </div>
    </div>
  );
};

export default Slider;
