import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { getDocs, collection } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';
import '../style.css';

const Database = ({ exp, title, type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, '12b'));
        const newData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };

    fetchData();
  }, [exp, title, type]);

  const filteredData = data.filter(item => item.exp === exp && item.title === title && item.type === type);

  return (
    <div>
      <h2 className='text-xl font-bold'>Data from Firestore:</h2>

      {filteredData.map((item, index) => (
        <div key={index} className="outer-container">
          <ul className='bg-blue-300 m-4 p-2 width-full'>
            <li>
              <strong>ID:</strong> {item.id} <br />
              <strong>Experience:</strong> {item.exp} <br />
              <strong>Title:</strong> {item.title} <br />
              <strong>Type:</strong> {item.type} <br />
              <strong>Company:</strong> {item.company}
              <hr />
            </li>
          </ul>
        </div>
      ))}
      {filteredData.length === 0 && <p>No data available</p>}
    </div>
  );
};

export default Database;