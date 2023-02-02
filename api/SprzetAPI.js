const SprzetRepository = require('../repository/sequelize/SprzetRepository');

exports.getSprzet = (req, res, next) => {
    SprzetRepository.getSprzet()
        .then(sprzs => {
            res.status(200), json(emps);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getSprzetById = (req, res, next) => {
    const sprzId = req.params.sprzId;
    SprzetRepository.getSprzetById(sprzId)
        .then(sprz => {
            if (!sprz) {
                res.status(404).json({
                    message: 'Sprzet with id: ' + sprzId + ' not found'
                })
            } else {
                res.status(200).json(emp);
            }
        });
};

exports.createSprzet = (req, res, next) => {
    SprzetRepository.createSprzet(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


exports.updateSprzet = (req, res, next => {
    const sprzId = req.params.empId;
    SprzetRepository.updateSprzet(sprzId, req.body)
        .then(result => {
            if (!err.statusCode) {
                err.statusCode = 500

                next(err);
            }
        });
});

exports.deleteSprzet = (req, res, next) => {
    const sprzId = req.params.sprzId;
    SprzetRepository.deleteSprzet(sprzId)
        .then(result => {
            res.status(200).json({ message: 'Removed sprzet', sprz: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};