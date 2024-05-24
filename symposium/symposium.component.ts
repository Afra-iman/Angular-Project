
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-symposium',
  templateUrl: './symposium.component.html',
  styleUrls: ['./symposium.component.css']
})
export class SymposiumComponent implements OnInit {
  symposiums: any[] = [];
  filteredSymposiums: any[] = [];
  regForm: any;

  // Filters
  selectedDates = [];
  selectedLocations = [];
  selectedPrices = [];
  selectedDepts =[];

  dates = [];
  locations = [];
  prices = [];
  depts = [];

  constructor(private data: DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.symposiums = this.data.symposiums;
    this.filteredSymposiums = this.symposiums; // Initialize filteredCulturals with all culturals

    this.dates = Array.from(new Set(this.symposiums.map(symposium => {
      let date = new Date(symposium.date);
      return date.toLocaleString('default', { month: 'long' });})));    
    this.locations = Array.from(new Set(this.symposiums.map(symposium => symposium.location)));
    this.prices = Array.from(new Set(this.symposiums.map(symposium => symposium.price)));
    this.depts = Array.from(new Set(this.symposiums.flatMap(symposium => symposium.dept.split(','))));
    

    this.regForm = this.fb.group({
      formData: this.fb.group({
        name: ['', { validators: Validators.required, updateOn: 'blur' }],
        email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
        contact: ['', { validators: [Validators.required, Validators.pattern('[0-9]{10}')], updateOn: 'blur' }],
        seats: ['',{validators: Validators.required, updateOn: 'blur' }],
    })
  })
  }
  applyFilters() {
    // If no filter is selected, return immediately
    if (this.selectedDates.length === 0 && this.selectedLocations.length === 0 && this.selectedPrices.length === 0 && this.selectedDepts.length === 0) {
      return;
    }
  
    this.filteredSymposiums = this.symposiums.filter(symposium => 
      (this.selectedDates.length === 0 || this.selectedDates.includes(new Date(symposium.date).toLocaleString('default', { month: 'long' }))) &&
      (this.selectedLocations.length === 0 || this.selectedLocations.includes(symposium.location)) &&
      (this.selectedPrices.length === 0 || this.selectedPrices.includes(symposium.price)) &&
      (this.selectedDepts.length === 0 || symposium.dept.split(',').some(sy=>this.selectedDepts.includes(sy.trim()))));
      window.scrollTo(0, 0);
  }
  
  clearFilters() {
    this.selectedDates = [];
    this.selectedLocations = [];
    this.selectedPrices = [];
    this.selectedDepts =[];
    // Reset filteredCulturals to display all content
    this.filteredSymposiums = this.symposiums;
    window.scrollTo(0, 0);
  }
  

  // Filter change handlers
  onDateChange(date: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedDates, date, isChecked);
  }

  onLocationChange(location: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedLocations, location, isChecked);
  }

  onPriceChange(price: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedPrices, price, isChecked);
  }
  onDeptChange(dept: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedDepts, dept, isChecked);
  }

  isDateSelected(date: string): boolean {
    return this.selectedDates.includes(date);
  }
  
  isLocationSelected(location: string): boolean {
    return this.selectedLocations.includes(location);
  }

  isDeptSelected(dept: string): boolean {
    return this.selectedDepts.includes(dept);
  }
  
  isPriceSelected(price: string): boolean {
    return this.selectedPrices.includes(price);
  }
  

  private updateSelectedFilters(selectedFilters: string[], filter: string, isChecked: boolean) {
    if (isChecked) {
      selectedFilters.push(filter);
    } else {
      const index = selectedFilters.indexOf(filter);
      if (index > -1) {
        selectedFilters.splice(index, 1);
      }
    }
  }


  display = "none";

  issubmitted = false;

  curr_cl;

  cname;

  seats = 1;

  total_fees = 0;

openModal(cl) {
  this.curr_cl = this.filteredSymposiums.find(x=>x.title==cl.title);
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
