let courses = require('../data/courses');
let grades = require('../data/grades');
let students = require('../data/students');

const resolvers = {
    Query: {

        student: (parent, args, context, info) => {
            return students.find(x => x.id == args.id)  
        },
        students: (parent, args, context, info) => {
            return students;
        },

        course: (parent, args, context, info) => {
            return courses.find(x => x.id == args.id)
        },
        courses: (parent, args, context, info) => {
            return courses;
        },

        grade: (parent, args, context, info) => {
            return grades.find(x => x.student.id == args.studentId && x.course.id == args.courseId);
        },
        grades: (parent, args, context, info) => {        
            return grades;
        }
    },
  
    Mutation: {

        createStudent: (parent, args, context, info) => {
            let newStudent = {
                id: ((students.length)+1).toString(),
                name: args.name,
                email: args.email,
                class: args.class,
                birthday: args.birthday
            }
            students.push(newStudent);
            return {success: true};
        },

        createCourse: (parent, args, context, info) => {
            let newCourse = {
                id: ((courses.length)+1).toString(),
                description: args.description,
                teacher: args.teacher
            }
            courses.push(newCourse);
            return {success: true};
        },

        createGrade: (parents, args, context, info) => {
            let newGrade = {
                id: ((grades.length)+1).toString(),
                grade: args.grade,
                student: students.find(x => x.id == args.studentId),
                course: courses.find(x => x.id == args.courseId)
            }
            grades.push(newGrade);
            return {success: true};
        },

        updateStudent: (parents, args, context, info) => {

            let student = students.find(x => x.id == args.id);

            student.name = args.name,
            student.email = args.email,
            student.class = args.class,
            student.birthday = args.birthday

            return {success: true}
        },
        updateCourse: (parents, args, context, info) => {

            let course = courses.find(x => x.id == args.id);

            course.description = args.description;
            course.teacher = args.teacher;

            return {success: true}
        },
        updateGrade: (parents, args, context, info) => {

            let grade = grades.find(x => x.id == args.id);
            grade.grade = args.grade;

            return {success: true}
        }
    }
};

module.exports = resolvers;