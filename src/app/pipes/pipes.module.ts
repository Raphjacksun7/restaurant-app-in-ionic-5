import { NgModule } from '@angular/core';

import { TermSearchPipe } from './term-search.pipe';

export const pipes = [
    TermSearchPipe
];

@NgModule({
  declarations: [pipes],
  exports: [pipes]
})

export class PipesModule { }
