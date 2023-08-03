// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import ReactDom from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import OrderTemplate from './components/templates/OrderTemplate'
import React from 'react'
import OrderPage from './components/pages/OrderPage'
import { fireEvent, getByText } from '@testing-library/react'


let containor

beforeEach(() => {
  containor = document.createElement('div')
  document.body.appendChild(containor)
})

afterEach(() => {
  document.body.removeChild(containor)
  containor = null
})

it('test /orders/save api', ()=>{
  act(()=>{
    const utils = React.createRoot(containor).render(<OrderPage/>)
    const allAgree = getByText("전체 동의")
    const payButton = getByText("결제하기")

    fireEvent.click(allAgree)
    fireEvent.click(payButton)

  })



});
