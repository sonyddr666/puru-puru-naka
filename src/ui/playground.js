import { THEMES } from '../data/themes.js';
import { FLAVORS } from '../data/flavors.js';
import { EMOTIONS, ACTIONS, TOYS, FLAVOR_PERSONALITIES, PERSONALITIES } from '../data/playground.js';

export function createPlayground({ i18n, store, themes, toys, company, getActive, getActors, selectActor, photo, canvas, drinkMug }) {
  const panel = document.querySelector('#play-panel');
  const launcher = document.querySelector('#play-open');
  const close = () => { panel.close(); canvas.focus({ preventScroll: true }); };
  const tabs = [...panel.querySelectorAll('[role="tab"]')];
  const pages = [...panel.querySelectorAll('[role="tabpanel"]')];
  function tab(index) {
    tabs.forEach((button, i) => { button.setAttribute('aria-selected', i === index); button.tabIndex = i === index ? 0 : -1; pages[i].hidden = i !== index; });
  }
  tabs.forEach((button, index) => {
    button.addEventListener('click', () => tab(index));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); tab(next); tabs[next].focus(); }
    });
  });
  launcher.addEventListener('click', () => { paint(); panel.showModal(); });
  document.querySelector('#play-close').addEventListener('click', close);
  panel.addEventListener('click', event => { if (event.target === panel) {
    const r = panel.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close();
  } });
  function button(item, callback, parent) {
    const element = document.createElement('button'); element.type = 'button'; element.className = 'play-choice';
    element.dataset.id = item.id; element.dataset.i18n = item.key;
    element.addEventListener('click', callback); parent.appendChild(element); return element;
  }
  const themeWrap = document.querySelector('#theme-choices');
  for (const theme of THEMES) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'theme-choice'; b.dataset.id = theme.id;
    const chip = document.createElement('span'); chip.className = 'theme-chip'; chip.setAttribute('aria-hidden', 'true');
    chip.style.setProperty('--theme-wall', theme.background); chip.style.setProperty('--theme-floor', theme.base);
    const label = document.createElement('span'); label.className = 'theme-name';
    b.append(chip, label); themeWrap.appendChild(b);
    b.addEventListener('click', () => { themes.setTheme(theme.id); paint(); close(); });
  }
  const emotionWrap = document.querySelector('#emotion-choices');
  for (const emotion of EMOTIONS) button(emotion, () => { getActive().actions.emote(emotion.id); close(); }, emotionWrap);
  const actionWrap = document.querySelector('#action-choices');
  for (const action of ACTIONS) button(action, () => {
    const success = action.id === 'hug' ? company.hug() : getActive().actions.run(action.id);
    if (success) close(); else if (action.id === 'hug') document.querySelector('#play-message').textContent = i18n.t('play.hugNeedFriend');
  }, actionWrap);
  const drink = button({ id: 'drink', key: 'action.drink' }, () => { if (drinkMug()) close(); }, actionWrap);
  const toyWrap = document.querySelector('#toy-choices');
  for (const toy of TOYS) button(toy, () => { toys.setKind(toy.id); paint(); close(); }, toyWrap);
  const companion = document.querySelector('#play-companion');
  companion.addEventListener('change', () => { company.setEnabled(companion.checked); paint(); });
  document.querySelector('#more-bubbles').addEventListener('click', () => { toys.moreBubbles(); close(); });
  document.querySelector('#play-pet').addEventListener('click', () => { getActive().actions.pet(); close(); });
  document.querySelector('#photo-open').addEventListener('click', () => { panel.close(); photo.open(); });
  document.querySelector('#target-main').addEventListener('click', () => { selectActor(getActors()[0]); paint(); });
  document.querySelector('#target-friend').addEventListener('click', () => { if (company.friend) selectActor(company.friend); paint(); });

  function paint() {
    const saved = store.state, flavor = FLAVORS.find(item => item.id === saved.flavor);
    const profile = PERSONALITIES[FLAVOR_PERSONALITIES[saved.flavor]];
    const roomPersonality = THEMES.find(theme => theme.id === themes.current)?.personality;
    document.querySelector('#personality-note').textContent = roomPersonality
      ? i18n.pick(roomPersonality)
      : `${i18n.pick(flavor.name)} · ${i18n.t(profile.key)}`;
    themeWrap.querySelectorAll('button').forEach((b, i) => { b.setAttribute('aria-pressed', THEMES[i].id === themes.current); b.querySelector('.theme-name').textContent = i18n.pick(THEMES[i].name); });
    toyWrap.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === toys.kind));
    companion.checked = company.enabled;
    document.querySelector('#actor-choices').hidden = !company.enabled;
    document.querySelector('#target-main').setAttribute('aria-pressed', getActive() === getActors()[0]);
    document.querySelector('#target-friend').setAttribute('aria-pressed', getActive() === company.friend);
    document.querySelector('#more-bubbles').hidden = toys.kind !== 'bubbles';
    actionWrap.querySelector('[data-id="hug"]').disabled = !company.enabled;
    drink.hidden = themes.current !== 'fire';
    const hints = { sponge: 'play.spongeHint', bubbles: 'play.bubblesHint', ice: 'play.iceHint', none: 'play.objectsHint' };
    const help = document.querySelector('#toy-help'); help.dataset.i18n = hints[toys.kind];
    i18n.apply(panel);
  }
  paint();
  // Plocs can arrive during every gesture; a closed panel needs no DOM updates.
  store.subscribe(() => { if (panel.open) paint(); });
  i18n.onChange(paint);
  return { open: () => launcher.click(), close, paint };
}
