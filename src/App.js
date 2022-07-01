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
