import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SetImageSrcPipe} from './pipes/set-image-src.pipe';


@NgModule({
  declarations: [SetImageSrcPipe],
  exports: [
    SetImageSrcPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
