# Énoncé de Projet : Création d'une page web affichant la liste de tous les NFT d'une collection

## Objectif du Projet :
L’objectif est de créer un front-end affichant une collection de NFT hébergée sur IPFS, similaire à une page de collection sur OpenSea. L’application front-end sera construite avec ReactJs ou une alternative appropriée, permettant une interface fluide pour les utilisateurs. Les utilisateurs pourront connecter leur wallet via un bouton de connexion pour interagir avec la dApp. Le projet mettra un accent particulier sur la sécurité de l'application, en utilisant les dernières technologies blockchain pour garantir des transactions sécurisées.

## Fonctionnalités Clés :
1. Connexion de Wallet : Intégration de wallets décentralisés (ex : MetaMask) pour permettre aux utilisateurs de se connecter à la marketplace et interagir avec les NFT.

2. Images hébergées sur IPFS : La collection devra posseder un contractURI. Tous les NFT en 3D seront stockés sur IPFS pour une solution de stockage décentralisée et fiable.

3. Navigation :
   - Une page de collection simple affichant toutes les NFT de la collection

4. Sécurité : Le projet accordera une attention particulière à la sécurité des smart contracts et des transactions pour éviter toute faille exploitée dans les applications blockchain.

5. Blockchain : Le smart contract de la marketplace sera déployé sur le réseau de test Sepolia ou Holesky.


## Technologies Utilisées :
- Frontend : React.js (ou une alternative adaptée) pour la création de l’interface utilisateur.
- Backend : IPFS pour l’hébergement des images 3D.
- Smart Contract : Écrit en Solidity et déployé sur Sepolia ou Holesky.
- Wallet Integration : Metamask ou tout autre wallet compatible.
- Sécurité : Vérifications et audits de sécurité sur le smart contract pour prévenir les failles courantes (reentrancy, overflow, etc.).

## Structure des Pages :
1. Page d’accueil : Liste toutes les collections disponibles sur la marketplace avec un aperçu de chaque collection (au moins 2 collections).
2. Page de Collection : Affiche tous les NFT d'une collection donnée, avec des informations de base (titre, prix, créateur).
3. Page de NFT : Détails sur un NFT spécifique avec des informations plus approfondies (métadonnées, historique des propriétaires, actions possibles comme acheter ou vendre).

## Livrable :
Un repository GitHub contenant :
- Le code source de l’application (frontend en React et smart contracts).
- Un fichier README détaillant :
  - Instructions pour lancer l’application localement (frontend et backend).
  - L’adresse du smart contract déployé sur le réseau de test Sepolia ou Holesky.
  - La composition de l’équipe avec une courte description des membres et leurs rôles.
  - Les dépendances et technologies nécessaires pour exécuter le projet.

## Roadmap :
1. Phase 1 : Design et architecture du projet, création des smart contracts et tests unitaires.
2. Phase 2 : Développement du front-end en React.js avec intégration du smart contract.
3. Phase 3 : Intégration des wallets et gestion des interactions sur la blockchain (achat, vente).
4. Phase 4 : Tests complets de sécurité et optimisation des performances.
5. Phase 5 : Déploiement sur Sepolia/Holesky et documentation complète sur GitHub.


## Sécurité :
- Vérifications et audits des smart contracts (Test des failles possibles).
- Vérifications des interactions des wallets pour prévenir les attaques telles que phishing ou manipulations malveillantes.
  
Ce projet sera un excellent exercice pour créer une dApp sécurisée et fonctionnelle dans le domaine des NFT, avec un accent particulier sur l’expérience utilisateur, l’intégration du wallet et la fiabilité des transactions.

## Ressources:

### Déploiement: 
Truffle
Hardhat

###  Accès à un noeud sur la blockchain:
Infura
Alchemy
Blockchain en local : Ganache

### Stockage décentralisé IPFS:
Pinata
NFT.storage

Opensea
Truffle boxes
Librairie de Smart Contracts : Openzeppelin
OpenZeppelin Contract Wizard
Objets 3D : Sketchfab
Faucet : 
https://cloud.google.com/application/web3/faucet/ethereum/sepolia
https://bwarelabs.com/faucets
