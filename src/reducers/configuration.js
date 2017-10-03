
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
      id: 'demoA',
      name: 'Demo A',
      steps: [
        {
          personaId: 'businessManager',
          url: 'http://example.com',
          name: 'Step businessManager 1'
        },
        {
          personaId: 'businessManager',
          url: 'http://google.com',
          name: 'Step businessManager 2'
        },
        {
          personaId: 'cmsAdmin',
          url: 'http://entando.com',
          name: 'Step cmsAdmin 1'
        },
        {
          personaId: 'processManager',
          url: 'http://entando.com',
          name: 'Step processManager 1'
        },
        {
          personaId: 'bpmAdmin',
          url: 'http://entando.com',
          name: 'Step bpmAdmin 1'
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