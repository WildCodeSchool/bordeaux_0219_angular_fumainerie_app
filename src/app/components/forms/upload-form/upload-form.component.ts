import { User } from './../../../shared/models/user';
import { DocumentsService } from './../../../shared/services/documents.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  @Input() isModalVisible: boolean;
  hide = true;
  formSubmitted = false;
  selectedFile: File;
  id: number;
  fileName: string;
  user: User;

  libelle = 'Valider';
  isCreation = true;

  // Création du FormGroup
  buildForm = this.fb.group({
    title: ['', Validators.required],
    duration: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    link1: ['', Validators.required],
    link2: ['', Validators.required],
    link3: [''],
    link4: [''],
    link5: [''],
    link6: [''],
    description: ['', [Validators.required, Validators.minLength(5)]],
    importOne: ['', Validators.required ],
    importTwo: ['', Validators.required ],
  });

  constructor(
              private documentsService: DocumentsService,
              private userService: UserService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              public dialogRef: MatDialogRef<DocumentsService>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.user = this.userService.user1;
    // Recupération des données à l'initialisation
    this.buildForm.patchValue({
            title: this.data.title,
            duration: this.data.duration,
            link1: this.data.link1,
            link2: this.data.link2,
            link3: this.data.link3,
            link4: this.data.link4,
            link5: this.data.link5,
            link6: this.data.link6,
            description: this.data.description,
            importOne: '',
            importtwo: '',
            id: this.data.id
    });

    if (this.data.id) {
      this.libelle = 'Modifier';
      this.isCreation =  false;
    }
  }

// Getter
  get f() {
    return this.buildForm.controls;
  }


  // Selection des fichiers à uploaddata
  onFileSelect(event) {
    this.selectedFile = event.target.files as File;
    this.fileName = event.target.files.name;
  }



  // Soumission et Modification du Formulaire
    onFormSubmit() {
    this.formSubmitted = true;

    const fd = new FormData();
    fd.append('title', this.buildForm.get('title').value);
    fd.append('duration', this.buildForm.get('duration').value);
    fd.append('link1', this.buildForm.get('link1').value);
    fd.append('link2', this.buildForm.get('link2').value);
    fd.append('link3', this.buildForm.get('link3').value);
    fd.append('link4', this.buildForm.get('link4').value);
    fd.append('link5', this.buildForm.get('link5').value);
    fd.append('link6', this.buildForm.get('link6').value);
    fd.append('description', this.buildForm.get('description').value);
    fd.append('userSupport', this.selectedFile[0]);
    fd.append('kulteurSupport', this.selectedFile[0]);
    if (this.id) {
      fd.append('id', this.id.toString() );
    }


    let save$;
    if (this.isCreation) {
      save$ = this.documentsService.create(fd);
    } else {
      save$ = this.documentsService.update(Number(fd.get('id')), fd);
    }

    save$.subscribe((result) => this.dialogRef.close(result));
  }

  // Reset le Formulaire
  onReset() {
    this.buildForm.markAsUntouched();
    this.buildForm.reset();
  }
}

