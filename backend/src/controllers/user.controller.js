import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils//ApiResponse.js";
import { ApiError } from "../utils//ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    //console.log(user);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    //console.log(accessToken, refreshToken);
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    if (!accessToken && !refreshToken) {
      console.log("Not generated");
      return;
    }
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(400, "Something Went Wrong");
  }
};

const signUp = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  //console.log(name, username, password, email);

  if ([username, password, email].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required !!");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "Username or email already exists");
  }

  const user = await User.create({
    username: username.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    password,
  });

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const createdUser = await User.findById(user._id).select(
    "-refreshToken -password"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong at User Creation !!");
  }

  const options = {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, { sameSite: "None" })
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, "User Registered Successfully", {
        user: createdUser,
        accessToken,
        refreshToken,
      })
    );
});

const signIn = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    throw new ApiError(400, "Invaild Credentails !");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Incorrect Password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, { sameSite: "None" })
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, "Sign-In Successfully", {
        user: loggedInUser,
        accessToken,
        refreshToken,
      })
    );
});

const signOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    $set: {
      refreshToken: undefined,
    },
  });
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, "User Logged Out"));
});

const setProfile = asyncHandler(async (req, res) => {
  const { name, bio, gender } = req.body;
  const mediaPath = req.file?.path;

  if ([name, bio, gender].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required !!");
  }

  if (!mediaPath) {
    throw new ApiError(400, "Please provide an image");
  }

  const media = await uploadOnCloudinary(mediaPath, process.env.API_KEY);
  const mediaUrl = media.secure_url;

  await User.findByIdAndUpdate(req.user._id, {
    $set: {
      name,
      bio,
      gender,
      avatar: mediaUrl,
      isProfileSet: true,
    },
  });

  const user = await User.findById(req.user._id).select(
    "-password -refreshToken"
  );

  return res.status(200).json(new ApiResponse(200, "Profile Updated", user));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(users);
});

export { signUp, signIn, signOut, setProfile, getAllUsers };
