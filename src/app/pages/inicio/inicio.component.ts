import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Swiper, Virtual, Autoplay } from 'swiper';
SwiperCore.use([Virtual,Autoplay]);
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  slidesPerView = 3;
  autoplay:boolean = true;

  constructor(private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.slidesPerView = 1; // Cambiar a 1 cuando se detecte un dispositivo móvil
        if (this.swiper) {
          this.swiper.updateInitSwiper; // Actualizar el componente Swiper para reflejar los cambios
        }
      } else {
        this.slidesPerView = 3; // Volver a 3 cuando no se detecte un dispositivo móvil
        if (this.swiper) {
          this.swiper.updateSwiper; // Actualizar el componente Swiper para reflejar los cambios
        }
      }
    });
  }

  ngOnInit(): void {
    // this.swiper?.swiperRef.autoplay.start();
    // this.swiper?.swiperRef.autoplay.running;
  }

  ngAfterViewInit() {
    //this.swiper?.swiperRef.autoplay.running;
 }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }
  

}
