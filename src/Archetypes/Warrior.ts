import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static qt = 0;

  constructor(name: string) {
    super(name);
    Warrior.qt += 1;
  }

  energyType: EnergyType = 'stamina';

  static createdArchetypeInstances = (): number => Warrior.qt;
}