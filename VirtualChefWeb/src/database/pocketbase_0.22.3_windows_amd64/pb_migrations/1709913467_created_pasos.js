/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dns94np7cnxhynq",
    "created": "2024-03-08 15:57:47.019Z",
    "updated": "2024-03-08 15:57:47.019Z",
    "name": "pasos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "60oxans0",
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
  const collection = dao.findCollectionByNameOrId("dns94np7cnxhynq");

  return dao.deleteCollection(collection);
})
