const { Client } = require('discord.js'); // run npm install discord.js
const { REST } = require('@discordjs/rest'); // run npm install @discordjs/rest
const { Routes } = require('discord-api-types/v9');
const axios = require('axios') // run npm install axios

const token = 'TokeN!'; // Token
const clientId = 'Bot Id'; // your bot id
const advertise = true;
const serverinvite = "discord.gg"; // your server link
const madeby = ""Make With ❤️ Bacon But Pro | discord.gg/VU7ZA5WCkS "; // change die
const apikey = "E99l9NOctud3vmu6bPne";

const commands = [
    {
        name: 'arceus',
        description: 'Whitelist Arceus X',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Arceus link',
                required: true,
            },
        ],
    },
    {
        name: 'codex',
        description: 'Whitelist Codex',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Codex link',
                required: true,
            },
        ],
    },
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
];

const client = new Client({ intents: 3276799 });
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('GOOD');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('DONE');
    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'arceus') {
        await arceusx(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'codex') {
        await codex(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'delta') {
        await delta(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    }
});

async function arceusx(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Arceus",
            thumbnail: { url: 'https://cdn.discordapp.com/icons/991702878257422347/a_08fcd14478786b238ceee69c3958d2fa.gif?size=4096' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://spdmteam.com/key-system-1?hwid=')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `https://stickx.top/api-arceusx/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Key System completed!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Arceus",
                        thumbnail: { url: 'https://cdn.discordapp.com/icons/991702878257422347/a_08fcd14478786b238ceee69c3958d2fa.gif?size=4096' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Please Wait For Countdown Or Restart Roblox.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Arceus",
                        thumbnail: { url: 'https://cdn.discordapp.com/icons/991702878257422347/a_08fcd14478786b238ceee69c3958d2fa.gif?size=4096' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Arceus",
                    thumbnail: { url: 'https://cdn.discordapp.com/icons/991702878257422347/a_08fcd14478786b238ceee69c3958d2fa.gif?size=4096' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Arceus Link",
                thumbnail: {url: 'https://cdn.discordapp.com/icons/991702878257422347/a_08fcd14478786b238ceee69c3958d2fa.gif?size=4096' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function codex(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Codex",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283952709804093/images__2_-removebg-preview.png?ex=66211a61&is=660ea561&hm=a01ef30ee311e25ce8e4a4a27911dcc32ea872025d3b58f9ab0e9e944913cf79&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://mobile.codex.lol/?token=') || link.startsWith('https://mobile.codex.loltoken=') || link.startsWith('https://mobile.codex.lol?token=')) {
        const token = link.split('=')[1];
        const apiUrl = `https://stickx.top/api-codex/?token=${token}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key == "CodeX completed!!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Codex",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283952709804093/images__2_-removebg-preview.png?ex=66211a61&is=660ea561&hm=a01ef30ee311e25ce8e4a4a27911dcc32ea872025d3b58f9ab0e9e944913cf79&' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Wait Up To A Minute Or Restart Roblox.```' },
                            { name: 'Token:', value: `${box}${token}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Codex",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283952709804093/images__2_-removebg-preview.png?ex=66211a61&is=660ea561&hm=a01ef30ee311e25ce8e4a4a27911dcc32ea872025d3b58f9ab0e9e944913cf79&' },
                        fields: [
                            { name: 'Status:', value: '```Either Token Is Invalid Or Api Is Not Working.```' },
                            { name: 'Token:', value: `${box}${token}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Codex",
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283952709804093/images__2_-removebg-preview.png?ex=66211a61&is=660ea561&hm=a01ef30ee311e25ce8e4a4a27911dcc32ea872025d3b58f9ab0e9e944913cf79&' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Codex Link",
                thumbnail: {url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283952709804093/images__2_-removebg-preview.png?ex=66211a61&is=660ea561&hm=a01ef30ee311e25ce8e4a4a27911dcc32ea872025d3b58f9ab0e9e944913cf79&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function delta(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Delta Key",
            thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://stickx.top/api-delta/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Delta Key",
                        thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Delta Key",
                        thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Delta key",
                    thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Delta Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}




client.login(token);
