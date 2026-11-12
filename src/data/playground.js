/** Small, shared catalogues for controls, reactions and saved preferences. */
export const PERSONALITIES = {
  curious: { key: 'personality.curious', sleepAfter: 24, pace: 1, tolerance: 5 },
  affectionate: { key: 'personality.affectionate', sleepAfter: 22, pace: 0.8, tolerance: 6 },
  calm: { key: 'personality.calm', sleepAfter: 18, pace: 0.6, tolerance: 5 },
  mischievous: { key: 'personality.mischievous', sleepAfter: 30, pace: 1.35, tolerance: 3 },
  dreamy: { key: 'personality.dreamy', sleepAfter: 14, pace: 0.5, tolerance: 4 },
  energetic: { key: 'personality.energetic', sleepAfter: 36, pace: 1.6, tolerance: 5 },
};
export const FLAVOR_PERSONALITIES = {
  soda: 'curious', ichigo: 'affectionate', melon: 'calm', lemon: 'mischievous',
  budou: 'dreamy', aurora: 'curious', coffee: 'energetic', honey: 'dreamy',
  matcha: 'calm', peach: 'affectionate', chocolate: 'affectionate', coconut: 'calm',
};
export const EMOTIONS = [
  { id: 'happy', key: 'emotion.happy', mark: '◡' },
  { id: 'angry', key: 'emotion.angry', mark: '⌁' },
  { id: 'surprise', key: 'emotion.surprise', mark: 'o' },
  { id: 'affection', key: 'emotion.affection', mark: '♡' },
  { id: 'wink', key: 'emotion.wink', mark: ';)' },
  { id: 'sleep', key: 'emotion.sleep', mark: 'z' },
];
export const ACTIONS = [
  { id: 'jump', key: 'action.jump' },
  { id: 'dance', key: 'action.dance' },
  { id: 'spin', key: 'action.spin' },
  { id: 'sneeze', key: 'action.sneeze' },
  { id: 'nap', key: 'action.nap' },
  { id: 'hug', key: 'action.hug' },
];
export const FIRE_MUG_ACTIONS = ['pick_mug', 'bring_mug', 'put_mug', 'toss_mug', 'drink'];
export const TOYS = [
  { id: 'none', key: 'toy.none' },
  { id: 'sponge', key: 'toy.sponge' },
  { id: 'bubbles', key: 'toy.bubbles' },
  { id: 'ice', key: 'toy.ice' },
];
