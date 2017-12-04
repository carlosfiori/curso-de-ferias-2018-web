import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../../validators/equalPasswords.validator';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {

  public profiles = [
    { value: "Professor", description: 'Professor' },
    { value: "Administrador", description: 'Administrador' },
    { value: "Aluno", description: 'Aluno' },
  ];


  form: FormGroup;
  identifier = null;

  constructor(private _usuarioService: UsuarioService, fb: FormBuilder, private _router: Router,private _activateRoute: ActivatedRoute) {

    this.form = fb.group({
      identifier: [null],
      nome: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      login: [null, Validators.required],
      perfil: [null, Validators.required],
      senha: [null, Validators.required],
      confirmacao: [null, Validators.required]
    }, {validator: EqualPasswordsValidator.validate("senha","confirmacao")})
    //this.email = this.form.controls['email'];
  }
  
  

  ngOnInit() {
    this.identifier = null;    
    this._activateRoute.params.subscribe(params=>{
      this.identifier = params['id'];
    })
    if(this.identifier){
      var item = <any> this._usuarioService.getItem(this.identifier);
      item.senha = null;
      item.confirmacao = null;
      this.form.setValue(item);
      this.form.get("senha").setValidators(null);
      this.form.get("confirmacao").setValidators(null);
    }
  }

  salvar() {
    if(this.form.valid){
      if(this.identifier){
        this._usuarioService.editar(this.form.value);
      } else {
        this._usuarioService.adicionar(this.form.value);
      }
      this.form.reset();
      this._router.navigate(['/main/usuario/consulta']);
    }
  }



}