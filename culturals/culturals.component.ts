import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-culturals',
  templateUrl: './culturals.component.html',
  styleUrls: ['./culturals.component.css']
})
export class CulturalsComponent implements OnInit {
  culturals: any[] = [];
  filteredCulturals: any[] = [];
  regForm: any;

  // Filters
  selectedDates = [];
  selectedLocations = [];
  selectedPrices = [];

  dates = [];
  locations = [];
  prices = [];

  constructor(private data: DataService,private fb: FormBuilder) {}

  ngOnInit() {
    this.culturals = this.data.culturals;
    this.filteredCulturals = this.culturals; // Initialize filteredCulturals with all culturals

    this.dates = Array.from(new Set(this.culturals.map(cultural => {
      let date = new Date(cultural.datetime);
      return date.toLocaleString('default', { month: 'long' });})));    
    this.locations = Array.from(new Set(this.culturals.map(cultural => cultural.location)));
    this.prices = Array.from(new Set(this.culturals.map(cultural => cultural.price)));

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
    if (this.selectedDates.length === 0 && this.selectedLocations.length === 0 && this.selectedPrices.length === 0) {
      return;
    }
  
    this.filteredCulturals = this.culturals.filter(cultural => 
      (this.selectedDates.length === 0 || this.selectedDates.includes(new Date(cultural.datetime).toLocaleString('default', { month: 'long' }))) &&
      (this.selectedLocations.length === 0 || this.selectedLocations.includes(cultural.location)) &&
      (this.selectedPrices.length === 0 || this.selectedPrices.includes(cultural.price))
    );
    window.scrollTo(0, 0);
  }
  
  clearFilters() {
    this.selectedDates = [];
    this.selectedLocations = [];
    this.selectedPrices = [];
    
    // Reset filteredCulturals to display all content
    this.filteredCulturals = this.culturals;
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

  isDateSelected(date: string): boolean {
    return this.selectedDates.includes(date);
  }
  
  isLocationSelected(location: string): boolean {
    return this.selectedLocations.includes(location);
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
  this.curr_cl = this.filteredCulturals.find(x=>x.name==cl.name);
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
  if (this.curr_cl) {
    let price = this.curr_cl.price;
    this.total_fees = Number.parseInt(price.substring(3,price.length-2)) * this.seats;
  }
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
