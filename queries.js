Table Student {
    StudentID Integer [Primary Key]
    FirstName Varchar
    LastName Varchar
    Email Varchar
    DateOfBirth Date
    EnrollmentDate Date
  }
  
  Table Instructor {
    InstructorID Integer [Primary Key]
    FirstName Varchar
    LastName Varchar
    Email Varchar
  }
  
  Table Course {
    CourseID Integer [Primary Key]
    CourseName Varchar
    Description Text
    StartDate Date
    EndDate Date
  }
  
  Table ClassSession {
    SessionID Integer [Primary Key]
    CourseID Integer
    SessionDate Date
    StartTime Time
    EndTime Time
    Location Varchar
  }
  
  Table Enrollment {
    EnrollmentID Integer [Primary Key]
    StudentID Integer
    CourseID Integer
    EnrollmentDate Date
    Status Varchar
  }
  
  Table Task {
    TaskID Integer [Primary Key]
    CourseID Integer
    Title Varchar
    Description Text
    Deadline Date
  }
  
  Table Submission {
    SubmissionID Integer [Primary Key]
    TaskID Integer
    StudentID Integer
    SubmissionDate Date
    Content Text
    Status Varchar
  }
  
  Table PlacementPreparation {
    PreparationID Integer [Primary Key]
    StudentID Integer
    Topic Varchar
    Resources Text
    Status Varchar
  }
  
  Ref: "Enrollment"."StudentID" < "Student"."StudentID"
  Ref: "Enrollment"."CourseID" < "Course"."CourseID"
  Ref: "ClassSession"."CourseID" < "Course"."CourseID"
  //Ref: "Enrollment"."CourseID" < "Course"."CourseID"
  Ref: "Task"."CourseID" < "Course"."CourseID"
  Ref: "Submission"."TaskID" < "Task"."TaskID"
  Ref: "Submission"."StudentID" < "Student"."StudentID"
  Ref: "PlacementPreparation"."StudentID" < "Student"."StudentID"