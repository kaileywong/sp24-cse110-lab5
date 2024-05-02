# Lab 5 - Starter

Name: Kailey Wong

## Pt 3. Unit Testing with Jest
1. I would not use a unit test to test the "message" feature of a messaging application because there are likely many components and functions involved in such a functionality, as well as many possible aspects of the functionality to test (ex: successfully storing the message, sending it, etc.). A test would have to test interactions between different components, which doesn't fit with unit tests - these should be small scale with few parts (what makes them easy to test).
2. I would use a unit test to test the "max message length" feature of a messaging application. This is a very specific case opf checking whether a message length is over a limit, and there is likely some small function that handles this check. It is a small, isolable portion of the code that would execute quickly and fits under the principle of unit testing.