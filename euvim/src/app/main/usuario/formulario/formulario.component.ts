import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { EqualsPasswordValidator } from '../../../validators/equals.password.validator'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { UsuarioService } from '../usuario.service'
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public perfis = [
    { id: "PROFESSOR", descricao: 'Professor' },
    { id: "ADMINISTRADOR", descricao: 'Administrador' },
    { id: "ALUNO", descricao: 'Aluno' },
  ]

  public form: FormGroup
  private id: null

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UsuarioService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.form = _formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      login: ['', Validators.required],
      perfil: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required]
    },
      {
        validator: EqualsPasswordValidator.validate("senha", "confirmacao")
      }
    )
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.id = params.id
      if (this.id) {
        this._userService.carregar(this.id).subscribe(retorno => {
          retorno.senha = null
          retorno.confirmacao = null
          delete retorno.urlFoto
          this.form.setValue(retorno)
          this.form.get('senha').setValidators(null)
          this.form.get('confirmacao').setValidators(null)
        })
      }
    })
  }

  public salvar() {
    if (this.form.invalid) {
      return
    }

    if (this.id) {
      this._userService.editar(this.form.value).subscribe(suc => {
        this.form.reset()
        this._router.navigate(['/main/usuario/consulta'])
      })
    } else {
      this._userService.salvar(this.form.value).subscribe(suc => {
        this.form.reset()
        this._router.navigate(['/main/usuario/consulta'])
      })
    }


  }

}
