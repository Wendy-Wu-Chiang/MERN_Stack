import React, { useState } from "react";
const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor, likes } = props;

  const [currentAge, setCurrentAge] = useState(age);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);

  const addAge = () => {
    setCurrentAge(currentAge + 1);
  };

  const likeHandler = (e) => {
    setCurrentLikes(currentLikes + 1);
    setHasLiked(!hasLiked);
  };
  return (
    <div>
      <h2>
        {firstName}, {lastName}
      </h2>
      <h5>Age: {currentAge}</h5>
      <h5>Hair Color: {hairColor}</h5>
      <h5>Likes: {currentLikes}</h5>
      <button onClick={addAge}>
        Birthday button for {firstName} {lastName}{" "}
      </button>
      {hasLiked === false ? (
        <button onClick={(e) => likeHandler()}>like this person</button>
      ) : (
        <button disabled>You've already liked this person</button>
      )}
    </div>
  );
};
export default PersonCard;
