// ==UserScript==
// @name         Custom Decline Buttons
// @namespace    http://tampermonkey.net/
// @version      4.1
// @description  try to take over the world!
// @author       iara (worst mod hi)
// @match        https://top.gg/moderation/decline*
// @grant        none
// @updateURL   

// ==/UserScript==



(function() {
    const addButton = window.addButton;
    addButton('nekoslife', 'Nekos Life API', `Your \`[COMMAND]\` command uses the neko endpoint on nekos.life. We don\'t allow bots that utilize this endpoint as it is known to produce NSFW images of minors or just NSFW images in general. Please remove this command or use a different API which doesn\'t return NSFW and or NSFW results of minors.`, [ 5, 14 ])
    addButton('accountsub', 'Account/Subscription Generator', `Your bot generates accounts/gifts from other services. We don\'t allow bots that generate accounts, subscriptions, or otherwise - as they\'re often stolen as well as against ToS.`)
    addButton('anotherBotWidgets', 'Copy/Paste Widgets', 'You are using the widgets of another bot in your long description. Please use your own widgets.')
    addButton('loggingMessages', 'Logs All Messages', `Your bot stores/logs unnecessary information in your console and other places for no particular reason, which violates Discord ToS.\nPlease refer to this section:\n\`\`\`2.4 End User Data. “End User Data” means all data associated with the content within the functionality enabled by the API or SDK, including but not limited to message content, message metadata, voice data and voice metadata. You acknowledge and agree that Discord and its end users, as applicable, retain all worldwide right, title and interest in and to the End User Data. If you have access to End User Data through the API or the SDK, you shall ensure that your Applications do not collect, use and/or disclose End User Data except (a) as necessary to exercise your rights under this Agreement, (b) in accordance with Discord’s Privacy Policy. If you have access to End User Data through the SDK, you additionally agree to get express permission from the End Users.\`\`\``)

})();
