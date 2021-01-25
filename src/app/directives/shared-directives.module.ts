import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFadeDirective } from './image-fade.directive';

@NgModule({
  declarations: [ImageFadeDirective],
  imports: [
    CommonModule
  ],
  exports: [ImageFadeDirective]
})
export class SharedDirectivesModule { }
