function ClassDecorator(constructorDecorator: Function) {
    constructorDecorator.prototype.runs = 26000;
  }
   
  @ClassDecorator
  class Cricketer {
    constructor(public c_name: string) {}
  }
   
  const crktr = new Cricketer('Virat Kohli');
  console.log(crktr.c_name, crktr.runs);