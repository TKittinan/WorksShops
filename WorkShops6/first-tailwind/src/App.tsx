import "./App.css";
import ProductCard from "./component/ProductCard";

function App() {
  const handleAddToCart = (product: string) => {
    alert(`${product} ถูกเพิ่มในตะกร้าแล้ว!`);
  };

  const products = [
    {
      id: 1,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
      title: "สินค้าพิเศษ 1",
      description: "สินค้าที่มีคุณภาพสูง เหมาะสำหรับทุกการใช้งาน",
      price: 29.99,
    },
    {
      id: 2,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/IPhone_12_Pro_Gold.svg/1200px-IPhone_12_Pro_Gold.svg.png",
      title: "สินค้าพิเศษ 2",
      description: "โทรศัพท์มือถือสมาร์ทโฟนทันสมัย ใช้งานได้ลื่นไหล",
      price: 79.5,
    },
    {
      id: 3,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Computer_mouse_icon.svg/1024px-Computer_mouse_icon.svg.png",
      title: "สินค้าพิเศษ 3",
      description: "เมาส์เกมมิ่งคุณภาพสูง ดีไซน์สวยงาม ใช้งานสะดวก",
      price: 33.33,
    },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">รายการสินค้าของเรา</h1>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.description}
            price={p.price}
            onAddToCart={() => handleAddToCart(p.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
