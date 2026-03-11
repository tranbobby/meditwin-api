# MediTwin API — Projet api from scratch

API REST back-end Node.js/Express connectée à une bdd en PostgreSQL
Inspirée du projet MediTwin de Dassault Systèmes (ds)

## Stack technique
- Node.js / Express
- PostgreSQL

## Routes disponibles
GET    /patients       → liste tous les patients
GET    /patients/:id   → un patient par id
POST   /patients       → créer un patient
PUT    /patients/:id   → modifier un patient
DELETE /patients/:id   → supprimer un patient

## Lancer le projet
npm install
node serveur_advanced.js

## Fichiers non utilisés : 
serveur.js -> Base CRUD avec tableau, non connecté à une bdd

## En cours
- Authentification JWT
- Contrôle d'accès RBAC
- Tests unitaires avec Jest
- Migration POST/PUT/DELETE vers PostgreSQL