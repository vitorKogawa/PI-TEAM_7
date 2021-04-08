module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });

    return User;
}
