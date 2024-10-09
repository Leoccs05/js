const { screen } = require("@testing-library/react");
const { App } = require(".");
const { renderTheme } = require("../../styles/render-theme");

it('should test', ()=>{
  renderTheme(<App>Test</App>);
  expect(screen.getByRole('heading', {name: 'Test'})).toMatchSnapshot()
})
