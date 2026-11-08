# ESP32 --- Microcontrôleur connecté

## Présentation

L'ESP32 est un microcontrôleur compact qui peut exécuter un programme
directement sur la carte. Selon le modèle, il possède le Wi-Fi et le
Bluetooth intégrés. Il est adapté aux appareils électroniques autonomes
qui doivent lire des capteurs, commander des composants ou communiquer
avec un réseau.

## Cas concrets

### 1. Capteur de température qui envoie les données au réseau

**Exemple :** placer un ESP32 dans une pièce ou près d'un serveur. Il
lit un capteur de température et d'humidité, puis envoie les valeurs à
un tableau de bord.

**Pourquoi c'est utile :** - connaître la température sans aller
vérifier sur place ; - détecter une surchauffe dans un petit local
informatique ; - conserver des mesures pour observer les variations au
fil du temps.

### 2. Détecteur d'ouverture connecté

**Exemple :** un capteur magnétique détecte l'ouverture d'une porte ou
d'un placard. L'ESP32 envoie une notification ou allume une LED.

**Pourquoi c'est utile :** - surveiller une porte, une boîte ou un
meuble ; - recevoir une alerte quand un événement se produit ; - créer
un système simple sans acheter un équipement connecté complet.

### 3. Commande d'un appareil à distance

**Exemple :** piloter une LED, un petit ventilateur adapté ou un relais
depuis une interface web locale.

**Pourquoi c'est utile :** - automatiser une action répétitive ; -
contrôler un équipement depuis un téléphone ou un ordinateur ; -
apprendre comment un appareil connecté communique avec un réseau.

## Ce qu'il faut retenir

L'ESP32 est particulièrement intéressant quand le projet doit être
**petit, peu coûteux, connecté et capable de fonctionner sans ordinateur
permanent**. Il ne remplace pas un PC : il exécute plutôt une tâche
précise.

## Limites et précautions

-   La mémoire et la puissance de calcul sont limitées.
-   Un relais ou un appareil alimenté sur secteur doit être utilisé avec
    un circuit adapté et des précautions électriques.
-   Pour un projet connecté, il faut protéger les identifiants Wi-Fi et
    éviter d'exposer directement l'interface sur Internet.
