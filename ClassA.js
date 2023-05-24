class A {
  constructor() {
    this.A1 = 0; // atributo int A1
    this.A2 = 0.0; // atributo float A2
  }

  // Getter para A1
  getA1() {
    return this.A1;
  }

  // Setter para A1
  setA1(value) {
    this.A1 = value;
  }

  // Getter para A2
  getA2() {
    return this.A2;
  }

  // Setter para A2
  setA2(value) {
    this.A2 = value;
  }

  // Método MA1
  MA1() {
    console.log("Método MA1");
  }

  // Método MA2
  MA2() {
    console.log("Método MA2");
  }
}
