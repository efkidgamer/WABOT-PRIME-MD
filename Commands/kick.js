module.exports = {
  name: 'kick',
  author: 'Frank Kaumba',
  requiresAdmin: true,
  execute: async (bot, from, args) => {
    const mention = args[0];
    bot.groupParticipantsUpdate(from, [mention], 'remove');
    bot.sendMessage(from, `User @${mention} has been kicked.`);
  },
};
