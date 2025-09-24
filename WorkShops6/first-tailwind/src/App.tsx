// import './App.css';
// import ProductCard from './component/ProductCard';

// const App: React.FC = () => {
//   const Product = [
//     {
//       id: 1,
//       imageUrl: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
//       title: "iPhone 14",
//       description: "สมาร์ทโฟนจอ 6.1 นิ้ว, ชิป A15 Bionic, กล้องคู่ 12MP, รองรับ 5G",
//       price: 799,
//     },
//     {
//       id: 2,
//       imageUrl: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
//       title: "iPhone 15",
//       description: "มาพร้อม Dynamic Island, ชิป A16 Bionic, กล้องหลัก 48MP, USB-C",
//       price: 899,
//     },
//     {
//       id: 3,
//       imageUrl: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg",
//       title: "iPhone 16 Pro",
//       description: "Titanium design, ชิป A18 Pro, กล้อง Telephoto 5x (เฉพาะ Pro Max), iOS 18",
//       price: 1099,
//     },
//   ];

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-3 bg-gray-100 '>  
//       <h1 className="text-3xl font-bold mb-4 text-center col-span-full mt-2 text-black ">รายการสินค้า</h1>
//       {Product.map((product) => (
//         <ProductCard
//           key={product.title} 
//           imageUrl={product.imageUrl}
//           title={product.title}
//           description={product.description}
//           price={product.price}
//           onAddToCart={() => alert(`${product.title} หมดเเเล้วทำไง!`)}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

// workshop 6.1 Reusable Card Component 
//==========================================================================================================================================================
// Workshop 6.2 Navigation Bar แบบ Responsive

import React from "react";
import Navbar from "./component/Navbar";
import './App.css';
    
const App: React.FC = () => {
  return(
  <div>
    <Navbar/>
    <div className="pt-20 p-6">
    <h1 className="text-5xl font-bold mb-4 text-black text-left">Welcome My site</h1>
    <p className="text-xl text-gray-700 text-left">
      นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูกาการทำงานของ Responsive Navbar
    </p>
    </div>  
  </div>
  )
};

export default App;