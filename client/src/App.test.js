import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

test ('renders without crashing',  () => {
   rtl.render(<App />) //passing a component to render
})


