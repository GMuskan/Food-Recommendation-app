import React, { useState } from "react";
import "./styles.css";
const foodDb = {
  NorthIndian: [
    {
      name: "Amritsari Chole Bhature",
      rating: "4.5/5"
    },
    {
      name: "Kashmiri Rogan Josh",
      rating: "3/5"
    },
    {
      name: "Rajasthani Dal-Bati Churma",
      rating: "4/5"
    },
    {
      name: "Dilli ki Chaat",
      rating: "5/5"
    },
    {
      name: "Veg Biryani",
      rating: "3.5/5"
    },
    {
      name: "Lachha Paratha",
      rating: "3.6/5"
    },
    {
      name: "Baati Chokha",
      rating: "4.8/5"
    },
    {
      name: "Dahi Papdi",
      rating: "5/5"
    },
    {
      name: "Malai Ki Kheer",
      rating: "4.5/5"
    },
    {
      name: "Aloo Samosa",
      rating: "4.9/5"
    }
  ],
  SouthIndian: [
    {
      name: "kadambattu",
      rating: "3/5"
    },
    {
      name: "steamed rice dumplings",
      rating: "3.5/5"
    },
    {
      name: "rice rotis",
      rating: "4/5"
    },
    {
      name: "dosa and Idli",
      rating: "5/5"
    },
    {
      name: "Meen Murringakka Curry",
      rating: "3.3/5"
    },
    {
      name: "Hyderabadi Biryani",
      rating: "4.8/5"
    },
    {
      name: "Paal Payasam",
      rating: "4.5/5"
    },
    {
      name: "Gonguru Mamsam (Andhra lamb curry)",
      rating: "5/5"
    },
    {
      name: "Chicken Chettinad",
      rating: "4.9/5"
    },
    {
      name: "Andhra Style Chicken Curry",
      rating: "3.9/5"
    }
  ],
  Chinese: [
    {
      name: "Dim Sums",
      rating: "4/5"
    },
    {
      name: "Hot and Sour Soup.",
      rating: "3.5/5"
    },
    {
      name: "Spring Rolls.",
      rating: "5/5"
    },
    {
      name: "Stir Fried Tofu with Rice.",
      rating: "4.5/5"
    },
    {
      name: " Veg Manchurian",
      rating: "4.5/5"
    },
    {
      name: "Veg Fried rice",
      rating: "4/5"
    },
    {
      name: "Honey Chili Potato",
      rating: "5/5"
    },
    {
      name: "Noodles",
      rating: "3.9/5"
    },
    {
      name: " Shiitake Fried Rice With Water Chestnuts",
      rating: "4.6/5"
    },
    {
      name: " Vegetable Manchow Soup",
      rating: "5/5"
    }
  ],
  Italian: [
    {
      name: "Lasagne",
      rating: "5/5"
    },
    {
      name: "Pizza",
      rating: "5/5"
    },
    {
      name: "White Sauce Pasta",
      rating: "5/5"
    },
    {
      name: "Gelato",
      rating: "3/5"
    },
    {
      name: "Caprese Salad with Pesto Sauce",
      rating: "4.1/5"
    },
    {
      name: " Eggplant Parmigiana",
      rating: "3.8/5"
    },
    {
      name: " Panzanella",
      rating: "3.9/5"
    },
    {
      name: "Mushroom Risotto",
      rating: "5/5"
    },
    {
      name: "Bruschetta",
      rating: "4.2/5"
    },
    {
      name: " Four Cheese Pasta",
      rating: "4.8/5"
    }
  ]
};
export default function App() {
  const [currentGenre, setCurrentGenre] = useState("NorthIndian");
  function genreClickHandler(genre) {
    setCurrentGenre(genre);
  }
  return (
    <main style={{ margin: "5rem", padding: "1rem" }}>
      <div className="App">
        <h1> 🥡 Good Food </h1>
        <small>
          check out my favourite food. Select a genre to get started.
        </small>
        <div>
          {Object.keys(foodDb).map((genre) => (
            <button key={genre} onClick={() => genreClickHandler(genre)}>
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div>
          <ul>
            {foodDb[currentGenre].map((item) => (
              <li key={item.name}>
                <div style={{ fontSize: "larger" }}>{item.name}</div>
                <br />
                <div style={{ fontSize: "smaller" }}>{item.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
