module.exports = {
  name: 'unmute',
  author: 'Frank Kaumba',
  requiresAdmin: true,
  execute: async (bot, from, args) => {
    const mention = args[0];
    bot.groupParticipantsUpdate(from, [mention], 'promote');
    bot.sendMessage(from, `User @${mention} has been unmuted.`);
  },
};
