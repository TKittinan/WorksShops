import ProductCard from "./component/ProductCard";


function App() {
  function addToCart(name: string) {
    alert(name + " ถูกเพิ่มลงในตะกร้าแล้ว!");
  }

  return (
    <div className="p-6 flex flex-wrap gap-4">
      <ProductCard
        imageUrl="https://picsum.photos/200/150"
        title="สินค้า A"
        description="รายละเอียดของสินค้า A"
        price={100}
        onAddToCart={() => addToCart("สินค้า A")}
      />

      <ProductCard
        imageUrl="https://picsum.photos/200/151"
        title="สินค้า B"
        description="รายละเอียดของสินค้า B"
        price={200}
        onAddToCart={() => addToCart("สินค้า B")}
      />

      <ProductCard
        imageUrl="https://picsum.photos/200/152"
        title="สินค้า C"
        description="รายละเอียดของสินค้า C"
        price={300}
        onAddToCart={() => addToCart("สินค้า C")}
      />
    </div>
  );
}

export default App;
