import Ajv from 'ajv'


let schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Config",
  "description": "The configuration object",
  "type": "object",
  "properties": {
    "personas": {
      "description": "The collection of personas for these demos",
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "avatar": {
            "type": "string"
          },
          "hidden": {
            "type": "boolean"
          }
        },
        "required": ["name", "label"]
      }
    },
    "demos": {
      "description": "The collection of demos",
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "steps": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "personaId": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              },
              "required": ["personaId", "url", "name"]
            }
          }
        },
        "required": ["id", "name", "steps"]
      }
    }
  },
  "required": ["personas", "demos"]
};

const ajv = new Ajv();
var validate = ajv.compile(schema);

export default validate;