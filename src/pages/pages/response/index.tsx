import React from 'react';
import { useRouter } from 'next/router';

const Response = () => {
  const router = useRouter();
  const myData = Array.isArray(router.query.myData)
  ? router.query.myData.join(',') // Convert the array to a comma-separated string or choose your delimiter
  : router.query.myData || '[]';   //Type error: Argument of type 'string | string[]' is not assignable to parameter of type 'string'.Type 'string[]' is not assignable to type 'string'.

  const parsedData = JSON.parse(myData); // Parse the query parameter as JSON, default to an empty array
  console.log("parsedData: ", parsedData);

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        <li style={styles.listItem}>
          <div style={styles.userInfo}>
            <strong>Username:</strong> {parsedData.username}<br />
            <strong>Email:</strong> {parsedData.email}<br />
            <strong>First Name:</strong> {parsedData.firstName}<br />
            <strong>Last Name:</strong> {parsedData.lastName}<br />
            <strong>Gender:</strong> {parsedData.gender}<br />
          </div>
          <div style={styles.userImage}>
            <img src={parsedData.image} alt={`Profile of ${parsedData.username}`} style={styles.image} />
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

