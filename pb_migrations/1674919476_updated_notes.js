migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3e2fa5zg2arqan4")

  collection.name = "title"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lvcwjvxq",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3e2fa5zg2arqan4")

  collection.name = "notes"

  // remove
  collection.schema.removeField("lvcwjvxq")

  return dao.saveCollection(collection)
})
