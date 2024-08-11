import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initUser = (sequelize, Types) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  User.init(
    {
      id: {
				type: Types.UUID,
				defaultValue: Types.UUIDV4,
				primaryKey: true,
			},
      first_name: {
        type: Types.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: Types.STRING(255),
        allowNull: false,
      },
      email: {
        type: Types.STRING(255),
        allowNull: false,
      },
      password: {
        type: Types.STRING(255),
        allowNull: false,
      },
      gender: {
        type: Types.STRING(255),
      },
      designation: {
        type: Types.STRING(255),
      },
      bio: {
        type: Types.TEXT,
      },
      profile_photo: {
        type: Types.STRING(255),
      },
      location: {
        type: Types.STRING(255),
      },
      phone: {
        type: Types.STRING(255),
      },
      reset_password_token: {
        type: Types.CHAR(36),
      },
      reset_password_send_at: {
        type: Types.DATE,
      },
      reset_password_at: {
        type: Types.DATE,
      },
      website: {
        type: Types.STRING(255),
      },
      twitter: {
        type: Types.STRING(255),
      },
      facebook: {
        type: Types.STRING(255),
      },
      linkedin: {
        type: Types.STRING(255),
      },
      youtube: {
        type: Types.STRING(255),
      },
      role: {
        type: Types.ENUM("student", "admin", "instructor"),
        defaultValue: "instructor",
      },
      

      email_confirmed: {
        type: Types.BOOLEAN,
        defaultValue: true,
      },
      email_confirmed_at: {
        type: Types.DATE,
      },
      instructor_request: {
        type: Types.BOOLEAN,
        defaultValue: false,
      },
      instructor_request_confirmed: {
        type: Types.BOOLEAN,
        defaultValue: false,
      },
      instructor_request_confirmed_at: {
        type: Types.DATE,
      },
      instructor_status: {
        type: Types.BOOLEAN,
      },
      instructor_subject: {
        type: Types.STRING(255),
      },
      instructor_description: {
        type: Types.STRING(255),
      },
      status: {
        type: Types.BOOLEAN,
        defaultValue: true,
      },
      status2: {
        type: Types.BOOLEAN,
        defaultValue: true,
      },

      balance: {
        
  
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue:0
      },



      
      is_profile_public: {
        type: Types.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        type: Types.DATE,
        defaultValue: Types.NOW,
        allowNull: false,
      },
      updated_at: {
        type: Types.DATE,
        defaultValue: Types.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );

    // Sync the User model with the database
    User.sync({ alter: true });

    return User;
};

export default initUser(connection, DataTypes);

