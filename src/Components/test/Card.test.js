import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Card from '../Card';

describe('Modal Component', () => {
  const meal = { strMeal: 'Meal 1', strInstructions: 'Cook it well.', strMealThumb: 'img1.jpg' };

  it('renders correctly', () => {
    render(<Card show={true} onClose={jest.fn()} meal={meal} />);
    expect(screen.getByText('Meal 1')).toBeInTheDocument();
    expect(screen.getByText('Cook it well.')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Card show={true} onClose={onClose} meal={meal} />);
    fireEvent.click(screen.getByText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
});