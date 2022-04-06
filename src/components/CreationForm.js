import React, { useState } from "react";
const CreationForm = () => {
  const [numOfPeople, setNumOfPeople] = useState(0);

  const handleNumOfPeopleChange = (event) => {
    setNumOfPeople(event.target.value);
  };

  const NumOfPeopleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <form className="form">
      <section id="firstSection">
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
        <label htmlFor="totalAmount">Total Amount</label>
        <input type="text" name="totalAmount" id="totalAmount" />
        <label htmlFor="splitType">Split type</label>
        <select name="splitType" id="splitType">
          <option value="">Even</option>
          <option value="">Russian Roulette</option>
        </select>
        <label htmlFor="peopleNum">
          Number of people<span>(max:10)</span>
        </label>
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
      </section>
      <section id="secondSection">
        {NumOfPeopleArr.slice(0, numOfPeople).map((num) => (
          <div>
            <label
              htmlFor={`peopleName${num}`}
              className="participantLabel"
            >{`Participant${num}`}</label>
            <input
              key={num}
              type="text"
              className="participantInput"
              name={`peopleName${num}`}
              id={`peopleName${num}`}
            />
          </div>
        ))}
      </section>
      <button className="submitButton">Submit!</button>
    </form>
  );
};

export default CreationForm;
