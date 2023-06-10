import Race from './Race';

class Halfling extends Race {
  static qt = 0;
  private lifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.qt += 1;
  }

  override get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances = (): number => {
    const numero = Halfling.qt;
    return numero;
  };
}

export default Halfling;
