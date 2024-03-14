/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fu8m3c9ssj7wzsl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oduenewk",
    "name": "horarioId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k7zayr0m9drhuyb",
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
  collection.schema.removeField("oduenewk")

  return dao.saveCollection(collection)
})
