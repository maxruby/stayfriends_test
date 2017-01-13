# Stayfriends Test

#### Instructions

Starting with the given `index.html` file:

- load data from `bundesland.json` using JavaScript as per `bundesland-dimension.png`
- Render the list of `Bundesländer`
  - each box of the Bundesland has to be a URL link
  - mouse `onHover` effect
- Render a list of letters for the person index where `person count > 0` (linking not necessary)
- Render for all screen and client window sizes according to the following specifications:

    - Browser width > 800px
        - Bundesländer - 3 columns
        - Content MAX width 1024px, can be narrower
        - Content centered

    - Browser width up to 800px
        - Bundesländer - 2 columns
        - Content width 100%

    Browser width up to 500px
        - Bundesländer - 1 column
        - Content width 100%

- Styling, tools and Libraries
  - Feel free to use any libraries, tools etc
  - Feel free to use any online resources (StackOverflow etc.)
  - Use CSS for styling

#### Solution

- React application that renders a list of the Bundeslander as Components
- Inline React CSS styling with Aphrodite for `media` queries

- Relevant project files:

    - Data loading and processing:
        - `data/bundesland.json`
        - `data/DataAPI.js`

    - HTML
        - `server/index.js`, html is send via the server as a template string in lines 111-163

    - React Components with CSS styling
        - `common/components/App.js`
        - `common/components/BundeslandList.js`
        - `common/components/PersonIndexCountList.js`


#### Testing
```bash
git clone https://github.com/jaredpalmer/react-production-starter.git stayfriends_suster_test
cd stayfriends_suster_test
npm install
npm start

# Open localhost:5000
```
