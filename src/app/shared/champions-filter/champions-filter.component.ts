import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

enum roleEnums {
  TodasFuncoes = 'Todas as Funções',
  Assassino = 'Assassinos',
  Atirador = 'Atiradores',
  Mago = 'Magos',
  Tanque = 'Tanques',
  Suporte = 'Suportes',
}

@Component({
  selector: 'app-champions-filter',
  templateUrl: './champions-filter.component.html',
  styleUrls: ['./champions-filter.component.scss']
})
export class ChampionsFilterComponent implements OnInit {

  @Input() public inputText!: string;
  @Output() public filterData: EventEmitter<any> = new EventEmitter();
  public options: string[] = Object.values(roleEnums);
  public form!: FormGroup;
  public selectedDifficulty!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.form.get('roleInput')?.setValue(roleEnums.TodasFuncoes);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      searchText: [''],
      roleInput: [''],
      dificultyInput: ['']
    });

    this.form.valueChanges.subscribe((data: any) => {
      this.selectedDifficulty = data.dificultyInput;
      this.filterData.emit(data);
    });
  }

  onCancel(event: Event) {
    event.stopPropagation();
    this.form.get('dificultyInput')?.setValue('');
  }
}