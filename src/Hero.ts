class Hero {
  private name: string;
  private age: number;
  private type: string;
  private types: Array<string>;

  constructor(name: string, age: number, type: string = "Mago") {
    this.name = name;
    this.age = age;
    this.types = ["Guerreiro", "Mago", "Monge", "Ninja"];
    this.type = type;
  }

  attack() {
    let attackType: string = "";
    this.types.forEach((i) => {
      if (this.getType() == i) {
        switch (this.getType()) {
          case "Guerreiro":
            attackType = "espada";
            break;
          case "Mago":
            attackType = "magia";
            break;
          case "Monge":
            attackType = "artes marciais";
            break;
          case "Ninja":
            attackType = "shuriken";
            break;
        }
      }
    });

    if (attackType.trim() != "") {
      console.log(`o tipo\x1b[1;32m **${this.getType()}**\x1b[1;37m atacou usando \x1b[1;32m**${attackType}**\x1b[1;37m`);
    }
  }

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  setType(type: string): void {
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getType(): string {
    return this.type;
  }

  getTypes(): Array<string> {
    return this.types;
  }
}

module.exports = Hero;