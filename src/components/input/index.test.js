import inputFactory from './index'
import tests from 'ava'

tests('input index', function onTestIndex(test) {
  const expected = 'object'
  // TODO: new test; test.is(typeof inputFactory.reactRendererFactory, expected)
  const input = inputFactory.create({
    options: inputFactory.reactRendererFactory
  })
  const actual = typeof input.interactions
  test.is(actual, expected)
})
