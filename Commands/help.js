module.exports = {
  name: 'help',
  author: 'Frank Kaumba',
  requiresAdmin: false,
  execute: async (bot, from, args) => {
    const helpMessage = `
      *Available Commands:*

      • /help - Show this message
      • /ban - Ban a user
      • /unban - Unban a user
      • /mute - Mute a user
      • /unmute - Unmute a user
      • /kick - Kick a user
      • /promote - Promote a user

      *Note:* Use /<command> to execute commands.
    `;

    bot.sendMessage(from, helpMessage);
  },
};
