import { useState } from "react";

import "./index.css";
const teamData = [
  {
    id: 1,
    imageUrl: "https://www.freeiconspng.com/uploads/profile-icon-9.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    imageUrl: "https://www.freeiconspng.com/uploads/profile-icon-9.png",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. A piece of classical Latin from  5 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC.",
  },
  {
    id: 3,
    imageUrl: "https://www.freeiconspng.com/uploads/profile-icon-9.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Home = () => {
  const [selected, setSelected] = useState(null);
  const handleShowMoreLess = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="home-container">
      <div className="d-flex justify-content-center flex-wrap">
        {teamData.map((each) => {
          const lessDescription = each.description.slice(0, 100) + "...";
          return (
            <div className="person-container" key={each.id}>
              <div className="image-container">
                <img
                  alt="docImg"
                  className="profile-image"
                  src={each.imageUrl}
                />
              </div>
              <p className="description">
                {selected === each.id ? each.description : lessDescription}
              </p>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleShowMoreLess(each.id)}
                >
                  {selected === each.id ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
