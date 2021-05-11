import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { environment } from "./environments/environment";



@Injectable({
    providedIn: 'root'
})
export class apiService  {
    private API_KEY: string = environment.PB_API_KEY;
    private API_URL: string = environment.PB_API_URL;
    private URL: string = this.API_URL + this.API_KEY + "&q="
    private URL_ID: string = this.API_URL + this.API_KEY + "&id="
    private URL_C: string = this.API_URL + this.API_KEY + "&category=" 

    constructor(
        private http : HttpClient
    ) {

    }

    searchImage(search) {
        return this.http.get(this.URL + search)
    }

    searchByCategory(category, q) {
        console.log("ESTO LE LLEGA LA FUNCION",  this.URL_C + category + "&q=" + q)
        return this.http.get(this.URL_C + category +  "&q="  + q)
    }

    getImageById(id) {
        return this.http.get(this.URL_ID + id)
    }
}