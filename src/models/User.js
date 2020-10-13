const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        notEmpty:true,
      },
    },
  });

  User.associate = models => {
    User.hasMany(models.Message, {onDelete: 'CASCADE'});
  };

  User.findByLogin = async login => {
    const user = await User.findOne({
      where:{username:login},
    });

    if(!user){
      user = await User.findOne({
        where:{email:login},
      });
    }
  }

  return User;
}

export default user;