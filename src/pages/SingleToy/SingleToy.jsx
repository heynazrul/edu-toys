import { Rating } from '@material-tailwind/react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleToy = () => {
  const { photo, toyName, sellerName, email, price, rating, quantity, description } = useLoaderData();
  const [isFav, setIsFav] = useState(false);
  const handleAddWish = () => {
    setIsFav(!isFav);
    if (!isFav) {
      toast.success('Added to wishlist', {
        autoClose: 1500,
      });
    } else {
      toast.info('Removed from wishlist', {
        autoClose: 1500,
      });
    }
  };
  return (
    <section className="body-font overflow-hidden bg-white text-gray-700">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt="ecommerce"
            className="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
            src={photo}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h1 className=" mb-2 font-title text-3xl font-bold text-gray-900">{toyName}</h1>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <Rating
                  value={parseInt(rating)}
                  readonly
                />
                <span className="ml-3 text-gray-600">{rating}.00</span>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="mb-5 mt-6 flex flex-col space-y-4 border-b-2 border-gray-200 pb-5">
              <div className="flex ">
                <p className="min-w-[140px] font-bold text-gray-900">Seller Name:</p>
                <p className="ml-24 font-medium"> {sellerName}</p>
              </div>
              <div className="flex ">
                <p className="min-w-[140px] font-bold text-gray-900">Seller Email:</p>
                <p className="ml-24 font-medium"> {email}</p>
              </div>
              <div className="flex ">
                <p className="min-w-[140px] font-bold text-gray-900">Quantity Available:</p>
                <p className="ml-24 font-medium"> {quantity}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* <span className="font-title text-2xl font-bold text-gray-900">${price}</span> */}
              <div className="flex gap-2">
                <p className=" text-2xl font-bold text-gray-900">Price:</p>
                <p className=" text-2xl font-bold text-gray-800"> ${price}</p>
              </div>
              <button
                onClick={handleAddWish}
                className={`ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 ${
                  isFav ? 'text-red-500' : 'text-gray-600'
                }`}>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleToy;
