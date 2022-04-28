import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'her-heath-history',
  templateUrl: './heath-history.component.html',
  styleUrls: ['./heath-history.component.scss'],
})
export class HeathHistoryComponent implements OnInit, AfterViewInit {
  constructor() {
    this.conditions = ['Cataracts'];
    this.selectedConditions = [];
    this.yesNo = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];
    this.selectedBTs = [];
    this.selectedPMHs = [];
    this.bleedingTendencies = [
      { name: 'Aspirin', id: 'bt-aspirin' },
      { name: 'Plavix', id: 'bt-plavix' },
      { name: 'Bleeding Disorder', id: 'bt-bleedingdisorder' },
    ];
    this.pastMedicalHistories = [
      { name: 'Diabetes', id: 'pmh-diabetes' },
      { name: 'COPD', id: 'pmh-copd' },
      { name: 'Hypertension (HTN)', id: 'pmh-htn' },
      { name: 'Coronary Artery Disease (CAD)', id: 'pmh-cad' },
      { name: 'Peripheral Vascular Disease (PVD)', id: 'pmh-pvd' },
      { name: 'Congestive Heart Failure (CHF)', id: 'pmh-chf' },
      { name: 'Hypothyroidism', id: 'pmh-hypothyroidism' },
    ];
    this.pastSurgeries = [];
    this.pastFamilyConditions = [];
    this.physicalExam = [
      { label: 'Vital Signs', checked: false },
      { label: 'Neurological', checked: false },
      { label: 'Head & Neck', checked: false },
      { label: 'Mouth & Throat', checked: false },
      { label: 'Breast', checked: false },
      { label: 'Heart', checked: false },
      { label: 'Lungs', checked: false },
      { label: 'Abdomen', checked: false },
      { label: 'Extremities', checked: false },
      { label: 'Gu/Reproductive', checked: false },
      { label: 'Rectal', checked: false },
      { label: 'Lab/EKG Results', checked: false },
      { label: 'X-Ray Results', checked: false },
    ];
  }

  @ViewChild('heart1', { read: ElementRef }) heart1: ElementRef;
  @ViewChild('heart2', { read: ElementRef }) heart2: ElementRef;

  conditions: string[];
  selectedConditions: string[];
  yesNo: any[];
  bleedingTendencies: any[];
  selectedBTs: string[];
  selectedPMHs: string[];
  pastMedicalHistories: any[];
  allergy: any;
  sickleCell: any;
  pastSurgeries: any[];
  pastFamilyConditions: any[];
  physicalExam: any[];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.heart1.nativeElement.firstChild.classList.add('fa-beat');
    this.heart2.nativeElement.firstChild.classList.add('fa-beat');
  }

  setWidth(ele: any) {
    let width = ele.style.width;
    ele.style.width = !width || width == '0px' ? '100%' : '0px';
  }
}
