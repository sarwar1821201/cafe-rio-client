import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {

    const [reviews, setReviews ] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json() )
        .then(data => {
           setReviews(data)
        } )
    } , [] )


    return (
        <div className='my-20' >
            <SectionTitle 
                heading='Testimonial'
                subHeading='What Our Client Say'
              >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {
            reviews.map (review =>  <SwiperSlide key={review._id} >
                <div className='m-10 flex flex-col items-center mx-24 my-16  ' >
 
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />

                    <p className='py-8' >{review.details}</p>
                    <h2 className='text-2xl text-orange-400 text-center ' >{review.name}</h2>
                </div>
                </SwiperSlide>
            )
         }
      </Swiper>

        </div>
    );
};

export default Testimonial;