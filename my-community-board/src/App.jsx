import './App.css';
import RestaurantCard from './components/RestaurantCard';


import ambar from './assets/ambar.png';
import ichiban from './assets/ichiban.png';
import shawarma from './assets/shawarma.png';
import signature from './assets/signature.png';
import bangkok from './assets/bangkok.png';


const data = [
  {
    name: "Ambar India",
    type: "Indian",
    address: "605 S Wright St",
    image: ambar,
    link: "https://www.yelp.com/menu/ambar-india-champaign?adjust_creative=apple&utm_campaign=action_link_view_menu&utm_medium=feed_v2&utm_source=apple"
  },
  {
    name: "Sushi Ichiban",
    type: "Japanese",
    address: "619 S Wright St",
    image: ichiban,
    link: "https://www.sushiichiban.net/"
  },
  {
    name: "Shawarma Joint",
    type: "Middle Eastern",
    address: "627 E Green St",
    image: shawarma,
    link: "https://www.facebook.com/ShawarmaJointCU/"
  },
  {
    name: "Signature Grill",
    type: "Indian",
    address: "505 E Green St",
    image: signature,
    link: "https://www.facebook.com/signaturegrillchampaign/"
  },
  {
    name: "Bangkok Thai and Pho",
    type: "Thai",
    address: "410 E Green St",
    image: bangkok,
    link: "http://yelp.com/apple_maps_action?id=5_cn7M-9swHrFbnqZtYGBQ&component=review&action=view&language=en-US,zh-Hant-US"
  }
];

function App() {
  return (
    <div className="container">
      <h1>UIUC Eats: Favorite Campus Restaurants</h1>
      <div className="card-grid">
        {data.map((rest, index) => (
          <RestaurantCard key={index} {...rest} />
        ))}
      </div>
    </div>
  );
}

export default App;
