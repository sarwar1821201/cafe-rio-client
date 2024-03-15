import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
//import axios from "axios";


const FoodCard = ({ item }) => {
  const { image, recipe, price, name, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure= useAxiosSecure();
  const [,refetch] =useCart();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      console.log("item add koro", user.email, item);
      const cartItem = { menuId: _id, image, name, price, email: user.email };

      //axios.post("http://localhost:5000/carts", cartItem)
      axiosSecure.post("/carts", cartItem)
      .then( (res)=>{
        console.log(res.data)
          
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart `,
            showConfirmButton: false,
            timer: 1500
          });
          // to update the carts item counts
          refetch();
        }

      } )


    } else {
      Swal.fire({
        title: "Please Login To Order The Food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
          {" "}
          Price: ${price}
        </p>
        <div className="card-body flex flex-col items-center  ">
          <h2 className="card-title"> {name} </h2>
          <p> {recipe} </p>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-400 mt-4"
            >
              {" "}
              Add To Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
