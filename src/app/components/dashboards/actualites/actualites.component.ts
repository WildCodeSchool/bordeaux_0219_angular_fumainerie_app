import { News } from './../../../shared/models/news';
import { UserService } from './../../../shared/services/user.service';
import { WitnessDeleteModalComponent } from '../../modals/witness-delete-modal/witness-delete-modal.component';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Witness } from './../../../shared/models/witness';
import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { NewsService } from './../../../shared/services/news.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  witness: Witness[];
  @Input() checked: boolean;
  status = new FormControl();
  user: User;
  news: News[];


  constructor(private newsService: NewsService,
              private witnessService: WitnessService,
              private dialog: MatDialog,
              private userService: UserService) { }

    ngOnInit() {
      this.user = this.userService.user1;
      if (this.user.function === 'admin') {
        this.witnessService.getAllWitness().subscribe((witness) => {
          this.witness = witness;
        });
        this.newsService.getAllNews().subscribe((news) => {
          this.news = news;
        });
      } else {
        this.witnessService.getValidedWitness().subscribe((witness) => {
          this.witness = witness;
      });
        this.newsService.getValidedNews().subscribe((news) => {
        this.news = news;
      });
    }
  }
  onChangeW(toggle, index: number) {
    console.log(toggle.checked);
    this.witness[index].status = toggle.checked;
    this.witnessService.modifyWitness(this.witness[index]).subscribe();
  }
  onAskDeleteWitness(index: number) {
    this.witnessService.index = index;
    const dialogRef = this.dialog.open(WitnessDeleteModalComponent, {
      width: '50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    // this.newsService.getAllNews().subscribe((news) => {
    //     this.news = news;
    //   });
    }

    // onActualitesForm() {
    //   this.onActualiteForm = !this.onActualiteForm;
    //   this.button = !this.button;
    // }
  }
