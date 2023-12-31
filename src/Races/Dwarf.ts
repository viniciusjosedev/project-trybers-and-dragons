import Race from './Race';

class Dwarf extends Race {
  static qt = 0;
  private lifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.qt += 1;
  }

  override get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances = (): number => {
    const numero = Dwarf.qt;
    return numero;
  };
}

export default Dwarf;
