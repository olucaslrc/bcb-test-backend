import * as common from '@nestjs/common';

@common.Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLucas(): string {
    return 'Fala zééé';
  }
  postHello(): string {
    return 'Post Now';
  }
}
