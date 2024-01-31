import { NgModule } from "@angular/core";
// Se debe incorporar este modulo para usar ngFor, ngIF, entre otros, en app.modules.ts está incluído aunque no salga explicito
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroeModule {}
