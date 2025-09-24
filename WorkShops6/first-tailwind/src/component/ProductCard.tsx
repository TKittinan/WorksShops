import React from "react";
import Button from "./Button";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { imageUrl, title, description, price, onAddToCart } = props;

  return (
    <article className="bg-white max-w-sm w-full mx-auto rounded-xl shadow-md p-5 flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-8"
      />

      <header>
        <h2 className="text-xl font-semibold text-black">{title}</h2>
      </header>

      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-green-600 font-bold text-lg mt-4">
        ${price.toFixed(2)}
      </p>

      <Button
        variant="primary"
        size="md"
        onClick={onAddToCart}
        className="mt-4 w-full"
      >
        Add to Cart
      </Button>
    </article>
  );
};

export default ProductCard;
