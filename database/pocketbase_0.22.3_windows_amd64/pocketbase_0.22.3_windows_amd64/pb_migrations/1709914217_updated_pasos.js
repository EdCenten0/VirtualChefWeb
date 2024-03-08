/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dns94np7cnxhynq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlljw7ar",
    "name": "recetaId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fu8m3c9ssj7wzsl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dns94np7cnxhynq")

  // remove
  collection.schema.removeField("vlljw7ar")

  return dao.saveCollection(collection)
})
