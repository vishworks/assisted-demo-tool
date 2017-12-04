import Ajv from 'ajv';

let schema = {
  $schema: 'http://json-schema.org/draft-06/schema#',
  title: 'Config',
  description: 'The configuration object',
  type: 'object',
  properties: {
    personas: {
      description: 'The collection of personas for these demos',
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          label: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          avatar: {
            type: 'string'
          },
          url: {
            type: 'string'
          },
          hidden: {
            type: 'boolean'
          }
        },
        required: ['id', 'url', 'label']
      }
    },
    demos: {
      description: 'The collection of demos',
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          title: {
            type: 'string'
          },
          estimatedTime: {
            type: 'integer'
          },
          steps: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                personaId: {
                  type: 'string'
                },
                title: {
                  type: 'string'
                },
                bullets: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                },
                content: {
                  type: 'string'
                },
                urlOverrides: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      personaId: {
                        type: 'string'
                      },
                      url: {
                        type: 'string'
                      }
                    },
                    required: ['personaId', 'url']
                  }
                }
              },
              required: ['personaId', 'title'],
              anyOf: [{ required: ['content'] }, { required: ['bullets'] }]
            }
          },
          highlights: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string'
                },
                text: {
                  type: 'string'
                }
              },
              required: ['title', 'text']
            }
          }
        },
        required: ['id', 'title', 'steps']
      }
    }
  },
  required: ['personas', 'demos']
};

const ajv = new Ajv({
  allErrors: true
});
var validate = ajv.compile(schema);

export default validate;
