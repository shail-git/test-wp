import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const AutoCarousel = ({Images}) =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        Images.map((image)=>{
          return(
          <Carousel.Item>
            <img
              className="dblock"
              src= {image.src}
              alt="First slide"
              width="100%"
              height="auto"
            />
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default AutoCarousel;


