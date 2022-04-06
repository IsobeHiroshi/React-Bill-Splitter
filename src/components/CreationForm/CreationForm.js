import "./CreationForm.css";
import React, { useState } from "react";
function CreationForm() {
  /* const [numOfPeople, setNumOfPeople] = useState(0);

  const handleNumOfPeopleChange = (event) => {
    setNumOfPeople(event.target.value);
  }; */

  const NumOfInputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
      <input type="number" name="peopleNum" id="peopleNum" min={0} max={10} />

      {/* {NumOfInputArr.slice} */}
    </div>
  );
}

export default CreationForm;
