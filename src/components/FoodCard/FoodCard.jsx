import React from 'react';

const FoodCard = ({item}) => {
    const {image, recipe, price, name,_id } = item;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4' > Price: ${price}</p>
  <div className="card-body flex flex-col items-center  ">
    <h2 className="card-title"> {name} </h2>
    <p> {recipe} </p>

    <div className="card-actions justify-end">
      <button onClick={()=> handleAddToCart(item) } className="btn btn-primary"> Add To Cart </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;