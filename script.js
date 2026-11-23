const KEY = 'iloilo_recipes_v1',
      FAV = 'iloilo_favs_v1',
      USERS = 'iloilo_users_v1',
      SESS = 'iloilo_session_v1';

const grads = {
  Soup: ['#f6b93b', '#e55039'],
  Noodles: ['#fad390', '#e58e26'],
  Meat: ['#e55039', '#8e2a1b'],
  Pastry: ['#f8c291', '#b8864b'],
  Chicken: ['#78e08f', '#38ada9'],
  Dessert: ['#f8a5c2', '#cf6a87'],
  Seafood: ['#48dbfb', '#0abde3'],
  Vegetables: ['#a3cb38', '#009432'],
  'Rice & Grains': ['#f7d794', '#cf6a87'],
  'Street Food': ['#ff9f43', '#ee5253'],
  Beverages: ['#54a0ff', '#2e86de'],
  Appetizer: ['#feca57', '#ff9f43']
};

const EMOJIS = [
  '🍲','🍜','🥟','🍖','🍗','🥩','🥓','🍤','🦐','🦀','🦞','🐟',
  '🦑','🦪','🍚','🍛','🥗','🥬','🌽','🍅','🍆','🌶️','🧄','🧅',
  '🥖','🥐','🍞','🥞','🧇','🥧','🍰','🍮','🍧','🍨','🥭','🥥'
];

const seed = [
  {id:'la-paz-batchoy',name:'La Paz Batchoy',cat:'Soup',emoji:'🍜',time:60,serves:4,level:'Medium',desc:'Iloilo’s signature noodle soup, born in the La Paz market, with pork, liver and crunchy chicharon.',ing:[[250,'g','miki noodles'],[300,'g','pork shoulder'],[150,'g','pork liver'],[2,'L','pork bone broth'],[4,'cloves','garlic, minced'],[1,'','onion, sliced'],[3,'tbsp','shrimp paste (bagoong)'],[0,'','chicharon, spring onion, fried garlic to top'],[4,'','eggs (optional)']],steps:['Simmer pork shoulder in the broth for 45 minutes until tender, then slice thinly.','Sauté garlic and onion, add the bagoong, then pour in the strained broth.','Add the liver for the last 5 minutes so it stays soft; slice it.','Blanch the miki noodles for 1 minute and divide into bowls.','Top with pork, liver, crushed chicharon, spring onion and fried garlic. Ladle hot broth over and crack in a raw egg.']},
  {id:'pancit-molo',name:'Pancit Molo',cat:'Soup',emoji:'🥟',time:75,serves:6,level:'Medium',desc:'Dumpling soup from the Molo district, a Chinese-Filipino comfort bowl served at every family gathering.',ing:[[250,'g','ground pork'],[100,'g','shrimp, minced'],[30,'','wonton wrappers'],[1.5,'L','chicken broth'],[3,'cloves','garlic'],[1,'','onion, chopped'],[2,'tbsp','soy sauce'],[0,'','salt, pepper, spring onion']],steps:['Mix pork, shrimp, half the onion, soy sauce and pepper into a filling.','Place a teaspoon of filling in each wrapper, moisten the edges and fold into dumplings.','Sauté garlic and the remaining onion, add broth and bring to a simmer.','Drop in the dumplings and cook 6 to 8 minutes until they float.','Season to taste and serve topped with spring onion and fried garlic.']},
  {id:'kansi',name:'Kansi',cat:'Meat',emoji:'🍖',time:120,serves:5,level:'Easy',desc:'Bacolod’s bulalo meets Ilonggo sour: beef shank soup soured with batwan fruit and finished with lemongrass.',ing:[[1,'kg','beef shank with bone marrow'],[2,'L','water'],[2,'stalks','lemongrass, bruised'],[1,'thumb','ginger, sliced'],[6,'','batwan or 3 tbsp tamarind paste'],[1,'','jackfruit (langka), young, cubed'],[2,'tbsp','fish sauce'],[0,'','salt, pepper, green chili']],steps:['Boil the beef shank, discard the first scum water, then cover with fresh water.','Add ginger and lemongrass, then simmer on low for 1.5 hours until the meat is fork-tender.','Add young jackfruit and cook 15 more minutes.','Stir in batwan or tamarind to taste and season with fish sauce.','Serve piping hot with steamed rice.']},
  {id:'tinuom-na-manok',name:'Tinuom na Manok',cat:'Chicken',emoji:'🍗',time:70,serves:4,level:'Easy',desc:'Chicken steamed in banana leaves with lemongrass, ginger and tomato, a Panay classic with a fragrant reveal.',ing:[[1,'kg','native chicken, cut up'],[3,'stalks','lemongrass'],[1,'thumb','ginger, sliced'],[2,'','tomatoes, wedged'],[1,'','onion, sliced'],[1,'handful','pepper leaves (sili leaves)'],[2,'tbsp','fish sauce'],[2,'','banana leaves, wilted over flame']],steps:['Wilt the banana leaves over a flame so they do not tear.','Layer lemongrass, ginger, onion and tomato on the leaf, then lay the chicken on top.','Season with fish sauce and add the chili leaves. Wrap tightly and tie.','Steam or cook over low charcoal for 50 to 60 minutes.','Unwrap at the table and eat with hot rice and the juices.']},
  {id:'biscocho',name:'Biscocho',cat:'Pastry',emoji:'🥖',time:90,serves:12,level:'Medium',desc:'Twice-baked buttery bread slices dusted with sugar, the Iloilo pasalubong everyone brings home.',ing:[[3,'cups','all-purpose flour'],[1,'tbsp','yeast'],[0.5,'cup','sugar'],[1,'cup','warm milk'],[0.5,'cup','butter, softened'],[1,'','egg'],[0.5,'cup','extra butter + sugar for the topping']],steps:['Proof yeast with warm milk and a spoon of the sugar for 10 minutes.','Mix in flour, remaining sugar, egg and butter, then knead until smooth and let rise for 1 hour.','Shape into small loaves, rise again 30 minutes, then bake at 180°C for 25 minutes.','Slice thinly, brush with butter and sprinkle with sugar.','Return to a 150°C oven for 20 minutes until golden and crisp.']},
  {id:'napoleones',name:'Napoleones',cat:'Pastry',emoji:'🥐',time:100,serves:10,level:'Hard',desc:'Flaky puff pastry fingers filled with custard and glazed white, a proud Iloilo bakery tradition.',ing:[[2,'cups','all-purpose flour'],[1,'cup','cold butter, for laminating'],[0.5,'cup','cold water'],[2,'cups','milk'],[0.5,'cup','sugar'],[4,'','egg yolks'],[3,'tbsp','cornstarch'],[1,'cup','powdered sugar for icing']],steps:['Make dough from flour, water and a pinch of salt. Rest 30 minutes.','Roll out, fold in the cold butter, and fold in thirds three times, chilling between folds.','Roll thin, cut into rectangles and bake at 200°C for 20 minutes until puffed and golden.','Cook milk, sugar, yolks and cornstarch into thick custard and chill.','Sandwich custard between two pastry layers and glaze the top with powdered sugar icing.']}
];

const $ = s => document.querySelector(s), app = $('#app');
const cloneSeed = () => JSON.parse(JSON.stringify(seed));
const jget = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
const jset = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

let recipes = jget(KEY, null) || cloneSeed(),
    favs = jget(FAV, []),
    users = jget(USERS, []),
    sess = jget(SESS, null);

async function sha(s) {
  try {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    return btoa(unescape(encodeURIComponent(s)));
  }
}

function setSess(u) {
  sess = { name: u.name, email: u.email, role: u.role };
  jset(SESS, sess);
}

async function init() {
  if (!users.some(u => u.role === 'admin')) {
    users.push({ name: 'Admin', email: 'admin@lutoiloilo.ph', pw: await sha('admin123'), role: 'admin' });
    jset(USERS, users);
  }
  route();
}

function toggleMenu(open) {
  const sb = $('#sidebar'), bd = $('#backdrop'), btn = $('#menuBtn');
  if (!sb) return;
  sb.classList.toggle('open', open);
  if (bd) bd.hidden = !open;
  if (btn) btn.setAttribute('aria-expanded', String(open));
}

function renderAuth() {
  const a = $('#auth');
  a.innerHTML = sess
    ? `<span class="who">👤 ${esc(sess.name.split(' ')[0])}${sess.role === 'admin' ? ' <em class="pill adm">Admin</em>' : ''}</span><button class="btn alt sm" id="logout" style="width:100%">Sign out</button>`
    : `<div class="auth-row"><a class="btn alt sm" href="#login">Log in</a><a class="btn sm" href="#register">Register</a></div>`;
  $('#adminLink').hidden = !(sess && sess.role === 'admin');
}

function authView(m) {
  if (sess) return `<div class="panel login"><h1>You’re signed in</h1><p>Signed in as ${esc(sess.name)}.</p><p><a class="btn" href="#recipes">Browse recipes</a></p></div>`;
  const reg = m === 'register';
  return `<div class="panel login"><h1>${reg ? 'Create your account' : 'Log in'}</h1><form id="${m}Form" novalidate>${reg ? '<label for="a-name">Full name</label><input id="a-name" autocomplete="name">' : ''}<label for="a-email">Email</label><input id="a-email" type="email" autocomplete="email"><label for="a-pw">Password</label><input id="a-pw" type="password" autocomplete="${reg ? 'new-password' : 'current-password'}">${reg ? '<label for="a-pw2">Confirm password</label><input id="a-pw2" type="password" autocomplete="new-password">' : ''}<p id="a-err" role="alert" style="color:var(--chili);min-height:1.4em;margin:.6rem 0 0"></p><p><button class="btn" type="submit" style="width:100%">${reg ? 'Register' : 'Log in'}</button></p></form><p style="color:var(--muted);text-align:center">${reg ? 'Already have an account? <a href="#login">Log in</a>' : 'New here? <a href="#register">Create an account</a>'}</p>${reg ? '' : '<p style="color:var(--muted);text-align:center;font-size:.85rem">Demo admin: admin@lutoiloilo.ph / admin123</p>'}</div>`;
}

const save = () => jset(KEY, recipes);
let q = '', cat = 'All', sort = 'name';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const grad = c => { const g = grads[c] || ['#7fb7be', '#0f4c5c']; return `background:linear-gradient(135deg,${g[0]},${g[1]})`; };
function toast(m) { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 2200); }
function frac(n) { const r = Math.round(n * 4) / 4, w = Math.floor(r), f = r - w, fs = { 0: '', .25: '¼', .5: '½', .75: '¾' }; return (w || !f ? w : '') + fs[f]; }

function card(r) {
  return `<article class="card"><a href="#recipe-${r.id}" style="text-decoration:none"><div class="img" style="${grad(r.cat)}" aria-hidden="true">${esc(r.emoji)}</div></a>
<button class="fav" data-fav="${r.id}" aria-label="Save ${esc(r.name)}">${favs.includes(r.id) ? '❤️' : '🤍'}</button>
<div class="body"><span class="pill" style="align-self:flex-start">${esc(r.cat)}</span><h3><a href="#recipe-${r.id}" style="text-decoration:none">${esc(r.name)}</a></h3><p>${esc(r.desc)}</p>
<div class="meta"><span>⏱ ${r.time} min</span><span>🍽 ${r.serves}</span><span>${esc(r.level)}</span></div></div></article>`;
}

function home() {
  const top = recipes.slice(0, 3);
  return `<section class="hero"><div><h1>Cook the way Iloilo eats.</h1><p>Step-by-step tutorials for the dishes Iloilo City is famous for, from a steaming bowl of batchoy to a box of fresh biscocho.</p>
<p><a class="btn" href="#recipes">Browse recipes</a></p>
<div class="stats"><div><b>${recipes.length}</b><span>tutorials</span></div><div><b>${favs.length}</b><span>saved by you</span></div><div><b>0</b><span>servers needed</span></div></div></div>
<div class="art" aria-hidden="true">🍲</div></section>
<h2>Start with these</h2><div class="grid">${top.map(card).join('')}</div>
<h2 style="margin-top:2.5rem">What you can do here</h2><div class="feat">
<div><b>Search and filter</b><span>Find a dish by name, category or cooking time.</span></div>
<div><b>Scale servings</b><span>Change the portions and the ingredient amounts adjust.</span></div>
<div><b>Cook along</b><span>Tick off ingredients and steps with a progress bar.</span></div>
<div><b>Save favorites</b><span>Keep your go-to recipes on the Saved page.</span></div>
<div><b>Print a recipe</b><span>A clean print layout for the kitchen counter.</span></div>
<div><b>Admin panel</b><span>Add, edit and delete recipes, then export a backup.</span></div></div>`;
}

function list(fav) {
  let L = recipes.filter(r => (!fav || favs.includes(r.id)) && (cat === 'All' || r.cat === cat) && (r.name + r.desc).toLowerCase().includes(q.toLowerCase()));
  L.sort((a, b) => sort === 'time' ? a.time - b.time : a.name.localeCompare(b.name));
  const cats = ['All', ...new Set(recipes.map(r => r.cat))];
  return `<h1>${fav ? 'Saved recipes' : 'All recipes'}</h1><div class="tools"><input id="q" type="search" placeholder="Search recipes" aria-label="Search recipes" value="${esc(q)}">
<select id="sort" aria-label="Sort"><option value="name" ${sort === 'name' ? 'selected' : ''}>Sort by name</option><option value="time" ${sort === 'time' ? 'selected' : ''}>Sort by time</option></select></div>
<div class="tools">${cats.map(c => `<button class="chip ${c === cat ? 'on' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}</div>
<div class="grid" id="results">${L.length ? L.map(card).join('') : `<p>${fav ? 'Nothing saved yet. Tap the heart on a recipe to keep it here.' : 'No recipes match. Try a different search or category.'}</p>`}</div>`;
}

function recipe(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return '<h1>Recipe not found</h1><a class="btn" href="#recipes">Back to recipes</a>';
  const key = 'iloilo_prog_' + id, st = jget(key, { s: r.serves, i: [], p: [] });
  window._r = r; window._st = st; window._key = key;
  return `<p><a href="#recipes">&larr; All recipes</a></p>
<div class="recipe-head"><div class="img" style="${grad(r.cat)}" aria-hidden="true">${esc(r.emoji)}</div><div><span class="pill">${esc(r.cat)}</span><h1>${esc(r.name)}</h1><p>${esc(r.desc)}</p>
<div class="meta"><span>⏱ ${r.time} min</span><span>${esc(r.level)}</span></div><p class="noprint"><button class="btn sm" data-fav="${r.id}">${favs.includes(r.id) ? '❤️ Saved' : '🤍 Save recipe'}</button> <button class="btn alt sm" onclick="print()">Print</button></p></div></div>
<div class="cols"><div class="panel"><h2>Ingredients</h2><div class="stepper"><button data-sv="-1" aria-label="Fewer servings">−</button><b id="sv"></b><button data-sv="1" aria-label="More servings">+</button><span>servings</span></div><ul id="ings"></ul></div>
<div class="panel"><h2>Method</h2><div class="bartrack"><i id="bar"></i></div><ol id="steps"></ol></div></div>`;
}

function paint() {
  const r = window._r, st = window._st;
  if (!r) return;
  $('#sv').textContent = st.s;
  const m = st.s / r.serves;
  $('#ings').innerHTML = r.ing.map((x, i) => `<li class="${st.i.includes(i) ? 'done' : ''}"><input type="checkbox" style="width:auto;margin-top:.3rem" data-i="${i}" ${st.i.includes(i) ? 'checked' : ''} id="i${i}"><label for="i${i}" style="margin:0;font-weight:400"><span>${x[0] ? frac(x[0] * m) + ' ' : ''}${esc((x[1] ? x[1] + ' ' : '') + x[2])}</span></label></li>`).join('');
  $('#steps').innerHTML = r.steps.map((s, i) => `<li class="${st.p.includes(i) ? 'done' : ''}"><input type="checkbox" style="width:auto;margin-top:.3rem" data-p="${i}" ${st.p.includes(i) ? 'checked' : ''} id="p${i}"><label for="p${i}" style="margin:0;font-weight:400"><b>Step ${i + 1}.</b> <span>${esc(s)}</span></label></li>`).join('');
  $('#bar').style.width = Math.round(st.p.length / r.steps.length * 100) + '%';
  jset(window._key, st);
}

function adminView() {
  if (!sess) return `<div class="panel login"><h1>Admin area</h1><p>Log in with an admin account to manage recipes.</p><p><a class="btn" href="#login">Log in</a></p></div>`;
  if (sess.role !== 'admin') return `<div class="panel login"><h1>Admins only</h1><p>You are signed in as ${esc(sess.name)}, a regular member. Only admins can manage recipes.</p><p><a class="btn" href="#recipes">Back to recipes</a></p></div>`;

  const allCats = [...new Set([...Object.keys(grads), ...recipes.map(r => r.cat)])];
  return `<h1>Admin dashboard</h1><p style="color:var(--muted)">Signed in as ${esc(sess.name)}. Use Sign out in the sidebar when you are done.</p>
<div class="stats"><div><b>${recipes.length}</b><span>recipes</span></div><div><b>${new Set(recipes.map(r => r.cat)).size}</b><span>categories</span></div><div><b>${Math.round(recipes.reduce((a, r) => a + r.time, 0) / recipes.length || 0)}</b><span>avg minutes</span></div><div><b>${users.filter(u => u.role !== 'admin').length}</b><span>members</span></div></div>
<p><button class="btn alt sm" id="export">Export JSON</button> <label class="btn alt sm" style="display:inline-block;margin:0;cursor:pointer">Import JSON<input id="import" type="file" accept=".json" hidden></label> <button class="btn alt sm" id="reset">Restore defaults</button></p>
<div class="cols"><div class="panel scroll"><h2>Recipes</h2><table><tbody>${recipes.map(r => `<tr><td>${esc(r.emoji)} <strong>${esc(r.name)}</strong><br><small style="color:var(--muted)">${esc(r.cat)} • ${r.time}m • ${esc(r.level)}</small></td><td style="white-space:nowrap"><button class="btn alt sm" data-edit="${r.id}">Edit</button> <button class="btn danger sm" data-del="${r.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>
<div class="panel"><h2 id="ftitle">Add a recipe</h2><form id="rf"><input type="hidden" id="f-id">
<label for="f-name">Name</label><input id="f-name" required>

<div class="form-row">
  <div>
    <label for="f-cat">Category</label>
    <input id="f-cat" list="cl" required value="Soup" placeholder="Choose or type new...">
    <datalist id="cl">${allCats.map(c => `<option value="${esc(c)}">`).join('')}</datalist>
  </div>
  <div>
    <label for="f-cat-pick">Quick category select</label>
    <select id="f-cat-pick" aria-label="Quick category select">
      ${allCats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}
    </select>
  </div>
</div>

<label for="f-emoji">Emoji icon (type or click below)</label>
<div class="emoji-row">
  <input id="f-emoji" value="🍲" maxlength="4" aria-label="Selected emoji">
  <span style="color:var(--muted);font-size:.88rem">Pick an icon or paste any food emoji</span>
</div>
<div class="emoji-grid" role="group" aria-label="Emoji picker">
  ${EMOJIS.map(em => `<button type="button" class="emoji-btn${em === '🍲' ? ' on' : ''}" data-pick-emoji="${em}" title="Use ${em}">${em}</button>`).join('')}
</div>

<div class="form-row">
  <div><label for="f-time">Minutes</label><input id="f-time" type="number" min="1" value="45"></div>
  <div><label for="f-serves">Servings</label><input id="f-serves" type="number" min="1" value="4"></div>
</div>

<label for="f-level">Difficulty</label>
<select id="f-level">
  <option value="Easy">Easy</option>
  <option value="Medium" selected>Medium</option>
  <option value="Hard">Hard</option>
</select>

<label for="f-desc">Short description</label><textarea id="f-desc" rows="2" required></textarea>
<label for="f-ing">Ingredients (one per line, e.g. “2 cups rice”)</label><textarea id="f-ing" rows="5" required></textarea>
<label for="f-steps">Steps (one per line)</label><textarea id="f-steps" rows="5" required></textarea>
<p><button class="btn" type="submit">Save recipe</button> <button class="btn alt" type="button" id="cancel">Cancel</button></p></form></div></div>`;
}

function route() {
  const h = (location.hash || '#home').slice(1);
  window._r = null;
  let v, tab = h;
  if (h === 'home') v = home();
  else if (h === 'recipes') v = list(false);
  else if (h === 'favorites') v = list(true);
  else if (h === 'admin') v = adminView();
  else if (h === 'login') v = authView('login');
  else if (h === 'register') v = authView('register');
  else if (h.startsWith('recipe-')) { v = recipe(h.slice(7)); tab = 'recipes'; }
  else { v = home(); tab = 'home'; }
  app.innerHTML = v;
  renderAuth();
  toggleMenu(false);
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('on', a.dataset.r === tab));
  if (window._r) paint();
  window.scrollTo(0, 0);
}

function relist() {
  const y = window.scrollY;
  route();
  window.scrollTo(0, y);
}

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'recipe';
function parseIng(t) {
  return t.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
    const m = l.match(/^(\d+(?:\.\d+)?)\s*(\S+)?\s*(.*)$/);
    return m ? [+m[1], m[2] || '', m[3] || ''] : [0, '', l];
  });
}
function ingText(r) {
  return r.ing.map(x => [x[0] || '', x[1], x[2]].filter(Boolean).join(' ')).join('\n');
}

function syncEmojiHighlight(val) {
  document.querySelectorAll('.emoji-btn').forEach(b => b.classList.toggle('on', b.dataset.pickEmoji === val));
}

document.addEventListener('click', e => {
  if (e.target.id === 'backdrop') { toggleMenu(false); return; }
  const t = e.target.closest('button,[data-fav]');
  if (!t) return;
  const d = t.dataset;

  if (t.id === 'menuBtn') { toggleMenu(true); }
  else if (t.id === 'closeMenuBtn') { toggleMenu(false); }
  else if (d.pickEmoji) {
    $('#f-emoji').value = d.pickEmoji;
    syncEmojiHighlight(d.pickEmoji);
  }
  else if (d.fav) {
    const i = favs.indexOf(d.fav);
    i < 0 ? favs.push(d.fav) : favs.splice(i, 1);
    jset(FAV, favs);
    toast(i < 0 ? 'Saved to your list' : 'Removed from saved');
    relist();
  }
  else if (d.cat) { cat = d.cat; relist(); }
  else if (d.sv) { const s = window._st; s.s = Math.max(1, s.s + +d.sv); paint(); }
  else if (t.id === 'logout') {
    sess = null;
    jset(SESS, null);
    toast('You have signed out');
    if (location.hash === '#home') route();
    else location.hash = '#home';
  }
  else if (t.id === 'cancel') { route(); }
  else if (d.del) {
    if (confirm('Delete this recipe?')) {
      recipes = recipes.filter(r => r.id !== d.del);
      save();
      toast('Deleted');
      route();
    }
  }
  else if (d.edit) {
    const r = recipes.find(x => x.id === d.edit);
    $('#ftitle').textContent = 'Edit recipe';
    $('#f-id').value = r.id;
    $('#f-name').value = r.name;
    $('#f-cat').value = r.cat;
    if ($('#f-cat-pick')) $('#f-cat-pick').value = r.cat;
    $('#f-emoji').value = r.emoji;
    syncEmojiHighlight(r.emoji);
    $('#f-time').value = r.time;
    $('#f-serves').value = r.serves;
    $('#f-level').value = r.level || 'Medium';
    $('#f-desc').value = r.desc;
    $('#f-ing').value = ingText(r);
    $('#f-steps').value = r.steps.join('\n');
    $('#rf').scrollIntoView({ behavior: 'smooth' });
  }
  else if (t.id === 'export') {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(recipes, null, 2)], { type: 'application/json' }));
    a.download = 'recipes.json';
    a.click();
  }
  else if (t.id === 'reset') {
    if (confirm('Restore the original recipes?')) {
      recipes = cloneSeed();
      save();
      route();
    }
  }
  else if (t.id === 'themeBtn') {
    const cur = document.documentElement.dataset.theme;
    const sysDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = cur ? cur === 'dark' : sysDark;
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  }
});

document.addEventListener('change', e => {
  const t = e.target, d = t.dataset;
  if (d.i !== undefined || d.p !== undefined) {
    const s = window._st, k = d.i !== undefined ? 'i' : 'p', n = +d[k], a = s[k];
    t.checked ? a.push(n) : a.splice(a.indexOf(n), 1);
    paint();
  }
  else if (t.id === 'f-cat-pick') {
    $('#f-cat').value = t.value;
  }
  else if (t.id === 'sort') { sort = t.value; relist(); }
  else if (t.id === 'import') {
    const f = t.files[0];
    if (!f) return;
    f.text().then(x => {
      try {
        const j = JSON.parse(x);
        if (!Array.isArray(j) || !j.every(r => r && r.id && r.name && Array.isArray(r.ing) && Array.isArray(r.steps))) throw 0;
        recipes = j;
        save();
        toast('Imported');
        route();
      } catch (er) {
        toast('That file is not a valid recipes.json');
      }
    });
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'f-emoji') {
    syncEmojiHighlight(e.target.value.trim());
  }
  else if (e.target.id === 'f-cat' && $('#f-cat-pick')) {
    const opt = [...$('#f-cat-pick').options].find(o => o.value.toLowerCase() === e.target.value.trim().toLowerCase());
    if (opt) $('#f-cat-pick').value = opt.value;
  }
  else if (e.target.id === 'q') {
    q = e.target.value;
    const L = recipes.filter(r => (cat === 'All' || r.cat === cat) && (r.name + r.desc).toLowerCase().includes(q.toLowerCase()));
    if ((location.hash || '') === '#favorites') {
      relist();
      $('#q').focus();
      return;
    }
    $('#results').innerHTML = L.length ? L.map(card).join('') : '<p>No recipes match. Try a different search or category.</p>';
  }
});

document.addEventListener('submit', e => {
  if (e.target.id !== 'rf') return;
  e.preventDefault();
  const id0 = $('#f-id').value, name = $('#f-name').value.trim();
  let id = id0 || slug(name);
  if (!id0 && recipes.some(r => r.id === id)) id += '-' + Date.now() % 1000;
  const r = {
    id,
    name,
    cat: $('#f-cat').value.trim() || 'Uncategorized',
    emoji: $('#f-emoji').value.trim() || '🍲',
    time: +$('#f-time').value || 30,
    serves: +$('#f-serves').value || 4,
    level: $('#f-level').value || 'Medium',
    desc: $('#f-desc').value.trim(),
    ing: parseIng($('#f-ing').value),
    steps: $('#f-steps').value.split('\n').map(s => s.trim()).filter(Boolean)
  };
  const i = recipes.findIndex(x => x.id === id0);
  i >= 0 ? (recipes[i] = r) : recipes.push(r);
  save();
  toast('Recipe saved');
  route();
});

document.addEventListener('submit', async e => {
  const id = e.target.id;
  if (id !== 'loginForm' && id !== 'registerForm') return;
  e.preventDefault();
  const err = m => { $('#a-err').textContent = m; };
  const email = $('#a-email').value.trim().toLowerCase(), pw = $('#a-pw').value;
  if (!/^\S+@\S+\.\S+$/.test(email)) return err('Enter a valid email address.');
  if (pw.length < 6) return err('Password must be at least 6 characters.');
  const h = await sha(pw);
  if (id === 'registerForm') {
    const name = $('#a-name').value.trim();
    if (!name) return err('Enter your name.');
    if (pw !== $('#a-pw2').value) return err('Passwords do not match.');
    if (users.some(u => u.email === email)) return err('That email is already registered. Try logging in.');
    const u = { name, email, pw: h, role: 'member' };
    users.push(u);
    jset(USERS, users);
    setSess(u);
    toast('Welcome, ' + name + '!');
    location.hash = '#recipes';
  } else {
    const u = users.find(x => x.email === email && x.pw === h);
    if (!u) return err('Email or password is incorrect.');
    setSess(u);
    toast('Welcome back, ' + u.name);
    location.hash = u.role === 'admin' ? '#admin' : '#recipes';
  }
});

addEventListener('hashchange', route);
init();