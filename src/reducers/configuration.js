
import { TYPE } from '../actions'

const initialState = { // FIXME this should be set from an external file, asynchronously
  personas: [
    { name: 'pippo', label: 'Pippo', avatar: 'img/user-1.jpg' },
    { name: 'pluto', label: 'Pluto', avatar: 'img/user-2.jpg' },
    { name: 'paperino', label: 'Paperino', avatar: 'img/user-3.jpg' },
    { name: 'paperone', label: 'Paperone', avatar: 'img/user-4.jpg' },
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