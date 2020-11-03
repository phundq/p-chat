import { AuthStoreFacade } from '../../store-facade/auth-store-facade';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
    public canActive: boolean = false;
    constructor(public authStoreFacade: AuthStoreFacade, public router: Router) { }
    canActivate(): boolean {
        this.authStoreFacade.selectAuthFeature().subscribe(
            data => {
                this.canActive = data.isLoginSuccess;
            }
        )
        if (this.canActive = undefined || !this.canActive) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}