import './App.css';
import ProductCard from './component/ProductCard';

const App: React.FC = () => {
  const Product = [
    {
      id: 1,
      imageUrl: "https://media-cdn.bnn.in.th/472430/msi-notebook-titan-18-hx-ai-a2xwig-080th-black-9s7-182421-1-square_medium.jpg",
      title: "MSI Titan 18 HX AI Core Black",
      description: [
        "",
        "CPU: Intel Core Ultra 9 285HX, up to 5.5GHz, 24C(8P+16E)/24T, 36MB",
        "Graphics: NVIDIA GeForce RTX 5080 16GB GDDR7",
        "RAM: 64GB (2x32GB) DDR5-6400",
        "SSD: 2TB NVMe PCIe 5.0 x 4 + 4TB(2x2TB) NVMe PCIe 4.0 x 4"
      ],
      price: 5699,
    },
    {
      id: 2,
      imageUrl: "https://media-cdn.bnn.in.th/471118/asus-notebook-rog-flow-z13-gz302ea-ru087wa-a-1-square_medium.jpg",
      title: "Asus ROG Flow Z13 Off Black",
      description: [
        "",
        "CPU: AMD Ryzen AI MAX+ 395, 3.0GHz Up to 5.1GHz, 16C/32T, 64MB L3 Cache, NPU up to 50TOPS",
        "Graphics: AMD Radeon Graphics",
        "RAM: 32GB LPDDR5X-8000 Onboard",
        "SSD: 1TB NVMe PCIe 4.0"
      ],
      price: 4499,
    },
    {
      id: 3,
      imageUrl: "https://media-cdn.bnn.in.th/494112/hp-notebook-omen-16-ah0020tx-black-1-square_medium.jpg",
      title: "HP OMEN MAX Black",
      description: [
        "",
        "CPU: Intel Core Ultra 9 275HX, Up to 5.4 GHz, 24C(8P+16E)/24T, 36MB Cache",
        "Graphics: NVIDIA GeForce RTX 5090 Laptop",
        "RAM: 64GB DDR5 5600MHz",
        "SSD: 1TB NVMe PCIe M.2"
      ],
      price: 4999,
    },
    {
      id: 4,
      imageUrl: "https://media-cdn.bnn.in.th/486863/asus-notebook-rog-zephyrus-g16-gu605cw-qr143wa-white-1-square_medium.jpg",
      title: "Asus ROG Zephyrus G16 White",
      description: [
        "",
        "CPU: Intel Core Ultra 9 285H, Up to 5.4 GHz, 16C(6P+8E+2LPE)/16T, 24MB Cache",
        "Graphics: NVIDIA GeForce RTX 5080 Laptop",
        "RAM: 64GB LPDDR5X 7467 on board",
        "SSD: 1TB PCIe 4.0 NVMe M.2 SSD"
      ],
      price: 3699,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-yellow-50 p-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-900 drop-shadow-md">
        AITEEGPU
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
        {Product.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => alert(`${product.title} Add to Cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;



///////////////////// 6.2
// import React from "react";
// import Navbar from "./component/Navbar";
// import './App.css';
    
// const App: React.FC = () => {
//   return(
//   <div>
//     <Navbar/>
//     <div className="pt-20 p-6">
//       <h1 className="text-blue-950 font-bold text-left text-5xl mb-4">เนื้อหาหลักของหน้าเว็ป</h1>
//         <p className="text-xl text-black text-left">
//           นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูกาการทำงานของ Responsive Navbar
//         </p>
//     </div>  
//   </div>
//   )
// };

// export default App;

