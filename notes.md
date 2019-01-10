I applied for the React position. I will focus more on the "Front-End" part of the test. And as suggested by test description, I do not implement all the sequencers(I did not implement rangeSeq nor partialSumSeq). I do not implement pipeline function nor isEven function, so the UI related to these functions will not be shown in my app.

## Design decisions

I choose to use React and Redux for this project, because this is also my faviorate combination in Front-End development. I plan to not have a additional node project for this task, since I think the actual Sequence Generator logic fits well as a util inside the React project. I will code most of the part in ES6 style classes except Sequence Generator util. The Sequence Generator util will be coded in ES5 style functions, since it fits better for this situation.

### Project drive through

The project is created via `npx create-react` to take the advantage of less time consumed. I did not make much change to the created project other than:

1. Add a .gitignore (to ignore node_modules etc.).
2. Make each dependency inside package.json a fixed version.(remove any ~ or ^).

#### index.js

The starting point of the app.

#### store.js

The place to create the Redux store. I use redux-thunk while creating my store, to allow action creators to return functions instead of actions.

#### serviceWorker.js

Since my app is created via `npx create-react`

#### app.js

Root level component

#### containers/sequencerContainer/

Container component, connect to Redux store, receive Redux state updates and dispatch actions. When page is first load, the Factorial Sequencer is selected as the default activated Sequencer. The component will dispatch its first getSequencerAction in componentDidMount to respect to React Component lifecycle. I also did some small UX optimazation here. For example, not allow to dispatch getSequncerAction again, if the request to get Sequncer is the same Sequncer that currently activated. Also, not allow to dispatch getNextAction again, if the current value is already too large to show.

#### components/sequencer/

Component focus on render UI. A .css file will associated with this component to make the UI looks better.

#### reducers/index.js

The file uses to combines all the reducers into one.

#### reducers/sequencerReducer/

Contains an action file, an actionTypes file, and a reducer file. The main reason to split them into different files is to not make any file grow to too big.

#### constants/index.js

The file uses to store all the constants used in the app. This file can help the constants used in the app better organized. It will be very handy once the app becomes large.

#### utils/sequencerGenerator.js

The file handles the actual activate sequencer and get next value logic. The file showcase my understanding to JS basic(e.g. usage of JS function constructor, usage of prototype, usage of JS array functions etc.)

#### \*.test.js

All the test files end as .test.js and located at the same location where the files they are trying to test located at. I choose to `enzyme` and `jest` for my tests.

**Please note that because of the time limitation, I choose to focus more on show the ability to write efficient and effective unit tests. I did not spend a lot of time on making sure my test cases have a good coverage in my codebase. And I did not cover all the test scenarios I usually cover in my day to day programming. Although in real world project, I DO care the test coverage. And I DO agree the value it brings back to us. But since the project is planned as 1 day work, I choose to save some time from unit test part, so that I can have enough time to finish other parts.**
