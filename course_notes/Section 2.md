# Section 2

#### `TestBed.configureTestingModule()`

- It's a test module that contains an instance of our services;

- Import of `HttpClientTestingModule`:

  - provides the same methods of the "real" `HttpClient`;
  - will return test data;

- `HttpTestingController`:

  - > Controller to be injected into tests, that **allows for mocking and flushing of requests**.



#### Http Testing 

- Involves mocking Http requests;

- Only after calling the `flush()` method on the `HttpTestingController` object new values are emitted to a subscriber;



#### `httpTestingController.verify()`

- Verifies that no additional requests are issued by the service;
- Ideally places inside an `afterEach()` block:
  - that runs "after each" test spec separately;



#### Tips

- **Predicate Functions:** 

```javascript
const req = httpTestingController.expectOne(
            req => req.url == '/api/lessons');
```

Used to isolate the URL from its query parameters;

The body of an HTTP request only contains string, and not other types;



- Use of **utility functions** to return filtered data from the dataset;

