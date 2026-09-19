const guides = [
  {id:'06',dow:'Mardi',island:'Voyage',title:'Départ de Nice',lede:'Premier jour du voyage : Nice, Paris puis le long-courrier Air France vers Papeete avec escale technique à Los Angeles.',timeline:[['14:30','Arrivée à Nice T2','Prévoir une marge confortable pour l’enregistrement du vol international.'],['16:40','AF7313 Nice → Paris','Arrivée à CDG Terminal 2F à 18 h 15.'],['19:30','AF0028 Paris → Papeete','Départ du Terminal 2E après une correspondance de 1 h 15.'],['Nuit','Escale technique à Los Angeles','Environ 2 h 15 avant de poursuivre vers Tahiti.']],facts:[['Transport','Air France'],['Bagage','23 kg en soute / personne'],['Repas','À bord'],['À vérifier','Documents de transit USA']],tips:['Garder passeports, billets, médicaments et batteries externes en cabine.','Prévoir une tenue confortable et un vêtement chaud pour l’avion.','Télécharger le guide avant le départ pour le consulter hors ligne.'],places:[['Aéroport Nice Côte d’Azur','Terminal 2, Nice','Nice Airport Terminal 2'],['Paris Charles-de-Gaulle','Correspondance 2F → 2E','Paris CDG Terminal 2E']]},
  {id:'07',dow:'Mercredi',island:'Moorea',title:'Arrivée en Polynésie',lede:'Arrivée matinale à Tahiti, transfert vers le port puis ferry pour Moorea. La journée reste volontairement douce pour récupérer du voyage.',timeline:[['05:30','Arrivée à Papeete','Récupération des bagages et sortie de l’aéroport.'],['Matin','Taxi vers la gare maritime','Compter une quinzaine de minutes hors circulation dense.'],['Matin','Ferry Papeete → Vaiare','Traversée de 30 à 50 minutes selon la compagnie.'],['Après-midi','Installation à Moorea','Courses, repos et petite plage proche du logement.']],facts:[['Transport','Taxi + ferry'],['Rythme','Journée légère'],['Repas','Courses / snack local'],['À confirmer','Horaire du ferry']],tips:['Choisir le premier ferry compatible avec la sortie de l’aéroport.','Garder à portée de main une tenue légère pour se changer après l’arrivée.','Ajouter l’adresse exacte du logement dès qu’elle est confirmée.'],places:[['Aéroport de Tahiti-Faa’a','Faa’a, Tahiti','Tahiti Faa a International Airport'],['Gare maritime de Papeete','Front de mer, Papeete','Papeete Ferry Terminal'],['Quai de Vaiare','Arrivée à Moorea','Vaiare Ferry Terminal Moorea']]},
  {id:'08',dow:'Jeudi',island:'Moorea',title:'Temae et côte est',lede:'Une première boucle facile entre panorama, plage et côte est, avec la cascade d’Afareaitu si l’accès et la météo le permettent.',timeline:[['09:00','Départ du logement','Prendre la route vers le belvédère de Toatea.'],['09:30','Belvédère de Toatea','Vue sur le lagon de Temae et Tahiti.'],['10:15','Plage de Temae','Baignade et snorkeling depuis la plage.'],['12:30','Déjeuner','Snack ou roulotte sur la côte est.'],['15:00','Afareaitu','Cascade en option selon les conditions d’accès.']],facts:[['Transport','Voiture ou scooter'],['Rythme','Journée complète'],['Repas','Snack local'],['À emporter','Masque + chaussures d’eau']],tips:['La plage de Temae dispose d’un accès public.','Ne laisser aucun objet visible dans le véhicule.','Demander localement les conditions d’accès à la cascade avant de s’engager.'],places:[['Belvédère de Toatea','Point de vue au-dessus de Temae','Toatea Lookout Moorea'],['Plage de Temae','Plage publique et snorkeling','Temae Beach Moorea'],['Cascade d’Afareaitu','Accès à confirmer sur place','Afareaitu Waterfalls Moorea']]},
  {id:'09',dow:'Vendredi',island:'Moorea',title:'Baleines et Tiahura',lede:'Sortie en mer le matin, puis déjeuner et détente sur la côte nord-ouest autour de Tiahura et des Tipaniers.',timeline:[['07:30','Présentation au prestataire','Horaire exact selon la réservation.'],['08:00','Sortie baleines','Observation avec un opérateur autorisé.'],['12:30','Déjeuner','Tiahura ou secteur des Tipaniers.'],['14:30','Plage et snorkeling','Après-midi libre au bord du lagon.'],['17:30','Coucher de soleil','Retour tranquille par la côte nord-ouest.']],facts:[['Transport','Bateau + route'],['Rythme','Matin réservé'],['Repas','Tiahura / Tipaniers'],['À emporter','Lycra + sac étanche']],tips:['Privilégier un opérateur respectant les distances d’approche.','Prendre un vêtement coupe-vent pour le bateau.','L’activité dépend des conditions de mer et de la présence des animaux.'],places:[['Tiahura','Village de la côte nord-ouest','Tiahura Moorea'],['Plage des Tipaniers','Plage et lagon','Les Tipaniers Moorea']]},
  {id:'10',dow:'Samedi',island:'Huahine',title:'Moorea → Huahine',lede:'Retour matinal à Tahiti, vol Air Tahiti vers Huahine, puis installation tranquille au Bungalow Vanille.',timeline:[['Tôt','Ferry Moorea → Tahiti','Choisir une traversée permettant d’être à l’aéroport vers 9 h.'],['10:50','Vol VT310','Tahiti-Faa’a → Huahine-Fare.'],['11:30','Arrivée à Huahine','Récupération des bagages.'],['Midi','Transfert vers la pension','Prévenir la pension 24 h avant pour l’accueil.'],['14:00','Check-in','Installation au Bungalow Vanille, puis découverte de Fare.']],facts:[['Transport','Ferry + avion + transfert'],['Bagage','15 kg en soute / personne'],['Hébergement','Bungalow Vanille'],['Référence','Air Tahiti IBKEN8']],tips:['Le loueur de scooters viendra vous chercher à la pension le dimanche à 8 h 30.','Demander une restitution près de la pension ou du quai le 14 octobre pour éviter les bagages en scooter.','Check-in annoncé entre 14 h et 18 h.'],places:[['Aéroport de Huahine-Fare','Arrivée du vol VT310','Huahine Fare Airport'],['Bungalow Vanille','Route de l’aéroport, Fare 98731','Bungalow Vanille Fare Huahine','+689 40 68 71 77'],['Fare','Village, courses et front de mer','Fare Huahine']]},
  {id:'11',dow:'Dimanche',island:'Huahine',title:'Panoramas, Chez Tara et Hana Iti',lede:'Prise en charge du scooter à la pension à 8 h 30, puis grande boucle du sud entre panoramas, four tahitien et plage sauvage.',timeline:[['08:30','Prise en charge à la pension','Le loueur vient vous chercher au Bungalow Vanille pour récupérer le scooter.'],['09:15','Belvédère de Maroe','Arrêt photo avec très peu de marche.'],['10:00','Panorama de Tefarerii','Point de vue accessible et très photogénique.'],['11:00','Four tahitien Chez Tara','Déjeuner sur la plage d’Avea, réservation indispensable.'],['14:00','Plage Hana Iti','Baignade et snorkeling, accès à confirmer avec le repère photo.'],['17:00','Retour à Fare','Retour par Haapu et Fitii.']],facts:[['Transport','Scooter · prise en charge 8 h 30'],['Repas','Chez Tara vers 11 h'],['Budget repas','≈ 5 000 F / personne'],['À emporter','Espèces + snorkeling']],tips:['Être prêts devant la pension quelques minutes avant 8 h 30.','Réserver Chez Tara et demander une table face au lagon.','Pour Hana Iti, conserver la photo d’accès hors ligne et demander confirmation à la pension.'],places:[['Bungalow Vanille','Prise en charge scooter à 8 h 30','Bungalow Vanille Fare Huahine','+689 40 68 71 77'],['Belvédère de Maroe','Vue sur la baie','Belvedere de Maroe Huahine'],['Panorama de Tefarerii','Point de vue sur le lagon','Panorama de Tefarerii Huahine'],['Chez Tara','Plage d’Avea, Parea 98731','-16.811325,-150.989456','+689 40 68 78 45'],['Plage Hana Iti','Accès près de Vairupe Vanille','Plage Hana Iti Huahine']],photo:true},
  {id:'12',dow:'Lundi',island:'Huahine',title:'Création des paréos',lede:'Atelier complet à La Passion du Paréo le matin, déjeuner dans le sud pendant le séchage, puis second passage pour récupérer les créations.',timeline:[['07:45','Départ de Fare','Prévoir environ 40 minutes de scooter.'],['08:30','Début de l’atelier','Création et teinture des paréos.'],['12:30','Fin de l’atelier','Déjeuner et détente dans le secteur de Parea.'],['Vers 16:00','Récupération des paréos','Horaire exact à confirmer le matin avec Nathalie.'],['Fin de journée','Retour à Fare','Retour tranquille avant la nuit.']],facts:[['Transport','Scooter'],['Activité','08 h 30–12 h 30'],['Repas','Parea / baie d’Avea'],['À prévoir','Tenue pouvant être tachée']],tips:['Ne pas prévoir une activité loin de Parea pendant le séchage.','Confirmer l’heure de récupération dès votre arrivée.','Transporter les paréos à plat ou dans un sac propre.'],places:[['La Passion du Paréo','Mahuti Bay, Parea 98731','-16.794190,-150.977100','+689 87 26 57 13'],['Parea','Secteur conseillé pour le déjeuner','Parea Huahine'],['Baie d’Avea','Plage et détente','Avea Bay Huahine']]},
  {id:'13',dow:'Mardi',island:'Huahine',title:'Pohue Rahi et baie d’Avea',lede:'Dernière grande journée à Huahine : randonnée panoramique limitée au premier belvédère, patrimoine et baignade dans le sud.',timeline:[['08:30','Départ de Fare','Route vers Tefarerii.'],['09:15','Sentier de Pohue Rahi','Montée jusqu’au premier point de vue puis demi-tour.'],['11:15','Panorama de Tefarerii','Arrêt facile après la randonnée.'],['12:30','Déjeuner et plage','Secteur de la baie d’Avea.'],['14:30','Marae Anini','Visite du site au bord du lagon.'],['16:30','Retour à Fare','Faire le plein et préparer les bagages.']],facts:[['Transport','Scooter + marche'],['Randonnée','≈ 45 min de montée'],['Repas','Baie d’Avea'],['À emporter','Eau + bonnes chaussures']],tips:['Confirmer le départ exact du sentier auprès de la pension.','Faire demi-tour au premier panorama pour respecter la durée souhaitée.','Préparer la restitution du scooter et le départ bateau du lendemain.'],places:[['Pohue Rahi','Départ à confirmer localement','Pohue Rahi Huahine'],['Panorama de Tefarerii','Point de vue accessible','Panorama de Tefarerii Huahine'],['Marae Anini','Site culturel à Parea','Marae Anini Huahine'],['Baie d’Avea','Baignade et déjeuner','Avea Bay Huahine']]},
  {id:'14',dow:'Mercredi',island:'Maupiti',title:'Huahine → Maupiti en bateau',lede:'Restitution du scooter, traversée de 4 h 55 depuis le quai de Fare puis accueil par Gladys et installation à la Pension Mitiana.',timeline:[['Avant 09:00','Petit-déjeuner et check-out','Check-out du Bungalow Vanille avant 10 h.'],['09:00','Restitution du scooter','Organisation à confirmer avec le loueur.'],['09:15','Arrivée au quai de Fare','Prévoir une marge avant l’embarquement.'],['10:00','Départ du bateau','Billet aller simple Huahine → Maupiti.'],['14:55','Arrivée au port de Maupiti','Gladys vient vous chercher.'],['Soir','Dîner à la pension','Inclus dans la demi-pension.']],facts:[['Transport','Bateau 4 h 55'],['Billet','7 000 F'],['Hébergement','Pension Mitiana'],['Transfert','1 000 F / personne A-R']],tips:['Prévoir eau, encas et protection contre le mal de mer.','Le billet a été vendu le 11/08/2026 et reste valable jusqu’au 11/08/2027.','Prévenir Gladys des horaires définitifs.'],places:[['Quai de Fare','Départ à 10 h','Quai de Fare Huahine'],['Port de Maupiti','Arrivée à 14 h 55','Port de Maupiti'],['Pension Mitiana','Ta’atoi, côte ouest','-16.4515,-152.2682','+689 87 27 51 68']]},
  {id:'15',dow:'Jeudi',island:'Maupiti',title:'Excursion lagon et motu',lede:'Journée complète avec raies manta, jardin de corail, raies pastenagues, bénitier au citron, repas sur le motu et découverte de la passe.',timeline:[['08:00','Départ de l’excursion','Organisation par la Pension Mitiana.'],['Matin','Raies manta','Observation selon les conditions.'],['Matin','Jardin de corail','Snorkeling puis raies pastenagues.'],['12:00','Repas sur le motu','Cuisine locale et bénitier au citron.'],['Après-midi','Passe de Maupiti','Découverte de la passe avant le retour.'],['15:00','Retour à la pension','Fin d’après-midi libre.']],facts:[['Transport','Bateau'],['Tarif','10 000 F / personne'],['Acompte','6 000 F pour deux'],['Repas','Inclus sur le motu']],tips:['Les conditions sont reçues, mais les places restent à confirmer.','Prévoir vos propres masque et tuba.','Emporter lycra, chapeau, crème solaire, serviette et sac étanche.'],places:[['Pension Mitiana','Point de rendez-vous','-16.4515,-152.2682','+689 87 27 51 68'],['Passe de Maupiti','Passage prévu pendant l’excursion','Maupiti Pass']]},
  {id:'16',dow:'Vendredi',island:'Maupiti',title:'Tour de Maupiti à vélo',lede:'Une boucle facile d’environ neuf kilomètres pour relier Tereia, les points de vue, le village de Vaiea et les sites culturels.',timeline:[['09:00','Départ de la pension','Location des vélos : 2 000 F par journée.'],['09:20','Plage de Tereia','Premier arrêt au bord du lagon.'],['11:00','Petit col du sud-est','Vue depuis la route.'],['12:00','Vaiea','Déjeuner, temple et commerces.'],['14:30','Pétroglyphes ou musée','Selon les ouvertures sur place.'],['16:30','Retour à Mitiana','Baignade devant la pension.']],facts:[['Transport','Vélo · boucle 9 km'],['Location','2 000 F / vélo'],['Repas','Snack à Vaiea'],['À emporter','Eau + espèces']],tips:['Vérifier freins, pneus et antivol avant le départ.','Les horaires des petites visites peuvent être variables.','La boucle est courte : prendre le temps de multiplier les arrêts.'],places:[['Pension Mitiana','Départ et retour','-16.4515,-152.2682'],['Plage de Tereia','Grande plage de sable','Tereia Beach Maupiti'],['Vaiea','Village principal','Vaiea Maupiti'],['Pétroglyphes de Haranae','Accès à confirmer','Haranae Petroglyphs Maupiti']]},
  {id:'17',dow:'Samedi',island:'Maupiti',title:'Mont Teurafaatiu et four tahitien',lede:'Ascension complète du sommet de Maupiti le matin, puis four tahitien en option à la Pension Orovaru chez Phirmin.',timeline:[['07:30','Départ de Mitiana','Partir tôt avant la chaleur.'],['08:00','Début du sentier','Accès côté Vaiea à confirmer avec Gladys.'],['Matin','Ascension du Teurafaatiu','Passages raides et plusieurs cordes.'],['Vers 12:00','Retour au village','Horaire variable selon le rythme.'],['Déjeuner','Four tahitien en option','Chez Phirmin et Rose, uniquement le samedi sur réservation.']],facts:[['Transport','Vélo + randonnée'],['Niveau','Sportif et raide'],['Repas','Pension Orovaru'],['Condition','Météo sèche indispensable']],tips:['Prévoir de vraies chaussures de marche, au moins 1,5 l d’eau par personne et une casquette.','Ne pas monter si les rochers sont humides.','Réserver le four tahitien et confirmer son horaire avant de fixer le départ.'],places:[['Départ Teurafaatiu','Vaiea, accès à confirmer','Mount Teurafaatiu Trail Maupiti'],['Pension Orovaru chez Phirmin','Hurumanu / Tefarearii, côté mer','-16.453327,-152.257875','+689 40 67 82 13']]},
  {id:'18',dow:'Dimanche',island:'Maupiti',title:'Tereia, motu Auira et Chez Mimi',lede:'Journée lagon : plage de Tereia, traversée à pied vers le motu Auira si la marée le permet et déjeuner très tôt au Snack Chez Mimi.',timeline:[['09:00','Plage de Tereia','Installation et vérification des conditions.'],['Marée basse','Traversée vers Auira','Uniquement après avis local favorable.'],['11:00–12:00','Snack Chez Mimi','Il faut impérativement arriver tôt.'],['Après-midi','Plage et repos','Baignade ou retour sur le motu selon la marée.']],facts:[['Transport','Vélo + marche dans l’eau'],['Repas','Chez Mimi avant midi'],['Condition','Marée et courant'],['À emporter','Chaussures d’eau + sac étanche']],tips:['Demander à Gladys l’horaire et le passage les plus sûrs.','Ne jamais entreprendre la traversée si le courant ou la profondeur semblent importants.','Garder téléphone et objets de valeur dans un sac parfaitement étanche.'],places:[['Plage de Tereia','Point de départ de la traversée','Tereia Beach Maupiti'],['Motu Auira','Accessible à pied selon conditions','Motu Auira Maupiti'],['Snack Chez Mimi','Plage de Tereia, Vaiea 98732','-16.450765,-152.273924']]},
  {id:'19',dow:'Lundi',island:'Moorea',title:'Maupiti → Tahiti → Moorea',lede:'Dernière matinée à Maupiti, vol Air Tahiti vers Papeete puis ferry tardif vers Moorea si les horaires permettent la correspondance.',timeline:[['Matin','Temps libre','Plage, vélo ou derniers achats.'],['Avant 14:00','Transfert vers l’aéroport','Horaire à organiser avec Gladys.'],['15:35','Vol VT734','Maupiti → Tahiti-Faa’a.'],['16:25','Arrivée à Papeete','Récupération des bagages puis taxi vers le port.'],['Soir','Ferry vers Moorea','À confirmer impérativement ; nuit à Tahiti en plan B.']],facts:[['Transport','Navette + avion + ferry'],['Bagage','15 kg en soute / personne'],['Repas','Déjeuner avant le vol'],['Plan B','Nuit à Tahiti']],tips:['Le vol part d’un motu : respecter strictement l’horaire de transfert.','Vérifier le dernier ferry Papeete–Moorea quelques jours avant.','Conserver une solution d’hébergement à Tahiti si la correspondance est impossible.'],places:[['Aéroport de Maupiti','Départ du vol VT734','Maupiti Airport'],['Aéroport de Tahiti-Faa’a','Arrivée à 16 h 25','Tahiti Faa a International Airport'],['Gare maritime de Papeete','Correspondance ferry','Papeete Ferry Terminal']]},
  {id:'20',dow:'Mardi',island:'Moorea',title:'Baies et vallée d’Opunohu',lede:'Une journée panoramique entre les baies de Cook et d’Opunohu, le belvédère, les sites culturels, le lycée agricole et la plage de Ta’ahiamanu.',timeline:[['09:00','Départ du logement','Route vers la baie de Cook.'],['09:30','Baie de Cook','Arrêt photo sur la côte nord.'],['10:30','Belvédère d’Opunohu','Vue sur les deux grandes baies.'],['11:30','Lycée agricole','Jus, confitures ou glaces selon ouverture.'],['14:30','Plage de Ta’ahiamanu','Baignade et snorkeling.']],facts:[['Transport','Voiture ou scooter'],['Rythme','Journée découverte'],['Repas','Lycée agricole / snack'],['À vérifier','État de la Route des Ananas']],tips:['Le belvédère est accessible par la route, sans longue marche.','La Route des Ananas peut nécessiter un véhicule adapté selon son état.','Prévoir du liquide pour les achats locaux.'],places:[['Baie de Cook','Côte nord de Moorea','Cook Bay Moorea'],['Belvédère d’Opunohu','Vue sur Cook et Opunohu','Belvedere Lookout Moorea'],['Lycée agricole d’Opunohu','Produits locaux','Lycee Agricole Opunohu Moorea'],['Plage de Ta’ahiamanu','Plage publique','Taahiamanu Beach Moorea']]},
  {id:'21',dow:'Mercredi',island:'Moorea',title:'Journée lagon',lede:'Une journée plus légère à organiser selon la météo : kayak, snorkeling, motu et coucher de soleil sur la côte nord-ouest.',timeline:[['09:00','Départ','Choix du secteur selon le vent et le lagon.'],['Matin','Kayak ou excursion bateau','Tiahura pour les motus ou Temae pour le récif.'],['12:30','Déjeuner','Plage ou motu selon la formule.'],['Après-midi','Snorkeling et repos','Raies, tortues et poissons possibles.'],['Soir','Coucher de soleil','Côte nord-ouest.']],facts:[['Transport','Kayak ou bateau'],['Rythme','Journée détente'],['Repas','Plage / motu'],['À réserver','Activité la veille']],tips:['Ne jamais toucher ni nourrir les animaux du lagon.','Protéger le matériel électronique dans un sac étanche.','Choisir le site en fonction des conditions réelles du matin.'],places:[['Tiahura','Motu et lagon nord-ouest','Tiahura Moorea'],['Plage de Temae','Récif et snorkeling','Temae Beach Moorea']]},
  {id:'22',dow:'Jeudi',island:'Moorea',title:'Magic Mountain et nord-ouest',lede:'Point de vue emblématique le matin, villages de la côte nord-ouest puis après-midi plage autour de Papetoai et Tiahura.',timeline:[['08:30','Départ','Route vers l’accès de Magic Mountain.'],['09:00','Magic Mountain','Montée à pied ou en quad selon le choix.'],['12:00','Papetoai','Déjeuner et découverte du village.'],['14:00','Tiahura / Tipaniers','Plage, baignade et snorkeling.'],['17:30','Coucher de soleil','Dernière soirée complète à Moorea.']],facts:[['Transport','Route + marche ou quad'],['Effort','Montée courte mais raide'],['Repas','Papetoai'],['Accès','Généralement payant']],tips:['Porter des chaussures fermées : la pente est marquée.','Vérifier le tarif et les conditions d’accès sur place.','Prévoir une activité plus douce l’après-midi.'],places:[['Magic Mountain','Point de vue panoramique','Magic Mountain Moorea'],['Papetoai','Village de la côte nord-ouest','Papetoai Moorea'],['Tiahura','Plages et coucher de soleil','Tiahura Moorea']]},
  {id:'23',dow:'Vendredi',island:'Tahiti',title:'Dernière matinée à Moorea',lede:'Matinée libre puis séparation du programme : Thomas rejoint Tahiti pour dormir près de l’aéroport, tandis qu’Anaïs peut rester à Moorea.',timeline:[['09:00','Matinée libre','Plage, snorkeling, souvenirs ou massage.'],['Midi','Déjeuner à Moorea','Dernier repas avant le transfert.'],['Après-midi','Ferry Moorea → Tahiti','Horaire à choisir avec une bonne marge.'],['Soir','Hôtel près de l’aéroport','Thomas prépare le départ très matinal.']],facts:[['Transport','Ferry + taxi'],['Thomas','Nuit obligatoire à Tahiti'],['Anaïs','Peut rester à Moorea'],['À réserver','Hôtel proche de PPT']],tips:['Ne pas dormir à Moorea pour le vol de Thomas à 7 h 40 le lendemain.','Choisir un hôtel proposant un transfert très matinal ou réserver un taxi.','Préparer le bagage cabine et les documents avant le coucher.'],places:[['Quai de Vaiare','Départ de Moorea','Vaiare Ferry Terminal Moorea'],['Gare maritime de Papeete','Arrivée à Tahiti','Papeete Ferry Terminal'],['Aéroport de Tahiti-Faa’a','Secteur conseillé pour la nuit','Tahiti Faa a International Airport']]},
  {id:'24',dow:'Samedi',island:'Retour',title:'Retour de Thomas',lede:'Départ avant l’aube pour l’aéroport de Papeete, vol Air France vers Paris puis correspondance pour Nice le dimanche 25 octobre.',timeline:[['Vers 04:45','Départ de l’hôtel','Taxi vers l’aéroport.'],['07:40','AF0029 Papeete → Paris','Escale technique à Los Angeles.'],['25/10 15:45','Arrivée à Paris-CDG','Correspondance de 2 h 25.'],['18:10','AF7314 Paris → Nice','Départ du Terminal 2F.'],['19:45','Arrivée à Nice T2','Fin du voyage de Thomas.']],facts:[['Transport','Taxi + Air France'],['Bagage','23 kg en soute'],['Correspondance','2 h 25 à CDG'],['Anaïs','Retour le 2 novembre']],tips:['Vérifier l’ouverture de l’enregistrement et l’heure exacte du taxi la veille.','Garder les justificatifs et documents pour l’escale américaine en cabine.','Le retour d’Anaïs est prévu le 2 novembre à 8 h 50, arrivée à Nice le 3 novembre à 19 h 45.'],places:[['Aéroport de Tahiti-Faa’a','Départ à 7 h 40','Tahiti Faa a International Airport'],['Paris Charles-de-Gaulle','Correspondance vers Nice','Paris CDG Terminal 2F'],['Aéroport Nice Côte d’Azur','Arrivée Terminal 2','Nice Airport Terminal 2']]}
];

const stepExtras = {
  '06':[
    'L’enregistrement long-courrier et le contrôle des documents peuvent prendre du temps : mieux vaut être au terminal environ deux heures avant.',
    'Les bagages doivent normalement suivre jusqu’à Papeete, mais demandez confirmation au comptoir de Nice avant de les déposer.',
    'Le changement 2F vers 2E est balisé dans l’aéroport ; marchez directement vers la porte dès l’arrivée à Paris.',
    'L’escale américaine reste un transit soumis aux formalités d’entrée des États-Unis : gardez le passeport et les justificatifs accessibles.'
  ],
  '07':[
    'Après le passage de la police et la récupération des valises, profitez de l’aéroport pour retirer quelques francs Pacifique si nécessaire.',
    'Donnez au chauffeur le nom exact de la compagnie de ferry choisie afin d’être déposé au bon comptoir.',
    'Les bagages sont rangés dans une zone dédiée du navire ; gardez avec vous papiers, téléphone et objets fragiles.',
    'Évitez de charger cette première journée : décalage horaire, chaleur et nuit en avion peuvent fortement fatiguer.'
  ],
  '08':[
    'Faites le plein et téléchargez les points de la journée avant de quitter le logement.',
    'L’arrêt est court mais la lumière du matin est idéale pour photographier le lagon et Tahiti au loin.',
    'Entrez progressivement dans l’eau et repérez le courant avant de partir avec masque et tuba.',
    'Choisissez un repas assez léger pour garder du temps et de l’énergie pour la suite de la boucle.',
    'L’accès peut traverser un terrain privé : demandez toujours l’autorisation et prévoyez une petite contribution.'
  ],
  '09':[
    'Arrivez quinze à vingt minutes avant le départ pour l’équipement, les consignes et le règlement éventuel.',
    'La sortie peut être mouvementée : petit-déjeuner léger et traitement contre le mal de mer si vous y êtes sensible.',
    'Privilégiez un établissement proche de la plage pour limiter les déplacements après la sortie.',
    'Les zones peu profondes conviennent mieux à une reprise tranquille après plusieurs heures en bateau.',
    'La côte nord-ouest offre généralement les meilleurs dégagements pour regarder le soleil descendre sur le lagon.'
  ],
  '10':[
    'Partez avec une marge suffisante : il faut débarquer, prendre un taxi et rejoindre l’aéroport de Tahiti.',
    'La présentation à l’aéroport est conseillée vers 9 h 20 ; gardez le poids des bagages à 15 kg par personne.',
    'Le petit aérodrome permet une sortie rapide ; contactez l’hôte dès que les bagages sont récupérés.',
    'Le transfert vous conduit directement vers la pension ; gardez le téléphone accessible pour prévenir votre hôte à l’arrivée.',
    'Profitez de l’installation pour confirmer la prise en charge du scooter dimanche à 8 h 30 et l’accès à Hana Iti.'
  ],
  '11':[
    'Soyez prêts devant la pension quelques minutes avant 8 h 30 ; photographiez l’état du scooter et vérifiez freins, pneus, casques et carburant.',
    'Le belvédère se prête à un arrêt rapide ; restez bien garés hors de la chaussée.',
    'Le panorama demande peu d’effort et permet de repérer la côte que vous suivrez ensuite vers Parea.',
    'Le repas traditionnel est servi à heure fixe : arrivez un peu avant 11 h et prévoyez des espèces pour les boissons.',
    'Le chemin n’est pas toujours évident ; ne forcez pas un passage privé et demandez confirmation aux habitants.',
    'Évitez de rouler après la tombée de la nuit, certaines portions de route étant peu éclairées.'
  ],
  '12':[
    'La route jusqu’à Parea est agréable mais assez longue : prévoyez une marge pour arriver sans stress.',
    'L’atelier comprend la préparation, la mise en couleur et les explications sur les motifs traditionnels.',
    'Restez dans le sud de l’île afin de revenir facilement dès que les tissus sont suffisamment secs.',
    'Manipulez les paréos avec les mains propres et demandez la meilleure manière de les plier pour le transport.',
    'Rangez-les séparément dans les bagages jusqu’à ce que les couleurs soient parfaitement stabilisées.'
  ],
  '13':[
    'Vérifiez la météo avant de partir : la randonnée est moins agréable et plus glissante après la pluie.',
    'Montez à votre rythme jusqu’au premier point de vue ; faites demi-tour dès que les passages deviennent trop techniques.',
    'Cet arrêt complète la vue de la randonnée sans demander d’effort supplémentaire.',
    'Profitez du secteur pour manger, vous baigner et récupérer avant la visite culturelle.',
    'Respectez le caractère sacré du lieu : restez sur les cheminements et ne déplacez aucune pierre.',
    'Terminez la journée par le carburant, la préparation des bagages et la confirmation de la restitution du scooter.'
  ],
  '14':[
    'Regroupez les affaires fragiles et prévoyez un petit sac séparé pour la longue traversée.',
    'Faites constater le niveau de carburant et l’état du véhicule lors de la remise des clés.',
    'Repérez le bateau, confirmez l’enregistrement et gardez billets et pièces d’identité à portée de main.',
    'Installez-vous à l’ombre si possible et gardez eau, encas et protection contre le mal de mer avec vous.',
    'Gladys doit connaître l’horaire exact ; prévenez-la rapidement en cas de retard annoncé.',
    'La demi-pension comprend le dîner : profitez de ce premier repas pour confirmer les activités des jours suivants.'
  ],
  '15':[
    'Prenez un petit-déjeuner suffisant mais léger et soyez prêts quelques minutes avant l’heure annoncée.',
    'L’observation n’est jamais garantie ; suivez les instructions du guide et gardez une distance respectueuse.',
    'Les chaussons d’eau protègent les pieds, mais veillez surtout à ne pas toucher ni casser le corail.',
    'Le repas est inclus : signalez à l’avance toute allergie ou contrainte alimentaire.',
    'Le courant peut être plus marqué près de la passe ; restez dans la zone indiquée par l’équipage.',
    'Rincez masque, tuba et vêtements à l’eau douce dès le retour pour éviter le sel et le sable.'
  ],
  '16':[
    'Demandez un panier ou un système de fixation si vous transportez serviettes, eau et matériel de plage.',
    'Le matin, la plage est généralement plus calme et la lumière met en valeur les couleurs du lagon.',
    'Arrêtez-vous uniquement dans un emplacement sûr pour ne pas gêner la circulation sur la petite route.',
    'Profitez du village pour acheter de l’eau, retirer de l’argent si le distributeur fonctionne et déjeuner.',
    'Demandez les horaires avant de vous déplacer, car les petites structures peuvent fermer sans préavis.',
    'Rendez les vélos avant la nuit et signalez immédiatement tout problème mécanique rencontré.'
  ],
  '17':[
    'Un départ matinal réduit l’exposition au soleil et laisse une marge avant le déjeuner réservé.',
    'Demandez à Gladys un repère précis du départ afin de ne pas perdre de temps dans Vaiea.',
    'Utilisez les cordes uniquement comme aide, gardez trois points d’appui et ne dépassez pas votre niveau de confort.',
    'Prévoyez du temps pour redescendre prudemment : la descente peut être plus délicate que la montée.',
    'Confirmez l’heure du service chez Phirmin ; si la randonnée dure plus longtemps, prévenez la pension.'
  ],
  '18':[
    'À l’arrivée, demandez aux habitués où se trouve le passage le moins profond et à quelle heure revenir.',
    'Le niveau peut dépasser la taille par endroits : renoncez si le courant, le vent ou la visibilité sont mauvais.',
    'Les plats peuvent partir rapidement ; se présenter dès 11 h augmente les chances d’avoir tout le choix.',
    'Gardez une fin de journée souple pour vous adapter à la marée et récupérer avant le départ du lendemain.'
  ],
  '19':[
    'Réglez le solde de la pension et vérifiez que rien n’a été oublié avant de libérer la chambre.',
    'Le trajet vers l’aéroport comprend une navette maritime : suivez exactement l’horaire donné par Gladys.',
    'Conservez les objets fragiles en cabine et respectez la limite de 15 kg pour le bagage enregistré.',
    'À l’arrivée, rejoignez rapidement le taxi ou le moyen de transfert prévu vers la gare maritime.',
    'Si le dernier ferry est manqué, utilisez directement le plan B à Tahiti plutôt que d’attendre au port.'
  ],
  '20':[
    'Prévoyez eau, maillot et chaussures faciles à enlever pour alterner visites et baignade.',
    'Utilisez les espaces d’arrêt prévus : la route est étroite autour de la baie.',
    'La route monte dans la vallée ; conduisez doucement et surveillez les véhicules venant en sens inverse.',
    'Vérifiez les horaires de la boutique avant la montée pour ne pas trouver le point de vente fermé.',
    'Les arbres offrent de l’ombre, mais gardez vos affaires près de vous pendant la baignade.'
  ],
  '21':[
    'Regardez le vent et l’état du lagon avant de choisir entre Temae et Tiahura.',
    'Demandez un gilet et les limites de navigation, même si le plan d’eau paraît calme.',
    'Vérifiez si l’eau et le repas sont compris dans la formule choisie avant le départ.',
    'Restez à distance des raies et tortues et évitez les zones de corail trop peu profondes.',
    'Gardez une marge pour rendre le matériel avant la fermeture du loueur.'
  ],
  '22':[
    'Commencez tôt pour monter avant la forte chaleur et éviter les groupes les plus nombreux.',
    'La pente est importante : faites des pauses régulières et gardez de l’eau pour la descente.',
    'Profitez du passage pour voir l’église octogonale et choisir un snack dans le village.',
    'Alternez baignade et repos à l’ombre après l’effort du matin.',
    'Repérez à l’avance un endroit sûr pour stationner avant le coucher de soleil.'
  ],
  '23':[
    'Gardez cette matinée flexible pour les derniers achats et la préparation des deux programmes séparés.',
    'Choisissez un déjeuner proche du logement ou du quai afin de ne pas retarder le ferry.',
    'Thomas doit prendre une traversée suffisamment tôt pour absorber un éventuel retard.',
    'Demandez la confirmation écrite du taxi du lendemain et préparez les bagages avant de dormir.'
  ],
  '24':[
    'Soyez prêts avant l’arrivée du taxi : à cette heure, une solution de remplacement serait difficile à trouver.',
    'Présentez-vous à l’enregistrement avec suffisamment d’avance et conservez les documents de transit en cabine.',
    'Suivez les indications vers le Terminal 2F dès l’arrivée et vérifiez immédiatement la porte du vol pour Nice.',
    'La marge permet normalement le transfert, mais évitez tout arrêt inutile dans le terminal.',
    'À l’arrivée, vérifiez les bagages avant de quitter la zone de livraison et conservez les cartes d’embarquement.'
  ]
};

const qs = new URLSearchParams(location.search);
const id = qs.get('j') || '06';
const currentIndex = guides.findIndex(day => day.id === id);
const day = guides[currentIndex];
const root = document.querySelector('#day-content');

function mapsUrl(query){ return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`; }
function phoneUrl(phone){ return `tel:${phone.replace(/[^+\d]/g,'')}`; }
function routeSvg(places){
  const shown=places.slice(0,5), count=shown.length;
  const points=shown.map((_,i)=>({x:60+i*(480/Math.max(1,count-1)),y:i%2?115:175}));
  const line=points.map((p,i)=>`${i?'L':'M'} ${p.x} ${p.y}`).join(' ');
  return `<div class="route-map"><svg viewBox="0 0 600 290" role="img" aria-label="Schéma des étapes du jour"><rect width="600" height="290" fill="#c9efed"/><path d="M0 235 C110 205 160 260 270 225 S480 195 600 220 L600 290 L0 290Z" fill="#f4e7bd"/><path class="route" d="${line}"/>${points.map((p,i)=>`<circle class="pin" cx="${p.x}" cy="${p.y}" r="17"/><text x="${p.x}" y="${p.y+5}">${i+1}</text>`).join('')}</svg></div>`;
}

if(!day){
  root.innerHTML='<section class="not-found"><h1>Journée introuvable</h1><p>Cette date ne fait pas partie du programme.</p><a class="button primary" href="index.html">Retour au planning</a></section>';
} else {
  document.title=`${day.id} octobre · ${day.title} · Polynésie 2026`;
  const prev=guides[currentIndex-1], next=guides[currentIndex+1];
  root.innerHTML=`
    <section class="day-cover"><div class="day-cover-inner"><div class="big-date"><span>${day.dow}</span><b>${day.id}</b><span>octobre</span></div><div><p class="eyebrow">${day.island} · programme détaillé</p><h1>${day.title}</h1><p class="day-lede">${day.lede}</p></div></div></section>
    <div class="detail-shell">
      <nav class="day-nav" aria-label="Journées précédente et suivante">${prev?`<a href="jour.html?j=${prev.id}">← ${prev.id} octobre</a>`:'<span></span>'}${next?`<a href="jour.html?j=${next.id}">${next.id} octobre →</a>`:'<span></span>'}</nav>
      <div class="detail-grid">
        <div>
          <section class="detail-card"><p class="eyebrow">Au fil de la journée</p><h2>Programme détaillé</h2><ol class="schedule">${day.timeline.map(([time,title,text],stepIndex)=>`<li><time>${time}</time><div><b>${title}</b><p>${text}</p><p class="step-extra"><strong>À savoir</strong>${stepExtras[day.id]?.[stepIndex] || 'Gardez cette étape flexible et adaptez-la aux conditions rencontrées sur place.'}</p></div></li>`).join('')}</ol></section>
          <section class="detail-card"><p class="eyebrow">Se repérer</p><h2>Carte et étapes</h2>${routeSvg(day.places)}<div class="map-links">${day.places.map((p,i)=>`<a target="_blank" rel="noopener" href="${mapsUrl(p[2])}">${i+1}. ${p[0]} ↗</a>`).join('')}</div>${day.photo?'<img class="photo-repere" src="acces-hana-iti.jpeg" alt="Photo satellite annotée de l’accès à la plage Hana Iti"><p class="muted">Photo-repère à conserver hors ligne pour l’accès à Hana Iti.</p>':''}</section>
        </div>
        <aside>
          <section class="detail-card"><p class="eyebrow">En un coup d’œil</p><div class="fact-grid">${day.facts.map(([label,value])=>`<span class="fact"><small>${label}</small><b>${value}</b></span>`).join('')}</div></section>
          <section class="detail-card"><h3>Conseils du jour</h3><ul class="tips">${day.tips.map(t=>`<li>${t}</li>`).join('')}</ul></section>
          <section class="detail-card"><h3>Adresses et contacts</h3><div class="place-list">${day.places.map(([name,text,map,phone])=>`<article class="place"><b>${name}</b><span>${text}</span><div class="place-actions"><a target="_blank" rel="noopener" href="${mapsUrl(map)}">Itinéraire ↗</a>${phone?`<a href="${phoneUrl(phone)}">${phone}</a>`:''}</div></article>`).join('')}</div></section>
        </aside>
      </div>
    </div>`;
}
