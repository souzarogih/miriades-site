import React, { useState, useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './buttons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import './styles.scss';
import { DotButton, useDotButton } from './EmblaCarouselDotButton'



type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
  };
  
  const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  
    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return
  
      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop
  
      resetOrStop()
    }, [])
  
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
      emblaApi,
      onNavButtonClick
    )
  
    return (
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((src, index) => (
              <div className="embla__slide" key={index}>
                <img
                  style={{backgroundColor: 'white', objectFit: 'contain', width: '100%', height: '100%'}}
                  className="embla__slide__img"
                  src={src}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      </section>
    )
  }
  
  export default EmblaCarousel
  