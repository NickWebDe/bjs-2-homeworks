function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let oleg = new Student('Олег', 'Male', 18);
let anton = new Student('Антон', 'Male', 22);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark)
  }
  
}

Student.prototype.addMarks = function (...args) {
    this.marks = args;
}

Student.prototype.getAverage = function () {
return this.marks.reduce((previousValue, currentValue) => previousValue + currentValue) / this.marks.length;
}

Student.prototype.exclude = function (reason)  {
  delete this.marks, this.subject;
  this.excluded = reason;
}
