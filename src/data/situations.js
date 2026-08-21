export const situations = [
  {
    id: 'konbini',
    title: 'Convenience Store',
    icon: '🏪',
    description: 'Paying at a Konbini',
    steps: [
      {
        speaker: 'staff',
        english: 'Do you have a point card?',
        japanese: 'ポイントカードはお持ちですか？',
        romaji: 'Pointo kaado wa o-mochi desu ka?',
        action: 'Shake head or say no.'
      },
      {
        speaker: 'user',
        english: 'I do not have one.',
        japanese: 'ないです。',
        romaji: 'Nai desu.',
        action: ''
      },
      {
        speaker: 'staff',
        english: 'Do you need a plastic bag?',
        japanese: 'レジ袋はご利用ですか？',
        romaji: 'Rejibukuro wa go-riyou desu ka?',
        action: 'Nod for yes, shake head for no.'
      },
      {
        branches: [
          {
            label: 'If you need a bag',
            speaker: 'user',
            english: 'Yes, please.',
            japanese: 'はい、お願いします。',
            romaji: 'Hai, onegaishimasu.',
            action: ''
          },
          {
            label: 'If you have your own bag',
            speaker: 'user',
            english: 'No, thank you.',
            japanese: '大丈夫です。',
            romaji: 'Daijoubu desu.',
            action: ''
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'Would you like the bento warmed up?',
        japanese: 'お弁当温めますか？',
        romaji: 'Obentou atatamemasu ka?',
        action: 'Only asked if you bought a bento/meal.'
      },
      {
        branches: [
          {
            label: 'Warm it up',
            speaker: 'user',
            english: 'Yes, please.',
            japanese: 'はい、お願いします。',
            romaji: 'Hai, onegaishimasu.',
            action: ''
          },
          {
            label: 'Leave it cold',
            speaker: 'user',
            english: 'It\'s fine as is.',
            japanese: 'そのままで大丈夫です。',
            romaji: 'Sono mama de daijoubu desu.',
            action: ''
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'How would you like to pay?',
        japanese: 'お支払い方法は？',
        romaji: 'O-shiharai houhou wa?',
        action: 'Point to the terminal or answer verbally.'
      },
      {
        branches: [
          {
            label: 'Credit Card',
            speaker: 'user',
            english: 'By credit card, please.',
            japanese: 'クレジットカードで。',
            romaji: 'Kurejitto kaado de.',
            action: 'Insert card into terminal.'
          },
          {
            label: 'IC Card (Suica/Pasmo)',
            speaker: 'user',
            english: 'By Suica, please.',
            japanese: 'スイカで。',
            romaji: 'Suika de.',
            action: 'Tap your card/phone.'
          },
          {
            label: 'Cash',
            speaker: 'user',
            english: 'By cash.',
            japanese: '現金で。',
            romaji: 'Genkin de.',
            action: 'Put money in the tray, not their hands.'
          }
        ]
      }
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: '🍜',
    description: 'Entering and ordering food',
    steps: [
      {
        speaker: 'staff',
        english: 'Welcome! How many people?',
        japanese: 'いらっしゃいませ！何名様ですか？',
        romaji: 'Irasshaimase! Nanmei-sama desu ka?',
        action: 'Hold up fingers for the number.'
      },
      {
        speaker: 'user',
        english: 'Two people.',
        japanese: '2人です。',
        romaji: 'Futari desu.',
        action: '1: Hitori, 2: Futari, 3: Sannin, 4: Yonin'
      },
      {
        branches: [
          {
            label: 'If you want to look at the menu first',
            speaker: 'user',
            english: 'May I have an English menu?',
            japanese: '英語のメニューはありますか？',
            romaji: 'Eigo no menyuu wa arimasu ka?',
            action: 'Many tourist places have them.'
          },
          {
            label: 'If you are ready to order immediately',
            speaker: 'user',
            english: 'Excuse me! (To call staff)',
            japanese: 'すみません！',
            romaji: 'Sumimasen!',
            action: 'Raise hand slightly.'
          }
        ]
      },
      {
        speaker: 'user',
        english: 'This one, please.',
        japanese: 'これをお願いします。',
        romaji: 'Kore o onegaishimasu.',
        action: 'Point to the menu item.'
      },
      {
        speaker: 'staff',
        english: 'Understood. Please wait a moment.',
        japanese: 'かしこまりました。少々お待ちください。',
        romaji: 'Kashikomarimashita. Shoushou omachi kudasai.',
        action: ''
      },
      {
        branches: [
          {
            label: 'To pay the bill',
            speaker: 'user',
            english: 'Check, please.',
            japanese: 'お会計お願いします。',
            romaji: 'Okaikei onegaishimasu.',
            action: 'Usually pay at the front register.'
          },
          {
            label: 'To ask where the restroom is',
            speaker: 'user',
            english: 'Where is the restroom?',
            japanese: 'トイレはどこですか？',
            romaji: 'Toire wa doko desu ka?',
            action: ''
          }
        ]
      }
    ]
  },
  {
    id: 'directions',
    title: 'Directions',
    icon: '🚉',
    description: 'Asking for the station or places',
    steps: [
      {
        speaker: 'user',
        english: 'Excuse me.',
        japanese: 'すみません。',
        romaji: 'Sumimasen.',
        action: 'Approach someone politely.'
      },
      {
        speaker: 'user',
        english: 'Where is [Shinjuku] station?',
        japanese: '[新宿] 駅はどこですか？',
        romaji: '[Shinjuku] eki wa doko desu ka?',
        action: 'Replace bracketed text with your destination.'
      },
      {
        branches: [
          {
            label: 'If it\'s close by',
            speaker: 'staff',
            english: 'It\'s straight ahead / right / left.',
            japanese: 'まっすぐ / 右 / 左 です。',
            romaji: 'Massugu / migi / hidari desu.',
            action: 'Pay attention to their hand gestures.'
          },
          {
            label: 'If it\'s far',
            speaker: 'staff',
            english: 'It\'s quite far. You should take a bus.',
            japanese: '少し遠いです。バスに乗った方がいいです。',
            romaji: 'Sukoshi tooi desu. Basu ni notta hou ga ii desu.',
            action: ''
          }
        ]
      },
      {
        branches: [
          {
            label: 'If you want to walk',
            speaker: 'user',
            english: 'How many minutes does it take on foot?',
            japanese: '歩いて何分かかりますか？',
            romaji: 'Aruite nanpun kakarimasu ka?',
            action: ''
          },
          {
            label: 'Just say thanks',
            speaker: 'user',
            english: 'Thank you very much.',
            japanese: 'ありがとうございます。',
            romaji: 'Arigatou gozaimasu.',
            action: 'Bow slightly.'
          }
        ]
      }
    ]
  },
  {
    id: 'hotel',
    title: 'Hotel Check-in',
    icon: '🏨',
    description: 'Checking in and out of your room',
    steps: [
      {
        speaker: 'user',
        english: 'Check-in, please.',
        japanese: 'チェックインをお願いします。',
        romaji: 'Chekkuin o onegaishimasu.',
        action: 'Hand over passport.'
      },
      {
        speaker: 'user',
        english: 'My name is [Name].',
        japanese: '予約した [Name] です。',
        romaji: 'Yoyaku shita [Name] desu.',
        action: 'Wait for them to confirm.'
      },
      {
        speaker: 'staff',
        english: 'Could you fill out this form?',
        japanese: 'こちらにご記入をお願いします。',
        romaji: 'Kochira ni gokinyuu o onegaishimasu.',
        action: 'Fill in your details (name, address in Japan, etc.).'
      },
      {
        branches: [
          {
            label: 'Asking about breakfast',
            speaker: 'user',
            english: 'What time is breakfast?',
            japanese: '朝食は何時ですか？',
            romaji: 'Choushoku wa nanji desu ka?',
            action: ''
          },
          {
            label: 'Asking about luggage',
            speaker: 'user',
            english: 'Can you keep my luggage?',
            japanese: '荷物を預かってもらえますか？',
            romaji: 'Nimotsu o azukatte moraemasu ka?',
            action: 'Very useful before check-in or after check-out.'
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'Here is your room key.',
        japanese: 'こちらがルームキーです。',
        romaji: 'Kochira ga ruumukii desu.',
        action: 'Receive the key and room number.'
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping',
    icon: '🛍️',
    description: 'Clothes, souvenirs, and tax-free',
    steps: [
      {
        branches: [
          {
            label: 'Just browsing',
            speaker: 'user',
            english: 'I\'m just looking.',
            japanese: '見ているだけです。',
            romaji: 'Mite iru dake desu.',
            action: 'Say this if staff approach you.'
          },
          {
            label: 'Looking for something specific',
            speaker: 'user',
            english: 'Do you have [this]?',
            japanese: '[これ] はありますか？',
            romaji: '[Kore] wa arimasu ka?',
            action: 'Show them a picture on your phone.'
          }
        ]
      },
      {
        speaker: 'user',
        english: 'Can I try this on?',
        japanese: '試着してもいいですか？',
        romaji: 'Shichaku shite mo ii desu ka?',
        action: 'Always ask before taking clothes into the fitting room.'
      },
      {
        speaker: 'staff',
        english: 'Please take off your shoes.',
        japanese: '靴を脱いでください。',
        romaji: 'Kutsu o nuide kudasai.',
        action: 'Many fitting rooms require taking off shoes.'
      },
      {
        branches: [
          {
            label: 'If you want to buy it',
            speaker: 'user',
            english: 'I will take this.',
            japanese: 'これを買います。',
            romaji: 'Kore o kaimasu.',
            action: ''
          },
          {
            label: 'If it doesn\'t fit',
            speaker: 'user',
            english: 'Do you have a larger/smaller size?',
            japanese: '大きい/小さいサイズはありますか？',
            romaji: 'Ookii / chiisai saizu wa arimasu ka?',
            action: ''
          }
        ]
      },
      {
        speaker: 'user',
        english: 'Is tax-free available?',
        japanese: '免税できますか？',
        romaji: 'Menzei dekimasu ka?',
        action: 'You will need your physical passport.'
      }
    ]
  },
  {
    id: 'transport',
    title: 'Public Transport',
    icon: '🚃',
    description: 'Trains, buses, and IC cards',
    steps: [
      {
        speaker: 'user',
        english: 'Excuse me.',
        japanese: 'すみません。',
        romaji: 'Sumimasen.',
        action: ''
      },
      {
        branches: [
          {
            label: 'Asking about train destination',
            speaker: 'user',
            english: 'Does this train go to [Shibuya]?',
            japanese: 'この電車は[渋谷]に行きますか？',
            romaji: 'Kono densha wa [Shibuya] ni ikimasu ka?',
            action: 'Point to the train.'
          },
          {
            label: 'Recharging an IC Card',
            speaker: 'user',
            english: 'Where can I charge my Suica?',
            japanese: 'スイカのチャージはどこですか？',
            romaji: 'Suika no chaaji wa doko desu ka?',
            action: 'They will point you to the ticket machines.'
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'Yes, it does. / No, it doesn\'t.',
        japanese: 'はい、行きます。/ いいえ、行きません。',
        romaji: 'Hai, ikimasu. / Iie, ikimasen.',
        action: ''
      },
      {
        branches: [
          {
            label: 'If on a bus and want to pay',
            speaker: 'user',
            english: 'Do you accept IC cards?',
            japanese: 'ICカードは使えますか？',
            romaji: 'IC kaado wa tsukaemasu ka?',
            action: ''
          },
          {
            label: 'If you missed your stop',
            speaker: 'user',
            english: 'I want to get off!',
            japanese: '降ります！',
            romaji: 'Orimasu!',
            action: 'Say loudly if the doors are closing.'
          }
        ]
      }
    ]
  },
  {
    id: 'izakaya',
    title: 'Izakaya (Pub)',
    icon: '🍻',
    description: 'Drinking and eating tapas style',
    steps: [
      {
        speaker: 'staff',
        english: 'What would you like to drink?',
        japanese: 'お飲み物は何にしますか？',
        romaji: 'Onomimono wa nan ni shimasu ka?',
        action: 'Usually ordered before looking at the food menu.'
      },
      {
        branches: [
          {
            label: 'Order Beer',
            speaker: 'user',
            english: 'Draft beer, please.',
            japanese: '生ビールお願いします。',
            romaji: 'Nama biiru onegaishimasu.',
            action: ''
          },
          {
            label: 'Order Non-Alcoholic',
            speaker: 'user',
            english: 'Oolong tea, please.',
            japanese: 'ウーロン茶お願いします。',
            romaji: 'Uuroncha onegaishimasu.',
            action: ''
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'Here is your Otoshi (Table Charge App)',
        japanese: 'お通しです。',
        romaji: 'Otoshi desu.',
        action: 'A mandatory small appetizer fee (usually 300-500 yen).'
      },
      {
        branches: [
          {
            label: 'Asking for recommendations',
            speaker: 'user',
            english: 'What do you recommend?',
            japanese: 'おすすめは何ですか？',
            romaji: 'Osusume wa nan desu ka?',
            action: ''
          },
          {
            label: 'Ordering more',
            speaker: 'user',
            english: 'One more of this, please.',
            japanese: 'これもう一つお願いします。',
            romaji: 'Kore mou hitotsu onegaishimasu.',
            action: 'Point to an empty glass or plate.'
          }
        ]
      },
      {
        speaker: 'user',
        english: 'Cheers!',
        japanese: '乾杯！',
        romaji: 'Kanpai!',
        action: 'Clink glasses together.'
      }
    ]
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    icon: '💊',
    description: 'Getting medicine at a drugstore',
    steps: [
      {
        speaker: 'user',
        english: 'Excuse me, I am looking for medicine.',
        japanese: 'すみません、薬を探しています。',
        romaji: 'Sumimasen, kusuri o sagashite imasu.',
        action: ''
      },
      {
        branches: [
          {
            label: 'For a Headache',
            speaker: 'user',
            english: 'I have a headache.',
            japanese: '頭が痛いです。',
            romaji: 'Atama ga itai desu.',
            action: 'Point to your head.'
          },
          {
            label: 'For a Stomachache',
            speaker: 'user',
            english: 'I have a stomachache.',
            japanese: 'お腹が痛いです。',
            romaji: 'Onaka ga itai desu.',
            action: 'Point to your stomach.'
          },
          {
            label: 'For a Cold',
            speaker: 'user',
            english: 'I have a cold.',
            japanese: '風邪を引きました。',
            romaji: 'Kaze o hikimashita.',
            action: ''
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'This one is good for that.',
        japanese: 'こちらがいいですよ。',
        romaji: 'Kochira ga ii desu yo.',
        action: 'They will hand you a box.'
      },
      {
        branches: [
          {
            label: 'Asking how to take it',
            speaker: 'user',
            english: 'How many pills a day?',
            japanese: '1日に何錠ですか？',
            romaji: 'Ichi-nichi ni nanjou desu ka?',
            action: ''
          },
          {
            label: 'Just buying it',
            speaker: 'user',
            english: 'I will take this.',
            japanese: 'これにします。',
            romaji: 'Kore ni shimasu.',
            action: ''
          }
        ]
      }
    ]
  },
  {
    id: 'shrine',
    title: 'Shrine / Temple',
    icon: '⛩️',
    description: 'Etiquette and Goshuin stamps',
    steps: [
      {
        branches: [
          {
            label: 'At a Shinto Shrine (Torii Gate)',
            speaker: 'user',
            english: '(Action only)',
            japanese: '(一礼)',
            romaji: '(Bow once)',
            action: 'Bow once before walking through the Torii gate. Walk on the sides, not the center.'
          },
          {
            label: 'At the Water Pavilion (Chozuya)',
            speaker: 'user',
            english: '(Action only)',
            japanese: '(手水舎)',
            romaji: '(Chozuya)',
            action: 'Wash left hand, right hand, rinse mouth (don\'t touch ladle to mouth), wash ladle.'
          }
        ]
      },
      {
        branches: [
          {
            label: 'Praying at a Shrine (Shinto)',
            speaker: 'user',
            english: 'Bow twice, clap twice, pray, bow once.',
            japanese: '二礼二拍手一礼',
            romaji: 'Ni-rei ni-hakushu ichi-rei',
            action: 'Throw a coin (5 yen is lucky) before praying.'
          },
          {
            label: 'Praying at a Temple (Buddhist)',
            speaker: 'user',
            english: 'Bow, pray silently, bow.',
            japanese: '合掌一礼',
            romaji: 'Gasshou ichi-rei',
            action: 'Do NOT clap your hands at a Buddhist temple.'
          }
        ]
      },
      {
        speaker: 'user',
        english: 'Can I get a Goshuin (stamp) please?',
        japanese: '御朱印をお願いします。',
        romaji: 'Goshuin o onegaishimasu.',
        action: 'Hand them your Goshuin-cho (stamp book) open to the blank page.'
      }
    ]
  },
  {
    id: 'cafe',
    title: 'Coffee Shop',
    icon: '☕',
    description: 'Ordering coffee and seating',
    steps: [
      {
        speaker: 'staff',
        english: 'For here or to go?',
        japanese: '店内でお召し上がりですか？',
        romaji: 'Tennai de omeshiagari desu ka?',
        action: ''
      },
      {
        branches: [
          {
            label: 'For here',
            speaker: 'user',
            english: 'For here, please.',
            japanese: '店内で。',
            romaji: 'Tennai de.',
            action: ''
          },
          {
            label: 'To go',
            speaker: 'user',
            english: 'To go, please.',
            japanese: '持ち帰りで。',
            romaji: 'Mochikaeri de.',
            action: ''
          }
        ]
      },
      {
        speaker: 'staff',
        english: 'What would you like to order?',
        japanese: 'ご注文をどうぞ。',
        romaji: 'Gochuumon o douzo.',
        action: ''
      },
      {
        branches: [
          {
            label: 'Order Hot Coffee',
            speaker: 'user',
            english: 'Hot coffee, please.',
            japanese: 'ホットコーヒーお願いします。',
            romaji: 'Hotto koohii onegaishimasu.',
            action: ''
          },
          {
            label: 'Order Iced Latte',
            speaker: 'user',
            english: 'Iced latte, please.',
            japanese: 'アイスラテお願いします。',
            romaji: 'Aisu rate onegaishimasu.',
            action: ''
          }
        ]
      },
      {
        branches: [
          {
            label: 'Asking for Milk/Sugar',
            speaker: 'user',
            english: 'Do you have milk and sugar?',
            japanese: 'ミルクと砂糖はありますか？',
            romaji: 'Miruku to satou wa arimasu ka?',
            action: 'Usually found at a separate counter.'
          },
          {
            label: 'Asking for Wi-Fi',
            speaker: 'user',
            english: 'Do you have Wi-Fi?',
            japanese: 'Wi-Fiはありますか？',
            romaji: 'Wi-Fi wa arimasu ka?',
            action: ''
          }
        ]
      }
    ]
  }
];
