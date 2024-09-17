import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Configuration
cloudinary.config({
  cloud_name: "dllquys2h",
  api_key: "596681521147815",
  api_secret: "HGn45ybziZpEkEawpPaBjdiv8ds", // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async function (localFilePath) {
  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(localFilePath, {
      resource_type: "auto",
    })
    .catch((error) => {
      console.log(error);
      fs.unlinkSync(localFilePath);
      return null;
    });
  fs.unlinkSync(localFilePath);
  //console.log(uploadResult);
  return uploadResult;
  //   // Optimize delivery by resizing and applying auto-format and auto-quality
  //   const optimizeUrl = cloudinary.url("shoes", {
  //     fetch_format: "auto",
  //     quality: "auto",
  //   });

  //   console.log(optimizeUrl);

  //   // Transform the image: auto-crop to square aspect_ratio
  //   const autoCropUrl = cloudinary.url("shoes", {
  //     crop: "auto",
  //     gravity: "auto",
  //     width: 500,
  //     height: 500,
  //   });

  //   console.log(autoCropUrl);
};

export { uploadOnCloudinary };
