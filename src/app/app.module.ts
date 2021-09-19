import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NumberComponent } from './changeNum.component';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NumberComponent,
    DropdownComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
