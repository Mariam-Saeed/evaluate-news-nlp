# Text Analysis

A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

<!-- ## [DEMO]() -->

## Table of Contents

<!-- - [Demo](#demo) -->

- [Title](#text-analysis)
- [Built with](#built-with)
- [Installation](#installation)
- [Run project](#running-the-project)
- [Screenshot](#screenshot)
<!-- - [Development](#development) -->

## Built With

- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack.
- External script - Service Worker
- External API - MeaningCloud API
- Unit testing - Jest

## Installation

1. Clone the repo
   `git clone https://github.com/Mariam-Saeed/evaluate-news-nlp`

2. Get a free API Key from [here](https://www.meaningcloud.com/developer/sentiment-analysis)

3. Install NPM packages
   `npm install`

4. Create `.env` file in project directory and enter your api key in this file

## Running the project

- To run the project in dev mode
  `npm run build-dev`

- To run the project in production mode
  `npm run build-prod`

- To Start the server at port 8080
  `npm run start`
- Open the project at http://localhost:8080/
- To run tests
  `npm run test`

## Screenshot

- Desktop screen
  ![demo](./screen%20images/empty.png)
  ![response](./screen%20images/response.png)
  ![error](./screen%20images/error.png)

- Mobile screen
  ![responsive](./screen%20images/responsive.png)
