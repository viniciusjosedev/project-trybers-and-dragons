import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static qt = 0;

  constructor(name: string) {
    super(name);
    Ranger.qt += 1;
  }

  energyType: EnergyType = 'stamina';

  static createdArchetypeInstances = (): number => Ranger.qt;
}