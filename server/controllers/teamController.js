import apiFootballProvider from "../providers/apiFootballProvider";

export const getTeams = async(req, res, next) => {
    try {
        let collection = await _collection('teams');
        let data = await collection.get();
        let teams = [];

        if(teams.empty) {
            res.status(404).send('No team record found');
        } 
        else {
            data.forEach(doc => {
                let team = new Team(
                    doc.id,
                    doc.data().extId,
                    doc.data().name,
                    doc.data().country,
                    doc.data().founded,
                    doc.data().logo
                )
                teams.push(team);
            })
            res.send(teams);
        }
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

export const syncTeams = async(req, res, next) => {
    try {
        res.send(apiFootballProvider.getTeams());
    } catch (error) {
        res.status(400).send(error.message);
    }
}