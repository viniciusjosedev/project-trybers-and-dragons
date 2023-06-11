import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static qt = 0;

  constructor(name: string) {
    super(name);
    Mage.qt += 1;
  }

  energyType: EnergyType = 'mana';

  static createdArchetypeInstances = (): number => Mage.qt;
}