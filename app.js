const days = [
  { date:'06', dow:'Mardi', island:'transport', tag:'Voyage', title:'Départ de Nice', summary:'Vol Air France vers Tahiti via Paris et Los Angeles.', stops:[['16:40','Nice NCE'],['18:15','Paris CDG'],['19:30','AF0028 vers Tahiti']], notes:['Prévoir les documents de voyage et les batteries externes en cabine.','L’escale de Los Angeles dure environ 2 h 15.'], route:['Nice','Paris','Los Angeles','Tahiti'] },
  { date:'07', dow:'Mercredi', island:'moorea', tag:'Moorea', title:'Arrivée en Polynésie', summary:'Arrivée tôt à Tahiti, ferry pour Moorea puis installation et journée douce.', stops:[['05:30','Arrivée PPT'],['Matin','Ferry vers Moorea'],['Après-midi','Installation & repos']], notes:['Les horaires et billets du ferry Tahiti–Moorea restent à confirmer.','Le nom et l’adresse de l’hébergement à Moorea sont encore à ajouter.'], route:['Aéroport PPT','Quai de Papeete','Moorea','Hébergement'] },
  { date:'08', dow:'Jeudi', island:'moorea', tag:'Moorea', title:'Temae & côte est', summary:'Première découverte tranquille entre point de vue, plage et cascade.', stops:[['09:00','Départ'],['09:30','Belvédère de Toatea'],['10:15','Plage de Temae'],['15:00','Afareaitu']], notes:['Emporter masque, tuba, chaussures d’eau et protection solaire.','La cascade d’Afareaitu peut demander un accès privé ou une contribution locale.'], route:['Hébergement','Toatea','Temae','Afareaitu'], map:'moorea', points:[[-149.77,-17.50],[-149.76,-17.49],[-149.76,-17.50],[-149.82,-17.55]] },
  { date:'09', dow:'Vendredi', island:'moorea', tag:'Moorea', title:'Baleines & Tiahura', summary:'Sortie lagon le matin puis après-midi plage aux Tipaniers.', stops:[['08:00','Sortie baleines'],['12:30','Déjeuner'],['14:30','Tiahura / Tipaniers']], notes:['Choisir un opérateur autorisé et respectueux des distances d’approche.','Horaire de départ à adapter à la réservation.'], route:['Hébergement','Lagon nord-ouest','Tiahura','Hébergement'], map:'moorea', points:[[-149.85,-17.52],[-149.87,-17.48],[-149.91,-17.52],[-149.85,-17.52]] },
  { date:'10', dow:'Samedi', island:'transport', tag:'Huahine', title:'Moorea → Huahine', summary:'Retour à Tahiti puis vol Air Tahiti et installation au Bungalow Vanille.', stops:[['Matin','Ferry Moorea → Tahiti'],['10:50','Vol VT310'],['11:30','Arrivée Huahine'],['14:00','Check-in']], notes:['Bagage Air Tahiti : 15 kg par personne.','Prévenir la pension 24 h avant si transfert depuis l’aéroport.','Louer le scooter dès l’arrivée, jusqu’au 14 octobre vers 9 h.'], route:['Moorea','Tahiti PPT','Huahine HUH','Bungalow Vanille'] },
  { date:'11', dow:'Dimanche', island:'huahine', tag:'Huahine', title:'Panoramas, four tahitien & Hana Iti', summary:'Grande boucle du sud avec vues faciles sur le lagon et déjeuner chez Tara.', stops:[['08:30','Départ pension'],['09:15','Belvédère Maroe'],['10:00','Panorama Tefarerii'],['11:00','Chez Tara'],['14:00','Hana Iti']], notes:['Chez Tara : four tahitien du dimanche, réservation indispensable. Environ 5 000 F/personne, espèces recommandées.','Le Panorama de Tefarerii offre le meilleur rapport effort/vue.','Pour Hana Iti, garder la photo-repère et confirmer l’accès localement.'], map:'huahine', points:[[-151.0337,-16.7146],[-151.0032,-16.7399],[-150.9604,-16.7889],[-150.9895,-16.8113],[-151.0262,-16.7812]], photo:true },
  { date:'12', dow:'Lundi', island:'huahine', tag:'Huahine', title:'Création de paréos à Parea', summary:'Atelier à La Passion du Paréo, pause dans le sud puis récupération après séchage.', stops:[['07:45','Départ Fare'],['08:30–12:30','Atelier paréo'],['12:30','Déjeuner / détente'],['≈16:00','Récupération']], notes:['Départ plus tôt que d’habitude pour arriver avant 8 h 30.','Rester dans le secteur de Parea pendant le séchage.','Confirmer sur place l’heure exacte de récupération.'], map:'huahine', points:[[-151.0337,-16.7146],[-150.9771,-16.7942],[-150.9865,-16.807],[-150.9771,-16.7942]] },
  { date:'13', dow:'Mardi', island:'huahine', tag:'Huahine', title:'Pohue Rahi & baie d’Avea', summary:'Petite randonnée panoramique puis patrimoine, lagon et dernière soirée à Fare.', stops:[['08:30','Départ'],['09:15','Sentier Pohue Rahi'],['11:15','Panorama Tefarerii'],['13:30','Marae Anini / Avea']], notes:['Objectif : premier belvédère de Pohue Rahi, environ 45 min de montée, retour par le même chemin.','Accès au sentier à confirmer auprès de la pension.','Faire le plein et préparer la restitution du scooter.'], map:'huahine', points:[[-151.0337,-16.7146],[-150.9596,-16.7762],[-150.9763,-16.7809],[-150.9604,-16.7889],[-150.9811,-16.8181]] },
  { date:'14', dow:'Mercredi', island:'transport', tag:'Maupiti', title:'Huahine → Maupiti en bateau', summary:'Restitution du scooter, embarquement à Fare et accueil par Gladys à Maupiti.', stops:[['09:00','Restitution scooter'],['09:15','Quai de Fare'],['10:00','Départ bateau'],['14:55','Arrivée Maupiti']], notes:['Billet aller simple : 7 000 F, vendu le 11/08/2026, valable jusqu’au 11/08/2027.','Gladys vient vous chercher au port. Transfert pension annoncé : 1 000 F/personne aller-retour.'], route:['Bungalow Vanille','Quai de Fare','Port Maupiti','Pension Mitiana'] },
  { date:'15', dow:'Jeudi', island:'maupiti', tag:'Maupiti', title:'Excursion lagon, motu & snorkeling', summary:'Journée en bateau avec raies manta, jardin de corail et pique-nique sur un motu.', stops:[['07:00','Départ excursion'],['Matin','Snorkeling'],['Midi','Repas sur le motu'],['15:00','Retour pension']], notes:['Horaire noté : 7 h–15 h. Le reconfirmer avec la pension.','Prévoir masque, tuba, lycra, chapeau, crème solaire et sac étanche.','Le programme exact dépendra de la météo et de l’état du lagon.'], map:'maupiti', points:[[-152.2682,-16.4515],[-152.2375,-16.4615],[-152.2461,-16.4692],[-152.2424,-16.4744],[-152.278,-16.477]] },
  { date:'16', dow:'Vendredi', island:'maupiti', tag:'Maupiti', title:'Tour de l’île à vélo', summary:'Boucle facile d’environ 9 km, plage, village et découverte culturelle.', stops:[['09:00','Départ pension'],['09:20','Plage Tereia'],['11:00','Point de vue sud-est'],['12:00','Vaiea'],['14:30','Pétroglyphes']], notes:['Louer les vélos auprès de la pension ou à proximité.','Prévoir espèces pour les snacks et petites visites.'], map:'maupiti', points:[[-152.2682,-16.4515],[-152.2737,-16.4488],[-152.2512,-16.4561],[-152.2493,-16.4505],[-152.2517,-16.4358]] },
  { date:'17', dow:'Samedi', island:'maupiti', tag:'Maupiti', title:'Ascension du mont Teurafaatiu', summary:'Ascension complète le matin et four tahitien en option chez Phirmin.', stops:[['07:30','Départ conseillé'],['08:00','Début du sentier'],['Matin','Sommet'],['Midi','Retour'],['Après','Option four tahitien']], notes:['Départ conseillé plus tôt que 8 h 30 pour éviter la chaleur.','Randonnée raide avec passages équipés de cordes : bonnes chaussures, eau et météo sèche indispensables.','Option : four tahitien du samedi à la Pension Orovaru chez Phirmin, à réserver et horaire à confirmer.'], map:'maupiti', points:[[-152.2682,-16.4515],[-152.248,-16.4462],[-152.2555,-16.4467],[-152.2579,-16.4533]] },
  { date:'18', dow:'Dimanche', island:'maupiti', tag:'Maupiti', title:'Tereia, motu Auira & Chez Mimi', summary:'Traversée du lagon à pied si la marée le permet, puis déjeuner très tôt.', stops:[['09:00','Plage Tereia'],['Marée basse','Motu Auira'],['11:00–12:00','Snack Chez Mimi'],['Après-midi','Plage / repos']], notes:['Traversée uniquement à marée basse et avec de bonnes conditions : demander conseil à la pension le matin.','Chaussures d’eau et sac étanche recommandés.','Chez Mimi : y aller tôt, impérativement entre 11 h et midi.'], map:'maupiti', points:[[-152.2682,-16.4515],[-152.2737,-16.4488],[-152.2835,-16.4487],[-152.2739,-16.4508]] },
  { date:'19', dow:'Lundi', island:'transport', tag:'Moorea', title:'Maupiti → Tahiti → Moorea', summary:'Dernière matinée calme, vol pour Tahiti puis ferry vers Moorea si les horaires concordent.', stops:[['Matin','Temps libre'],['15:35','Vol VT734'],['16:25','Arrivée PPT'],['Soir','Ferry / nuit']], notes:['Organiser le transfert vers l’aéroport avec Gladys.','Le ferry tardif Tahiti–Moorea doit être confirmé ; prévoir un plan B à Tahiti si nécessaire.'], route:['Pension Mitiana','Aéroport MAU','Tahiti PPT','Moorea'] },
  { date:'20', dow:'Mardi', island:'moorea', tag:'Moorea', title:'Belvédère & vallée d’Opunohu', summary:'Route panoramique entre les deux baies, plantations et plage de Ta’ahiamanu.', stops:[['09:00','Départ'],['09:30','Baie de Cook'],['10:30','Belvédère'],['11:30','Lycée agricole'],['14:30','Ta’ahiamanu']], notes:['Goûter les jus et confitures du lycée agricole selon les horaires d’ouverture.','Route des Ananas possible selon l’état de la piste et le véhicule.'], route:['Hébergement','Baie de Cook','Belvédère','Lycée agricole','Ta’ahiamanu'], map:'moorea', points:[[-149.84,-17.53],[-149.82,-17.49],[-149.84,-17.54],[-149.85,-17.55],[-149.86,-17.50]] },
  { date:'21', dow:'Mercredi', island:'moorea', tag:'Moorea', title:'Journée lagon', summary:'Journée légère : kayak, snorkeling, motu et coucher de soleil.', stops:[['09:00','Départ'],['Matin','Activité lagon'],['Midi','Déjeuner plage'],['Soir','Coucher de soleil']], notes:['Choisir le secteur selon la météo : Temae pour le récif ou Tiahura pour les motus.','Réserver kayak ou sortie bateau la veille si nécessaire.'], route:['Hébergement','Lagon','Motu','Plage'], map:'moorea', points:[[-149.85,-17.53],[-149.90,-17.51],[-149.92,-17.50],[-149.91,-17.52]] },
  { date:'22', dow:'Jeudi', island:'moorea', tag:'Moorea', title:'Magic Mountain & nord-ouest', summary:'Point de vue emblématique le matin puis plages et villages du nord-ouest.', stops:[['08:30','Départ'],['09:00','Magic Mountain'],['12:00','Papetoai'],['14:00','Tiahura']], notes:['Accès à Magic Mountain généralement payant et très raide : vérifier les conditions sur place.','Possible en quad ou à pied selon votre envie et la météo.'], route:['Hébergement','Magic Mountain','Papetoai','Tiahura'], map:'moorea', points:[[-149.85,-17.53],[-149.88,-17.51],[-149.87,-17.50],[-149.91,-17.52]] },
  { date:'23', dow:'Vendredi', island:'transport', tag:'Tahiti', title:'Dernière matinée à Moorea', summary:'Matinée libre puis Thomas rejoint Tahiti pour dormir près de l’aéroport.', stops:[['09:00','Matinée libre'],['Après-midi','Ferry Moorea → Tahiti'],['Soir','Nuit à Tahiti']], notes:['Thomas doit impérativement dormir à Tahiti : le vol du lendemain décolle à 7 h 40.','Réserver un hôtel proche de l’aéroport et organiser le transfert matinal.','Programme d’Anaïs à partir de cette date à compléter.'], route:['Hébergement Moorea','Quai','Papeete','Hôtel Tahiti'] },
  { date:'24', dow:'Samedi', island:'transport', tag:'Retour', title:'Retour de Thomas', summary:'Départ très matinal pour l’aéroport et vol Air France vers Nice.', stops:[['≈04:45','Départ hôtel'],['07:40','AF0029'],['25/10 15:45','Arrivée CDG'],['18:50','Arrivée Nice']], notes:['Vérifier l’heure limite d’enregistrement Air France.','Anaïs reste en Polynésie et rentre le 2 novembre.'], route:['Hôtel Tahiti','Aéroport PPT','Paris CDG','Nice'] }
];

const addresses = [
  {island:'Huahine',name:'Bungalow Vanille',text:'Route de l’aéroport, Fare 98731 · +689 40 68 71 77 / +689 87 35 50 61',q:'Bungalow Vanille Fare Huahine'},
  {island:'Huahine',name:'Chez Tara',text:'Plage d’Avea, Parea 98731 · GPS −16.811325, −150.989456 · +689 40 68 78 45',q:'-16.811325,-150.989456'},
  {island:'Huahine',name:'La Passion du Paréo',text:'Mahuti Bay, Parea 98731 · GPS −16.794190, −150.977100 · +689 87 26 57 13',q:'-16.794190,-150.977100'},
  {island:'Maupiti',name:'Pension Mitiana',text:'Ta’atoi, côte ouest, Maupiti · GPS indicatif −16.4515, −152.2682 · WhatsApp +689 87 27 51 68',q:'-16.4515,-152.2682'},
  {island:'Maupiti',name:'Pension Orovaru chez Phirmin',text:'Hurumanu/Tefarearii, direction Tereia côté mer · GPS −16.453327, −152.257875 · +689 40 67 82 13',q:'-16.453327,-152.257875'},
  {island:'Maupiti',name:'Snack Chez Mimi',text:'Plage de Tereia, Vaiea 98732 · GPS −16.450765, −152.273924 · venir entre 11 h et midi',q:'-16.450765,-152.273924'}
];

const daysEl = document.querySelector('#days');
const mapData = {};

function routeDiagram(stops) {
  return `<div class="map route-diagram"><svg viewBox="0 0 520 280" role="img" aria-label="Trajet de la journée"><rect class="water" width="520" height="280"/><path class="route" d="M55 150 C150 65 220 225 305 135 S425 80 470 140"/>${stops.map((s,i)=>{const x=55+i*(415/Math.max(1,stops.length-1)); const y=150 + (i%2?-36:28);return `<circle class="marker" cx="${x}" cy="${y}" r="14"/><text class="marker-label" x="${x}" y="${y}">${i+1}</text><text x="${x}" y="${i%2?y-24:y+34}" text-anchor="middle" font-size="11" fill="#365b64">${s}</text>`}).join('')}</svg><p class="map-caption">Schéma du trajet · non destiné à la navigation</p></div>`;
}

function dayCard(day, index) {
  const stops = day.stops.map(([time,label])=>`<span class="stop"><time>${time}</time>${label}</span>`).join('');
  const detailMap = day.map ? `<div class="map" data-map="${day.map}" data-index="${index}"><svg viewBox="0 0 520 280" aria-label="Carte de la journée"><rect class="water" width="520" height="280"/><text x="260" y="140" text-anchor="middle" fill="#52757b">Chargement de la carte…</text></svg><p class="map-caption">Tracé indicatif · ouvrir Google Maps pour naviguer</p></div>` : routeDiagram(day.route);
  return `<article class="day" data-island="${day.island}">
    <div class="day-date"><span>${day.dow}</span><b>${day.date}</b><span>oct.</span></div>
    <div class="day-body">
      <div class="day-top"><div><h3>${day.title}</h3><p class="day-summary">${day.summary}</p></div><span class="tag">${day.tag}</span></div>
      <div class="timeline">${stops}</div>
      <div class="day-actions"><button class="details-toggle" aria-expanded="false">Détails & carte</button>${day.photo?'<button class="mini-button photo">Photo accès Hana Iti</button>':''}</div>
      <div class="day-details"><ul class="notes">${day.notes.map(n=>`<li>${n}</li>`).join('')}</ul>${detailMap}</div>
    </div>
  </article>`;
}

daysEl.innerHTML = days.map(dayCard).join('');

document.querySelectorAll('.details-toggle').forEach(button => button.addEventListener('click', () => {
  const day = button.closest('.day');
  const open = day.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
  button.textContent = open ? 'Réduire' : 'Détails & carte';
  if (open) drawPendingMaps(day);
}));

document.querySelectorAll('.island').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.island').forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.day').forEach(card=>card.hidden = filter !== 'all' && card.dataset.island !== filter);
}));

const dialog = document.querySelector('#photo-dialog');
document.querySelectorAll('.mini-button.photo').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{ if(event.target===dialog) dialog.close(); });

document.querySelector('#address-grid').innerHTML = addresses.map(a=>`<article class="address"><small>${a.island}</small><h3>${a.name}</h3><p>${a.text}</p><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.q)}">Itinéraire ↗</a></article>`).join('');

const start = new Date('2026-10-06T16:40:00+02:00');
const end = new Date('2026-10-24T07:40:00-10:00');
const now = new Date();
const n = document.querySelector('#countdown-number');
const l = document.querySelector('#countdown-label');
if (now < start) { n.textContent = Math.ceil((start-now)/86400000); l.textContent = 'jours avant le départ'; }
else if (now <= end) { n.textContent = 'Ia ora na'; l.textContent = 'le voyage est en cours'; }
else { n.textContent = 'Mauruuru'; l.textContent = 'souvenirs de Polynésie'; }

const sources = {
  huahine: ['huahine-coast.geojson','huahine-roads.geojson'],
  maupiti: ['maupiti-coast.geojson','maupiti-roads.geojson']
};

async function loadMapData(type) {
  if (type === 'moorea') return null;
  if (!mapData[type]) mapData[type] = Promise.all(sources[type].map(url=>fetch(url).then(r=>r.json())));
  return mapData[type];
}

function coordinates(geo) {
  const out=[];
  function walk(v){ if(Array.isArray(v)&&typeof v[0]==='number') out.push(v); else if(Array.isArray(v)) v.forEach(walk); }
  walk(geo); return out;
}

function projector(all,width=520,height=280,pad=25) {
  const lons=all.map(p=>p[0]), lats=all.map(p=>p[1]);
  const minX=Math.min(...lons),maxX=Math.max(...lons),minY=Math.min(...lats),maxY=Math.max(...lats);
  const scale=Math.min((width-2*pad)/(maxX-minX),(height-2*pad)/(maxY-minY));
  const ox=(width-(maxX-minX)*scale)/2, oy=(height-(maxY-minY)*scale)/2;
  return ([lon,lat])=>[ox+(lon-minX)*scale,height-(oy+(lat-minY)*scale)];
}

function pathFor(coords,project) {
  if (!Array.isArray(coords[0][0])) return coords.map((p,i)=>`${i?'L':'M'}${project(p).map(x=>x.toFixed(1)).join(' ')}`).join(' ');
  return coords.map(c=>pathFor(c,project)).join(' ');
}

function drawMoorea(svg, pts) {
  const outline='M87 66 C140 20 205 35 256 64 C302 34 380 35 440 78 C468 101 465 146 430 180 C390 220 330 241 264 247 C193 245 127 224 91 183 C57 143 54 96 87 66 Z M211 66 C230 89 241 106 253 134 C268 102 277 84 300 61';
  svg.innerHTML=`<rect class="water" width="520" height="280"/><path class="land" d="${outline}" fill-rule="evenodd"/><path class="road" d="M88 70 C150 28 208 43 256 72 C309 39 383 44 435 82 C463 108 450 158 411 190 C360 231 287 244 222 235 C152 225 94 196 73 150 C59 118 66 86 88 70Z"/>`;
  const project=projector([[-149.95,-17.61],[-149.72,-17.45],...pts],520,280,36);
  const pp=pts.map(project);
  svg.insertAdjacentHTML('beforeend',`<path class="route" d="${pp.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')}"/>${pp.map((p,i)=>`<circle class="marker" cx="${p[0]}" cy="${p[1]}" r="13"/><text class="marker-label" x="${p[0]}" y="${p[1]}">${i+1}</text>`).join('')}`);
}

async function drawPendingMaps(scope=document) {
  for (const holder of scope.querySelectorAll('.map[data-map]:not([data-drawn])')) {
    holder.dataset.drawn='true';
    const day=days[Number(holder.dataset.index)], type=holder.dataset.map, svg=holder.querySelector('svg');
    if(type==='moorea'){ drawMoorea(svg,day.points); continue; }
    try {
      const [coast,roads]=await loadMapData(type);
      const all=coordinates(coast).concat(day.points);
      const project=projector(all);
      const coastPaths=coast.features.map(f=>`<path class="land" d="${pathFor(f.geometry.coordinates,project)}"/>`).join('');
      const roadPaths=roads.features.map(f=>`<path class="road" d="${pathFor(f.geometry.coordinates,project)}"/>`).join('');
      const pp=day.points.map(project);
      const route=`<path class="route" d="${pp.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')}"/>`;
      const markers=pp.map((p,i)=>`<circle class="marker" cx="${p[0]}" cy="${p[1]}" r="13"/><text class="marker-label" x="${p[0]}" y="${p[1]}">${i+1}</text>`).join('');
      svg.innerHTML=`<rect class="water" width="520" height="280"/>${coastPaths}${roadPaths}${route}${markers}`;
    } catch { holder.querySelector('.map-caption').textContent='Carte indisponible · consulter les étapes ci-dessus'; }
  }
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
