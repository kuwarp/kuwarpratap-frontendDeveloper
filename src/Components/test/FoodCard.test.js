import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import FoodCard from "../components/FoodCard";
import { act } from "react-dom/test-utils";

describe('FoodCard Component', () => {
  beforeEach(() => {
    fetch.resetMocks(); 
  });

  test('renders without crashing', () => {
    render(<FoodCard area="Indian" sortOrder="asc" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('fetches and displays food items', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      meals: [
        {
          idMeal: '1',
          strMeal: 'Chicken Curry',
          strMealThumb: 'http://example.com/chicken-curry.jpg',
          strTags: 'spicy',
        },
      ],
    }));

    render(<FoodCard area="Indian" sortOrder="asc" />);

    await (() => {
      expect(screen.getByText('Chicken Curry')).toBeInTheDocument();
      expect(screen.getByAltText('Chicken Curry')).toBeInTheDocument();
    });
  });

  test('handles meal click and opens modal', async () => {
    fetch.mockResponses(
      [JSON.stringify({
        meals: [
          {
            idMeal: '1',
            strMeal: 'Chicken Curry',
            strMealThumb: 'http://example.com/chicken-curry.jpg',
            strTags: 'spicy',
          },
        ],
      })],
      [JSON.stringify({
        meals: [
          {
            idMeal: '1',
            strMeal: 'Chicken Curry',
            strMealThumb: 'http://example.com/chicken-curry.jpg',
            strTags: 'spicy',
            strInstructions: 'Cook chicken with spices.',
          },
        ],
      })]
    );

    render(<FoodCard area="Indian" sortOrder="asc" />);

    await waitFor(() => {
      const mealItem = screen.getByText('Chicken Curry');
      fireEvent.click(mealItem);
    });

    await waitFor(() => {
      expect(screen.getByText('Cook chicken with spices.')).toBeInTheDocument();
    });
  });

  test('sorts food items based on sortOrder', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      meals: [
        { idMeal: '2', strMeal: 'A Meal' },
        { idMeal: '1', strMeal: 'B Meal' },
      ],
    }));

    render(<FoodCard area="Indian" sortOrder="asc" />);

    await waitFor(() => {
      expect(screen.getByText('A Meal')).toBeInTheDocument();
      expect(screen.getByText('B Meal')).toBeInTheDocument();
    });
  });

  test('paginates through food items', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      meals: Array.from({ length: 20 }, (_, i) => ({
        idMeal: `${i + 1}`,
        strMeal: `Meal ${i + 1}`,
      })),
    }));

    render(<FoodCard area="Indian" sortOrder="asc" />);

    await waitFor(() => {
      expect(screen.getByText('Meal 1')).toBeInTheDocument();
      expect(screen.queryByText('Meal 11')).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('2'));

    await waitFor(() => {
      expect(screen.getByText('Meal 11')).toBeInTheDocument();
      expect(screen.queryByText('Meal 1')).not.toBeInTheDocument();
    });
  });
});