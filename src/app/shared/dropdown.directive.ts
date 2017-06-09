/**
 * Created by aumiller on 6/7/2017.
 */
import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  @HostListener('click') manage(name: string) {
    console.log(document.getElementById('dropdown1'));
    // document.getElementById('dropdown1').dropdoewn('open');

  }

  constructor(private element: ElementRef) {  }

  ngOnInit() {
    // console.log(this.element.nativeElement);
  }

}
