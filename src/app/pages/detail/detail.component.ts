import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { JobResponse } from '../../interfaces/job-response';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  job: JobResponse;
  loading: boolean;
  linkApply: string;


  constructor( private activatedRouter: ActivatedRoute,
               private jobService: JobsService ) {

    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.loading = true;
  }

  ngOnInit(): void {
    this.getJob( this.id );

  }

  getJob( id: string ): void {
    this.jobService.getJob( id ).subscribe( resJob => {
      this.job = resJob;


      

      this.generateLink( this.job.how_to_apply);
      this.loading = false;

    });
  }

  generateLink( link: string ): void {


    const linkArray = link.split(' ');

    linkArray.forEach( lin => {
        if ( lin.includes('href')) {

          const [, companyUrl] = lin.split('"');
          this.linkApply = companyUrl;

          console.log(' Este es el link perro ', this.linkApply);
        }
    });
  }


  validLink( link: string ): boolean {

    if (!link || link.length <= 5) {
      return true;
    }

    return false;
  }

}
