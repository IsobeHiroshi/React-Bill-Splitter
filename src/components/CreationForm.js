import React, { useState } from "react";
const CreationForm = () => {
  const [numOfPeople, setNumOfPeople] = useState(0);

  const handleNumOfPeopleChange = (event) => {
    setNumOfPeople(event.target.value);
  };

  const NumOfPeopleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="form">
      <label htmlFor="">Date</label>
      <input type="date" name="date" id="date" />
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label>Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
      ></textarea>
      <label htmlFor="splitType">Split type</label>
      <select name="splitType" id="splitType">
        <option value="">Even</option>
        <option value="">Russian Roulette</option>
      </select>
      <label htmlFor="peopleNum">Number of people</label>
      <input
        type="number"
        name="peopleNum"
        id="peopleNum"
        min={0}
        max={10}
        onChange={(event) => {
          handleNumOfPeopleChange(event);
        }}
      />
      {NumOfPeopleArr.slice(0, numOfPeople).map((num) => (
        <p key={num}>input</p>
      ))}
    </div>
  );
};

export default CreationForm;
