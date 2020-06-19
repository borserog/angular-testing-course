import {CoursesService} from './courses.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {COURSES} from '../../../../server/db-data';


describe('CoursesService', () => {

  let coursesService: CoursesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    // Mocks and ngModule for testing purposes
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CoursesService
      ]
    });

    // initializes instances of the service and controller
    coursesService = TestBed.get(CoursesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should retrieve all courses', () => {

    coursesService.findAllCourses()
      .subscribe(courses => {
        // always checks for values that need to exist in a given context;
        expect(courses).toBeTruthy('No courses returned');

        expect(courses.length).toBe(12,
          'incorrect number of courses');

        // checks for a specific characteristic of the data
        const courseCheck = courses.find((course) => {
          return course.id === 12;
        });

        expect(courseCheck.titles.description).toBe('Angular Testing Course');
      });

    const req = httpTestingController.expectOne('/api/courses');

    expect(req.request.method).toEqual('GET');

    // Method that resolves the request;
    req.flush({ payload: Object.values(COURSES)});
  });

  it('should find a course by id', () => {

    coursesService.findCourseById(12)
      .subscribe(course => {
        expect(course).toBeTruthy();
        expect(course.id).toBe(12);
      });

    const req = httpTestingController.expectOne('/api/courses/12');

    expect(req.request.method).toEqual('GET');

    req.flush(COURSES[12]);
  });

  it('should save the course data', () => {
    pending();
  });

  it('should give an error if save course fails', () => {
    pending();
  });

  it('should find a list of lessons', () => {
    pending();
  });


  afterEach(() => {
    httpTestingController.verify();
  });



});
