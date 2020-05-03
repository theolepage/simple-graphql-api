const ships = [
    { name: 'Niña', sailor: 'Christopher Columbus' },
    { name: 'Pinta', sailor: 'Christopher Columbus' },
    { name: 'Santa María', sailor: 'Christopher Columbus' },
    { name: 'HMS Endeavour', sailor: 'James Cook' },
    { name: 'HMS Resolution', sailor: 'James Cook' },
    { name: 'Trinidad', sailor: 'Ferdinand Magellan' }
];

const sailors = [
    { name: 'Christopher Columbus', nationality: 'Italian' },
    { name: 'James Cook', nationality: 'British' },
    { name: 'Ferdinand Magellan', nationality: 'Portuguese' }
];

module.exports = {
    Query: {
        ships: async (_, __, ___) => ships,
        ship: async (_, { name }, ___) => ships.find(ship => ship.name === name),
    },
    Ship: {
        sailor(parent) {
            return sailors.find(sailor => sailor.name === parent.sailor);
        }
    }
};