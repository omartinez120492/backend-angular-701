import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: ``
})
export class CreateComponent {

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      nombre: ['Omar', [Validators.minLength(3), Validators.required]],
      apellido_paterno: ['', [Validators.minLength(3), Validators.required]],
      apellido_materno: ['', [Validators.minLength(3), Validators.required]],
      edad: [18, [Validators.min(18), Validators.required]],
      email: ['', [Validators.email]]
    });

  }



  public isValidField( field:string  ): boolean | null {
    return this.userForm.controls[field].errors && this.userForm.controls[field].touched;
  }

  public getErrorsField( field: string ): string | null {
    if( !this.userForm.controls[field] ) return '';
    const errores = this.userForm.controls[field].errors || {};
    for( const property of Object.keys(errores) ){
      switch(property){
        case 'required':
          return 'Campo requerido'
        case 'minlength':
          return `Tamaño mínimo requerido es: ${ errores['minlength'].requiredLength }`
        case 'min':
          return `Edad mínima ${errores['min'].min}`
      }
    }
    return '';
  }


  public saveUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return console.log('El formulario no es valido');
    }
    //TODO: enviarlo al backend
    console.log('backend ')
  }



}
