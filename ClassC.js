class C {
  constructor() {
    this.C1 = ""; // atributo String C1
    this.C2 = 0; // atributo int C2
  }

  // Getter para C1
  getC1() {
    return this.C1;
  }

  // Setter para C1
  setC1(value) {
    this.C1 = value;
  }

  // Getter para C2
  getC2() {
    return this.C2;
  }

  // Setter para C2
  setC2(value) {
    this.C2 = value;
  }

  // Método MC1
  MC1() {
    console.log("Método MC1");
  }

  // Método MC2
  MC2() {
    console.log("Método MC2");
  }
}

// Exemplo de uso das classes A e C
const instanceA = new A();
const instanceC = new C();

instanceA.setA1(10);
instanceA.setA2(3.14);

console.log("A1:", instanceA.getA1());
console.log("A2:", instanceA.getA2());

instanceA.MA1();
instanceA.MA2();
instanceA.MA3(); // Adicionado método MA3()

instanceC.setC1("Texto de exemplo");
instanceC.setC2(42);

console.log("C1:", instanceC.getC1());
console.log("C2:", instanceC.getC2());

instanceC.MC1();
instanceC.MC2();
