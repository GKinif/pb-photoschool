package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `[
			{
				"id": "bqei9cb4zy2wt7n",
				"created": "2023-02-20 22:24:56.843Z",
				"updated": "2023-03-25 16:14:02.305Z",
				"name": "levels",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "ukugw5pi",
						"name": "title",
						"type": "text",
						"required": true,
						"unique": true,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "survkjzh",
						"name": "description",
						"type": "editor",
						"required": true,
						"unique": false,
						"options": {}
					},
					{
						"system": false,
						"id": "jbabvtfh",
						"name": "cover",
						"type": "file",
						"required": true,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"maxSize": 5242880,
							"mimeTypes": [
								"image/jpeg",
								"image/png"
							],
							"thumbs": []
						}
					},
					{
						"system": false,
						"id": "2a4hwrk7",
						"name": "shortdescription",
						"type": "editor",
						"required": true,
						"unique": false,
						"options": {}
					}
				],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "_pb_users_auth_",
				"created": "2023-02-20 22:43:19.388Z",
				"updated": "2023-04-02 15:20:48.018Z",
				"name": "users",
				"type": "auth",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "users_name",
						"name": "name",
						"type": "text",
						"required": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "users_avatar",
						"name": "avatar",
						"type": "file",
						"required": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"maxSize": 5242880,
							"mimeTypes": [
								"image/jpeg",
								"image/png",
								"image/svg+xml",
								"image/gif",
								"image/webp"
							],
							"thumbs": null
						}
					}
				],
				"listRule": "",
				"viewRule": "",
				"createRule": "",
				"updateRule": "id = @request.auth.id",
				"deleteRule": "id = @request.auth.id",
				"options": {
					"allowEmailAuth": true,
					"allowOAuth2Auth": false,
					"allowUsernameAuth": false,
					"exceptEmailDomains": null,
					"manageRule": null,
					"minPasswordLength": 8,
					"onlyEmailDomains": null,
					"requireEmail": true
				}
			},
			{
				"id": "d0t6b9mvpo1jdzj",
				"created": "2023-02-24 17:56:49.496Z",
				"updated": "2023-03-18 12:48:15.689Z",
				"name": "classes",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "3h5exwy6",
						"name": "title",
						"type": "text",
						"required": true,
						"unique": true,
						"options": {
							"min": null,
							"max": 100,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "itx1zyiu",
						"name": "startDate",
						"type": "date",
						"required": true,
						"unique": false,
						"options": {
							"min": "",
							"max": ""
						}
					},
					{
						"system": false,
						"id": "qmliog2l",
						"name": "endDate",
						"type": "date",
						"required": false,
						"unique": false,
						"options": {
							"min": "",
							"max": ""
						}
					},
					{
						"system": false,
						"id": "mgmwryrn",
						"name": "level",
						"type": "relation",
						"required": true,
						"unique": false,
						"options": {
							"collectionId": "bqei9cb4zy2wt7n",
							"cascadeDelete": false,
							"maxSelect": 1,
							"displayFields": [
								"title"
							]
						}
					},
					{
						"system": false,
						"id": "lxq74cpz",
						"name": "members",
						"type": "relation",
						"required": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": false,
							"maxSelect": null,
							"displayFields": [
								"name"
							]
						}
					}
				],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "l78cdiy8ezlpb05",
				"created": "2023-02-24 20:18:29.545Z",
				"updated": "2023-03-18 12:48:15.689Z",
				"name": "subjects",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "ndudokdj",
						"name": "title",
						"type": "text",
						"required": true,
						"unique": true,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "ixv4hieh",
						"name": "description",
						"type": "editor",
						"required": true,
						"unique": false,
						"options": {}
					},
					{
						"system": false,
						"id": "6ibrctpz",
						"name": "level",
						"type": "relation",
						"required": true,
						"unique": false,
						"options": {
							"collectionId": "bqei9cb4zy2wt7n",
							"cascadeDelete": false,
							"maxSelect": 1,
							"displayFields": [
								"title"
							]
						}
					}
				],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "tzm59vjply0j4xl",
				"created": "2023-04-15 14:04:18.456Z",
				"updated": "2023-04-15 14:15:30.817Z",
				"name": "lessons",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "bw9gayvv",
						"name": "subject",
						"type": "relation",
						"required": true,
						"unique": false,
						"options": {
							"collectionId": "l78cdiy8ezlpb05",
							"cascadeDelete": false,
							"maxSelect": 1,
							"displayFields": [
								"title",
								"level"
							]
						}
					},
					{
						"system": false,
						"id": "l82axieu",
						"name": "class",
						"type": "relation",
						"required": true,
						"unique": false,
						"options": {
							"collectionId": "d0t6b9mvpo1jdzj",
							"cascadeDelete": false,
							"maxSelect": 1,
							"displayFields": [
								"title",
								"level"
							]
						}
					},
					{
						"system": false,
						"id": "yu6tvayx",
						"name": "date",
						"type": "date",
						"required": false,
						"unique": false,
						"options": {
							"min": "",
							"max": ""
						}
					}
				],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			}
		]`

		collections := []*models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collections); err != nil {
			return err
		}

		return daos.New(db).ImportCollections(collections, true, nil)
	}, func(db dbx.Builder) error {
		return nil
	})
}
