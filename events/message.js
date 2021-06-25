module.exports = {
    name: 'message',
    execute(message) {
        console.log(`${message.author.tag} in guild: ${message.guild.name} in #${message.channel.name} sent: ${message.content}`);
    }
}