export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((e) => {
        const startDateMatch = typeof startDate !== 'number' || e.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || e.createdAt <= endDate;
        const textMatch = e.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } else {
            return 0;
        }
    });
};