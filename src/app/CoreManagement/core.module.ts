import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './Homepage/home.page';
import { HeaderPage } from './header/header.page';
import { FooterPage } from './footer/footer.page';
import { ErrorHandlerService } from './ErrorHandler/error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, HeaderPage, FooterPage],
  providers: [{provide: ErrorHandler, useClass: ErrorHandlerService}]
})
export class CoreManagementModule {}
