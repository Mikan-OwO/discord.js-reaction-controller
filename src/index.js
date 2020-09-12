exports.ReactionController = class ReactionController {
  constructor(options = {}) {
    this.client = options.client;
  }
  send(message) {
    this.message = message;
  }
  addPage(embed) {
    
  }
}
