import React, { useState } from "react";
const CreationForm = (props) => {
  const [numOfPeople, setNumOfPeople] = useState(0);

  const handleNumOfPeopleChange = (event) => {
    setNumOfPeople(event.target.value);
  };

  const handleSplitTypeChange = (event) => {
    props.setSplitType(event.target.value);
  };

  const handleDateChange = (event) => {
    props.setDate(event.target.value);
  };

  const handleTitleChange = (event) => {
    props.setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    props.setDescription(event.target.value);
  };

  const handleTotalAmountOfBillChange = (event) => {
    props.setTotalAmountOfBill(event.target.value);
  };

  const NumOfPeopleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="creation-form" id="creationForm">
      <section id="firstSection">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(event) => handleDateChange(event)}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(event) => handleTitleChange(event)}
        />
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          onChange={(event) => handleDescChange(event)}
        ></textarea>
        <label htmlFor="totalAmount">Total Amount</label>
        <input
          type="text"
          name="totalAmount"
          id="totalAmount"
          onChange={(event) => handleTotalAmountOfBillChange(event)}
        />
        <label htmlFor="splitType">Split type</label>
        <select
          name="splitType"
          id="splitType"
          onChange={(event) => handleSplitTypeChange(event)}
        >
          <option value="even">Even</option>
          <option value="russianRoulette">Russian Roulette</option>
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
          <div key={`participantDiv${num}`}>
            <label
              key={`label${num}`}
              htmlFor={`peopleName${num}`}
              className="participantLabel"
            >{`Participant${num}`}</label>
            <input
              key={`input${num}`}
              type="text"
              className="participantInput"
              name={`peopleName${num}`}
              id={`peopleName${num}`}
            />
          </div>
        ))}
      </section>
      <button
        className="submitButton"
        onClick={(event) => props.handleSubmitForm(event)}
      >
        Submit!
      </button>
    </div>
  );
};

export default CreationForm;
