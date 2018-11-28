import { Injectable } from '@angular/core';

@Injectable()
export class ModDataService {
  primaryStats = {
    health: {
        old: 5.88,
        new: 16
    },
    defense: {
        old: 11.75,
        new: 20
    },
    critDamage: {
        old: 36,
        new: 42
    },
    critChance: {
        old: 12,
        new: 20
    },
    tenacity: {
        old: 24,
        new: 35
    },
    offense: {
        old: 5.88,
        new: 8.5
    },
    potency: {
        old: 24,
        new: 30
    },
    speed: {
        old: 30,
        new: 32
    },
    accuracy: {
        old: 12,
        new: 30
    },
    critAvoidance: {
        old: 24,
        new: 35
    },
    protection: {
        old: 23.5,
        new: 24
    }
  };

  secondaryStatModifiers = {
    health: 1.86,
    healthFlat: 1.26,
    defense: 2.34,
    defenseFlat: 1.63,
    critChance: 1.04,
    tenacity: 1.33,
    offense: 3.02,
    offenseFlat: 1.10,
    potency: 1.33,
    speedFlat: 1.03,
    protection: 1.33,
    protectionFlat: 1.11
  };

  setBonuses = {
    health: {
        old: '2.5% (5%)',
        new: '5% (10%)'
    },
    defense: {
        old: '2.5% (5%)',
        new: '12.5% (25%)'
    },
    critDamage: {
        old: '15% (30%)',
        new: '15% (30%)'
    },
    critChance: {
        old: '2.5% (5%)',
        new: '4% (8%)'
    },
    tenacity: {
        old: '5% (10%)',
        new: '10% (20%)'
    },
    offense: {
        old: '5% (10%)',
        new: '7.5% (15%)'
    },
    potency: {
        old: '5% (10%)',
        new: '7.5% (15%)'
    },
    speed: {
        old: '5% (10%)',
        new: '5% (10%)'
    }
  };
  constructor() {}
}
