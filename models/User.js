const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill in a valid emial adresss'],
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please enter a valid email address']
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought' // referencing Thought doc model
    },
    friends: [
        {
      type: Schema.Types.ObjectId,
      ref: 'User' // self- referencing user doc model
    }
],
  },
  {
    toJSON: {
      virtuals: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
