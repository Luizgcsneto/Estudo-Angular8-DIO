import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterBy: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.Courses = this.courseService.retrieveAll();
    this.filteredCourses = this.Courses;

  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this.Courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
}

get filter() {
  return this._filterBy;
}

}
