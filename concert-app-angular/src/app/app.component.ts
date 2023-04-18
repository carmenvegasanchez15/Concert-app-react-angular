import { Component,inject } from '@angular/core';
import { Concert } from './models/concert.model';
import {HttpClient} from '@angular/common/http'

//type Concert = Array<{ id: number; concert: string, artist:string,city:string,image:string }>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'concert-app';
  http= inject(HttpClient)

  // --------------CON API------------------
  // concerts: Concert[] = []

  // ngOnInit(){
  //   this.http.get<Concert[]>('https://api.escuelajs.co/api/v1/products')
  //     .subscribe((data)=>{
  //       this.concerts = data
  //     })
  // }

  // --------------SIN API------------------
  concerts: Concert[] = [
    {
      id: 1,
      concert: "Concert 1",
      artist: "Reagan Bennett",
      city: "Lillehammer",
      image : "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      concert: "Concert 2",
      artist: "Malik Rice",
      city: "Gatchina",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      concert: "Concert 3",
      artist: "Scott Dennis",
      city: "Guadalajara",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      concert: "Concert 4",
      artist: "Scott Berg",
      city: "Caxias do Sul",
      image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      concert: "Concert 5",
      artist: "Scott Berg",
      city: "Gatchina",
      image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  artistName:string = ''
  cityName:string = ''

  res:Concert[] = []
  index:number = 0


  search(){
    this.index=1
    let result:any = []
    if(!this.artistName && !this.cityName){
      document.getElementById('message-error-empty')!.innerHTML='The fields are empty, please fill in to obtain more information'
    }else{
      document.getElementById('message-error-empty')!.innerHTML=''
    }

    if(this.artistName && !this.cityName){
      for (let index = 0; index < this.concerts.length; index++) {
        if(this.concerts[index].artist.includes(this.artistName)) {
          result = [...result, this.concerts[index]]
        }
        this.res=result
      }
    }
  
    if(!this.artistName && this.cityName){
      for (let index = 0; index < this.concerts.length; index++) {
        if(this.concerts[index].city.includes(this.cityName)) result = [...result, this.concerts[index]]
      }
      this.res=result
    }
  
    if(this.artistName && this.cityName){
      for (let index = 0; index < this.concerts.length; index++) {
        if(this.concerts[index].artist.includes(this.artistName) && this.concerts[index].city.includes(this.cityName)){
          result = [...result, this.concerts[index]]
        }
      }
      this.res=result
    }
  }

  handleClick(idNumber:number){
    let elementClick = document.getElementById(idNumber+'')    
    if(elementClick?.classList.contains('hidden')){
      elementClick.classList.remove('hidden')
      elementClick.classList.add('show')
    }else{
      elementClick?.classList.add('hidden')
      elementClick?.classList.remove('show')
    }
  }

  
}

