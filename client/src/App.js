import { useState, useEffect } from "react";
import axios from "axios";

export const App = function () {
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    const getLearners = async () => {
      const res = await axios({
        url: "/api/v1/learners",
        method: "GET",
      });

      const { data } = res.data;

      setLearners(data?.learners);
    };

    getLearners();
  }, []);
  return (
    <div>
      <h1>List of Learners</h1>
      {learners.map((element) => {
        return (
          <div key={element._id}>
            <p>Name: {element.name}</p>
            <p>Email: {element.email}</p>
          </div>
        );
      })}
    </div>
  );
};
