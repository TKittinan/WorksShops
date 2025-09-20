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
      description: ["ขุมพลังแห่งชิป A18 PRO",
                    "จอภาพ Super Retina XDR ขนาด 6.9 นิ้ว",
                    "กล้อง Fusion 48MP และไมโครโฟนคุณภาพระดับสตูดิโอ"],
      price: 1499.99,
    },
    {
      id: 3,
      imageUrl: "https://media-cdn.bnn.in.th/473058/msi-notebook-titan.jpg",
      title: "Notebook Gaming ระดับไฮเอนด์",
                description: [
            "CPU: Intel Core Ultra 9 285HX, up to 5.5GHz, 24C(8P+16E)/24T, 36MB",
            "Graphics: NVIDIA GeForce RTX 5090 24GB GDDR7",
            "RAM: 96GB (2x48GB) DDR5-6400",
            "SSD: 2TB NVMe PCIe 5.0 x 4 + 4TB (2x2TB) NVMe PCIe 4.0 x 4"
          ],
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
