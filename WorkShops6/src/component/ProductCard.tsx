import React from "react";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
};

function ProductCard(props: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow p-4 w-72 bg-white">
      <img src={props.imageUrl} alt={props.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{props.title}</h2>
      <p className="text-sm text-gray-600">{props.description}</p>
      <p className="text-blue-600 font-semibold mt-2">${props.price}</p>
      <button
        onClick={props.onAddToCart}
        className="bg-blue-500 text-white px-3 py-2 rounded mt-3 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
