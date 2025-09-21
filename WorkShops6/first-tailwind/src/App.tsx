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
        "https://images.droidsans.com/wp-content/uploads/2025/02/xiaomi-15-ultra-specs-china-01-768x432.jpg",
      title:"Xiaomi 15 Ultra",
      description: ["หน้าจอ (Display)AMOLED LTPO ขนาด 6.73 นิ้ว ค่ารีเฟรชเรตปรับได้จาก 120Hz ความละเอียด WQHD+ ความสว่างสูงสุดประมาณ 3200 nits",
                    "ชิปประมวลผล (Chipset)Qualcomm Snapdragon 8 Elite",
                    "หน่วยความจำ (Memory & Storage)RAM 16GB LPDDR5X ตัวเลือกความจุ: 512GB / 1TB",
                    "แบตเตอรี่ & การชาร์จ (Battery & Charging)แบตเตอรี่ประมาณ 5410 mAhรองรับชาร์จเร็วแบบสาย 90Wชาร์จไร้สาย 80W",
                    "กล้องหลัง (Rear Cameras)กล้องหลัก 50MP เซ็นเซอร์ Sony LYT-900 ขนาด 1 นิ้ว มีระบบกันสั่น OISกล้องเทเล periscope 200MPกล้องอัลตร้าไวด์กล้องเสริมอีกหนึ่งตัว (รวม 4 ตัว)",
                    "ระบบปฏิบัติการ (OS)HyperOS 2 บน Android 15",],
      price: 894,
    },
    {
      id: 2,
      imageUrl:
        "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png",
      title: "iPhone 16 Pro Max",
      description: ["หน้าจอ (Display): 6.9-นิ้ว Super Retina XDR OLED ความละเอียดประมาณ 2868×1320 พิกเซล (~460 ppi) รองรับ ProMotion รีเฟรชเรตสูงสุด 120Hz, มี Dynamic Island, Always-On display, HDR, True Tone, สี P3",
                    "ชิปประมวลผล (Chipset): Apple A18 Pro",
                    "หน่วยความจำ (Memory & Storage): RAM 8GB; ความจุมีให้เลือกตั้งแต่ 256GB / 512GB / 1TB",
                    "แบตเตอรี่ & การชาร์จ (Battery & Charging): แบตเตอรี่รุ่น Pro Max อยู่ที่ราว 4,685 mAh; รองรับการชาร์จแบบมีสาย / แบบไร้สาย / MagSafe (รายละเอียดชาร์จเร็วขึ้นกับอะแดปเตอร์ที่เหมาะสม)",
                    "กล้องหลัง (Rear Cameras): กล้องหลัก 48MP (Fusion) พร้อม OIS แบบ sensor-shift, กล้อง ultrawide 48MP ให้มุมมองกว้าง ~120°, กล้องเทเล 12MP ที่ซูมออปติคอล 5×, มี LiDAR scanner",
                    "ระบบปฏิบัติการ (OS): เริ่มต้นมาพร้อม iOS 18"],
      price: 1099.99,
    },
    {
      id: 3,
      imageUrl: "https://images.samsung.com/th/smartphones/galaxy-s25-ultra/buy/kv_global_PC_v2.jpg?imbypass=true",
      title: "Samsung S25 Ultra",
      description: [
            "หน้าจอ (Display): 6.9-นิ้ว Dynamic AMOLED 2X (หรือ LTPO AMOLED), รีเฟรชเรต 1-120Hz, ความละเอียด QHD+ (≈ 3120×1440), ความสว่างสูงสุดประมาณ 2,600 nits",
            "ชิปประมวลผล (Chipset): Qualcomm Snapdragon 8 Elite for Galaxy",
            "หน่วยความจำ (Memory & Storage): RAM 12GB (ในหลายภูมิภาค), มีรุ่น 16GB ในบางพื้นที่; ความจุให้เลือก 256GB / 512GB / 1TB",
            "แบตเตอรี่ & การชาร์จ (Battery & Charging): แบตเตอรี่ประมาณ 5,000 mAh; รองรับชาร์จสาย 45W; มีชาร์จไร้สาย (และ reverse wireless charging)",
            "กล้องหลัง (Rear Cameras): กล้องหลัก 200MP (f/1.7), กล้อง ultra-wide 50MP (f/1.9, มุมกว้าง ~120°), กล้องเทเล 5× (50MP, periscope), กล้องเทเล 3× (10MP)",
            "ระบบปฏิบัติการ (OS): Android 15 พร้อม One UI 7"],
      price: 1299.99,
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
