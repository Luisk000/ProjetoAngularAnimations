import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animations';
import { itemStateTrigger, listStateTrigger, markedTrigger, slideStateTrigger } from './animations';
import { Component, HostBinding, OnInit } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeSlideStateTrigger,
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;
  projects: Project[];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.unshift(project); //push
    }, 300)
  }
}
