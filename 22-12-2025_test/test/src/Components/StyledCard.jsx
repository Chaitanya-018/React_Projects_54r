import "./StyledCard.css";

function StyledCard() {
  const product = {
    name: "Iphone 17 Pro Max",
    price: "₹1,50,000",
    description: " iPhone 17 Pro Max offers a premium design, powerful next-gen performance, and an advanced Pro camera system for stunning photos and videos.It delivers a smooth, immersive display and long-lasting battery for a top-tier smartphone experience. "
  };

  return (
    <div className="card" style={{ backgroundColor: "lightblue" }}>
      <h2 className="product-name">{product.name}</h2>
      <h3 className="product-price">{product.price}</h3>
      <p className="product-desc">{product.description}</p>
    </div>
  );
}

export default StyledCard;
