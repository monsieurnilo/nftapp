# NFT App

## Instructions pour lancer l’application localement

Assurez-vous d'avoir Node.js et npm installés sur votre machine pour exécuter ce projet.

### Frontend

1. Naviguez dans le répertoire `nft-marketplace` :
    ```bash
    cd nft-marketplace
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Lancez l'application :
    ```bash
    npm start
    ```

### Backend

1. Naviguez dans le répertoire `nft-truffle` :
    ```bash
    cd nft-truffle
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Compilez et déployez les contrats sur le réseau de test :
    ```bash
    truffle compile
    truffle migrate --network holesky --reset
    ```

4. Mettez à jour le fichier `.env` avec l'adresse du contrat déployé.

5. Pour minter un NFT, exécutez :
    ```bash
    node mintNFT.js
    ```

## Adresse du Smart Contract

Le smart contract est déployé sur le réseau de test Holesky à l'adresse suivante :
```
0x536FAEb44E5E287375602212B0022Eb661a41cdd
```

## Composition de l’équipe

- **Raphaël**
  - **Rôle** : Développement frontend.
  - **Responsabilités** :
    - Création de l'interface utilisateur avec React et TypeScript.
    - Intégration de Web3.js pour l'interaction avec les smart contracts.
    - Gestion de la connexion du wallet et affichage des NFTs.

- **Pierre**
  - **Rôle** : Développement backend et smart contracts.
  - **Responsabilités** : 
    - Écriture et déploiement des smart contracts.
    - Intégration avec Pinata pour le stockage IPFS.
    - Gestion des migrations et des scripts de minting.

## Dépendances et technologies

### Frontend

- React
- TypeScript
- Web3.js

### Backend

- Truffle
- Solidity
- Pinata SDK
- dotenv


