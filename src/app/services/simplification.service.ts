import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Endpoints} from '../utils/Endpoints';
import {SimplificationRequest} from '../model/SimplificationRequest';
import {SimplificationResult} from '../model/SimplificationResult';

@Injectable({
  providedIn: 'root'
})
export class SimplificationService {

  constructor(private http: HttpClient) {
  }

  public simplify(text: string, target: string, consent: boolean): Observable<SimplificationResult> {
    const predictionRequest: SimplificationRequest = {
      text: text,
      target: target,
      consent: consent
    }
    return this.http.post<SimplificationResult>(Endpoints.predictionApi, predictionRequest)
  }
}
