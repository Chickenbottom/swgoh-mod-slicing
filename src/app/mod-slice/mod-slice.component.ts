import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ModServiceService } from '../services/mod-service.service';

@Component({
  selector: 'app-mod-slice',
  templateUrl: './mod-slice.component.html',
  styleUrls: ['./mod-slice.component.css']
})
export class ModSliceComponent implements OnInit {
  mods = [];
  modListChange;
  constructor(
    private modServiceService: ModServiceService
  ) { }

  ngOnInit() {
    this.modListChange = this.modServiceService.getModListUpdate();
    this.modListChange.subscribe(item => {
      switch (item.action) {
        case 'add':
          this.mods.push(item.mod);
          break;
        case 'remove':
          _.remove(this.mods, mod => _.isEqual(mod, item.mod));
          break;
      }
    });
  }
}
