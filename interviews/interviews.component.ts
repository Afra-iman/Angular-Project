import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  roles: any[] = [];
  filteredRoles: any[] = [];
  regForm: any;

  // Filters
  selectedRoles = [];
  selectedSalaries = [];
  selectedLocations = [];
  selectedExperiences = [];
  selectedSkills = [];

  salaries = [];
  locations = [];
  experiences = [];
  skills = [];

  constructor(private data: DataService,private fb: FormBuilder) {}

  ngOnInit() {
    this.roles = this.data.roles;
    this.filteredRoles = this.roles; // Initialize filteredRoles with all roles

    this.salaries = Array.from(new Set(this.roles.map(role => role.salary)));
    this.locations = Array.from(new Set(this.roles.map(role => role.location)));
    this.experiences = Array.from(new Set(this.roles.map(role => role.experience)));
    this.skills = Array.from(new Set(this.roles.flatMap(role => role.skills.split(','))));

    this.regForm = this.fb.group({
      formData: this.fb.group({
        name: ['', { validators: Validators.required, updateOn: 'blur' }],
        email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
        contact: ['', { validators: [Validators.required, Validators.pattern('[0-9]{10}')], updateOn: 'blur' }],
    })
  })
  }
  applyFilters() {
    // If no filter is selected, return immediately
    if (
        this.selectedSalaries.length === 0 && this.selectedLocations.length === 0 &&
        this.selectedExperiences.length === 0 && this.selectedSkills.length === 0) {
      return;
    }

    this.filteredRoles = this.roles.filter(role => 
      (this.selectedLocations.length === 0 || this.selectedLocations.includes(role.location)) &&
      (this.selectedSalaries.length === 0 || this.selectedSalaries.includes(role.salary)) &&
      (this.selectedRoles.length === 0 || this.selectedRoles.includes(role.role)) &&
      (this.selectedExperiences.length === 0 || this.selectedExperiences.includes(role.experience)) &&
      (this.selectedSkills.length === 0 || role.skills.split(',').some(skill => this.selectedSkills.includes(skill.trim()))));
      window.scrollTo(0, 0);
    }

  clearFilters() {
    this.salaries.forEach(salary => {
      this.onSalaryChange(salary, false);
    });
    this.locations.forEach(location => {
      this.onLocationChange(location, false);
    });
    this.experiences.forEach(experience => {
      this.onExperienceChange(experience, false);
    });
    this.skills.forEach(skill => {
      this.onSkillChange(skill, false);
    });

    // Reset filteredRoles to display all content
    this.filteredRoles = this.roles;
    window.scrollTo(0, 0);
  }

  // Filter change handlers

  onRoleChange(role: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedRoles, role, isChecked);
  }
  
  onSalaryChange(salary: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedSalaries, salary, isChecked);
  }
  
  onLocationChange(location: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedLocations, location, isChecked);
  }
  
  onExperienceChange(experience: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedExperiences, experience, isChecked);
  }
  
  onSkillChange(skill: string, isChecked: boolean) {
    this.updateSelectedFilters(this.selectedSkills, skill, isChecked);
  }

  isSalarySelected(salary: string): boolean {
    return this.selectedSalaries.includes(salary);
  }
  isLocationSelected(location: string): boolean {
    return this.selectedLocations.includes(location);
  }
  
  isExperienceSelected(experience: string): boolean {
    return this.selectedExperiences.includes(experience);
  }
  
  isSkillSelected(skill: string): boolean {
    return this.selectedSkills.includes(skill);
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
  this.curr_cl = this.filteredRoles.find(x=>x.company==cl.company&&x.role==cl.role&&x.location==cl.location&&x.salary==cl.salary);
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
  this.issubmitted = false;
}

isControlInvalid(form: FormGroup, controlName: string) {
  const control = form.get(controlName);
  return control.invalid && control.touched;
}

// calc_fees() {
//   let price = this.curr_cl.price;
//  this.total_fees = Number.parseInt(price.substring(3,price.length-2)) * this.seats;
// }

submitForm(): void {
  //alert('Thanks for registering!');
  const formData = this.regForm.get('formData') as FormGroup;

  let name = formData.get('name')?.value;
  let email = formData.get('email')?.value;
  let contact = formData.get('contact')?.value;
  // let seats =formData.get('seats')?.value;

  this.cname = name;
  this.issubmitted = true;

  this.resetFormData();
}



resetFormData() {
const formData = this.regForm.get('formData') as FormGroup;
formData.reset();
}
}
