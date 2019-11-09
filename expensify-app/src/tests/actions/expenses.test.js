import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('Should setup remove expense action object', () => {
    const id = uuid();
    const action = removeExpense({ id });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: id
    });
});

test('Should setup edit expense action object', () => {
    const id = uuid();
    const action = editExpense(id, { note: 'Some note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: {
            note: 'Some note'
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 100000,
        createdAt: 1000,
        note: 'Some note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});