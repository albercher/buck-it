# Buck-it, let's go

A full-stack web application for creating a travel-based bucket list. A user can explore locations on a map and add "buck-its" (destinations/pins) using a geocoder. Users can also create a list of activities, and see recently updated buck-its and activities.

### Built With

* [React.js](https://reactjs.org/)
* [Ruby on Rails](https://rubyonrails.org/)
* [MUI](MUI.com)

### Prerequisites

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* [Node.Js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [A free Mapbox API key](https://www.mapbox.com/)

## Installation

1. Clone this repo
   ```sh
   git clone git@github.com:albercher/buck-it.git
   ```
2. Install gems & create rails db
   ```sh
   bundle install
   rails db:create
   ```
3. Install NPM packages
   ```sh
   npm install --prefix client
   ```
4. Create a .env file in client with your Mapbox API key
   ```sh
   // .env

   REACT_APP_API_KEY=<your_api_key_here>
   ```
5. Run the backend on localhost:3000
   ```sh
   rails s
   ```
6. Run the frontend
   ```sh
   npm start --prefix client
   ```

## Contact

Abbey Bercher\
[Portfolio](https://abbeybercher.com/)\
[LinkedIn](https://www.linkedin.com/in/abbeybercher/)\
[GitHub](https://github.com/albercher)\
abbeybercher@gmail.com
