import React from "react";
import Button from "./Button";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string | string[];
  price: number;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="shadow-xl rounded-xl p-6 bg-purple-50 w-full max-w-sm mx-auto border border-purple-200 hover:shadow-2xl transition duration-200 flex flex-col h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-contain rounded-md mb-6"
      />
      <h2 className="text-2xl font-bold text-purple-900 text-left">{title}</h2>
      <div className="flex-1 mt-2 text-gray-700 text-left">
        {Array.isArray(description) ? (
          <div className="flex flex-col gap-1">
            {description.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        ) : (
          <p className="whitespace-pre-line">{description}</p>
        )}
      </div>
      <div className="mt-4">
        <p className="text-xl text-purple-700 font-bold text-left">
          ${price.toFixed(2)}
        </p>
        <Button
          variant="primary"
          size="md"
          className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 border-yellow-400 hover:border-yellow-500 font-bold"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
