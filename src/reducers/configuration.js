
import { TYPE } from '../actions'

const initialState = { // FIXME this should be set from an external file, asynchronously
  personas: [
    { name: 'businessManager', label: 'Carol Schmidt', description: 'Business Manager', avatar: 'img/user-1.jpg' },
    { name: 'cmsAdmin', label: 'Jessica Bahia', description: 'CMS Admin', avatar: 'img/user-2.jpg' },
    { name: 'processManager', label: 'Jack Orwell', description: 'Process Manager', avatar: 'img/user-3.jpg' },
    { name: 'bpmAdmin', label: 'Nina Bodiul', description: 'BPM Administrator', avatar: 'img/user-4.jpg' }
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