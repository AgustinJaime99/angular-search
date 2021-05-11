import { Component, OnInit } from '@angular/core';
import { apiService } from '../../../../api.service'


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public selectedBrand
  q= ""
  results: any

  public valueSelected() {
    this._imageService.searchByCategory(this.selectedBrand, this.q).subscribe((res: any) => {
      this.results = res
      console.log("RESPUESTA DE SEARCHCAT", res)
    })
  }
  
  constructor(private _imageService : apiService) { }
  
  ngOnInit() {
  }
  

  onSubmit(query: string) {
    this._imageService.searchImage(this.q).subscribe((res: any) => {
      this.results = res
      console.log("RESPUESTA DE SEARCH Q", res)
    },
    (err) => console.error(err)
    );
  }
  
  
}