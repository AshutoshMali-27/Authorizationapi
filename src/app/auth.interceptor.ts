import { HttpInterceptorFn } from '@angular/common/http';
import { CommonService } from './common.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(CommonService).getToken();
  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('Authorization','Bearer ' +authToken),
  });
  return next(newReq);
};
