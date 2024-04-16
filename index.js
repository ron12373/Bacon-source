const { Client } = require('discord.js'); // run npm install discord.js
const { REST } = require('@discordjs/rest'); // run npm install @discordjs/rest
const { Routes } = require('discord-api-types/v9');
const axios = require('axios') // run npm install axios

const token = 'TokeN!'; // Token
const clientId = 'Bot Id'; // your bot id
const advertise = true;
const serverinvite = "discord.gg"; // your server link
const madeby = "IDK"; // who make it
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
    {
        name: 'hydrogen',
        description: 'Gets Hydrogen Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Hydrogen link',
                required: true,
            },
        ],
    },
    {
        name: 'hohohub',
        description: 'Gets hohohub Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The hohohub link',
                required: true,
            },
        ],
    },
    {
        name: 'trigon',
        description: 'Gets Trigon Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Trigon link',
                required: true,
            },
        ],
    },
    {
        name: 'vegax',
        description: 'Gets VegaX Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The VegaX link',
                required: true,
            },
        ],
    },
    {
        name: 'valyse',
        description: 'Whitelist Valyse',
        options: [
            {
                name: 'link',
                type: 3,
                description:  'The Valyse link',
                required: true,
            },
        ],
    },
    {
        name: 'evon',
        description: 'Gets Evon Key',
        options: [
            {
                name: 'link',
                type: 3,
                description:  'The Evon link',
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
    } else if (interaction.commandName === 'hydrogen') {
        await hydrogen(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'hohohub') {
        await hohohub(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'trigon') {
        await trigon(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'vegax') {
        await vegax(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName == 'valyse') {
        await valyse(interaction);
        if(advertise == true){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName == 'evon') {
        await evon(interaction);
        if(advertise == true){
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
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229280048046149652/0x0.png?ex=662f1b42&is=661ca642&hm=3e3cfaa5e4914ae523ec6bf020c11808d2c3ec68a297c8d9ae0cf3c456fdeed1&' },
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
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229280048046149652/0x0.png?ex=662f1b42&is=661ca642&hm=3e3cfaa5e4914ae523ec6bf020c11808d2c3ec68a297c8d9ae0cf3c456fdeed1&' },
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
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229280048046149652/0x0.png?ex=662f1b42&is=661ca642&hm=3e3cfaa5e4914ae523ec6bf020c11808d2c3ec68a297c8d9ae0cf3c456fdeed1&' },
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
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229280048046149652/0x0.png?ex=662f1b42&is=661ca642&hm=3e3cfaa5e4914ae523ec6bf020c11808d2c3ec68a297c8d9ae0cf3c456fdeed1&' },
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
                thumbnail: {url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229280048046149652/0x0.png?ex=662f1b42&is=661ca642&hm=3e3cfaa5e4914ae523ec6bf020c11808d2c3ec68a297c8d9ae0cf3c456fdeed1&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function hydrogen(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Hydrogen Key",
            thumbnail: { url: 'https://cdn.wearedevs.net/images/thumbnails/Hydrogen-2623.jpg' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/2569?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://stickx.top/api-hydrogen/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Hydrogen Key",
                        thumbnail: { url: 'https://cdn.wearedevs.net/images/thumbnails/Hydrogen-2623.jpg' },
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
                        title: "Failed To Get Hydrogen Key",
                        thumbnail: { url: 'https://cdn.wearedevs.net/images/thumbnails/Hydrogen-2623.jpg' },
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
                    title: "Failed To Get Hydrogen key",
                    thumbnail: { url: 'https://cdn.wearedevs.net/images/thumbnails/Hydrogen-2623.jpg' },
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
                title: "Invalid Hydrogen Link",
                thumbnail: {url: 'https://cdn.wearedevs.net/images/thumbnails/Hydrogen-2623.jpg' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function hohohub(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting HoHoHub Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229277078193438800/a_af386a2a26dc547f5c800015796a57f5.gif?ex=662f187e&is=661ca37e&hm=c6d7fe0d1a145cf5b244bbdea11ef875f85a94c561747f5741eae4486d6ff5b1&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://hohohubv-ac90f67762c4.herokuapp.com/api/getkeyv2?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-hohohubv/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got HoHoHub Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229277078193438800/a_af386a2a26dc547f5c800015796a57f5.gif?ex=662f187e&is=661ca37e&hm=c6d7fe0d1a145cf5b244bbdea11ef875f85a94c561747f5741eae4486d6ff5b1&' },    
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
                        title: "Failed To Get HoHoHub Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229277078193438800/a_af386a2a26dc547f5c800015796a57f5.gif?ex=662f187e&is=661ca37e&hm=c6d7fe0d1a145cf5b244bbdea11ef875f85a94c561747f5741eae4486d6ff5b1&' },              
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
                    title: "Failed To Get HoHoHub key",
            		thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229277078193438800/a_af386a2a26dc547f5c800015796a57f5.gif?ex=662f187e&is=661ca37e&hm=c6d7fe0d1a145cf5b244bbdea11ef875f85a94c561747f5741eae4486d6ff5b1&' },        
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
                title: "Invalid HoHoHub Link",
                thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229277078193438800/a_af386a2a26dc547f5c800015796a57f5.gif?ex=662f187e&is=661ca37e&hm=c6d7fe0d1a145cf5b244bbdea11ef875f85a94c561747f5741eae4486d6ff5b1&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function trigon(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Trigon Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229281137503768657/cropped-New-Trigon-with-Shadow-150x150.png.webp?ex=662f1c46&is=661ca746&hm=e6f27d3db808e9414cae4897f4fb98ce3d0f066a3dc429a5441eda9a9b473ba1&' },                   
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://trigonevo.com/getkey/?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-trigon/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Trigon Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229281137503768657/cropped-New-Trigon-with-Shadow-150x150.png.webp?ex=662f1c46&is=661ca746&hm=e6f27d3db808e9414cae4897f4fb98ce3d0f066a3dc429a5441eda9a9b473ba1&' },                            
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
                        title: "Failed To Get Trigon Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229281137503768657/cropped-New-Trigon-with-Shadow-150x150.png.webp?ex=662f1c46&is=661ca746&hm=e6f27d3db808e9414cae4897f4fb98ce3d0f066a3dc429a5441eda9a9b473ba1&' },                             
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
                    title: "Failed To Get Trigon key",
            		thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229281137503768657/cropped-New-Trigon-with-Shadow-150x150.png.webp?ex=662f1c46&is=661ca746&hm=e6f27d3db808e9414cae4897f4fb98ce3d0f066a3dc429a5441eda9a9b473ba1&' },                   	
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
                title: "Invalid Trigon Link",
                thumbnail: {url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1229281137503768657/cropped-New-Trigon-with-Shadow-150x150.png.webp?ex=662f1c46&is=661ca746&hm=e6f27d3db808e9414cae4897f4fb98ce3d0f066a3dc429a5441eda9a9b473ba1&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function vegax(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting VegaX Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283950797459486/V_logo_white.png?ex=66211a60&is=660ea560&hm=56e09cf75941a070d87c403d70b7f8bb1441d8f5716195d650b32b9d2c868153&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://pandadevelopment.net/getkey?service=vegax&hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-vegax/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got VegaX Key",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283950797459486/V_logo_white.png?ex=66211a60&is=660ea560&hm=56e09cf75941a070d87c403d70b7f8bb1441d8f5716195d650b32b9d2c868153&' },
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
                        title: "Failed To Get VegaX Key",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283950797459486/V_logo_white.png?ex=66211a60&is=660ea560&hm=56e09cf75941a070d87c403d70b7f8bb1441d8f5716195d650b32b9d2c868153&' },
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
                    title: "Failed To Get VegaX key",            
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283950797459486/V_logo_white.png?ex=66211a60&is=660ea560&hm=56e09cf75941a070d87c403d70b7f8bb1441d8f5716195d650b32b9d2c868153&' },
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
                title: "Invalid VegaX Link",
                thumbnail: {url: 'https://cdn.discordapp.com/attachments/1173131562884272190/1215283950797459486/V_logo_white.png?ex=66211a60&is=660ea560&hm=56e09cf75941a070d87c403d70b7f8bb1441d8f5716195d650b32b9d2c868153&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function valyse(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Valyse",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226474125082624093/vay.png?ex=6624e60a&is=6612710a&hm=50062b0afcd81b33ff2bcaa2b2e0a5d1e0a9696287931ef63df1b0672cdab5f2&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://valyse.best/verification?device_id=')) {
        const device_id = link.split('=')[1];
        const apiUrl = `https://stickx.top/api-valyse/?device_id=${device_id}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Key System Completed") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Valyse",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226474125082624093/vay.png?ex=6624e60a&is=6612710a&hm=50062b0afcd81b33ff2bcaa2b2e0a5d1e0a9696287931ef63df1b0672cdab5f2&' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Please Wait For Countdown Or Restart Roblox.```' },
                            { name: 'Device_id:', value: `${box}${device_id}${box}` },
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
                        title: "Failed To Whitelisted Valyse",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226474125082624093/vay.png?ex=6624e60a&is=6612710a&hm=50062b0afcd81b33ff2bcaa2b2e0a5d1e0a9696287931ef63df1b0672cdab5f2&' },
                        fields: [
                            { name: 'Status:', value: '```Either device id Is Invalid Or Api Is Not Working.```' },
                            { name: 'Device_id', value: `${box}${hwid}${box}` }
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
                    title: "Failed To Whitelisted Valyse",
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226474125082624093/vay.png?ex=6624e60a&is=6612710a&hm=50062b0afcd81b33ff2bcaa2b2e0a5d1e0a9696287931ef63df1b0672cdab5f2&' },
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
                title: "Invalid Valyse Link",
                thumbnail: {url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226474125082624093/vay.png?ex=6624e60a&is=6612710a&hm=50062b0afcd81b33ff2bcaa2b2e0a5d1e0a9696287931ef63df1b0672cdab5f2&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function evon(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Evon Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226472119190290473/evoncrop.png?ex=6624e42b&is=66126f2b&hm=bc3d55e3ed394ac041e5de5eaf80fa27901cbaaa95517666abe2ea8201a6e9cd&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://pandadevelopment.net/getkey?service=evon&hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-evon/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Evon Key",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226472119190290473/evoncrop.png?ex=6624e42b&is=66126f2b&hm=bc3d55e3ed394ac041e5de5eaf80fa27901cbaaa95517666abe2ea8201a6e9cd&' },
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
                        title: "Failed To Get Evon Key",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226472119190290473/evoncrop.png?ex=6624e42b&is=66126f2b&hm=bc3d55e3ed394ac041e5de5eaf80fa27901cbaaa95517666abe2ea8201a6e9cd&' },
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
                    title: "Failed To Get Evon key",
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226472119190290473/evoncrop.png?ex=6624e42b&is=66126f2b&hm=bc3d55e3ed394ac041e5de5eaf80fa27901cbaaa95517666abe2ea8201a6e9cd&' },
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
                title: "Invalid Evon Link",
                thumbnail: {url: 'https://cdn.discordapp.com/attachments/1220676543148457985/1226472119190290473/evoncrop.png?ex=6624e42b&is=66126f2b&hm=bc3d55e3ed394ac041e5de5eaf80fa27901cbaaa95517666abe2ea8201a6e9cd&' },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}




client.login(token);
