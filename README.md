
# Virgil
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A tool designed for web applications demos.

## Pre-requisites
Make sure to have the following software installed:

- git (2.7.4 +)
- node (9.4.0 +)
- npm (5.7.1 +)

## How to install
```
git clone https://github.com/entando/assisted-demo-tool.git
cd assisted-demo-tool

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
    hidden: boolean - if true, the persona will be hidden (will appear only in its steps)
    url: string - the web page associated to the persona
    tabImg: string - the tab image URL
    tabName: string - the tab text (if not provided, the tab text will be the persona label)
  ...
demos: Array<Object> - one or more demos to be shown
  (demos items)
    id: string - an unique id for the demo
    name: string - the demo name
    estimatedTime: number - the demo estimated duration in minutes
    personas: Array<String> - a list of the demo personas ids
    highlights: Array<Object> - a list of the demo most important informations
      (highlights items)
        title: string - the highlight title
        text: string - the highlight text
    steps: Array<Object> - the demo steps list
      (steps items)
        personaId: string - the id of the persona associated to this step
        name: string - the step title
        trainingContent: string - the HTML content for the step in Training Mode View
        presenterContent: string - the HTML content for the step in Presenter Mode View
        urlOverrides: Array<Object> - an array defining the URL overrides for this step
          (urlOverrides items)
            personaId: string - the id of the target persona
            url: string - the URL to push in the target persona iframe
            newTab: boolean - (default false) if true, opens a new window when applying an override on the current visible persona

```
