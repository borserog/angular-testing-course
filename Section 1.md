# Section 1

**Karma**: is a test runner;



When **testing a service** all other dependencies **should be mocked**;

- That's what makes a unit test, by the way;
- Unit tests test only an isolated fragment of the system;



Jasmine spying functionality:

- Keeps track how many times a function is called;
- Provides a fake implementation of a function and its return values;
- Spy existing object or create a mocked implementation



`beforeEach()`:

- ensures that test specs don't interfere with each other;
- if the order of tests matter, that means they are not properly isolated;



Dependency Injection in Angular Testing

- Design pattern widely used by Angular;

- Each service (or component) receives its dependencies directly in its `constructor`. **Advantage**:

  - Testing; providing fake implementations;

- Angular TestBed Utility:

  - Simulates de behavior of an `NgModule`;

  - **Advantage**:

    - Tests are based in dependency injection just like the running application;

    - (?)

      

Summary:

- **Test Suite:** what comes inside `describe()`;
- **Test Spec**: what comes inside 
- Step-by-step of tests implementation:
  1. Setup the `beforeEach()` block;
  2. Perform the operation to be tested;
  3. Assertions;

- Mock all dependencies;
- We should **not** inject real instances of dependencies in the services;
  - It isolates the test;
  - Assumes that other dependencies are working fine;
  - When we test a service and its real dependencies we are doing a **integration test**
- Angular TestBed shines in complex services and testing Angular Components;



****



# Jasmine Tips

| Command              | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `pending()`          | no tests are ready                                           |
| `fail()`             | set a spec test to fail                                      |
| `ng test --no-watch` | disables hot-reload                                          |
| `spyOn()`            | tracks how many times a function has been called             |
| `createSpyObjMethod` | Very important to mock dependencies                          |
| `beforeEach`         | Ideal place for initialization logic of tests (e.g. population variables) |
| x-[suite \| spec]    | disables                                                     |
| f-[suite \| spec]    | "focus"                                                      |

