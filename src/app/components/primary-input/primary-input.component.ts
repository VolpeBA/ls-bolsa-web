import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true
    }
  ],
  template: `
    <div class="input-wrapper">
      <label [for]="inputName">{{ label }}</label>
      <div class="input-content">
        <input
          [type]="type"
          [placeholder]="placeholder"
          [value]="value"
          (input)="onInput($event)"
        />
        <div class="icon">
          <ng-content></ng-content>
        </div>
      </div>
    </div>

  `,
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {}

}
