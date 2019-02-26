const { gql } = require("apollo-server-express");

const schema = gql`
  type Mutation {    

    createStudent(
        name: String!,
        email: String!,
        class: String!,
        birthday: String!
    ): NewUserResponse!,

    createCourse(
        description: String!,
        teacher: String!
    ): NewUserResponse!,

    createGrade(
        grade: Int!,
        studentId: ID!,
        courseId: ID!
    ): NewUserResponse!,

    updateStudent(
        id: ID!,
        name: String!,
        email: String!,
        class: String!,
        birthday: String!
    ): NewUserResponse!,

    updateCourse(
        id: ID!,
        description: String!,
        teacher: String!
    ): NewUserResponse!,

    updateGrade(
        id: ID!,
        grade: Int!
    ): NewUserResponse!
  }

  type Query {

    student(id: ID!) : Student,
    students: [Student!]!,

    course(id: ID!) : Course,
    courses: [Course!]!,

    grade(
        studentId: ID!,
        courseId: ID!
        ) : Grade,
    grades: [Grade!]!,
  }

  type Student {
      id: ID!,
      name: String!,
      email: String!,
      class: String!,
      birthday: String!
  }

  type Course {
      id: ID!,
      description: String!,
      teacher: String!
  }

  type Grade {
      id: ID!,
      grade: Int!,
      student: Student,
      course: Course
  }

  type NewUserResponse {
    success: Boolean!    
  }
`;

module.exports = schema;