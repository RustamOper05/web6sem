import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("index")
  @Render("index.pug")
  getIndex() {
    return
  }

  @Get("info_graph")
  @Render("info_graph.pug")
  getInfoGraph() {
    return
  }

  @Get("predict")
  @Render("predict.pug")
  getPredict() {
    return
  }
}
