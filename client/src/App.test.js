import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayersList from './components/PlayersList/PlayersList';


afterEach(rtl.cleanup);

const mockData = { name: "Jane Rappen", 
                  country: "United States", 
                  searches: 200 }

test('Render name', () => {

  const wrapper = rtl.render(<PlayersList playersData={[mockData]}/>);
  const element = wrapper.getByText(/jane rappen/i);
  expect(element).toHaveTextContent("Jane Rappen");
});

test ('renders without crashing',  () => {
   rtl.render(<App />) //passing a component to render
})

describe('Unit tests for the app', () => {
  it('renders text', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.getByText(/soccer players/i) 
    expect(element).toBeVisible()
  })

  it('renders player card information', async () => {
    const { findByText } = await rtl.render(<App />)
    findByText(/Google Searches: /i);
  })

  it('renders player data', async () => {
    const { findByText } = await rtl.render(<App />)
    findByText(/ALex Morgan/i)
  })
  
})

    

