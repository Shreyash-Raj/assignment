import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variables for Course View 
  NewCourseInputView : boolean    = false;
  NewCourseInput : string         = "";
  SelectedCourseFromList : string = "";
  CourseList : Array<string>      = [];

  // Variables for Student View
  NewStudentInputView : boolean   = false;
  StudentView : boolean           = false;
  NewStudentInput : string        = "";
  SelectedStudent : string        = "";
  StudentList : Array<string>     = [];
  MapCourseWithStudent = new Map<string, Array<string>>();
  

  // Methods Pertaining to Course View
  AddNewCourseFun(){
    this.NewCourseInputView = true;
    this.StudentView = false;
  }

  CourseAcceptFun(){
    if(this.NewCourseInput!=""){
      this.CourseList.push(this.NewCourseInput);
      this.SelectedCourseFromList = this.NewCourseInput;
      this.NewCourseInput = "";
    }
    this.NewCourseInputView = false;
  }

  CourseRejectFun(){
    this.NewCourseInputView = false;
    this.NewCourseInput = "";
  }

  // Methods Pertaining to Student View
  StudentViewDisplay(){
    if(this.SelectedCourseFromList!=""){
      this.StudentView = true;
      var temp = this.MapCourseWithStudent.get(this.SelectedCourseFromList);
      if(temp){
        this.StudentList = temp;
      }
      else {
        this.StudentList = [];
      }
    }
  }

  StudentAcceptFun(){
    if(this.NewStudentInput!=""){
      var PrevCourseList = this.MapCourseWithStudent.get(this.SelectedCourseFromList);
      if(PrevCourseList){
        PrevCourseList.push(this.NewStudentInput);
        this.MapCourseWithStudent.set(this.SelectedCourseFromList, PrevCourseList);
        this.StudentList = PrevCourseList;
      }
      else{
        this.StudentList.push(this.NewStudentInput);
        this.MapCourseWithStudent.set(this.SelectedCourseFromList, this.StudentList);
      }
    }
    this.SelectedStudent = this.NewStudentInput;
    this.NewStudentInputView = false;
    this.NewStudentInput = "";
  }


  StudentRejectFun(){
    this.NewStudentInputView = false;
    this.NewStudentInput = "";
  }


}
