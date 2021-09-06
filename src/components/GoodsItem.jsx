function GoodsItem(props) {
  let { id, name, description, price, full_background, addToCart } = props;

  const img = document.createElement("img");
  img.src = full_background;
  if (!img.naturalHeight) {
    full_background = `https://via.placeholder.com/468x465?text=${name}`;
  }

  return (
    <div className="card">
      <div className="card-image">
        <img id="back-img" src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({ id, name, price })}>
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} rub.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
