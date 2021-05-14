import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobResponse } from '../../interfaces/job-response';

@Component({
  selector: 'app-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.scss']
})
export class JobsGridComponent implements OnInit {

  color = '';
  @Input() jobs: JobResponse[] = [];

  constructor( private route: Router) {
  }

  ngOnInit(): void {
    // console.log(this.color);

  }

  viewJob( id: string ): void {
    // console.log(id);
    this.route.navigate(['/detail', id]);
  }

}
