abstract class Race {
  static qt = 0;

  constructor(readonly name: string, readonly dexterity: number) {}

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number; 
}

export default Race;
