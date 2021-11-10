const teamConverter = {
    toFirestore: (team) => {
        return {
            extId: team.extId,
            name: team.name,
            country: team.country,
            founded: team.founded,
            logo: team.logo
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Team(data.id, data.name, data.country, data.founded, data.logo);
    }
};