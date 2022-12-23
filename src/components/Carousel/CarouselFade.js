import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/mhNZrTy/Slide1.jpg"
          alt="Perro y gato"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/d2QBs31/Slide3.jpg"
          alt="Gatos"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/2vWCZFF/Slide2.jpg"
          alt="Perros"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;