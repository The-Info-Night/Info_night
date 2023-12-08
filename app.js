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
  'Tip 10: Educate yourself and others about environmental issues and sustainability practices.'
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
