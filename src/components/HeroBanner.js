import React, {useState, useRef, useEffect} from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

// import HeroBannerImage from '../assets/images/banner.png';
import HeroBannerImageMale from '../assets/images/banner-1.jpg';
// import GymVideo from '../assets/images/Gym.mp4';

const wordsArray = [
    "Determination", 
    "Believe", 
    "Dedication", 
    "Endurance",
    "Commitment",
    "Conquer",
    "Strength",
    "Prevail",
    "Inspire",
    "Focus"
]
const delay = 2500;

const HeroBanner = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => 
            setIndex((prevIndex) => 
                prevIndex === wordsArray.length - 1 ? 0 : prevIndex + 1),
                delay
            );
        
        return () => {
            resetTimeout();
        };
    }, [index])
    

  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
            Red Gorilla Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' }}}
        mb="23px" mt="30px">
            Workout, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained"
        color="error"
        href='#exercises'
        sx={{backgroundColor: '#FF2625', padding: '10px'}}>Explore Exercises</Button>
        <Typography fontWeight={600}
        color="#FF2625"
        sx={{
            opacity: 0.2,
            display: { lg: 'block', xs: 'none'},
        }}
        fontSize="175px">
        <div className="slideshow">
        <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {wordsArray.map((word, index) => (
          <div
            className="slide"
            key={index}
          >
            {word}
          </div>
        ))}
        </div>
        </div>
        </Typography>
        <img src={HeroBannerImageMale} alt="banner" className='hero-banner-img' />
        {/* <video className='hero-banner-img' autoPlay loop muted>
            <source src={GymVideo} type="video/mp4" />
        </video> */}
    </Box>
  )
}

export default HeroBanner