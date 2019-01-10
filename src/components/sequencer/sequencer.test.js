import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sequencer from './sequencer'
import React from 'react'

configure({ adapter: new Adapter() })

describe('Sequencer Component', () => {
  let wrapper
  let mockValue = 1

  beforeEach(() => {
    wrapper = shallow(<Sequencer value={mockValue} />)
  })
  it('component renders without crashing', () => {
    const inst = wrapper.instance()
    expect(inst).toBeInstanceOf(Sequencer)
  })

  it('should apply style disabledBtn when value is NaN', () => {
    expect(wrapper.find('.nextBtn').hasClass('disabledBtn')).toBe(false)
    mockValue = NaN
    wrapper = shallow(<Sequencer value={mockValue} />)
    expect(wrapper.find('.nextBtn').hasClass('disabledBtn')).toBe(true)
  })
})
