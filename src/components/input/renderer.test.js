import React from 'react'
import rendererFactory from './renderer'
import tests from 'ava'

tests('input.renderer', function onTestIndex(test) {
  function setValue() {}
  const renderer = rendererFactory.create({
    React, actions: setValue
  })
  const expectedRenderType = 'function'
  const actualRenderType = typeof renderer.render
  test.is(actualRenderType, expectedRenderType)
})
