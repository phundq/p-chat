import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStoreFacade } from '../../store-facade/auth-store-facade';
@Injectable()
export class AuthGuardService implements CanActivate {
    public canActive: boolean = false;
    constructor(public authStoreFacade: AuthStoreFacade, public router: Router) { }
    canActivate(): boolean {
        this.authStoreFacade.selectIsLoginSuccess().subscribe(
            data => {
                this.canActive = data;
            }
        )
        if (this.canActive = undefined || !this.canActive) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}