exports.ReactionController = class ReactionController {
  constructor(options = {}) {
    this.client = options.client;
    this.pages = [];
  }
  send(message) {
    this.message = message;
  }
  addPage(embed) {
    this.pages.push(embed);
  }
}
