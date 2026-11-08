# Arduino --- Apprendre et contrôler l'électronique

## Présentation

Arduino est une plateforme de prototypage électronique composée de
cartes et d'un environnement de programmation. Une carte Arduino lit des
entrées (boutons, capteurs) et commande des sorties (LED, moteurs,
afficheurs). Les cartes classiques sont surtout utilisées pour apprendre
et réaliser des automatismes simples.

## Cas concrets

### 1. Construire un feu tricolore miniature

**Exemple :** trois LED représentent les feux rouge, orange et vert. Le
programme les allume dans le bon ordre avec des délais.

**Pourquoi c'est utile :** - comprendre les sorties numériques et la
programmation ; - apprendre à gérer une séquence ; - réaliser une
maquette pour un devoir ou une démonstration.

### 2. Créer un système d'arrosage automatique

**Exemple :** un capteur mesure l'humidité de la terre. Quand le sol
devient trop sec, Arduino commande une pompe adaptée.

**Pourquoi c'est utile :** - éviter d'arroser à intervalles fixes ; -
tester l'automatisation à partir d'une mesure réelle ; - comprendre le
lien entre capteur, décision et actionneur.

### 3. Fabriquer un mini-moniteur avec écran

**Exemple :** afficher sur un petit écran la température, l'humidité ou
l'état d'un bouton.

**Pourquoi c'est utile :** - voir les données directement sur l'appareil
; - créer un objet autonome sans interface web ; - apprendre à utiliser
un écran et des bibliothèques électroniques.

## Ce qu'il faut retenir

Arduino est un bon choix pour **découvrir l'électronique, apprendre à
programmer et réaliser des prototypes qui réagissent à des capteurs**.
Il est généralement plus simple de commencer avec une carte Arduino
classique qu'avec un système informatique complet.

## Limites et précautions

-   Une carte Arduino classique n'a généralement pas de Wi-Fi intégré.
-   Elle ne convient pas aux applications lourdes ni à l'exécution d'un
    système d'exploitation complet.
-   Les moteurs et les pompes peuvent demander une alimentation ou un
    pilote séparé : ne les branche pas directement sur une sortie de la
    carte.
