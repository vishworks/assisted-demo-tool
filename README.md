
# Assisted Demo tool
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A tool designed for web applications demos.

## How to install

Using npm:

```
git clone https://github.com/entando/assisted-demo-tool.git
cd assisted-demo-tool

#Pre-requisites
Install the redux chrome extension (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
Install npm
Install react-scripts on npm (npm install react-scripts)

# then, if you have yarn installed (recommended)
yarn start

# or, using npm
npm install
npm start
```


## Configuration file

In order to make it work, the tool needs a valid configuration JSON.
The URL to get the configuration should be passed in the ```configUrl``` query parameter, e.g.
```https://assisted-demo-tool-url.com?configUrl=<CONFIG_JSON_URL>```.

The schema for the configuration object should be as following:

```yaml
personas: Array<Object> - a list of personas
  (personas items)
    id: string - an unique id for the persona
    label: string - the persona name
    description: string - the persona description (e.g. role)
    avatar: string - the persona avatar image URL
    url: string - the web page associated to the persona
  ...
demos: Array<Object> - one or more demos to be shown
  (demos items)
    id: string - an unique id for the demo
    name: string - the demo name
    estimatedTime: number - the demo estimated duration in minutes
    highlights: Array<Object> - a list of the demo most important informations
      (highlights items)
        title: string - the highlight title
        text: string - the highlight text
    steps: Array<Object> - the demo steps list
      (steps items)
        personaId: string - the id of the persona associated to this step
        name: string - the step title
        content: string - the HTML textual content for the step (Details View)
        bullets: Array<String> - a list of action descriptions for the step (Presenter View)

```
