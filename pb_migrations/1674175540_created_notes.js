migrate((db) => {
  const collection = new Collection({
    "id": "3e2fa5zg2arqan4",
    "created": "2023-01-20 00:45:40.808Z",
    "updated": "2023-01-20 00:45:40.808Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o6ht4dtx",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3e2fa5zg2arqan4");

  return dao.deleteCollection(collection);
})
