import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import App from './app'

const mockStore = configureMockStore()
const store = mockStore({})

configure({ adapter: new Adapter() })
it('renders without crashing', () => {
  expect(
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).exists('App')
  ).toBe(true)
})
