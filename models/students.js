module.exports = function (Sequelize, DataTypes, TIMESTAMP) {
    var Student = Sequelize.define("Student", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                len: [1], 
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        DOB: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        createdAt: {
            type: DataTypes.DATE
            
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });

    Student.associate = function (models) {

        Student.belongsTo(models.SampleData, {
            foreignKey: "id"
        });
        // Student.hasMany(models.SampleData);
    };

    return Student;
};

