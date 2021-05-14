import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { JobResponse } from '../../interfaces/job-response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  forma: FormGroup;

  jobs: JobResponse[] = [];

  fieldsModal: any = { };

  desc: string;
  location: string;
  check: boolean;

  search: boolean;
  activeModal: boolean;
  showBtn: boolean;

  enable = true;

  loading: boolean;

  constructor( private fb: FormBuilder,
               private jobService: JobsService) {
            this.crearFormulario();
            this.listeners();
            this.showBtn = false;
            this.loading = true;
  }


  ngOnInit(): void {
    this.loadJobs();
    this.search = false;
  }

  crearFormulario(): void {
    this.forma = this.fb.group({
      descripcion : [],
      location    : [],
      fullTime    : []
    });

  }

  guardar(): void {

   this.desc     = this.forma.controls.descripcion.value || '';
   this.location = this.forma.controls.location.value || this.fieldsModal.location || '';
   this.check    = this.forma.controls.fullTime.value || this.fieldsModal.fullTime || false;


   if ( this.desc.length > 0 || this.location.length > 0 || this.check === true ) {
      this.search = true;
   }

   this.jobService.resetPage();

   // Reset modal fields
   this.fieldsModal.location = '';
   this.fieldsModal.fullTime = '';

   this.loadJobs();

  }

  listeners(): void {
    this.forma.valueChanges.subscribe( valor => {
      this.enable = false;
    });
  }

  loadJobs(): void {

    if ( this.search ) {

      if ( this.jobService.searchPage === 1 ) {

        this.jobs = [];
        this.showBtn = true;

      }

      this.searchJobs( this.desc, this.location, this.check.toString());

    } else  {

      this.allJobs();

    }

  }


  // Get data when you search a position
  searchJobs( desc: string, location: string, check: string): void {

    console.log(desc);
    this.jobService.searchJobs( desc, location, check).subscribe( jobRes => {
      this.loading = true;
      console.log(jobRes);
      if ( jobRes.length === 0 ) {
        this.loading = false;
        this.showBtn = false;
        this.jobService.resetPage();
        console.log('Ya no tengo nada que mostrar', jobRes);
        return;

      }

      this.jobs.push(...jobRes);
      this.loading = false;
    });
  }

  // Get all jobs
  allJobs(): void {
    this.jobService.getJobs().subscribe( jobsRes => {
      console.log(jobsRes);
      this.loading = true;
      this.jobs.push(...jobsRes);
      this.showBtn = true;
      this.loading = false;
    });
  }


  // Actived Modal

  activeM(): void {
    this.activeModal = true;
    console.log(this.activeModal);
  }


  ngOnDestroy(): void {
    this.jobService.resetPage();
  }

}
