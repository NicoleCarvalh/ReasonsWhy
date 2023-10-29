const reasons = [
  "You have a kind heart",
  "You make me laugh",
  "You're always there for me",
  "You're incredibly smart",
  "You're supportive and understanding",
  "You're so thoughtful and caring",
  "Your humor brightens my days, your witty jokes make me laugh wholeheartedly",
  "You find joy in simple things, reminding me of the joy of life with you",
  "Your natural talent lightens moods, turning challenges into laughter and connection",
  "Your clever puns amaze me, adding fun to our conversations",
  "With you, laughter is fluent, creating unforgettable joyful memories",
  "Your teasing brings warmth and happiness wherever we are",
  "Your timing is impeccable, your smile on tough days is precious",
  "Your humor adds a unique dimension to us, every moment is laughter",
  "You find lightness in life, inspiring me to do the same",
  "Your infectious laughter brightens everyone's spirits",
  "Your quirks remind me why I fell for you",
  "Your laughter brings comfort, even in serious talks",
  "You're compassionate, Maria-ing challenges with care",
  "Your wisdom guides me like Professor Linguísa",
  "You stand with me, like loyal Rebecca and Rogério",
  "In tough times, your humor brings light and laughter",
  "You understand me, even in ‘code’ and jokes",
  "Your growth reflects dedication to us",
  "Your care for animals showcases compassion",
  "You're selfless and caring, qualities I admire",
  "You bring joy and happiness, like Rebecca and Rogério",
  "Your intelligence shines in teaching like Professor Linguísa",
  "Your faith motivates me to overcome challenges",
  "Your humor is a daily light, impeccable timing",
  "Your attention to detail speaks of your care",
  "Your kindness brings calm like a soothing melody",
  "Your passion inspires me, encouraging my pursuits",
  "Our connection is strong, our language of love",
  "Your affection shows in every gesture",
  "I love you because… I love you (^-^)",
  "Your optimism brightens my world",
  "Your growth inspires mine",
  "You make me feel cherished and loved",
];

let shuffledReasons = reasons.slice(); // cópia do array original

// embaralho do array de razões aleatoriamente
shuffledReasons.sort(() => Math.random() - 0.5);

let currentReasonIndex = 0;

function showNextReason() {
  const reasonText = document.getElementById("reasonText");
  reasonText.textContent = shuffledReasons[currentReasonIndex];

  currentReasonIndex = (currentReasonIndex + 1) % shuffledReasons.length;
}
