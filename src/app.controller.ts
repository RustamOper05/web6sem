import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("index")
  @Render("index.pug")
  getPage() {
    return
  }
}
