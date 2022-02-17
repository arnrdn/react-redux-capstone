import img from '../img/hero-img.svg';

const Hero = () => (
  <div className="hero">
    <div className="hero-content">
      <img
        className="hero-img"
        src={img}
        alt="person looking at graphs"
      />
    </div>
  </div>
);

export default Hero;
