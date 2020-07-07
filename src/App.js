import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "소고기",
    image:
      "http://post.phinf.naver.net/MjAxNzAzMjdfNjkg/MDAxNDkwNTk2MjI0ODYx.IowMmB0xM5OUsxpNEC4dRev1pDzg3CgyjtPJUeLNNiIg.0SHQw2KWA8lNa0siIfiOI5NqFRXz1uTNyejcxA4FdJMg.JPEG/I2MC4ozZNk0BGQIXghQcS0-33RjA.jpg",
  },
  {
    name: "초밥",
    image:
      "http://blogfiles.naver.net/20120113_134/ulalarick_1326422517396cDa5i_JPEG/susi03.jpg",
  },
  {
    name: "떡복이",
    image:
      "http://blogfiles.naver.net/MjAxNzA0MjBfMTQx/MDAxNDkyNjkzOTE0NzQx.ZtzE8jiOO5T9LCJjz8dQvxff72nqQVTWGiEof8zfsXQg.BLwA9B1kzuSLbVIO91a_jNse3wVazUfnjiJOBlyovCgg.JPEG.jsi1998/%B8%F0%B3%E0%B6%B1%BA%BA%C0%CC_%2813%29.jpg",
  },
  {
    name: "치킨",
    image:
      "http://blogfiles.naver.net/MjAxODA1MjlfMTQ0/MDAxNTI3NjAxODE3NDQ4.RxMYLLd70uMb4z6v8uv75A_NRVyxMW_TR31OEH-E_M0g.sfhnu9AuBqWDPKzrA17ogrWz-8RRA_2kfxtI5QwAj40g.JPEG.jbyplus/IMG_0532.JPG",
  },
  {
    name: "마라탕",
    image:
      "http://post.phinf.naver.net/MjAxOTA2MDRfNTYg/MDAxNTU5NjU5Njg3MjI0.SXzII9y0bWdJRel9fu2XknxNFrp8f6ok5HuFkq-6oNIg.yZ10p8eTr1GHFNlz8MN80UB2o8FHlPU7jgp1sl5qfJEg.JPEG/IlCaC1SlNF8f8TsazbWkIwqS_I7Q.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
