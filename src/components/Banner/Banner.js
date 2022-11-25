import React from 'react'
import { Button, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';

const contentStyle = {
  padding: '20px',
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  backgroundImage: 'url("https://res.cloudinary.com/dq7es9rub/image/upload/v1653914034/Images/manufacture1_io2pai.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  opacity: 0.8
};

const contentStyle2 = {
  padding: '20px',
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  backgroundImage: 'url("https://res.cloudinary.com/dq7es9rub/image/upload/v1653914027/Images/manufacture2_xqbfaj.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  opacity: 0.8

};


function Banner() {

  const navigate = useNavigate();


  return (
    <Carousel dotPosition="right" autoplay>
    <div className="relative">
      <h3 className="pt-20 " style={contentStyle}>
        <div className="flex flex-col justify-center items-center pt-64 ">
          <p className="font-bold text-2xl text-orange-500">To Start Buying Electronics</p>
        <Button  type="primary" className="bg-green-500">
          <p ><a href="/#faq">Learn More</a></p>
          </Button>
        </div>
        </h3>
      
    </div>
    <div>
    <h3 className="pt-20" style={contentStyle2}>
        <div className="flex flex-col justify-center items-center pt-64 ">
          <p className="font-bold text-2xl text-orange-500">To Start doing Business with Electronics</p>
        <Button  type="primary" className="bg-green-500">
        <p ><a href="/#faq">Learn More</a></p>
          </Button>
        </div>
        </h3>
    </div>
    {/* <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
  )
}

export default Banner