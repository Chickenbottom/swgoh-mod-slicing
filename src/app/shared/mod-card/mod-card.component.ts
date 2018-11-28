import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { ModServiceService } from '../../services/mod-service.service';

@Component({
  selector: 'app-mod-card',
  templateUrl: './mod-card.component.html',
  styleUrls: ['./mod-card.component.css']
})
export class ModCardComponent implements OnInit {
  @Input() mod;

  constructor(
    private modServiceService: ModServiceService
  ) { }

  ngOnInit() {
    console.log('this.mod', this.mod);
  }

  capitalize(currentObject: Object): string {
    return _.isNil(currentObject['new']) ? '' : _.startCase(name);
  }

  formatValue(stat: Object): string {
    return this.modServiceService.formatValue(stat);
  }

  removeCard(): void {
    this.modServiceService.removeFromList(this.mod);
  }

  editCard(): void {
    this.modServiceService.setModStats(this.mod);
  }
}
