import {CommonModule} from '@angular/common';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppBootstrapModule {}
