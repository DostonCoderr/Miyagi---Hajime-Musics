const { Telegraf } = require('telegraf');
const path = require('path');
require('dotenv').config();

// Initialize bot with your token
const bot = new Telegraf(process.env.BOT_TOKEN);

// Define the music folder path
const musicFolderPath = path.join(__dirname, 'music', 'miyagi-endshpil');

const websiteUrl = 'https://miyagi.dostoncoder.uz';

// List of tracks with additional details
const musicTracks = [
  { 
    title: "Kosandra - Miyagi & Andy Panda", 
    filePath: path.join(musicFolderPath, 'track1.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Kosandra.jpg'),
    artist: 'Miyagi & Andy Panda',
    album: 'Kosandra Album',
    year: 2020,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "Там ревели горы - Miyagi & Andy Panda", 
    filePath: path.join(musicFolderPath, 'track2.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Tam Reveli.jpg'),
    artist: 'Miyagi & Andy Panda',
    album: 'Там ревели горы Album',
    year: 2020,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "Utopia - Miyagi & Andy Panda", 
    filePath: path.join(musicFolderPath, 'track3.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Utopia.jpg'),
    artist: 'Miyagi & Andy Panda',
    album: 'I Got Love Album',
    year: 2020,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "Minor - Miyagi & Andy Panda", 
    filePath: path.join(musicFolderPath, 'track4.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Minor.jpg'),
    artist: 'Miyagi & Endshpil',
    album: 'I Got Love Album',
    year: 2020,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "I Got Love - Miyagi & Endshpil", 
    filePath: path.join(musicFolderPath, 'track5.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'I got Love.jpg'),
    artist: 'Miyagi & Endshpil',
    album: 'I Got Love Album',
    year: 2020,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "Люби меня - Miyagi & Эндшпиль", 
    filePath: path.join(musicFolderPath, 'Miyagi & Эндшпиль feat. Sимптом - Люби меня.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Lubi menya.jpg'),
    artist: 'Miyagi & Endshpil',
    album: 'Люби меня Album',
    year: 2020,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "Заплаканная - Miyagi & Эндшпиль", 
    filePath: path.join(musicFolderPath, 'MiyaGi & Эндшпиль feat - Заплаканная.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Zaplakanaya.jpg'),
    artist: 'Miyagi & Endshpil',
    album: 'Заплаканная Album',
    year: 2017,
    genre: 'Hip-Hop/Rap'
  },
  { 
    title: "Fire Man - Miyagi & Эндшпиль", 
    filePath: path.join(musicFolderPath, 'MiyaGi & Эндшпиль - Fire Man.mp3'),
    albumCover: path.join(__dirname, 'images', 'album_covers', 'Zaplakanaya.jpg'),
    artist: 'Miyagi & Endshpil',
    album: 'Fire Man Album',
    year: 2018,
    genre: 'Hip-Hop/Rap'
  },
];

// Multi-language messages
const messages = {
  en: {
    welcome: '🎶 Welcome to the Miyagi & Endshpil Music Bot! 🎶\n\nChoose a track to listen to below. Select a song and enjoy the vibes!',
    backToMenu: '🔄 Returning to the main menu...',
    nowPlaying: '🎶 Now playing: {track}\n\nEnjoy the music! 🎧',
    trackDetails: '🌟 Album: {album}\nArtist: {artist}\nYear: {year}\nGenre: {genre}',
    backButton: '⏪ Back to Menu',
    languageChoice: 'Select your language: \n🇬🇧 English\n🇷🇺 Русский\n🇺🇿 O\'zbek',
    help: '💡 To start, choose a language and select a track to listen to. Use /back to go back to the main menu.',
    websiteLink: '🌐 Explore all Miyagi & Endshpil music on our website:\n[Visit Website](https://miyagi.dostoncoder.uz)',
  },
  ru: {
    welcome: '🎶 Добро пожаловать в бот Miyagi & Endshpil! 🎶\n\nВыберите трек для прослушивания. Нажмите на песню и наслаждайтесь музыкой!',
    backToMenu: '🔄 Возвращаемся в главное меню...',
    nowPlaying: '🎶 Сейчас играет: {track}\n\nНаслаждайтесь музыкой! 🎧',
    trackDetails: '🌟 Альбом: {album}\nИсполнитель: {artist}\nГод: {year}\nЖанр: {genre}',
    backButton: '⏪ В меню',
    languageChoice: 'Выберите язык: \n🇬🇧 English\n🇷🇺 Русский\n🇺🇿 O\'збек',
    help: '💡 Для начала выберите язык и выберите трек для прослушивания. Используйте /back для возвращения в главное меню.',
    websiteLink: '🌐 Все музыкальные композиции Miyagi & Endshpil можно найти на нашем сайте:\n[Visit Website](https://miyagi.dostoncoder.uz/ru)',
  },
  uz: {
    welcome: '🎶 Miyagi & Endshpil musiqasi botiga xush kelibsiz! 🎶\n\nQuyidagi trekni tinglash uchun tanlang. Qo\'shiqni tanlab, musiqa dunyosiga sho\'ng\'ing!',
    backToMenu: '🔄 Asosiy menyuga qaytish...',
    nowPlaying: '🎶 Hozir ijro etilmoqda: {track}\n\nMusiqani zavq bilan tinglang! 🎧',
    trackDetails: '🌟 Albom: {album}\nIjrochi: {artist}\nYil: {year}\nJanr: {genre}',
    backButton: '⏪ Menyuga qaytish',
    languageChoice: 'Tilni tanlang: \n🇬🇧 English\n🇷🇺 Русский\n🇺🇿 O\'zbek',
    help: '💡 Boshlash uchun tilni tanlang va trekni tinglashni boshlang. Asosiy menyuga qaytish uchun /back komandasidan foydalaning.',
    websiteLink: '🌐 Miyagi & Endshpil musiqasini saytimizda topishingiz mumkin:\n[Visit Website](https://miyagi.dostoncoder.uz/uz)',
  }
};

let currentLanguage = 'en';

// Command to start the bot and show language options
bot.command('start', (ctx) => {
  ctx.reply(messages[currentLanguage].languageChoice, {
    reply_markup: {
      inline_keyboard: [
        [{ text: '🇬🇧 English', callback_data: '1' }],
        [{ text: '🇷🇺 Русский', callback_data: '2' }],
        [{ text: '🇺🇿 O\'zbek', callback_data: '3' }]
      ]
    }
  });
});

// Command to display help message
bot.command('help', (ctx) => {
  ctx.reply(messages[currentLanguage].help, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{ text: '🌐 Visit Website', url: websiteUrl }],
      ],
    },
  });
});

// Command to go back to the main menu
bot.command('back', (ctx) => {
  ctx.reply(messages[currentLanguage].backToMenu, {
    reply_markup: {
      inline_keyboard: musicTracks.map((track, index) => {
        return [{ text: `🎵 ${track.title}`, callback_data: `track_${index}` }];
      })
    }
  });
});

// Handle language selection
// Language Selection Fix
bot.on('callback_query', async (ctx) => {
  const data = ctx.callbackQuery.data;

  if (data === '1') {
    currentLanguage = 'en';
    ctx.reply(messages.en.welcome, {
      reply_markup: {
        inline_keyboard: [
          ...musicTracks.map((track, index) => {
            return [{ text: `🎵 ${track.title}`, callback_data: `track_${index}` }];
          }),
          [{ text: '🌐  Explore all Miyagi & Endshpil music on our website', url: 'https://miyagi.dostoncoder.uz' }]
        ]
      }
    });
  } else if (data === '2') {
    currentLanguage = 'ru';
    ctx.reply(messages.ru.welcome, {
      reply_markup: {
        inline_keyboard: [
          ...musicTracks.map((track, index) => {
            return [{ text: `🎵 ${track.title}`, callback_data: `track_${index}` }];
          }),
          [{ text: '🌐  Все музыкальные композиции Miyagi & Endshpil можно найти на нашем сайте', url: 'https://miyagi.dostoncoder.uz' }]
        ]
      }
    });
  } else if (data === '3') {
    currentLanguage = 'uz';
    ctx.reply(messages.uz.welcome, {
      reply_markup: {
        inline_keyboard: [
          ...musicTracks.map((track, index) => {
            return [{ text: `🎵 ${track.title}`, callback_data: `track_${index}` }];
          }),
          [{ text: '🌐 Miyagi & Endshpil musiqasini saytimizda topishingiz mumkin', url: 'https://miyagi.dostoncoder.uz' }]
        ]
      }
    });
  } else if (data.startsWith('track_')) {
    const trackIndex = parseInt(data.split('_')[1], 10);
    const track = musicTracks[trackIndex];

    try {
      // Send the selected music track with album details
      await ctx.replyWithAudio({ source: track.filePath }, {
        caption: messages[currentLanguage].nowPlaying.replace("{track}", track.title),
        reply_markup: {
          inline_keyboard: [
            [{ text: messages[currentLanguage].backButton, callback_data: 'back' }]
          ]
        },
        parse_mode: 'Markdown',
      });

      // Send the album cover and details
      await ctx.replyWithPhoto({ source: track.albumCover }, {
        caption: messages[currentLanguage].trackDetails
          .replace("{album}", track.album)
          .replace("{artist}", track.artist)
          .replace("{year}", track.year)
          .replace("{genre}", track.genre),
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🌐 More Music in Here ', url: websiteUrl }],
          ]
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
});


// Start the bot
bot.launch();
