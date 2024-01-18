# Immo Client Vue

Immo Client Vue est une application Vue 3 + Typescript + Vite qui offre une interface conviviale pour accéder à une liste de biens immobiliers destinée aux clients potentiels.

## Fonctionnalités

- Accès à une liste de biens immobiliers depuis l'API à l'adresse [localhost:8081/api](http://localhost:8081/api).
- Interface utilisateur intuitive développée avec Vue 3, Typescript et Vite.

## Prérequis

Assurez-vous d'avoir installé [Docker](https://www.docker.com/) sur votre machine avant de lancer l'application.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Temmiiee/immo-client-vue
   
2. Accédez au répertoire du projet :
   ```bash
   cd immo-client-vue
   
3. Lancez le docker-compose pour démarrer l'application :
   ```bash
   docker-compose up

L'application sera accessible à l'adresse localhost:8080.

## Configuration

L'application est configurée pour récupérer les données depuis l'API à l'adresse localhost:8081/api. 
Veuillez vous assurer que l'API est correctement configurée et accessible.
Il est possible de modifier l'adresse de l'API depuis le fichier .env



