const course = {
    coursName: "js in hindi",
    price: "999",
    courseInstructor: "Human"
}

const {courseInstructor: instructor} = course
console.log(instructor);

// We can use {company} instead of props.company 
const navbar =({company}) =>{

}
navbar(company = "hitesh")

// JSON Format
// {
//     "name": "Human",
//     "coursname": "Javascript",
//     "price": "free"
// }