import React from 'react';
import { useRouter } from 'next/router';

const Response = () => {
  const router = useRouter();
  const myData = JSON.parse(router.query.myData || '[]'); // Parse the query parameter as JSON, default to an empty array
  console.log("mydata: ", myData);

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        <li style={styles.listItem}>
          <div style={styles.userInfo}>
            <strong>Username:</strong> {myData.username}<br />
            <strong>Email:</strong> {myData.email}<br />
            <strong>First Name:</strong> {myData.firstName}<br />
            <strong>Last Name:</strong> {myData.lastName}<br />
            <strong>Gender:</strong> {myData.gender}<br />
          </div>
          <div style={styles.userImage}>
            <img src={myData.image} alt={`Profile of ${myData.username}`} style={styles.image} />
          </div>
        </li>
      
      </ul>
    </div>
  );
};

const styles = {
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  userInfo: {
    flex: 1,
  },
  userImage: {
    flex: 0,
    marginLeft: '20px',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },  
};

export default Response;

