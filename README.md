# Testes E2E Ebac Shop

# Automation E2E Cypress Test

This is the repository for automation of web projects, developed to work with Cypress.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Tests](#tests)
4. [Data](#data)
5. [Initial Setup](#initial-setup)
6. [Run Tests](#run-tests)

## Goal

The goal of this repository is to be easy to understand focused on developing automated tests for Web, using [Cypress](https://www.cypress.io/), a tool developed in JavaScript language that provides speed, ease and reliability in the tests.

The architecture developed for this project meets the need to centralize only a single BDD (Behavior Driven Development).

This project can be executed in Chrome, Firefox and Edge browsers.

## Project Structure

```
|--- cypress
|----- downloads
|----- fixtures
|----- integration
|----- plugins
|----- support
|--- cypress.json
|--- Jenkinsfile
|--- package-lock.json
|--- package.json
|--- test-results.xml
```

## Tests

The tests were written using the JavaScript language with Cypress.

## Data

All data used in the execution of the automated tests will be in a .json file, located inside the "fixtures".

## Run tests

### Initial Setup

1. Requires node. To install, execute `npm install node` or download [Node](https://nodejs.org/en/download/)
2. Run the command `npm install` to install dependencies

### Run Tests

- Run one of the commands below to run the tests.
  Examples:
- To run all tests, execute `npm run test`
- To run tests opening the Cypress interface, execute  `npm run cy:open`
- To run tests without opening the Cypress interface, execute  `npm run cy:run`
<p>