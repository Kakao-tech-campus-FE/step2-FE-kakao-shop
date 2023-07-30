import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainProductListTemplate from '../components/templates/mainProductListTemplate';

it('matches snapshot: main product list', () => {
  const utils = render(
    <MemoryRouter>
      <MainProductListTemplate
        products={[
          {
            id: 1,
            productName: 'testProductName',
            description: '',
            image: 'image/testImageSrc.jpg',
            price: 1000,
          },
        ]}
        isFetchingNextPage={false}
      />
    </MemoryRouter>,
  );
  utils.getByText('testProductName');
  utils.getByText('1,000 원');
});
