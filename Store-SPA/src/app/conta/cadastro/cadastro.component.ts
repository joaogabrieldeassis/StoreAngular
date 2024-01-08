import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../Models/Usuario';
import { ContaService } from '../Services/conta.service';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  errors: any[] = [];
  cadastroForm!: FormGroup;
  usuario!: Usuario;

  constructor(private formBuilder: FormBuilder, private cadastroService: ContaService) {
    this.errors = [];
  }

  ngOnInit(): void {


    this.cadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  adicionarConta() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
      this.cadastroService.registrarUsuario(this.usuario)
        .subscribe(
          success => { this.processarSucesso(success) },
          errors => { this.processarFalha(errors) }
        );

    }
  }
  processarSucesso(response: any) {
    this.cadastroForm.reset()
    this.errors = [];
  }
  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }
}
