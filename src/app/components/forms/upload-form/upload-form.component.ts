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
    description: ['', [Validators.required, Validators.minLength(5)]],
    import: ['', Validators.required ],
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
    this.user = this.userService.user;
    // Recupération des données à l'initialisation
    this.buildForm.patchValue({
            title: this.data.title,
            description: this.data.description,
            import: '',
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
    fd.append('description', this.buildForm.get('description').value);
    fd.append('import', this.selectedFile);
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

  onReset() {
    this.buildForm.markAsUntouched();
    this.buildForm.reset();
  }
}

