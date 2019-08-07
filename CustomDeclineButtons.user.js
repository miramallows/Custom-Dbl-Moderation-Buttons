// ==UserScript==
// @name         Custom Decline Buttons
// @namespace    http://tampermonkey.net/
// @version      4.1
// @description  try to take over the world!
// @author       iara (worst mod hi)
// @match        https://discordbots.org/moderation/decline*
// @grant        none
// @updateURL    https://github.com/miramallows/Custom-Dbl-Moderation-Buttons/blob/master/CustomDeclineButtons.user.js

// ==/UserScript==

(function () {
    var label = document.createElement("LABEL");
    var field = document.getElementsByClassName("field")[0]
    var labelText = document.createTextNode("Custom decline reasons");
    label.appendChild(labelText);
    label.className += "label";
    field.insertBefore(label, field.childNodes[25]);

    var vanillaButtons = document.getElementsByClassName("predefined-Reason");
    var i;

    for (i = 0; i < vanillaButtons.length; i++) {
        console.log("lol:", vanillaButtons[i].onclick);
        let cOnclick = vanillaButtons[i].onclick;
        vanillaButtons[i].onclick = function () {
            cOnclick();
            document.getElementsByName("declinereason")[0].focus();
        }
    }

        addButton("Spam Presence Change", "Your bot's presence changes every few seconds. The maximum frequency you can change your status is [5 times per minute (approx. every 12 seconds)](https://discordapp.com/developers/docs/topics/gateway#activity-object-example-activity-with-rich-presence); any faster than that is considered as Discord API Abuse. We suggest you change it to something more reasonable, such as every 120 seconds.");
        addButton("Description mentions NSFW", "Your bot page mentions, or promotes NSFW functions in its descriptions. Please remove any mentioning of NSFW features.");
    addButton("NSFW Loli/Minors", "Your bot has a command produces NSFW images of lolis or minors which is against Discord TOS & Guidelines. We strongly advise not to use nekos.life's NSFW endpoints as a majority of the results may contain NSFW images of minors.");
    addButton("Copy/Paste widgets", "You are using the widgets of another bot in your long description. Please use your own widgets.");
    addButton("Open Reboot/Reload/Restart", "Your bot can be rebooted by anyone through Direct Messages.");
    addButton("Owner commands dm", "Your bot has owner commands which can be used by anyone via DMs.");
    addButton("Copied Long Description", "Your bot's long description is copied from another bot. Please write your own description and don't directly copy another bot.");
    addButton("Public eval", "Your bot has an open eval command. Please lock this command for developers only to prevent misuse.");
    addButton("Rainbow roles", "Your bot supports rainbow roles - roles that rapidly change colors to convey rainbows. This is considered as Discord API abuse and not allowed on Discord. Please remove this feature entirely.");
    addButton("Majority of commands not working", "The majority of your commands listed on your bot's page, or help command do not provide a response, or does not seem to function/work.");
    addButton("Logging of all Messages",`Your bot stores/logs unnecessary information in your console and other places for no particular reason, which violates Discord ToS.
Please refer to this section:
2.4 End User Data. “End User Data” means all data associated with the content within the functionality enabled by the API or SDK, including but not limited to message content, message metadata, voice data and voice metadata. You acknowledge and agree that Discord and its end users, as applicable, retain all worldwide right, title and interest in and to the End User Data. If you have access to End User Data through the API or the SDK, you shall ensure that your Applications do not collect, use and/or disclose End User Data except (a) as necessary to exercise your rights under this Agreement, (b) in accordance with Discord’s Privacy Policy. If you have access to End User Data through the SDK, you additionally agree to get express permission from the End Users.`);
        addPromptedButton("Spam commands", "Your bot has a command (~input) which causes it to spam either a text channel or a user's DMs.");
       addPromptedButton("NSFW commands in non-NSFW", "Your bot has an NSFW command (~input) that can be used in non-NSFW channels. Please lock this command to only NSFW channels.");
    addPromptedButton("Unknown Author DMs", "Your bot has a DM command (~input) which allows anyone to DM a user without stating the author, which can be used maliciously.", "DM command name?");
    addPromptedButton("Server List Command", "Your bot has a server list command, ~input, which is considered a privacy breach as it lists all the servers your bot is in. Please either limit this to the bot owner (you), or make it opt-in, or simply delete it.", "Server list command name?");
    addPromptedButton("Suicide Command", "Your bot has a suicide command (~input) which is considered as glorification/promotion of suicide, which is against Discord ToS. Please remove this command entirely.", "What's the name of the suicide command?");
    addPromptedButton("Bot Code in Long Desc", "Your bot description is your bot's ~input code. Your long description should not consist of your bot's code, it should be about what your bot does, command list, etc. Please rewrite your description to include more useful information about your bot.", "What language is the bot code in?");



    function addButton(buttonName, reason) {
        var button = document.createElement("A");
        var buttonText = document.createTextNode(buttonName);
        button.appendChild(buttonText);
        button.className += "predefined-Reason";
        button.onclick = function () {
            var declineBox = document.getElementsByName("declinereason")[0]
            declineBox.value = reason;
            declineBox.focus();
        };
        field.insertBefore(button, field.childNodes[26]);
    }

    function addPromptedButton(buttonName, reason, promptText) {
        var button = document.createElement("A");
        var buttonText = document.createTextNode(buttonName);
        button.appendChild(buttonText);
        button.className += "predefined-Reason";
        button.onclick = function () {
            var declineBox = document.getElementsByName("declinereason")[0]
            var input = prompt(promptText);
            reason = reason.replace("~input", "`" + input + "`");
            declineBox.value = reason;
            declineBox.focus();
        };
        field.insertBefore(button, field.childNodes[26]);
    }

}

)();
