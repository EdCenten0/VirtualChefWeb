/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fu8m3c9ssj7wzsl")

  // remove
  collection.schema.removeField("vusrzyrd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cm9y40a4",
    "name": "tiempoPreparacion",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fu8m3c9ssj7wzsl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vusrzyrd",
    "name": "tiempo",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("cm9y40a4")

  return dao.saveCollection(collection)
})
