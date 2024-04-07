import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    quienesSomosSend: number = 0;
    visionSend: number = 0;
    misionSend: number = 0;

  constructor(private breakpointObserver: BreakpointObserver) {}

  public quienesSomos(){
    this.quienesSomosSend = this.quienesSomosSend+1;
  }

  public vision(){
    this.visionSend = this.visionSend +1;
  }

  public mision(){
    this.misionSend = this.misionSend +1;
  }

}
