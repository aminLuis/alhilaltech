import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnChanges{

  @Input() quienesSomos: number = 0;
  quienesSomosSend: number = 0;

  @Input() vision: number = 0;
  visionSend: number = 0;

  @Input() mision: number = 0;
  misionSend: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['quienesSomos']){
        this.quienesSomosSend = this.quienesSomos;
      }
      if(changes['vision']){
        this.visionSend = this.vision;
      }
      if(changes['mision']){
        this.misionSend = this.mision;
      }
  }

}
