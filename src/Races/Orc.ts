import Race from './Race';

class Orc extends Race {
  static qt = 0;
  private lifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.qt += 1;
  }

  override get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances = (): number => {
    const numero = Orc.qt;
    return numero;
  };
}

export default Orc;
