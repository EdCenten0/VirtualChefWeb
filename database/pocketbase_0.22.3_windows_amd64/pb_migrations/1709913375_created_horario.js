/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k7zayr0m9drhuyb",
    "created": "2024-03-08 15:56:15.775Z",
    "updated": "2024-03-08 15:56:15.775Z",
    "name": "horario",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y8igtjq7",
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
  const collection = dao.findCollectionByNameOrId("k7zayr0m9drhuyb");

  return dao.deleteCollection(collection);
})
