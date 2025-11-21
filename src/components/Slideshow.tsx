import { useState, useEffect } from 'react'
import './Slideshow.css'

interface SlideItem {
  id: number
  image: string
  title: string
  description: string
}

interface SlideshowProps {
  slides?: SlideItem[]
  autoAdvanceInterval?: number
}

const Slideshow: React.FC<SlideshowProps> = ({
  slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1200x400?text=Project+1',
      title: 'Project One',
      description: 'Description of project one',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1200x400?text=Project+2',
      title: 'Project Two',
      description: 'Description of project two',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1200x400?text=Project+3',
      title: 'Project Three',
      description: 'Description of project three',
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

  const currentSlide = slides[currentIndex]

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        <button className="slideshow-btn slideshow-prev" onClick={goToPrevious}>
          ❮
        </button>

        <div className="slideshow-slide">
          <img src={currentSlide.image} alt={currentSlide.title} />
          <div className="slideshow-overlay">
            <h3>{currentSlide.title}</h3>
            <p>{currentSlide.description}</p>
          </div>
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
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
