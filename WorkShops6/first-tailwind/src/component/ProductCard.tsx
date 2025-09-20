type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string | string[];
  price: number;
  onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>

      {Array.isArray(description) ? (
        <ul className="product-description list-disc pl-5">
          {description.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      ) : (
        <p className="product-description whitespace-pre-line">{description}</p>
      )}

      <p className="product-price">${price.toFixed(2)}</p>
      <button onClick={onAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
