// constraint - strict rules
// A constraint in TypeScript limits what kind of types can be passed to a generic type parameter.


interface Student {
    id: number;
    name: string;
}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
    return {
        course: 'Next Level',
        ...studentInfo
    }
}

const student1 = {
    id: 101,
    hasPen: false,
}
const student2 = {
    id: 501,
    hasCar: true,
    isMarried: true
}
const student3 = {
    id: 901,
    name: "extends",
    hasWatch: true
}
const result = addStudentToCourse(student3);
console.log(result)









