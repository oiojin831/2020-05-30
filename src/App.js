import React, { useState } from 'react';

const App = () => {
  const [goods, setGoods] = useState([]);

  const handleClick = () => {
    //let delayedData;
    let delayedData = [];
    setTimeout(() => {
      delayedData = data;
      console.log(delayedData)
    }, 2000)
    setGoods(delayedData)
  }

  return (
    <div>
      <button onClick={handleClick}> set data</button>
      {goods.map((item, index) => {
        return <GoodComponent
          key={`${index}-${item.name}`}
          name={item.name} category={item.category}
          position={item.position}
          price={item.price}
        />
      })}
    </div>
  );
}

export default App;

const GoodComponent = ({ name, category, position, price }) => {
  return (
    <div>{`${name} - ${category} - ${position} - ${price}원`}</div>
  )
}

const data = [
  {
    name: '맥스 97',
    category: '신발',
    position: "신발장",
    price: 180000
  },
  {
    name: '맥스 95',
    category: '신발',
    position: "box1",

    price: 200000
  },
  {
    name: '검정 티셔츠',
    category: '옷',
    position: "box1",
    price: 30000
  },
  {
    name: '자전거',
    category: '운동기기',
    position: "베란다",
    price: 200000
  }
];
