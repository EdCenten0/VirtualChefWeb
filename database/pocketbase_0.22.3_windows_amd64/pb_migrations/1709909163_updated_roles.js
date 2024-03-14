/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fslaslmwc8ramwb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svn4eiyo",
    "name": "prioridad",
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
  const collection = dao.findCollectionByNameOrId("fslaslmwc8ramwb")

  // remove
  collection.schema.removeField("svn4eiyo")

  return dao.saveCollection(collection)
})
