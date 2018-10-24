module.exports = function (Sequelize, DataTypes, DATE) {
    var SampleData = Sequelize.define("SampleData", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        county: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });

    SampleData.associate = function (models) {

        SampleData.hasOne(models.Student, {
            foreignKey: "id",
            onDelete: "cascade"
        });
    };

    return SampleData;
};