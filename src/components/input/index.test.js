import inputFactory from './index'
import tests from 'ava'

tests(
  'inputFactory.reactRendererFactory',
  function onTestReactRendererFactory(test) {
    const expectedType = 'object'
    const actualType = typeof inputFactory.reactRendererFactory
    test.is(actualType, expectedType)
  }
)

tests('inputFactory.create', function onTestInputFactoryCreate(test) {
  const expected = 'object'
  const input = inputFactory.create({
    rendererFactory: inputFactory.reactRendererFactory
  })
  const actual = typeof input.interactions
  test.is(actual, expected)
})
