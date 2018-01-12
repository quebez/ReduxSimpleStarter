/*import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
*/

//Purpose: to test src/components/app
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//group similar tests ('App' section)
describe('App', () => {

  //test a single attribute of a target ('description')
  it('shows the correct text', () => {

    //create an instance of App
    const component = renderComponent(App);

    //assertion about target
    expect(component).to.contain('React simple starter');
  })
})


