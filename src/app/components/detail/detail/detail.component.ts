import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { apiService } from '../../../../api.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  img_id: string;
  resp: any

  constructor(private route: ActivatedRoute,
              private imgService: apiService) {
    this.img_id = this.route.snapshot.params.id
   }

  ngOnInit(): void {
    this.imgService.getImageById(this.img_id).subscribe((res: any) => {
      this.resp = res
    })
  }

}
