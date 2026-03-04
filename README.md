# Discord Voice Utility Bot Made by ChatGPT

Simple Discord bot built with **Node.js** and **discord.js v14**. This
bot can join voice channels by name, protect itself from mentions/DMs,
and run 24/7 with an automatic status scheduler.

------------------------------------------------------------------------

# Features

-   🎙 **Join Voice Channel by Name**
    -   Join voice channels without using ID
    -   Works even if the channel name contains emojis
-   🔒 **Owner Only Commands**
    -   Only the server owner can execute commands
-   🚫 **Mention & DM Protection**
    -   If someone mentions the bot → it replies:

    ```{=html}
    <!-- -->
    ```
        Do not mention or DM, this is bot!
-   ⚠ **Ignore @everyone / @here**
    -   Mass mentions are ignored
-   ⏱ **Automatic Status Scheduler**

  Time            Status
  --------------- ----------------
  06:00 - 12:00   Online
  12:00 - 18:00   Idle
  18:00 - 06:00   Do Not Disturb

-   🎭 **Custom Status**

```{=html}
<!-- -->
```
    bot voice selalu always

------------------------------------------------------------------------

# Requirements

-   Node.js **18+**
-   npm
-   Discord Bot Token
-   VPS or server (recommended)

------------------------------------------------------------------------

# Installation

## 1. Clone Repository

    git clone https://github.com/yourusername/discord-voice-bot.git
    cd discord-voice-bot

## 2. Install Dependencies

    npm install

Dependencies used: - discord.js - @discordjs/voice - dotenv

------------------------------------------------------------------------

## 3. Create Environment File

Create `.env` file:

    nano .env

Add your bot token:

    DISCORD_TOKEN=YOUR_BOT_TOKEN_HERE

------------------------------------------------------------------------

# Creating the Discord Bot

1.  Go to **Discord Developer Portal**
2.  Click **New Application**
3.  Open **Bot tab**
4.  Click **Add Bot**
5.  Copy the **Bot Token**
6.  Enable:

```{=html}
<!-- -->
```
    MESSAGE CONTENT INTENT

Save changes.

------------------------------------------------------------------------

# Invite Bot to Server

Open:

    OAuth2 → URL Generator

Select scopes:

    bot
    applications.commands

Permissions:

    View Channels
    Send Messages
    Connect
    Speak

Open generated link and invite bot to your server.

------------------------------------------------------------------------

# Running the Bot

Run manually:

    node index.js

If successful:

    ✅ Logged in as BotName

------------------------------------------------------------------------

# Running 24/7 with PM2

Install PM2:

    npm install -g pm2

Start bot:

    pm2 start index.js --name voice-bot

Save process:

    pm2 save

Enable auto start:

    pm2 startup

Follow the command shown after running `pm2 startup`.

------------------------------------------------------------------------

# Commands

Only **server owner** can use commands.

## Join Voice Channel

    !gawe <voice channel name>

Example:

    !gawe Nongkrong

or

    !gawe Chill Room

Bot will search the channel and join it.

------------------------------------------------------------------------

## Leave Voice Channel

    !libur

Bot disconnects from voice.

------------------------------------------------------------------------

# Message Behavior

  Action        Bot Response
  ------------- -----------------
  Mention bot   Warning message
  DM bot        Warning message
  @everyone     Ignored
  @here         Ignored

------------------------------------------------------------------------

# Project Structure

    discord-voice-bot
    │
    ├── index.js
    ├── package.json
    ├── .env
    └── README.md

------------------------------------------------------------------------

# Troubleshooting

## Bot not responding

Check: - Bot is online - `MESSAGE CONTENT INTENT` is enabled - Bot has
permissions

## Bot cannot join voice

Make sure permissions:

    Connect
    View Channel

------------------------------------------------------------------------

# License

MIT License
