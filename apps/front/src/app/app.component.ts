import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'simples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  name = 'Angular';

  constructor(public router: Router, private _cdr: ChangeDetectorRef) {
    // this._projectService.setLoading(true);

  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
}
