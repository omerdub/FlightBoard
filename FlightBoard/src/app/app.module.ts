import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { AirplaneIconComponent } from '../assets/airplane-icon/airplane-icon.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './components/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    LayoutComponent,
    HeaderComponent,
    AirplaneIconComponent,
    ToggleComponent,
    BoardComponent,
    TableComponent,
    ModalComponent,
    SearchComponent,
    SortComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
