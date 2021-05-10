import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarrouselTesteComponent } from './carrousel-teste.component';

@NgModule({
    imports: [BrowserModule, NgbModule],
    declarations: [CarrouselTesteComponent],
    exports: [CarrouselTesteComponent],
    bootstrap: [CarrouselTesteComponent]
})
export class NgbdCarouselBasicModule { }

