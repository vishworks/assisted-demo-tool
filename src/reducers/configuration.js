
import { TYPE } from '../actions'

const initialState = { // FIXME this should be set from an external file, asynchronously
  personas: [
    { name: 'pippo', label: 'Pippo', avatar: '' },
    { name: 'pluto', label: 'Pluto', avatar: '' },
    { name: 'paperino', label: 'Paperino', avatar: '' },
    { name: 'paperone', label: 'Paperone', avatar: '' },
  ],
  demos: [
    {
      name: 'Demo A',
      steps: [
        {
          persona: 'pippo',
          url: 'http://example.com'
        },
        {
          persona: 'pluto',
          url: 'http://google.com'
        },
        {
          persona: 'paperino',
          url: 'http://entando.com'
        }
      ]
    }
  ]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
};

export default reducer;