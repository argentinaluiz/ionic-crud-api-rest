import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ContactHttpProvider } from '../../providers/contact-http/contact-http';
import { CellphoneCompanyHttpProvider } from '../../providers/cellphone-company-http/cellphone-company-http';
import { ContactsPage } from '../contacts/contacts';

/**
 * Generated class for the ContactDeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-delete',
  templateUrl: 'contact-delete.html',
})
export class ContactDeletePage {

  cellphoneCompanies = [];
  contact = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    cellphone_company_id: 1
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    private contactHttp: ContactHttpProvider, private cellphoneCompany: CellphoneCompanyHttpProvider) {
  }

  ionViewDidLoad() {
    this.cellphoneCompany.list()
      .subscribe(cellphoneCompanies => this.cellphoneCompanies = cellphoneCompanies)
      const id = this.navParams.get('contact');
      this.contactHttp.get(id).subscribe(contact => this.contact = contact);
  }

  destroy(){
    this.contactHttp
      .destroy(this.contact.id)
      .subscribe(() => {
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000
        });
        toast.present();
        this.navCtrl.push(ContactsPage);
      })
  }

}
