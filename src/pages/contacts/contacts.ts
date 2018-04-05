import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactHttpProvider } from '../../providers/contact-http/contact-http';
import { CellphoneCompanyHttpProvider } from '../../providers/cellphone-company-http/cellphone-company-http';
import { ContactEditPage } from '../contact-edit/contact-edit';
import { ContactDeletePage } from '../contact-delete/contact-delete';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contacts=  [];
  cellphoneCompanies = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private contactHttp: ContactHttpProvider, private cellphoneCompany: CellphoneCompanyHttpProvider) {
  }

  ionViewDidLoad() {
    this.contactHttp.list()
      .subscribe(contacts => this.contacts=contacts)
    this.cellphoneCompany.list()
      .subscribe(cellphoneCompanies => this.cellphoneCompanies = cellphoneCompanies)
  }

  getCellphoneCompanyName(cellphoneCompanyId){
    const index = this.cellphoneCompanies
    .findIndex((item) => item.id == cellphoneCompanyId)
    return index!=-1? this.cellphoneCompanies[index].name: '';
  }

  goToDeletePage(contactId){
    this.navCtrl.push(ContactDeletePage,{contact: contactId});
  }



}
