import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "소고기",
    image:
      "http://post.phinf.naver.net/MjAxNzAzMjdfNjkg/MDAxNDkwNTk2MjI0ODYx.IowMmB0xM5OUsxpNEC4dRev1pDzg3CgyjtPJUeLNNiIg.0SHQw2KWA8lNa0siIfiOI5NqFRXz1uTNyejcxA4FdJMg.JPEG/I2MC4ozZNk0BGQIXghQcS0-33RjA.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "초밥",
    image:
      "http://blogfiles.naver.net/20120113_134/ulalarick_1326422517396cDa5i_JPEG/susi03.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "떡복이",
    image:
      "http://blogfiles.naver.net/MjAxNzA0MjBfMTQx/MDAxNDkyNjkzOTE0NzQx.ZtzE8jiOO5T9LCJjz8dQvxff72nqQVTWGiEof8zfsXQg.BLwA9B1kzuSLbVIO91a_jNse3wVazUfnjiJOBlyovCgg.JPEG.jsi1998/%B8%F0%B3%E0%B6%B1%BA%BA%C0%CC_%2813%29.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "치킨",
    image:
      "http://blogfiles.naver.net/MjAxODA1MjlfMTQ0/MDAxNTI3NjAxODE3NDQ4.RxMYLLd70uMb4z6v8uv75A_NRVyxMW_TR31OEH-E_M0g.sfhnu9AuBqWDPKzrA17ogrWz-8RRA_2kfxtI5QwAj40g.JPEG.jbyplus/IMG_0532.JPG",
    rating: 5.5,
  },
  {
    id: 5,
    name: "마라탕",
    image:
      "http://post.phinf.naver.net/MjAxOTA2MDRfNTYg/MDAxNTU5NjU5Njg3MjI0.SXzII9y0bWdJRel9fu2XknxNFrp8f6ok5HuFkq-6oNIg.yZ10p8eTr1GHFNlz8MN80UB2o8FHlPU7jgp1sl5qfJEg.JPEG/IlCaC1SlNF8f8TsazbWkIwqS_I7Q.jpg",
    rating: 4.9,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 0.5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
