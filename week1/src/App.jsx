import './App.css';
import RestaurantCard from './components/RestaurantCard';

import ambar from './assets/ambar.png';
import ichiban from './assets/ichiban.png';
import shawarma from './assets/shawarma.png';
import signature from './assets/signature.png';
import bangkok from './assets/bangkok.png';
import chopstix from './assets/chopstix.png';
import manolos from './assets/manolos.png';
import j6 from './assets/j6.png';
import forage from './assets/forage.png';
import dubai from './assets/dubai.png';

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
  },
  {
    name: "Chopstix",
    type: "Chinese",
    address: "202 E Green St",
    image: chopstix,
    link: "http://www.chopstix217.com/"
  },
  {
    name: "Manolo’s Pizza & Empanadas",
    type: "Italian",
    address: "1115 W Oregon St",
    image: manolos,
    link: "https://manolospizza.com/"
  },
  {
    name: "J6 Kimbap",
    type: "Korean",
    address: "516 E John St",
    image: j6,
    link: "https://j6kimbap.square.site/"
  },
  {
    name: "Forage Kitchen",
    type: "Salad Bar",
    address: "503 E Green St",
    image: forage,
    link: "https://www.eatforage.com/"
  },
  {
    name: "Dubai Grill",
    type: "Middle Eastern",
    address: "701 S Gregory St",
    image: dubai,
    link: "https://www.dubai-grill.com/"
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
