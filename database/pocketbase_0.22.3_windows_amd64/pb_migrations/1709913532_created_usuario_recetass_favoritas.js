/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8cvi4x3v8rkg4yr",
    "created": "2024-03-08 15:58:52.612Z",
    "updated": "2024-03-08 15:58:52.612Z",
    "name": "usuario_recetass_favoritas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k922dth6",
        "name": "usuarioId",
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
      },
      {
        "system": false,
        "id": "k56ebfel",
        "name": "recetasId",
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
  const collection = dao.findCollectionByNameOrId("8cvi4x3v8rkg4yr");

  return dao.deleteCollection(collection);
})
