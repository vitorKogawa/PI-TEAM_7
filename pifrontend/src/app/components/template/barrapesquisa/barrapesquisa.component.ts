import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-barrapesquisa',
  templateUrl: './barrapesquisa.component.html',
  styleUrls: ['./barrapesquisa.component.css']
})
export class BarrapesquisaComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Aventura', 'Fantasia', 'Terror', 'Suspense', 'Animes'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
