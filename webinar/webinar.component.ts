import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent {

  webinars: any[] = [];
  filteredWebinars: any[] = [];
  regForm: any;

  // Filters
  selectedDates = [];
  selectedLocations = [];
  selectedModes = [];
  selectedPrices = [];

  dates = [];
  locations = [];
  prices = [];
  modes =[];

  constructor(private data: DataService,private fb: FormBuilder) {}

  ngOnInit() {
    this.webinars = this.data.webinars;
    this.filteredWebinars = this.webinars; // Initialize filteredCulturals with all culturals

    this.dates = Array.from(new Set(this.webinars.map(webinar => {
      let date = new Date(webinar.datetime);
      return date.toLocaleString('default', { month: 'long' });})));    
    this.locations = Array.from(new Set(this.webinars.map(webinar => webinar.location)));
    this.prices = Array.from(new Set(this.webinars.map(webinar => webinar.price)));
    this.modes = Array.from(new Set(this.webinars.map(webinar => webinar.mode)));

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
    if (this.selectedDates.length === 0 && this.selectedLocations.length === 0 && this.selectedPrices.length === 0 && this.selectedModes.length === 0) {
      return;
    }
  
    this.filteredWebinars = this.webinars.filter(webinar => 
      (this.selectedDates.length === 0 || this.selectedDates.includes(new Date(webinar.datetime).toLocaleString('default', { month: 'long' }))) &&
      (this.selectedLocations.length === 0 || this.selectedLocations.includes(webinar.location)) &&
      (this.selectedPrices.length === 0 || this.selectedPrices.includes(webinar.price))&&
      (this.selectedModes.length === 0 || this.selectedModes.includes(webinar.mode))  
    );
    window.scrollTo(0, 0);
  }
  
  clearFilters() {
    this.selectedDates = [];
    this.selectedLocations = [];
    this.selectedPrices = [];
    this.selectedModes =[];
    
    // Reset filteredCulturals to display all content
    this.filteredWebinars = this.webinars;
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

  onModeChange(mode: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedModes, mode, isChecked);
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

  isModeSelected(mode: string): boolean {
    return this.selectedModes.includes(mode);
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
  this.curr_cl = this.filteredWebinars.find(x=>x.name==cl.name);
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


