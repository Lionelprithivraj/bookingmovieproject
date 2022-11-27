import { Component, OnInit } from '@angular/core';
import Movie from 'src/Movie';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-regmovie',
  templateUrl: './regmovie.component.html',
  styleUrls: ['./regmovie.component.css']
})
export class RegmovieComponent implements OnInit {

  constructor(private utilService:UtilserviceService) { }
movietitle:any;
genre:any;
  ngOnInit(): void {
  }

  registerMovie(){
    this.utilService.Movie(
      new Movie( 
    this.movietitle.get("movietitle")?.value,
    this.genre.get("genre")?.value,
    )).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('completed')
    });
    console.log(this.movietitle);
    console.log(this.genre);

}
}
