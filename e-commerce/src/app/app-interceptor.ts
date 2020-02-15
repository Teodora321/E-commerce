import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
const apiURL = environment.apiURL;

@Injectable() 
    export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        //we check if the req doesn't have http and we add apiurl , if the req has http, someone wants to make a req and we return the real req url
        const fullURL = req.url.includes('http') ? req.url : `${apiURL}/${req.url}`;
        const isApiRequest = fullURL.includes(apiURL);
        //if fullurl includes apiurl auto we add withcred = true
            return next.handle(req.clone({url:fullURL, withCredentials:isApiRequest}))
        }
    }
