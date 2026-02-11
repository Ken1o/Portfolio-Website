import { useState, useEffect } from 'react'
import '../styles/Slideshow.css'
import GenAIImage from '../assets/GenAI.png'

interface SlideItem {
  id: number
  image: string
  title: string
}

interface SlideshowProps {
  slides?: SlideItem[]
  autoAdvanceInterval?: number
}

const Slideshow: React.FC<SlideshowProps> = ({
  slides = [
    {
      id: 1,
      image: GenAIImage,
      title: 'Project One',
    },
  ],
  autoAdvanceInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoAdvanceInterval)

    return () => clearInterval(interval)
  }, [slides.length, autoAdvanceInterval])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }
  return (
    <div className="slideshow">
      <div className="slideshow-container">
        <button className="slideshow-btn slideshow-prev" onClick={goToPrevious}>
          ❮
        </button>

        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              aria-hidden={index === currentIndex ? 'false' : 'true'}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slideshow-overlay">
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="slideshow-btn slideshow-next" onClick={goToNext}>
          ❯
        </button>
      </div>

      <div className="slideshow-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
