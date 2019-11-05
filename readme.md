# What this repo is about
This is a website inspired by a famous forum. Front end is React and backend is a Laravel API.
So far functionality entails registering, loggin in, creating boards, posts and comments.
You can take a look at a live version of this project at https://raddite.herokuapp.com/

# How to clone and repreduce this repo with XAMPP
Open c:/xampp/apache/conf/extra/vhosts.conf and add the following rule

```
<VirtualHost localhost:80>
  DocumentRoot "c:/xampp/htdocs/raddite/public"
  <Directory "c:/xampp/htdocs/raddite/public">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
  </Directory>
</VirtualHost>
```

In your browser enter localhost/phpadmin in the url bar and create a db called raddite with utf8mb4_unicode_ci
Open a command line interface of your choice and type the following

```
cd c:/xampp/htdocs
git clone https://github.com/seannowotny/raddite.git
cd raddite
```

Create a .env file and enter the following

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=raddite
DB_USERNAME=root
DB_PASSWORD=
```

Back to the command line interface

```
php artisan key:generate
rm composer.lock
composer install
php artisan passport:install --force
rm package-lock.json
npm install
cd client
rm package-lock.json
npm install
cd ../
php artisan migrate
```

Optional:

```
php artisan db:seed --no-interaction
```

To open the react application, open your browser and enter localhost:3000 into the url bar 
and enter the following into your command line interface

```
cd client
npm run dev
```
