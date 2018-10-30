import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdDatepickerPopup } from '../components/datepicker-popup';
import { NgxPaginationModule, PaginationControlsDirective, PaginatePipe } from  'ngx-pagination';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import{ TruncatePipe} from '../pipes/truncate.pipe'
import{ DateFormatPipe} from '../pipes/formatDate.pipe'
import{ FilterPipe} from '../pipes/filter.pipe'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule,
    NgbModule.forRoot()
  ],
  exports:[MenuComponent, FooterComponent, FormsModule, CommonModule,NgbdDatepickerPopup, NgxPaginationModule,TruncatePipe, DateFormatPipe, FilterPipe],
  declarations: [ MenuComponent, FooterComponent, NgbdDatepickerPopup, TruncatePipe, DateFormatPipe, FilterPipe ],
  providers:    [ DateFormatPipe, FilterPipe ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule { }
