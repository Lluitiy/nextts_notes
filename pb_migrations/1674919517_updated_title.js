migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3e2fa5zg2arqan4")

  collection.name = "notes"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6ht4dtx",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3e2fa5zg2arqan4")

  collection.name = "title"

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
