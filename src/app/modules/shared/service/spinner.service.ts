import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { SpinnerComponent } from "../components/spinner/spinner.component";

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    constructor(
        private overlay: Overlay
    ) { }

    private spinnerRef = this.cdkSpinnerCreate();

    private cdkSpinnerCreate() {
        return this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'dark-backdrop',
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
        })
    }

    public showSpinner() {
        if (!this.spinnerRef || !this.spinnerRef.hasAttached()) {
            this.spinnerRef.attach(new ComponentPortal(SpinnerComponent));

        }
    }
    public stopSpinner() {
        this.spinnerRef.detach();
    }
}