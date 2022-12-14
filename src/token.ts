import { InjectionToken } from '@nestjs/common';
import { InjectToken } from './inject-token';

export const USER_SERVICE_TOKEN = () => new InjectToken('USER_SERVICE');
