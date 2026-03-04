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

    bot voice selalu always

------------------------------------------------------------------------

# Requirements

-   Node.js **18+**
-   npm
-   Discord Bot Token
-   VPS or server (recommended)

------------------------------------------------------------------------

## Install & Setup Project (Zero → Running)

> Example VPS path: `~/projek/bot`

### A. Create project folder
```bash
mkdir -p ~/projek/bot
cd ~/projek/bot
````

### B. Make sure Node.js 18+ is installed

If your Node version is below 18, upgrade it (example for Ubuntu):

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
```

### C. Initialize the project (create `package.json`)

```bash
npm init -y
```

### D. Install dependencies

```bash
npm install discord.js @discordjs/voice dotenv
```

After installing, the following files/folders will appear:

* `node_modules/`
* `package-lock.json`

---

## 4) Create Token File `.env`

Create a `.env` file in the root project folder (same level as `index.js`):

```bash
nano .env
```

Add your Discord bot token:

```env
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
```

> Do not use quotes and do not add extra spaces.

---
# Creating the Discord Bot

1.  Go to **Discord Developer Portal**
2.  Click **New Application**
3.  Open **Bot tab**
4.  Click **Add Bot**
5.  Copy the **Bot Token**
6.  Enable:


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
