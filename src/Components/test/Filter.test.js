import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../Filter';

describe('Filter Component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    fetch.mockResponseOnce(JSON.stringify({ meals: [{ strArea: 'American' }, { strArea: 'Canadian' }] }));
    render(<Filter setArea={jest.fn()} setSortOrder={jest.fn()} />);
    expect(screen.getByText(/Restaurants with online food delivery in/i)).toBeInTheDocument();
  });

  it('fetches and displays areas', async () => {
    fetch.mockResponseOnce(JSON.stringify({ meals: [{ strArea: 'American' }, { strArea: 'Canadian' }] }));
    render(<Filter setArea={jest.fn()} setSortOrder={jest.fn()} />);
    expect(await screen.findByText('American')).toBeInTheDocument();
    expect(screen.getByText('Canadian')).toBeInTheDocument();
  });

  it('calls setArea when an area is selected', async () => {
    const setArea = jest.fn();
    fetch.mockResponseOnce(JSON.stringify({ meals: [{ strArea: 'American' }, { strArea: 'Canadian' }] }));
    render(<Filter setArea={setArea} setSortOrder={jest.fn()} />);
    fireEvent.change(await screen.findByRole('combobox'), { target: { value: 'American' } });
    expect(setArea).toHaveBeenCalledWith('American');
  });

  it('calls setSortOrder when a sort order is selected', async () => {
    const setSortOrder = jest.fn();
    fetch.mockResponseOnce(JSON.stringify({ meals: [{ strArea: 'American' }, { strArea: 'Canadian' }] }));
    render(<Filter setArea={jest.fn()} setSortOrder={setSortOrder} />);
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: 'asc' } });
    expect(setSortOrder).toHaveBeenCalledWith('asc');
  });
});