const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Email address is required",
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        "Please enter a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts", // referencing Thought doc model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // self- referencing user doc model
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

// get total count of friends on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// this code is for bonus deleting thoughts with user
UserSchema.pre("remove", async function (next) {
  try {
    await thought.remove({
      _id: {
        $in: this.thoughts,
      },
    });
    next();
  } catch (err) {
    next(err);
  }
});

const User = model("User", UserSchema);

module.exports = User;
