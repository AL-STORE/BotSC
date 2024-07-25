const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const validUrl = require('valid-url');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('api-test')
        .setDescription('Test link api')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('URL api')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('method')
                .setDescription('HTTP method (GET, POST, etc.)')
                .setRequired(true)
                .addChoices(
                    { name: 'GET', value: 'GET' },
                    { name: 'POST', value: 'POST' },
                    { name: 'PUT', value: 'PUT' },
                    { name: 'DELETE', value: 'DELETE' }
                ))
        .addStringOption(option =>
            option.setName('authmethod')
                .setDescription('Authentication method')
                .setRequired(true)
                .addChoices(
                    { name: 'Bearer Token', value: 'Bearer' },
                    { name: 'Basic Auth', value: 'Basic' },
                    { name: 'Custom', value: 'Custom' },
                    { name: 'No Auth', value: 'None' }
                ))
        .addStringOption(option =>
            option.setName('queryparams')
                .setDescription('Query parameters as a JSON string')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('authheader')
                .setDescription('Authorization header')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('body')
                .setDescription('Request body as a JSON string')
                .setRequired(false)),
    async execute(interaction) {
        const url = interaction.options.getString('url');
        const method = interaction.options.getString('method').toUpperCase();
        const queryParamsString = interaction.options.getString('queryparams');
        const authMethod = interaction.options.getString('authmethod');
        const authHeader = interaction.options.getString('authheader');
        const bodyString = interaction.options.getString('body');
        let queryParams = {};
        let body = {};

        if (!validUrl.isUri(url)) {
            return interaction.reply('Invalid URL. Please provide a valid URL.');
        }

        if (queryParamsString) {
            try {
                queryParams = JSON.parse(queryParamsString);
            } catch (error) {
                return interaction.reply('Invalid query parameters. Please provide a valid JSON string.');
            }
        }

        if (bodyString && method !== 'GET') {
            try {
                body = JSON.parse(bodyString);
            } catch (error) {
                return interaction.reply('Invalid body. Please provide a valid JSON string.');
            }
        }

        const config = {
            method,
            url,
            params: queryParams,
            headers: {}
        };

        if (authMethod === 'Bearer' && authHeader) {
            config.headers['Authorization'] = `Bearer ${authHeader}`;
        } else if (authMethod === 'Basic' && authHeader) {
            config.headers['Authorization'] = `Basic ${authHeader}`;
        } else if (authMethod === 'Custom' && authHeader) {
            config.headers['Authorization'] = authHeader;
        }

        if (method !== 'GET') {
            config.data = body;
        }

        try {
            const response = await axios(config);
            const responseData = JSON.stringify(response.data, null, 2);
            await interaction.reply(`API Response:\n\`\`\`json\n${responseData}\n\`\`\``);
        } catch (error) {
            const errorMessage = error.response ? JSON.stringify(error.response.data, null, 2) : error.message;
            await interaction.reply(`Failed to fetch API. Error: ${errorMessage}`);
        }
    },
};
