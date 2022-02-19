import { useEffect, useState } from "react";
import React from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users");
    // console.log(response);
    // const data=await response.json();
    setUser(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 className="hed">Top Movie List</h1>

      {user.map((curElem) => {
        return (
          <>
            <div className="head1">
              <div className="mainHead">
                <div className="card">
                  <img src={curElem.avatar_url} alt="" className="pic" />

                  <div className="id">
                    <p>
                      <span> Login Name </span>=>
                      {curElem.login}
                    </p>
                    <p>
                      <span>Id Nu</span>=>{curElem.id}
                    </p>
                    <p>
                      <span>Node id</span>=> {curElem.node_id}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Fetch;
