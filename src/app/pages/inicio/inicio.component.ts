import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Swiper, Virtual, Autoplay } from 'swiper';
SwiperCore.use([Virtual,Autoplay]);
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnChanges{

  slidesPerView = 3;
  autoplay:boolean = true;
  @Input() quienesSomos: number = 0;
  @Input() mision: number = 0;
  @Input() vision: number = 0;


  @ViewChild('targetDiv') targetDiv!: ElementRef;

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

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['quienesSomos']){
        if(this.quienesSomos>0){
          this.goToSection("alhilaltech-somos");
        }
      }
      if(changes['mision']){
        if(this.mision>0){
          this.goToSection("alhilaltech-mision");
        }
      }
      if(changes['vision']){
        if(this.vision>0){
          this.goToSection("alhilaltech-vision");
        }
      }
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
  
  public goToSection(id:string): void {
    const element = document.getElementById(id) as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
