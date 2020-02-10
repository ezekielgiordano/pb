// Support component names relative to this directory:
const componentRequireContext = require.context("components", true)
const ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

import "./environment_js/fontawesome.js"
import "./environment_js/regular.js"
import "playbook/vendor.js"

import React from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import App from '../App'

document.addEventListener('DOMContentLoaded', () => {
    let reactElement = document.getElementById('app')

    if (reactElement) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<App />, reactElement)
            } catch (error) {
                render(<RedBox error={error} />, reactElement)
            }
        }
        else {
            render(<App />, reactElement)
        }
    }
})