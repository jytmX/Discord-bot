require("dotenv").config();

const { Client, GatewayIntentBits, ChannelType } = require("discord.js");
const { joinVoiceChannel, getVoiceConnection } = require("@discordjs/voice");

const TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages, // biar bisa bales DM
  ],
});

// Hapus emoji & simbol, samakan jadi format “bersih”
function normalizeName(input) {
  return (
    input
      .replace(/[\u200D\uFE0F]/g, "") // buang variation selector & ZWJ
      .replace(/\p{Extended_Pictographic}/gu, "") // buang emoji pictographs
      .replace(/[^\p{L}\p{N}\s]/gu, " ") // keep huruf/angka/spasi
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim()
  );
}

// ===== Presence Scheduler =====
// 06:00 - 12:00  => online
// 12:00 - 18:00  => idle
// 18:00 - 06:00  => dnd
function getStatusByTime(date = new Date()) {
  const h = date.getHours(); // ikut timezone VPS
  if (h >= 6 && h < 12) return "online";
  if (h >= 12 && h < 18) return "idle";
  return "dnd";
}

function applyPresence() {
  if (!client.user) return;

  const status = getStatusByTime();

  client.user.setPresence({
    activities: [
      {
        name: "bot voice selalu always",
        type: 4, // Custom status
      },
    ],
    status,
  });

  console.log(`🕒 Presence updated -> ${status}`);
}

client.once("clientReady", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  // set sekali pas start
  applyPresence();

  // update tiap 60 detik biar ganti tepat waktu
  setInterval(applyPresence, 60 * 1000);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;

  // ===== RESPOND TO DM =====
  if (!msg.guild) {
    return msg.reply("Do not mention or DM, this is bot!");
  }

  // ===== IGNORE @everyone / @here =====
  if (msg.mentions.everyone) return;

  // ===== RESPOND IF BOT IS MENTIONED (ONLY DIRECT MENTION) =====
  if (client.user && msg.mentions.has(client.user)) {
    return msg.reply("Do not mention or DM, this is bot!");
  }

  // 🔒 cuma owner server untuk command
  if (msg.author.id !== msg.guild.ownerId) return;

  // ===== JOIN (pakai nama, boleh tanpa emoji) =====
  if (msg.content.startsWith("!gawe")) {
    const channelNameRaw = msg.content.split(" ").slice(1).join(" ").trim();
    if (!channelNameRaw) {
      return msg.reply("Masukin nama voice channel. Contoh: `!gawe NamaVoice`");
    }

    const target = normalizeName(channelNameRaw);

    const voiceChannels = msg.guild.channels.cache.filter(
      (ch) =>
        ch.type === ChannelType.GuildVoice ||
        ch.type === ChannelType.GuildStageVoice
    );

    // 1) exact match (setelah normalize)
    let channel = voiceChannels.find((ch) => normalizeName(ch.name) === target);

    // 2) fallback: partial match
    if (!channel) {
      channel = voiceChannels.find((ch) =>
        normalizeName(ch.name).includes(target)
      );
    }

    if (!channel) return msg.reply("Voice channel nggak ketemu.");

    joinVoiceChannel({
      channelId: channel.id,
      guildId: msg.guild.id,
      adapterCreator: msg.guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true,
    });

    return msg.reply(`✅ Joined ${channel.name}`);
  }

  // ===== LEAVE =====
  if (msg.content === "!libur") {
    const conn = getVoiceConnection(msg.guild.id);
    if (!conn) return msg.reply("Gue lagi nggak di voice.");
    conn.destroy();
    return msg.reply("👋 Cabut.");
  }
});

client.login(TOKEN);
