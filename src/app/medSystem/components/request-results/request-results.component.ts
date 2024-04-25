import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BaseService} from "../../../shared/services/base.service";
import {Results} from "../../model/results.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";




@Component({
  selector: 'app-request-results',
  templateUrl: './request-results.component.html',
  styleUrl: './request-results.component.css'
})
export class RequestResultsComponent {
  resultsList !:Results[];
  dataSource:any;
  displayedColumns = ["code","name","date","examType","result", "action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BaseService) {
    this.service.getResults().subscribe(res=>{
      this.resultsList = res;
      this.dataSource= new MatTableDataSource<Results>(this.resultsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  Filterchange(data:any){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
  isResultAvailable(result: string): boolean {
    return result.toLowerCase() === 'available';
  }
}
