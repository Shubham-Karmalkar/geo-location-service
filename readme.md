
# Geo-location

A geo-location service which provides creating, updating and doing calculations for geo-spatial data.



## Run Locally

Clone the project

```bash
  git clone https://github.com/Shubham-Karmalkar/geo-location-service.git
```

Go to the project directory

```bash
  cd geo-location-service
```

Install dependencies

```bash
  docker compose up
```

```bash
  npm install
```

Start the server

```bash
  npm run dev:start
```

Then visit the url

```bash
  http://localhost:8081/db/admin
```

## API Reference

#### Create Location

```http
  POST /v1/location
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Property name |
| `description` | `string` |  Property Description |
| `state` | `string` | **Required**. State name in which Property is located |
| `city` | `string` | **Required**. City name in which Property is located |
| `address` | `string` | **Required**. Property address |
| `type` | `string` | **Required**. Property type ex. HOME, FARM, COMPANY etc. |
| `location` | `string` | **Required**. object having Property like type and coordinates |

#### Get Location by Id

```http
  GET /v1/location/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update Location

```http
  PUT /v1/location
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Property name |
| `description` | `string` |  Property Description |
| `state` | `string` | **Required**. State name in which Property is located |
| `city` | `string` | **Required**. City name in which Property is located |
| `address` | `string` | **Required**. Property address |
| `type` | `string` | **Required**. Property type ex. HOME, FARM, COMPANY etc. |
| `location` | `string` | **Required**. object having Property like type and coordinates |
| `createdAt` | `string` | **Required**. Time in milliseconds |
| `updatedAt` | `string` | **Required**. Time in milliseconds |
