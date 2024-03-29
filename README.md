# Baileys Restful API with Laravel

## Credits

1. Framework : Laravel 8 & VueJs 2
2. API Server : [@ookamiiixd/baileys-api](https://github.com/ookamiiixd/baileys-api)

## Frontend Vue Installation

1. Enter to the backend project directory `cd frontend-vue`.
2. Execute `npm i` to install the dependencies.
3. You can start the app by executing `npm run serve`
4. Now the endpoint should be available according to environment variable settings at `http://localhost:5000`.

## Backend Laravel Installation

1. First clone or download this repository:

```bash
git clone https://github.com/erickchann/whatsapp-server.git
```

2. Enter directory project `cd backend-laravel`
3. Execute `composer install` to install the dependencies.
4. Setting the database configuration, rename `.env.example` to `.env` and open file at project root directory or execute `cp .env.example .env`

```bash
DB_DATABASE=**your_db_name**
DB_USERNAME=**your_db_user**
DB_PASSWORD=**password**
```

5. Setting the URL backend server configuration, open `.env` file at project root directory

```bash
URL_WA_SERVER=http://localhost:8000
```

6. Run the following command at the terminal:

```bash
php artisan migrate:fresh --seed
```

7. Run laravel

```bash
php artisan serve --port=3000
```

## Backend Express Installation

Simple RESTful WhatsApp API by [@ookamiiixd/baileys-api](https://github.com/ookamiiixd/baileys-api) .

1. Enter to the backend project directory `cd backend-express`.
2. Execute `npm i` to install the dependencies.
3. You can start the app by executing `npm run start` or `node .`.
4. Now the endpoint should be available according to your environment variable settings. Default is at `http://localhost:8000`.

### Backend API DOCs

The API documentation is available online at [here](https://documenter.getpostman.com/view/18988925/UVeNni36). You can also import the **Postman Collection File** `(postman_collection.json)` into your Postman App alternatively.

The server will respond in JSON format:

```javascript
{
    success: true|false, // bool
    message: "", // string
    data: {} // object
}
```

### Features

-   [x] Send chat
-   [x] Send brodcast
