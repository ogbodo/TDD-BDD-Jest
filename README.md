# Test/Behavioural Driven Development (TDD/BDD) using Jest

# This project create fully tested simple functions to perform the following operations using Jest Framework.

- Add two numbers.
- Add an indefinite amount of numbers.
- Takes two numbers as argument and return the difference between the numbers.
- Multiply an indefinite amount of arguments.
- Takes two numbers as arguments and returns the first number divided by the second number.
- Takes a username as an argument and makes a call to GitHub API and returns all the repositories owned by the user as an array. This was achieved by using axios framework to implement and mock the asynchronous task.
- Takes two strings as arguments and return the concatenation of the two strings.

# NOTE: My tests accounted for all possible edge cases. Also, made sure that all tests are failing before actual implementation.

Major steps taken to accomplish this solution

1. First of all install npm
2. Install and configure the jest for the testing.
3. Go to the package.json and edit scripts part replace its content to ‘jest’. This ensures that jest is used for the testing.
4. Started writing the tests for a solution.
5. Started writing the implementations for the tests I have written in step 3.
6. To run the test type ```npm run test``` on the command line.
