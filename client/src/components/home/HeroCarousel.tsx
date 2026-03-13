import { useEffect, useState } from "react";
import "./HeroCarousel.css";

const slides = [
  { image: "/strat.jpg", title: "Legendary Tone" },
  { image: "/pedal.jpg", title: "Boutique Pedals" },
  { image: "/amp.jpg", title: "Amp Sims & Tube Amps" }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div className="hero">
      <img key={index} src={slide.image} alt={slide.title} />
      <h1>{slide.title}</h1>
    </div>
  );
}