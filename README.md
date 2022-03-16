
## Roman <-> Integer Conversion Challenge for Amplio Jr. SWE

Steps to run locally:
Download as zip file
cd into folder then
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Further questions on technical challenge

### Testing
Roman Math:
    Simply adding more form inputs would (a second value input and a dropdown for the operator selection), defaulting to addition with the second value at 0 would keep the default functionality the same. Then in the backend we could convert each sent value to integer, pass through a function (could use a factory design to implement) and return the result of the operation. Convert to roman numeral and return both values. e.g. doMath(value1: int, value2: int, operation: string) -> result: int

How could I implement testing?
    Using the built in react-testing-library we could set up a test suite to manage the expected results from the conversion functions and the req/res cycle in general.

Validation:
    I set up a rudimentary validation system by checking the input type correlates with the selection the user made that they want to convert to. It simply uses if/else checks and changes the UI of the input box with an error message directing the user to valid input.

Logging:
    Console.logging the request bodies on the server side and the response body on the client side would help understand where the disconnect is in any flaws of communication between the two.


