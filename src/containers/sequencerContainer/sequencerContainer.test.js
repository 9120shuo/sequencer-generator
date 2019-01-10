import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ConnectedSequencerContainer, { SequencerContainer } from './sequencerContainer'
import React from 'react'

configure({ adapter: new Adapter() })

describe('Connected Sequencer Container', () => {
  let connectedWrapper

  beforeEach(() => {
    connectedWrapper = shallow(<ConnectedSequencerContainer />)
  })
  it('connected component renders without crashing', () => {
    const inst = connectedWrapper.instance()
    expect(inst).toBeInstanceOf(ConnectedSequencerContainer)
  })
})

describe('Sequencer Container', () => {
  let componentWrapper
  const mockGetSequencerAction = jest.fn()

  beforeEach(() => {
    componentWrapper = shallow(<SequencerContainer getSequencerAction={mockGetSequencerAction} />)
  })

  it('should call getSequencerAction after component mount', () => {
    componentWrapper.instance()
    expect(mockGetSequencerAction.mock.calls.length).toBe(1)
  })

  it('should pass correct handlers to child component', () => {
    let sequencer = componentWrapper.find('Sequencer')
    expect(sequencer.props().onSequencerClick).toEqual(componentWrapper.instance()._onSequencerClick)
    expect(sequencer.props().onNextClick).toEqual(componentWrapper.instance()._onNextClick)
  })
})
