# React-Bill-Splitter

https://wmdd4936-hisobe00.herokuapp.com/

## How to Build and Run App

- "npm dev" will boot nodemon with app.js in root folder, which listenes to local port 8080.
- "npm watch" will compile webpack configuration file.

## How This App Works

- This is a simple bill splitter.
- Users can choose split type: "Even" or "Russian Roulette".
- "Even" will let everyone pay the equal amount.
- "Russian Roulette" will make one person pay all the bill! Ouch!
- You can see the history by clicking "See History" button on the home screen.

## API documentation

### Endpoints

- /api/v1//splitDataTest(POST): Test the data format which is about to be submitted. If there are unacceptable data format, the errors will show up on the UI.
- /api/v1/splitData(POST): Creates a new split data and save it in the database.
- /api/v1/splitData(GET): Fetch all the saved data from the database.

### Response Format

- JSON is always used.
