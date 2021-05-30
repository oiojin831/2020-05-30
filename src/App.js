import React, { useState, useEffect } from 'react';
import { firestore } from './firebase'

const App = () => {
  const [goods, setGoods] = useState([]);
  const [name, setName] = useState("")
  const [category, setCategory] = useState("");
  const [position, setPosition] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    firestore
      .collection('goods')
      .get()
      .then(querySnapshot => {
        const myArr = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          myArr.push(doc.data());
        });
        setGoods(myArr);
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  }, [])

  const handleSubmit = (e) => {
    //upload name to server
    e.preventDefault();
    const newData = {
      name: name,
      category: category,
      position: position,
      price: price,
    };
    firestore
      .collection("goods")
      .add(newData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
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
