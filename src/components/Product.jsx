import React from "react";

const Product = () => {
  return (
    // <div className="flex">
    <div className="flex">
      <img
        src="	https://m.media-amazon.com/images/I/71K7OdrqAoL._SY450_.jpg"
        alt="product"
        className="w-2/5"
      />

      <div className="w-2/5 mt-20">
        <h3 className="font-semibold text-lg">
          Decor de Maison Metal Handcrafted Black Gold Aleksi Table Clock For
          Home Decor Table Decor Clock For Living Room Bedroom Study Table And
          Office Desk (9 Inch Height), Analog
        </h3>

        <h6 className="text-linkblue mb-4">Visit the Decor de Maison Store</h6>
        <hr />

        <div className="mt-4">
          <span className="text-discountred text-3xl">-46%</span>
          <span className="text-3xl ml-3">₹2,700</span>
        </div>
        <h6 className="mt-3">
          M.R.P.: <span className="line-through">₹4,999</span>{" "}
        </h6>

        <h6>Inclusive of all taxes</h6>
        <p>
          <span className="font-semibold">EMI</span> starts at ₹131. No Cost EMI
          available <span className="text-linkblue">EMI options</span>
        </p>
      </div>
      <div className="w-1/6 mt-20 px-10 border border-gray-200 mx-6 rounded-lg py-5">
        <h2 className="text-xl font-semibold mb-2">₹2,700</h2>

        <p className="mt-2">
          <span className="text-linkblue">FREE delivery</span> Friday, 2 August.
        </p>
        <p className="text-linkblue">Details</p>
      </div>
    </div>
    // </div>
  );
};

export default Product;
