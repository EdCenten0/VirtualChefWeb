/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fslaslmwc8ramwb",
    "created": "2024-03-08 14:43:46.540Z",
    "updated": "2024-03-08 14:43:46.540Z",
    "name": "roles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sa5n0ugu",
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
  const collection = dao.findCollectionByNameOrId("fslaslmwc8ramwb");

  return dao.deleteCollection(collection);
})
