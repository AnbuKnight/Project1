import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export abstract class AppHttpHandler {
        abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
      }
