import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static qt = 0;

  constructor(name: string) {
    super(name);
    Necromancer.qt += 1;
  }

  energyType: EnergyType = 'mana';

  static createdArchetypeInstances = (): number => Necromancer.qt;
}