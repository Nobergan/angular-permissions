import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { SpinnerComponent } from '@mm/shared/ui';

/**
 * Directive to replace view with an inline spinner
 */
@Directive({
  selector: '[uiSpinner]',
  standalone: true,
})
export class SpinnerDirective {
  /**
   * Unset by default, this forces it to evaluate upon first render.
   */
  private _isSpinning: boolean = null;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
  ) {}

  @Input() set uiSpinner(condition: boolean) {
    if (condition !== this._isSpinning) {
      this._isSpinning = null;
      this._viewContainer.clear();
      this._isSpinning = condition;

      if (condition) {
        this._addSpinner();
      } else {
        this._viewContainer.createEmbeddedView(this._templateRef);
      }
    }
  }

  private _addSpinner() {
    // Later we may add configuration for the spinner here
    const { instance } =
      this._viewContainer.createComponent(SpinnerComponent);
  }
}
