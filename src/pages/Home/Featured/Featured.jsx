import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-10 bg-slate-500 bg-opacity-60 ' >
              <SectionTitle 
              heading={'Featured Item'}
              subHeading={'Check It Out'}
            >

            </SectionTitle>

        <div className='md:flex justify-center items-center px-36 pb-20 pt-12 ' >
        <div>
            <img src={featuredImg} alt="" />
        </div>

        <div className='md:ml-10' >
                    <p>Aug 20, 2029</p>
                    <p className='uppercase' > Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error non explicabo necessitatibus id distinctio quisquam sapiente iure. Animi reiciendis architecto accusamus voluptatum dolorum rerum, quos consectetur quidem doloremque, aliquam sint accusantium? Explicabo quae unde exercitationem, quis ipsa porro sed vero esse. Corrupti alias, nulla aperiam cumque dolor minus natus praesentium?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>

                </div>
        </div>

        </div>
    );
};

export default Featured;