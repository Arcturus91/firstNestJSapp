import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
/* este es un servicio, y es inyectable. Nota que es una clase, la cual exportas

In NestJS, a service is a class that
 provides a specific set of related functions and is
  typically used to encapsulate business logic and 
  interact with external systems or resources. 
  Services are a key component of the NestJS 
  framework and are used to organize and share
   reusable functionality across your application. 
   They are typically injected into controllers and
   other components via dependency injection, allowing for 
   loose coupling and easier testing and maintenance.
    Services can also be decorated with various NestJS
     decorators to add additional functionality, such
      as logging or error handling.

*/
