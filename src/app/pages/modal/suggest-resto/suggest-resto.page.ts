import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NgForm  , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SuggestRestoService } from 'src/app/providers';

@Component({
  selector: 'app-suggest-resto',
  templateUrl: './suggest-resto.page.html',
  styleUrls: ['./suggest-resto.page.scss'],
})
export class SuggestRestoPage implements OnInit {
  
  onSendForm: FormGroup
  public name: string;
  public road: string;
  public tel = '';
  public comment = '';

  constructor(
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private suggestResto: SuggestRestoService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.onSendForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'road': [null, Validators.compose([
        Validators.required
      ])],
      'tel': [null, Validators.compose([
        
      ])],
      'comment': [null, Validators.compose([
        
      ])]
    })
  }

  sendSuggest(){
    if((this.tel === '' && this.comment === '') ||  this.tel === '' || this.comment === ''){
      this.tel = ' '
      this.comment = ' '
    }
    this.suggestResto.sendSuggest(this.name, this.road, this.tel, this.comment).subscribe( async res => {
      console.log(res)
      const toast = await this.toastCtrl.create({
        message: 'Votre mail à été envoyez avec succès !',
        duration: 2000
      })
      toast.present()
      this.modalCtrl.dismiss();
    }, err => {
      console.log(err)
      
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
