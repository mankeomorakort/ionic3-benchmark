import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response} from '@angular/http';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild("baseChart") pieChartEl: BaseChartDirective;
  
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';

  constructor(public navCtrl: NavController, public http: Http) {

  }
  
  ionViewDidLoad() {
    this.updateData();
  }

  public updateData() {
    this.http.get("/assets/datas.json").subscribe((res: Response) => {
          let jsons = res.json();
          let data = jsons[0];
          this.doughnutChartLabels.push("pos_percent");
          this.doughnutChartLabels.push("neg_percent");

          this.doughnutChartData.push(data.pos_percent);
          this.doughnutChartData.push(data.neg_percent);

          console.log(this.doughnutChartLabels);
          console.log(this.doughnutChartData);

          if(this.pieChartEl !== undefined){
            this.pieChartEl.ngOnDestroy();
            this.pieChartEl.chart = this.pieChartEl.getChartBuilder(this.pieChartEl.ctx);
          }
      });
  }
}
