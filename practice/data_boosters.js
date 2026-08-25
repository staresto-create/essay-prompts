/* 作文練習題型　資料檔（原型）
   本檔所有英文句子均由本站自撰，非歷屆試題、非考生佳作。
   情境取材自歷屆學測作文題，以 anchor 欄標示。 */
window.BOOSTERS = {
  version: "0.1",
  updated: "2026-08-25",
  splitTS: [
    {
      id: "ST01",
      level: "易",
      anchor: "108 學年度學測作文題：臺灣最讓你引以為榮的兩個支撐論點",
      topicSentence: "Two things about Taiwan make me proud: our night markets and the way strangers help one another.",
      note: "",
      fields: [
        { k: "topic", label: "topic（你要談的主題）" },
        { k: "i1", label: "supporting idea \u2460" },
        { k: "i2", label: "supporting idea \u2461" }
      ],
      writeHint: "上方兩個支撐論點各補一個具體細節，用英文各寫一句。細節裡要有人事時地物、數字或動作，至少一樣，不能只寫 it is good。",
      checks: [
        "每句都有人事時地物、數字或動作，至少一樣",
        "兩句分別對準不同支撐論點，沒有重複",
        "寫的都在主題句答應的範圍內"
      ],
      models: [
        {
          zh: "台灣最讓我驕傲的不是什麼有名的景點，是兩件很平常的事：夜市，還有陌生人之間的那種幫忙。",
          en: [["What makes me proudest of Taiwan", 1], [" is ", 0], ["not a famous landmark but", 1], [" two ordinary things: our night markets and the way strangers help one another.", 0]],
          hint: "這是主題句的另一種寫法。「不是 A，是 B」用 not A but B。主詞用 What 開頭的名詞子句，比 Two things\u2026 有力。"
        },
        {
          zh: "在寧夏夜市，五十塊就有一碗蚵仔麵線，吃完還吃得下一碗剉冰。",
          en: [["At the Ningxia Night Market, ", 0], ["fifty dollars buys me", 1], [" a bowl of oyster noodles, and I still ", 0], ["have room for", 1], [" shaved ice.", 0]],
          hint: "「五十塊就有一碗」把金額當主詞：fifty dollars buys me\u2026。「還吃得下」用 have room for。"
        },
        {
          zh: "去年冬天我的機車拋錨，兩個不認識的人陪我推了十分鐘，推到最近的車行。",
          en: [["When my scooter died last winter, ", 0], ["two men I had never met", 1], [" pushed it with me for ten minutes to the nearest repair shop.", 0]],
          hint: "「不認識的人」用 two men I had never met，關係代名詞 whom 省略。"
        }
      ]
    },
    {
      id: "ST02",
      level: "中",
      anchor: "92 學年度學測作文題：Music Is An Important Part of Our Life",
      topicSentence: "Listening to music while I study makes me calmer and more focused.",
      note: "這一句用形容詞交代支撐論點。先把形容詞轉成可以下筆的支撐論點，才知道自己答應了什麼。",
      fields: [
        { k: "topic", label: "topic（你要談的主題）" },
        { k: "i1", label: "supporting idea \u2460" },
        { k: "i2", label: "supporting idea \u2461" }
      ],
      writeHint: "兩個支撐論點各補一個具體細節，用英文各寫一句。就寫你自己邊聽音樂邊念書的一次經驗。",
      checks: [
        "每句都有人事時地物、數字或動作，至少一樣",
        "兩句分別對準不同支撐論點，沒有重複",
        "寫的都在主題句答應的範圍內"
      ],
      models: [
        {
          zh: "我念書的時候聽音樂，它幫我做兩件事：讓我靜下來，還有讓我坐得住。",
          en: [["Music does two things for me", 1], [" when I sit down to study: ", 0], ["it slows me down, and it keeps me there", 1], [".", 0]],
          hint: "這是主題句的另一種寫法。冒號後面用兩個對等的動詞子句列出支撐論點，比用 calmer、more focused 兩個形容詞具體。「坐得住」是 keep sb there。"
        },
        {
          zh: "考試前聽二十分鐘鋼琴，心跳會慢下來，手也不會抖。",
          en: [["Twenty minutes of piano music", 1], [" before an exam slows my heartbeat and ", 0], ["stops my hands from shaking", 1], [".", 0]],
          hint: "「聽二十分鐘鋼琴」直接用時間片語當主詞。「不會抖」用 stop sth from V-ing。"
        },
        {
          zh: "每天晚上都放同一份歌單，數學作業本來要一小時，現在四十分鐘就寫完。",
          en: [["With the same playlist on", 1], [" every night, I finish my math homework in forty minutes ", 0], ["instead of", 1], [" an hour.", 0]],
          hint: "「放著同一份歌單」用 with + 名詞 + on 表附帶狀況。「本來\u2026現在\u2026」用 instead of 一併處理，不必寫兩句。"
        }
      ]
    },
    {
      id: "ST03",
      level: "難",
      anchor: "91 學年度學測補考作文題：Growing up is a/an ___ experience",
      topicSentence: "Growing up has been a confusing experience for me.",
      note: "這一句沒有把支撐論點列出來，但它已經圈定了範圍。先讀出範圍，再自己決定要寫哪兩個支撐論點——寫到範圍外，內容這一項就會因離題被扣分。",
      fields: [
        { k: "topic", label: "topic（你要談的主題）" },
        { k: "scope", label: "這句話圈定的範圍是？（可用中文）" },
        { k: "i1", label: "你決定要寫的 supporting idea \u2460" },
        { k: "i2", label: "你決定要寫的 supporting idea \u2461" }
      ],
      writeHint: "自訂的兩個支撐論點各補一個具體細節，用英文各寫一句。每句都要對得上 confusing，不能寫成困難或快樂。",
      checks: [
        "每句都有人事時地物、數字或動作，至少一樣",
        "兩句都對得上 confusing，不是困難或快樂",
        "寫的都在主題句答應的範圍內"
      ],
      models: [
        {
          zh: "如果要我用一個詞形容長大，我會說是「困惑」\u2014\u2014而且我到現在還說不上來為什麼。",
          en: [["If I had to choose one word for", 1], [" growing up, ", 0], ["it would be", 1], [" confusing\u2014and I still cannot say why.", 0]],
          hint: "這是主題句的另一種寫法。If I had to\u2026 it would be\u2026 是與現在事實相反的假設語氣，拿來起句很自然，也避開了 Growing up is\u2026 這個最平的開法。"
        },
        {
          zh: "我爸叫我有話直說，老師叫我少講話、要有禮貌。我到現在還分不出誰對。",
          en: [["My father tells me to ", 0], ["speak my mind", 1], [", but my teacher tells me to stay quiet and be polite; ", 0], ["I still cannot tell which one is right", 1], [".", 0]],
          hint: "「有話直說」是 speak one\u2019s mind。兩個相反的指令用 but 連接，後面用分號帶出自己的困惑。"
        },
        {
          zh: "去年我想當護理師，今年想做遊戲設計，我怕明年又會變。",
          en: [["Last year I wanted to be", 1], [" a nurse; this year I want to design games; I am afraid I will ", 0], ["change my mind", 1], [" again next year.", 0]],
          hint: "三個分句用分號並列，時間對照自己會浮出來，不必寫 first、second。"
        }
      ]
    }
  ],
  offTopic: [
    {
      id: "OT01",
      anchor: "112 學年度學測作文題：表情符號在溝通上的功能",
      kind: "warmup",
      topicSentence: "Emojis make our messages clearer and friendlier.",
      ideas: ["clearer（訊息更清楚）", "friendlier（語氣更親切）"],
      sentences: [
        "A smiling face at the end of a request keeps it from sounding like an order.",
        "When I type \u201cfine\u201d with a crying emoji, my friend knows I am not really fine.",
        "My older brother has just bought a new phone with a much bigger screen.",
        "A thumbs-up tells my classmate I agree without making her wait for a long reply."
      ],
      offIndex: 2,
      maps: { 0: 1, 1: 0, 3: 0 },
      why: "它換掉了主題。整句在談哥哥買手機，跟表情符號無關。",
      model: {
        zh: "我在問句後面加一個問號臉，我哥就知道我是不懂，不是在生氣，他就會解釋而不是跟我吵。",
        en: [["A puzzled face after my question tells my brother", 1], [" I am confused, not angry, so he explains ", 0], ["instead of arguing", 1], [".", 0]],
        hint: "把表情符號當主詞：A puzzled face tells sb…。「而不是」用 instead of + V-ing。"
      }
    },
    {
      id: "OT02",
      anchor: "114 學年度學測作文題：對放颱風假的看法與經驗",
      kind: "main",
      topicSentence: "A typhoon day is not always a holiday; it can be tiring and even dangerous.",
      ideas: ["tiring（很累人）", "dangerous（很危險）"],
      sentences: [
        "Typhoons usually form over the warm ocean water east of the Philippines.",
        "My mother spent the whole morning mopping up the water that came in under the door.",
        "A falling signboard on our street nearly hit a scooter rider.",
        "I had to redo my homework because the power went out and my laptop died."
      ],
      offIndex: 0,
      maps: { 1: 0, 2: 1, 3: 0 },
      why: "主題還在講颱風，但談的是颱風怎麼形成，不在 tiring／dangerous 這兩個支撐論點裡。",
      model: {
        zh: "颱風假那一整天，我家都在貼窗戶、把植物搬進來，到晚上手都酸了。",
        en: [["My family ", 0], ["spent the whole typhoon day taping windows and carrying plants inside", 1], [", and ", 0], ["by evening", 1], [" my arms ached.", 0]],
        hint: "spend + 時間 + V-ing。「到晚上」用 by evening。"
      }
    },
    {
      id: "OT03",
      anchor: "104 學年度學測作文題：暑假閱讀書籍的選擇與理由",
      kind: "main",
      topicSentence: "I would choose the book about ocean animals because it fits my interests and my future plans.",
      ideas: ["fits my interests（合我的興趣）", "fits my future plans（合我的規劃）"],
      sentences: [
        "I have kept a small tank of shrimp since junior high and never get tired of watching them.",
        "I hope to study marine biology in college, so I need to know more about sea life.",
        "Reading about how sea turtles find their way home is the kind of thing I do for fun.",
        "The book has a beautiful cover and is on sale at the bookstore near my school."
      ],
      offIndex: 3,
      maps: { 0: 0, 1: 1, 2: 0 },
      why: "主題還在講這本書，但談的是封面和價錢，不在 interests／future plans 這兩個支撐論點裡。",
      model: {
        zh: "這本書有一整章在講深海生物，那正好是我晚上熬夜在網路上看的東西。",
        en: [["The book has a whole chapter on deep-sea creatures, ", 0], ["which is exactly what", 1], [" I ", 0], ["stay up late reading about", 1], [" online.", 0]],
        hint: "用 which 補述前面整件事。「熬夜看」是 stay up late reading。"
      }
    }
  ],
  outline: [
    {
      id: "OL01",
      anchor: "115 學年度學測作文題：寵物在人們生活中的角色",
      task1: "描述圖片中呈現的現象。",
      task2: "根據自身經驗或觀察，說明這個現象的原因以及可能的影響。"
    },
    {
      id: "OL02",
      anchor: "108 學年度學測作文題：臺灣最讓你引以為榮的兩個支撐論點",
      task1: "描述兩個讓你引以為榮的支撐論點或事物，並說明它們為何讓你引以為榮。",
      task2: "說明可以用什麼方式介紹或行銷這些臺灣特色，讓世人更了解臺灣。"
    }
  ],
  endings: [
    { k: "總結重點", d: "把兩段講過的事收成一句。最穩，也最容易寫成空話——要收成一句話，不是把前面再抄一遍。" },
    { k: "預測未來", d: "說這件事接下來會怎麼發展。適合寫社會現象類的題目。" },
    { k: "給讀者建議", d: "告訴讀者可以怎麼做。適合寫問題與解決類的題目。" }
  ],
  aiPrompt: [
    "我是台灣的高中生，正在準備學測英文作文。以下是我自己寫的英文句子，請幫我修改。",
    "",
    "請遵守以下規則：",
    "1. 不要整段重寫。保留我原本的句子結構和用字，只改真正錯的地方。",
    "2. 請先看我寫的句子，判斷我目前的程度，改完之後不要超過那個程度太多。可以用我已經用過的字和句型，或高中課本裡看得到的說法；不要換成我明顯不會用的字。",
    "3. 每一句最多只建議一個更好的說法，並且告訴我為什麼原本的不好。如果你覺得我還有餘力，可以在最後另外附一句「進階版」，並標明那是進階版。",
    "4. 錯誤請分類標明：文法、用字、拼字、標點。",
    "5. 說明用中文，修改後的句子用英文。",
    "6. 最後告訴我：如果這是學測作文的一部分，內容和組織這兩項會不會被扣分，為什麼。"
  ]
};
