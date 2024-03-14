/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8cvi4x3v8rkg4yr")

  collection.name = "usuario_recetas_favoritas"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8cvi4x3v8rkg4yr")

  collection.name = "usuario_recetass_favoritas"

  return dao.saveCollection(collection)
})
