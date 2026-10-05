import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log(`Error hashing password ${error}`);
  }
});

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
