import { Injectable } from '@angular/core';
import { ModDataService } from './mod-data.service';
import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModServiceService {
  modListUpdate: Subject<Object> = new Subject<Object>();
  modStatsSubject: Subject<Object> = new Subject<Object>();

  stats;
  primaryMods;
  setBonuses;
  secondaryStatsModifiers;

  constructor(
    private modDataService: ModDataService
  ) {
    this.resetStats();
    this.primaryMods = this.modDataService.primaryStats;
    this.setBonuses = this.modDataService.setBonuses;
    this.secondaryStatsModifiers = this.modDataService.secondaryStatModifiers;
  }

  resetStats(): void {
    this.stats = {
      primary: {
        name: 'Primary Stat',
        old: undefined,
        new: undefined
      },
      secondaryStats: [{
        name: 'Stat',
        old: undefined,
        new: undefined
      },
      {
        name: 'Stat',
        old: undefined,
        new: undefined
      },
      {
        name: 'Stat',
        old: undefined,
        new: undefined,
      },
      {
        name: 'Stat',
        old: undefined,
        new: undefined
      }]
    };
  }

  getModListUpdate(): Subject<Object> {
    return this.modListUpdate;
  }

  getModStatsSubject(): Subject<Object> {
    return this.modStatsSubject;
  }

  addToModList(): void {
    this.modListUpdate.next(_.cloneDeep({ action: 'add', mod: this.stats }));
    this.setNewModStats();
  }

  setNewModStats(): void {
    this.resetStats();
    this.modStatsSubject.next(this.stats);
  }

  setModStats(modStats: Object): void {
    this.stats = modStats;
    this.modStatsSubject.next(modStats);
  }

  getPrimaryKeys(): Array<string> {
    return _.keys(this.primaryMods, ['name']);
  }
  getSecondaryKeys(): Array<string> {
    return _.keys(this.secondaryStatsModifiers, ['name']);
  }

  setPrimaryValues(objectKey: string, selectionKey: string): void {
    this.stats[objectKey]['old'] = this.primaryMods[selectionKey]['old'];
    this.stats[objectKey]['new'] = this.primaryMods[selectionKey]['new'];
  }

  setStat(objectKey: string, selection: string): void {
    const selectionKey = _.camelCase(selection);
    this.stats[objectKey]['name'] = selection;
    this.setPrimaryValues(objectKey, selectionKey);
  }

  calculate(): void {
    _.forEach(this.stats.secondaryStats, secStat => {
      if (_.isEqual(_.camelCase(secStat.name), 'speedFlat')) {
        const oldValue = _.toNumber(secStat.old);
        if (_.isFinite(oldValue)) {
          secStat.new = _.isEqual(oldValue, 0) ? undefined : oldValue + 1;
        }
      } else if (!_.isNil(secStat.old) && !_.isNil(this.secondaryStatsModifiers[_.camelCase(secStat.name)])) {
        const oldValue = _.toNumber(secStat.old);
        const roundTo = _.includes(secStat.name, 'Flat') ? 0 : 2;
        secStat.new = _.round((oldValue * this.secondaryStatsModifiers[_.camelCase(secStat.name)]), roundTo);
      }
    });
  }

  setCurrentMod(Mod: Object): void {
    console.log('hello world');
  }

  getCurrentMod(): Object {
    return this.stats;
  }

  formatValue(stat: Object): string {
    const persent = _.includes(_.toLower(stat['name']), 'flat') ? '' : '%';

    return _.isNil(stat['new']) ? '' : `+ ${stat['new']}${persent}`;
  }

  removeFromList(currentMod: Object): void {
    this.modListUpdate.next({ action: 'remove', mod: currentMod });
  }
}
