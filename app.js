//"this" keyward refers to an object that is excecuting the current piece of code 

let studentInfo={
    name:"shubham ranjane",
    rollNo:4044,
    marks:84,
    english:84,
    maths:39,
    average(){
        console.log(`avg of marks : ${this.marks + this.english + this.maths}`);
    } 
}
studentInfo.average();

