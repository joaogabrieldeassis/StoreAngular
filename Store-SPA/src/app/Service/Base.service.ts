import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";


export class BaseService {
    protected urlBase: string = "https://localhost:7290/api/v1/";

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    protected extractData(response: any) {
        return response.data || {};
    }
    protected serviceError(response: Response | any) {
        let customError: any[] = [];
        let customResponse: any = { error: { errors: [] } }
        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }
        if (response.status === 500) {

            customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.");

            customResponse.error.errors = customError;
            return throwError(() => customResponse);
        }
        console.log('Teste 4')
        console.error(response);
        return throwError(() => response);
    }
}