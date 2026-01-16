import {Component, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

type DatosDeEnvio = { email?: string, telefono?: string, password: string };

@Component({
    selector: 'app-login',
    imports: [
        ReactiveFormsModule,
        NgClass
    ],
    templateUrl: './login.html',
    styleUrl: './login.scss',
    standalone: true
})
export class Login {

    fnToggleLoginHeader = output();
    formLogin: FormGroup;
    registerForm: FormGroup;
    esCorreo: boolean = true;
    esLogin: boolean = true;

    constructor(private formBuilder: FormBuilder) {
        this.formLogin = this.formBuilder.group({
            "email": ["", [Validators.email, Validators.minLength(5)]],
            "telefono": ["", [Validators.maxLength(11)]],
            "password": ["", [Validators.required, Validators.minLength(6)]],
        })

        this.registerForm = this.formBuilder.group({
            "nombre": ["", [Validators.required]],
            "apellidos": ["", [Validators.required]],
            "email": ["", [Validators.required]],
            "password1": ["", [Validators.required]],
            "password2": ["", [Validators.required]],

            "direccion": ["", [Validators.required]],
            "telefono": ["", [Validators.required]],
            "edad": ["", [Validators.required]],
            "ciudad": ["", [Validators.required]],
            "pais": ["", [Validators.required]],

        })
    }

    iniciarSesion() {
        if (this.formLogin.invalid) {
            alert("Formulario no válido");
            return;
        }

        if (this.formLogin.value.email === "" && this.formLogin.value.telefono === "" ) {
            alert("Falta un usuario para entrar")
            return;
        }

        const datosParaEnviar: DatosDeEnvio = {
            email: this.formLogin.value.email,
            telefono: this.formLogin.value.telefono,
            password: this.formLogin.value.password
        }

        console.log(datosParaEnviar)
    }


    registrarme() {
        if (this.registerForm.invalid) {
            alert("Formulario no válido");
            return;
        }
    }


    cambiarInput(val: boolean) {
        this.esCorreo = val;
    }

    cambiarForm(val: boolean) {
        this.esLogin = val;
    }


}
