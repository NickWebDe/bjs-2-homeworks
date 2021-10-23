let parseCount = function (number) {
  let sum = Number.parseInt(number);
	if(Number.isNaN(sum)) {
		throw new Error('Невалидное значение')
    console.log('Есть')
	} return sum;
}

let validateCount = function(number) {
  try {
    return parseCount(number);
  } catch (err) {
    return err;
  }
}


class Triangle {

  constructor(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
  
  if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
    throw new Error('Треугольник с такими сторонами не существует')
  }
  }


  getPerimeter() {
    return this.a + this.b + this.c; 

  }

  getArea() {
    let p = this.getPerimeter() / 2;
    return Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
  } 
}

let getTriangle = function(a,b,c) {
    try {
      return new Triangle(a, b, c);
    } catch {
      return {
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует", 
      }
  }
}