const darkModeToggle = document.getElementById('dark-mode-toggle');
const prevNoteButton = document.getElementById('prev-note');
const nextNoteButton = document.getElementById('next-note');
const noteTextDiv = document.getElementById('note-text');

const ecologyTips = [
  'Tip 1: Cut down on single-use plastics by carrying reusable bags, bottles, and containers.',
  'Tip 2: Reduce water waste by fixing leaks and installing low-flow fixtures.',
  'Tip 3: Conserve energy by unplugging devices when not in use and switching to LED lighting.',
  'Tip 4: Compost organic waste to reduce landfill build-up and produce natural fertilizer.',
  'Tip 5: Support renewable energy sources like solar or wind power for your home.',
  'Tip 6: Choose sustainable food options, such as locally sourced and organic produce.',
  'Tip 7: Reduce car emissions by carpooling, biking, or using public transportation.',
  'Tip 8: Promote biodiversity by planting native species in your garden.',
  'Tip 9: Engage in responsible recycling by properly sorting your waste.',
  'Tip 10: Educate yourself and others about environmental issues and sustainability practices.',
  'Tip 11: Save electricity by using natural light whenever possible and turning off lights when they are not needed.',
  'Tip 12: Minimize chemical use in your garden and household cleaning to protect local waterways.',
  'Tip 13: Participate in or organize a community cleanup day to remove trash from local parks and waterways.',
  'Tip 14: Opt for eco-friendly transportation options like electric vehicles or hybrid cars.',
  'Tip 15: Encourage local leaders to invest in green infrastructure and public spaces.',
  'Tip 16: Reduce paper waste by opting for digital receipts and bills where possible.',
  'Tip 17: Use rainwater harvesting systems to collect rainwater for garden irrigation.',
  'Tip 18: Plant a tree every year – trees absorb carbon dioxide and provide oxygen.',
  'Tip 19: Support businesses and products that have sustainable practices and ethical sourcing.',
  'Tip 20: Take shorter showers and install water-saving showerheads to conserve water.'
];

let currentTipIndex = 0;

function updateNoteText() {
  noteTextDiv.innerHTML = '<p>' + ecologyTips[currentTipIndex] + '</p>';
}

prevNoteButton.addEventListener('click', function() {
  currentTipIndex = (currentTipIndex - 1 + ecologyTips.length) % ecologyTips.length;
  updateNoteText();
});

nextNoteButton.addEventListener('click', function() {
  currentTipIndex = (currentTipIndex + 1) % ecologyTips.length;
  updateNoteText();
});

updateNoteText();
