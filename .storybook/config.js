/* eslint-disable flowtype/require-valid-file-annotation */
import { configure, addDecorator } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
import { provider } from "./decorators"

addDecorator(provider)

setOptions({
  addonPanelInRight: true,
})

const req = require.context("../src", true, /stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
