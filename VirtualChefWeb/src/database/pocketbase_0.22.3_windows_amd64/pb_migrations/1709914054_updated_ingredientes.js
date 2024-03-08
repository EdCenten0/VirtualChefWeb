/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fh4xmdmb9r2142t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jtcybiht",
    "name": "recetasId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fh4xmdmb9r2142t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fh4xmdmb9r2142t")

  // remove
  collection.schema.removeField("jtcybiht")

  return dao.saveCollection(collection)
})
