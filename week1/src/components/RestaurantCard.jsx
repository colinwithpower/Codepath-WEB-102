function RestaurantCard({ image, name, type, address, link }) {
    return (
      <div className="card">
        <img src={image} alt={name} className="card-image" />
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{address}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Menu</button>
        </a>
      </div>
    );
  }
  
  export default RestaurantCard;
  