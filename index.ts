const Hero = require("./src/Hero");

let TheHero: InstanceType<typeof Hero>;

(async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const name = await new Promise(resolve => {
    readline.question("Favor, inserir o nome do Aventureiro:\n", resolve);
  });

  console.log();

  const age = await new Promise(resolve => {
    readline.question("Favor, inserir a idade do Aventureiro:\n", resolve);
  });

  console.log();

  TheHero = new Hero(name, age);

  readline.close();

  const types = TheHero.getTypes();
  TheHero.setType(types[Math.floor(Math.random() * 3)]);

  TheHero.attack();
})();
