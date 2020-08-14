# TDD with Jest

Let's get good at TDD! Work through the katas in this repo and practice your
TDD chops.

For this assignemnt, we will be using Jest, which is a popular javascript
testing framework created and used by Facebook.

### Instructions

- The description for each kata is described in the respective files in `src/`.
  The corresponding tests are in `test/filename.test.js`.

- To run the tests, run `yarn test` in your terminal.

  - Inside `package.json`, we have defined `yarn test` to execute the `jest`
    command, which will run all the tests in the project.

  - We have also defined 2 additional commands:

    - `yarn test:watch`, which is executing the `jest --watch` command.
      The `--watch` option will rerun the tests everytime you save a file.

    - `yarn test:coverage`, which is executing the `jest --coverage`
      command. The `--coverage` option produces a test coverage report
      after running the tests

- To quit the test runner, hit `q` in the terminal where `jest` is running.

- Do the assignments in this order:

  - `fizzbuzz.js`
  - `leapYear.js`
  - `sumWithoutHighestAndLowest.js`
  - `firstNonConsecutiveNumber.js`
  - `findMultiples.js`

- Once you've passed the first test, change the next test from `xit(...)`
  to `it(...)`.

- Have fun! And enjoy the dopamines that come with seeing green!
