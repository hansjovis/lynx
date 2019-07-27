# Configuration files for your Lynx instance
This folder should contain the configuration files for your Lynx instance.
These include database configuration (connection information like address and credentials), and possible application IDs and secrets in the future.

## How to configure your Lynx instance
1. Make a copy of each file in this folder.
2. Remove the `.example` postfix from each file.
3. Change the contents of the file to match your environment.

## Current configuration files

### `database.json`
Configuration for the MongoDB database.

#### Structure:
 * **URL**: The URL to the MongoDB database.

#### Example
```json
{
  "URL": "mongodb:////localhost:27017/lynx"
}
```

### `session.json`
Configuration for the session storage. Used to store session information like currently logged in users.

#### Structure:
 * **SECRET**: The secret to use when storing session information.

#### Example
```json
{
  "SECRET": "e17896c1bc3695389154b7c3b7a6e7bfa4623ddc"
}
```