import React from 'react';

function App() {
  return (
    <div>
      <GoodComponent name="조던" category="신발" position="신발장" price={300000}/>
      <GoodComponent2 name="티셔츠" category="옷" position="박스1" price={30000}/>
    </div>
  );
}

export default App;

function GoodComponent({name, category, position, price}) {
  return (
    <div>{`${name} - ${category} - ${position} - ${price}원`}</div>
  )
}

const GoodComponent2 = ({name, category, position, price}) => {
  return (
    <div>{`${name} - ${category} - ${position} - ${price}원`}</div>
  )
}