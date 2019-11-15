import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../providers';
import { NgForm  , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import messages from 'src/app/providers/message/mock-messages';



@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  public onMessageForm: FormGroup
  private object: string;
  private messages: string; 
  @Input() restaurants: any 
  
  restaurant: any
  private email: string

  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.restaurant = this.restaurants
    this.onMessageForm = this.formBuilder.group({
      'object': [null, Validators.compose([
        Validators.required
      ])],
      'message': [null, Validators.compose([
        Validators.required
      ])]
    })
  }


  sendMessage() {
  for(const email of this.restaurant){
      this.email = email.email
      console.log(this.email)
  }
  this.messageService.sendMessage(this.object,this.messages,this.email)
  .subscribe(async res => {
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
