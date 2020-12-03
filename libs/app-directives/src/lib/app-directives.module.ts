import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight.directive';
import { TestDirective } from './test.directive';
import { VerdeDirective } from './verde.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective, TestDirective, VerdeDirective
  ],
  exports: [
    HighlightDirective, TestDirective, VerdeDirective
  ],
})
export class AppDirectivesModule { }
