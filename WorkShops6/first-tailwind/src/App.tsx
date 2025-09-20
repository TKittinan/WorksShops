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
        "https://cf.autodeft2.pw/content/20240116/https-wwwcarscoopscom-wp-content-uploads-2024-01-2024-honda-civic-rs-prototype-1-1024x683-b4glCx.jpg",
      title: "Nissan GTR R35",
      description: "รถสปอร์ตแรงระดับซูเปอร์คาร์ ดีไซน์โฉบเฉี่ยว",
      price: 299999.99,
    },
    {
      id: 2,
      imageUrl:
        "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png",
      title: "iPhone 16 Pro Max Black Titanium",
      description: "เรือธงสุดล้ำของ Apple สีดำสุดพรีเมียม",
      price: 1499.99,
    },
    {
      id: 3,
      imageUrl:
        "https://media-cdn.bnn.in.th/473058/msi-notebook-titan-18-hx-dragon-edition-norse-myth-a2xwjg-286th-black-1-square_medium.jpg",
      title: "Notebook Gaming ระดับไฮเอนด์",
      description: "โน๊ตบุ๊คเกมมิ่งสเปกสุดโหดราคาสูงมาก",
      price: 899999.99,
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
