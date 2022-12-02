
const f33 = {instructor: "Jared", mentor: "Benjamin", students: ["Julia", "Scotty", "Taylor"]};

console.log(f33);

for(let i=0; i<f33.students.length; i++){
  if(f33.students[i] === "Scotty"){
    f33.students[i] = "Scott"
  }
}

console.log(f33.students)