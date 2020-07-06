import React from "react";

function Food({ fav }) {
  return <h1>I Like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="햄" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="쭈꾸미" />
    </div>
  );
}

export default App;
