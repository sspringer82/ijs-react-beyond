import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ListItem from './ListItem';
import Person from './Person';
describe('ListItem', () => {
  it('should render correctly', () => {
    // Arrange
    const person: Person = {
      id: 1,
      firstName: 'Anna',
      lastName: 'Müller',
      birthdate: '1995-03-15',
      street: 'Musterstraße 1',
      city: 'Berlin',
      zipCode: '10115',
    };
    // Act
    render(<ListItem person={person} onDelete={vi.fn()} />);
    // Assert
    const firstname = screen.getByTestId('firstname');
    const lastname = screen.getByTestId('lastname');

    expect(firstname).toHaveTextContent('Anna');
    expect(lastname).toHaveTextContent('Müller');
  });

  it('should delete correctly', () => {
    // Arrange
    const person: Person = {
      id: 1,
      firstName: 'Anna',
      lastName: 'Müller',
      birthdate: '1995-03-15',
      street: 'Musterstraße 1',
      city: 'Berlin',
      zipCode: '10115',
    };
    const onDelete = vi.fn();
    // Act
    render(<ListItem person={person} onDelete={onDelete} />);

    fireEvent.click(screen.getByTestId('delete-btn'));

    // Assert
    expect(onDelete).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
