# React-Bill-Splitter

https://wmdd4936-hisobe00.herokuapp.com/

## How to Build and Run App

- `npm dev` will boot nodemon with app.js in root folder, which listens to local port 8080.
- `npm watch` will compile webpack configuration file.

## How This App Works

- This is a simple bill splitter.
- Users can choose split type: **"Even"** or **"Russian Roulette"**.
- "Even" will let everyone pay the equal amount.
- "Russian Roulette" will make **one person pay all the bill! Ouch!**
- You can see the history by clicking "See History" button on the home screen.

## API documentation

### Endpoints

- **/api/v1/splitDataTest(POST):** Test the data format which is about to be submitted. If there are unacceptable data format, the errors will show up on the UI.
- **/api/v1/splitData(POST):** Creates a new split data and save it in the database.
- **/api/v1/splitData(GET):** Fetch all the saved data from the database.

### How to use Endpoints

- **/api/v1/splitDataTest(POST)**
  If split data is sent towards this endpoint, the data will be validated, and if there are any errors, an array with error message will be returned.

- **/api/v1/splitData(POST)**
  If split data is sent towards this endpoint, the data will be saved in the database(MongoDB) after going through a similar validation process to above. If the data can't be validated, it won't be saved to the database.

- **/api/v1/splitData(GET)**
  If you access this endpoint, the array which has all the split data will be returned, which is used in history page.

### Response Format

- JSON is always used.

### Expected POST Body Format

- This app basically handles only one type of object, which should have the properties below.
  - Date: String, ISO8601 Format, required.
  - SplitType: String, "even"(default) or "russianRoulette".
  - Participants: Array, 2 items(people) minimum and 10 maximum.
  - Title: String, 1 character minimum and 100 maximum, required.
  - Description: String, 200 characters maximum.
  - TotalAmountOfBill: Number, minimum 1.
  - Payer: String, 1 character minimum and 50 maximum, required. (When split type is set to "even," this property will be automatically set to "everyone.")
