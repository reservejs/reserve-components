import React from 'react'
import rendererFactory from './renderer'
import tests from 'ava'

tests('input.renderer', function onTestIndex(test) {
  const expected = 'function'
  function setValue() {}
  const renderer = rendererFactory.create({
    dependencies: {React, actions: setValue}
  })
  const actual = typeof renderer.render
  test.is(actual, expected)
})
