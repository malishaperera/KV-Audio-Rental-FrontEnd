import "./productCard.css";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.photoUrl} alt={props.name} />
      <span className="product-name">{props.name}</span>
      <span className="product-price">LKR. {props.price}</span>
      <p className="product-description">{props.description}</p>
    </div>
  );
}