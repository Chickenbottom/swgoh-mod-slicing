import { Component, OnInit } from '@angular/core';
import { ModServiceService } from '../../services/mod-service.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-stat-selection',
  templateUrl: './stat-selection.component.html',
  styleUrls: ['./stat-selection.component.css']
})
export class StatSelectionComponent implements OnInit {
  primaryDropdown = [];
  secondaryDropdown = [];
  isEditing = false;
  primarySelection;
  modChange;
  mod;
  constructor(
    private modServiceService: ModServiceService
  ) { }

  ngOnInit() {
    _.forEach(this.modServiceService.getPrimaryKeys(), key => {
      this.primaryDropdown.push(_.startCase(key));
    });
    _.forEach(this.modServiceService.getSecondaryKeys(), key => {
      this.secondaryDropdown.push(_.startCase(key));
    });
    this.primaryDropdown = this.primaryDropdown.sort();
    this.secondaryDropdown = this.secondaryDropdown.sort();

    this.modChange = this.modServiceService.getModStatsSubject();
    this.modChange.subscribe(currentModStats => {
      this.isEditing = true;
      this.mod = currentModStats;
    });
    this.mod = this.modServiceService.getCurrentMod();
  }

  setStat(objectKey: string, selection: string): void {
    this.modServiceService.setStat(objectKey, selection);
    this.primarySelection = { stat: objectKey, value: selection };
  }


  setSecondaryStat(currentObject: Object, selectionName: string): void {
    currentObject['name'] = selectionName;
    this.modServiceService.calculate();
  }

  calculate(currentStat: Object): void {
    currentStat['old'] = _.replace(currentStat['old'], new RegExp(/[^0-9.]/g), '');
    this.modServiceService.calculate();
  }

  formatValue(stat: Object): string {
    return this.modServiceService.formatValue(stat);
  }

  isValidMod(): boolean {
    let isValid = true;
    if (_.isNil(this.mod['primary']['new'])) {
      return false;
    }
    _.forEach(this.mod['secondaryStats'], secondary => {
      if (_.isNil(secondary['new'])) {
        isValid = false;
      } else if (_.isNaN(secondary['new']) || secondary['new'] <= 0) {
        isValid = false;
      }
    });

    return isValid;
  }

  createModCard(): void {
    this.modServiceService.addToModList();
  }

  buttonAction(): void {
    this.isEditing ? this.modServiceService.setNewModStats() : this.createModCard();
  }

  getButtonName(): string {
    return this.isEditing ? 'Finish Edit' : 'Add Mod';
  }
}
