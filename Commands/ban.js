module.exports = {
  name: 'ban',
  author: 'Frank Kaumba',
  requiresAdmin: true,
  execute: async (bot, from, args) => {
    const mention = args[0];
    bot.groupParticipantsUpdate(from, [mention], 'demote');
    bot.sendMessage(from, `User @${mention} has been banned.`);
  },
};
