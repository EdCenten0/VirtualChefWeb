/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fu8m3c9ssj7wzsl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bw15nldd",
    "name": "creador",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fu8m3c9ssj7wzsl")

  // remove
  collection.schema.removeField("bw15nldd")

  return dao.saveCollection(collection)
})
