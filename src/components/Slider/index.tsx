import React, { useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import img1 from '../../assets/img/blue-2564660_1280-1280x500.jpg';
import img2 from '../../assets/img/fashion-weeks-29-september-t-m-11-oktober_1280x500_39962.jpg';
import img3 from '../../assets/img/slider_woman.jpg';
import {
  StyledButton,
  StyledSlider
} from './index.style'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [opacities, setOpacities] = useState<number[]>([])
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: 3,
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map((slide) => slide.portion)
        setOpacities(new_opacities)
      },
    }
  )
  return (
    <StyledSlider className='container'>
      <div ref={sliderRef} className="fader">
        <div className="fader__slide" style={{ opacity: opacities[0] }}>
          <div className="position-relative">
            <img src={img1} alt="" className="img-fluid" />
            <div className="slider__text">
              <div className="columns col-12 text-center">
                <h2 className="slider__product">New Collection</h2>
                <h3>For your beauty and fashion</h3>
                <StyledButton to="#" className="btn cta">See the collection</StyledButton>
              </div>
            </div>
          </div>
        </div>
        <div className="fader__slide" style={{ opacity: opacities[1] }}>
          <div className="position-relative">
            <img src={img2} alt="" className="img-fluid" />
            <div className="slider__text">
              <div className="columns col-12 text-center">
                <h2 className="slider__product">Feel the luxury</h2>
                <h3>special collection</h3>
                <StyledButton to="#" className="btn cta">See the collection</StyledButton>
              </div>
            </div>
          </div>
        </div>
        <div className="fader__slide" style={{ opacity: opacities[2] }}>
          <div className="position-relative">
            <img src={img3} alt="" className="img-fluid" />
            <div className="slider__text">
              <div className="columns col-12 text-center">
                <h2 className="slider__product">Vogue Style</h2>
                <h3>For modern women</h3>
                <StyledButton to="#" className="btn cta">See the collection</StyledButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {instanceRef.current && (
        <div className="dots">
          {
            [0, 1, 2].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </StyledSlider>
  )
}