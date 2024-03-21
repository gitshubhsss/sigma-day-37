const student={
    name:"shubham",
    marks:84,
    pass:this,
    getName:()=>{
       console.log(this.name);
    }
}
console.log(student.getName());