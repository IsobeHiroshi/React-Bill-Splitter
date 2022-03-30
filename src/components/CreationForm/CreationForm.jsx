import "./CreationForm.css";
function Form() {
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

      <label htmlFor="peopleNum">Number of people</label>
      <input type="number" name="peopleNum" id="peopleNum" min={0} />

      <label htmlFor="splitType">Split type</label>
      <select name="splitType" id="splitType">
        <option value="">Even</option>
        <option value="">Russian Roulette</option>
      </select>
    </div>
  );
}

export default Form;
