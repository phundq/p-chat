import { AccessToken } from './../model/user.i';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthStoreFacade } from './../store-facade/auth-store-facade';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    public headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
    });

    public accessToken: AccessToken;

    constructor(public http: HttpClient,
        public authStoreFacade: AuthStoreFacade
    ) { }

    setToken(accessToken: AccessToken) {
        this.accessToken = accessToken;
    }

    removeToken() {
        this.accessToken = undefined;
    }

    isAuth() {
        let isLoginSuccess: Boolean = false;
        this.authStoreFacade.selectAuthFeature().pipe(distinctUntilChanged())
            .subscribe(
                (data) => {
                    isLoginSuccess = data.isLoginSuccess;
                    if (isLoginSuccess) {
                        this.setToken(data.accessToken);
                    }
                }
            )
            .unsubscribe();
        return isLoginSuccess;
    }

    post(reqUrl: string, reqBody: any) {
        let _headers: HttpHeaders = this.headers;
        let isAuth: Boolean = this.isAuth();
        if (isAuth) {
            _headers = _headers.append('Authorization', 'Bearer ' + this.accessToken.token)
        }
        var body = reqBody;
        return this.http.post(environment.baseUrl + reqUrl, body, {
            headers: _headers
        })
    }

    // get(reqUrl: string, reqParam?: any, reqBody?: any) {
    //     var option = { ...this.httpOptions };
    //     option.param = (reqParam) ? reqParam : null;
    //     option.observe = (reqBody != null) ? reqBody : null;
    //     return this.http.get(environment.baseUrl + reqUrl, option)
    // }
}
