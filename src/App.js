import React from 'react';

const App = () => {
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

  console.log(data);
  return (
    <div>
      <GoodComponent name="조던" category="신발" position="신발장" price={300000} />
      <GoodComponent name="티셔츠" category="옷" position="박스1" price={30000} />
    </div>
  );
}

export default App;

const GoodComponent = ({ name, category, position, price }) => {
  return (
    <div>{`${name} - ${category} - ${position} - ${price}원`}</div>
  )
}