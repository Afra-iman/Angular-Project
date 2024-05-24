import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  culturals: any[] = [];
  webinars: any[] = [];
  regForm: any;

  constructor(private data: DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.culturals = this.data.culturals;
    this.webinars = this.data.webinars;

    // Slice the first 6 elements
    this.culturals = this.culturals.slice(0, 3);
    this.webinars = this.webinars.slice(0, 3);

    this.regForm = this.fb.group({
      formData: this.fb.group({
        name: ['', { validators: Validators.required, updateOn: 'blur' }],
        email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
        contact: ['', { validators: [Validators.required, Validators.pattern('[0-9]{10}')], updateOn: 'blur' }],
        seats: ['',{validators: Validators.required, updateOn: 'blur' }],
    })
  })
  }
  display = "none";

  issubmitted = false;

  curr_cl;

  cname;

  seats = 1;

  total_fees = 0;

openModal(cl) {
  if (this.culturals.some(x => x.name == cl.name)) {
    this.curr_cl = this.culturals.find(x => x.name == cl.name);
  } else if (this.webinars.some(x => x.name == cl.name)) {
    this.curr_cl = this.webinars.find(x => x.name == cl.name);
  }  
  this.display = "block";
  this.seats = 1;
}
onCloseHandled() {
  this.display = "none";
  this.seats = 1;
  this.total_fees = 0;
  this.issubmitted = false;
}

isControlInvalid(form: FormGroup, controlName: string) {
  const control = form.get(controlName);
  return control.invalid && control.touched;
}

calc_fees() {
  let price = this.curr_cl.price;
 this.total_fees = Number.parseInt(price.substring(3,price.length-2)) * this.seats;
}

submitForm(): void {
  //alert('Thanks for registering!');
  const formData = this.regForm.get('formData') as FormGroup;

  let name = formData.get('name')?.value;
  let email = formData.get('email')?.value;
  let contact = formData.get('contact')?.value;
  let seats =formData.get('seats')?.value;

  this.cname = name;
  this.issubmitted = true;

  this.resetFormData();
}



resetFormData() {
const formData = this.regForm.get('formData') as FormGroup;
formData.reset();
}

}
