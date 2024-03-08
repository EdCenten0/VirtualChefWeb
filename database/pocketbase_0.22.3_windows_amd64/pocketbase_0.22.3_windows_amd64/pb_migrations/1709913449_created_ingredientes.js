/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fh4xmdmb9r2142t",
    "created": "2024-03-08 15:57:29.787Z",
    "updated": "2024-03-08 15:57:29.787Z",
    "name": "ingredientes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hvvz2dpn",
        "name": "nombre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fh4xmdmb9r2142t");

  return dao.deleteCollection(collection);
})
