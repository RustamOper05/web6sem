import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    return next.handle().pipe(
      tap(() => {
          const response = context.switchToHttp().getResponse();
          const timeElapsed = Date.now() - startTime;
          response.setHeader('X-Response-Time', `${timeElapsed}ms`);
      }),
    );
  }
}