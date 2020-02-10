import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';



@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {

  profileFrom = this.fb.group({
    firstName: [ '', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
onSubmit() {
  console.warn(this.profileFrom.value);
}
updateProfile() {
  this.profileFrom.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
constructor(private fb: FormBuilder) {
}
get aliases() {
  return this.profileFrom.get('aliases') as FormArray;
}
addAlias() {
  this.aliases.push(this.fb.control(''));
}
}
