import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statsForm = new FormGroup({
    PPG: new FormControl(''),
    RPG: new FormControl(''),
    APG: new FormControl(''),
    SPG: new FormControl(''),
    BPG: new FormControl(''),
    MissedFG: new FormControl(''),
    MissedFT: new FormControl(''),
    TO: new FormControl(''),
  });
  filterNull(num: number | null | string | undefined): number{
    //If a number is null, return 0, otherwise return the number
    if (typeof(num) === "string"){
      num = parseInt(num);
    }
    if (num == null || num === undefined) {
      return 0;
    } else{
      return num;
    }
  }
  calculateEff(PTS?: number | null | string, REB?: number | null | string, AST?: number | null | string, STL?: number | null | string, BLK?: number | null | string, Missed_FG?: number | null | string, Missed_FT?: number | null | string, TO?: number | null | string){
    return this.filterNull(PTS) + this.filterNull(REB) + this.filterNull(AST) + this.filterNull(STL) + this.filterNull(BLK) - this.filterNull(Missed_FG) - this.filterNull(Missed_FT) - this.filterNull(TO)
  }

  onSubmit() {
    //console.log(this.statsForm.value.PPG);
    var eff = this.calculateEff(this.statsForm.value.PPG, this.statsForm.value.RPG, this.statsForm.value.APG, this.statsForm.value.SPG, this.statsForm.value.BPG, this.statsForm.value.MissedFG, this.statsForm.value.MissedFT, this.statsForm.value.TO)
    alert(`This player's efficiency rating is: ${eff}`)
  }
}
