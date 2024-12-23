// eslint-disable-next-line react/prop-types
const DisplayUserInfo = ({ data, onDelete }) => {
  
  const userData = data;
  console.log(userData[0]["userRollNumber"]);

  return (
    <>
    {userData.length ===1 ? (<></>):(
        <div className="user-info-container">
        <h2>UserData</h2>
        <div className="user-info">
          {userData.map((d, i) => (
            <div key={i} className="user-data-container">
              {d.userName ? (
                <div className="user-data">
                  <p>Name: {d.userName}</p>
                  <p>Roll Number: {d.userRollNumber}</p>
  
                  <button value={i} onClick={() => onDelete(i)}>
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
    </>
  );
};

export default DisplayUserInfo;
