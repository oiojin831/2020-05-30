import React from 'react';

function App() {
  return (
    <div>
      <GoodComponent />
      <GoodComponent2 />
    </div>
  );
}

export default App;

function GoodComponent() {
  return (
    <div>조던 - 신발 - 신발장 - 300000원</div>
  )
}

const GoodComponent2 = () => {
  return (
    <div>티셔츠 - 옷 - 박스1 - 30000원</div>
  )
}