import Race from './Race';

class Elf extends Race {
  static qt = 0;
  private lifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.qt += 1;
  }

  override get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances = (): number => {
    const numero = Elf.qt;
    return numero;
  };
}

export default Elf;
