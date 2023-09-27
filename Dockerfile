# Utilisez une image de base avec Node.js et PHP
FROM node:14 AS frontend
FROM php:8-apache AS backend

# Définissez le répertoire de travail pour le frontend
WORKDIR /app/frontend

# Copiez les fichiers du frontend dans le conteneur
COPY ./frontend .

# Installez les dépendances du frontend
RUN npm install
RUN npm run production

# Définissez le répertoire de travail pour le backend
WORKDIR /app/backend

# Copiez les fichiers du backend dans le conteneur
COPY ./backend .

# Installez les dépendances du backend
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install \
    pdo_mysql \
    zip \
    && composer install

# Définissez les permissions appropriées sur les répertoires de stockage et de cache
RUN chown -R www-data:www-data /app/backend/storage /app/backend/bootstrap/cache
RUN chmod -R 775 /app/backend/storage /app/backend/bootstrap/cache

# Copiez les fichiers du frontend dans le répertoire public du backend
RUN cp -R /app/frontend/dist /app/backend/public

# Exposez le port 80 pour accéder à l'application depuis l'extérieur
EXPOSE 80

# Démarrez Apache lorsque le conteneur est lancé
CMD ["apache2-foreground"]