exports.ReactionController = class ReactionController {
  constructor(client, options = {}) {
    this.client = client;
    this.options = options;
    this.pages = [];
  }
  send(message) {
    this.message = message;
    message.channel.send(this.pages[0]);
  }
  addPage(embed) {
    this.pages.push(embed);
  }
}
