import { readdirSync } from "fs";
import { copyFile } from "fs/promises";

const videoFormats = [
  "mp4",
  "mov",
  "wmv",
  "avi",
  "avchd",
  "flv",
  "mkv",
  "webm",
  "mpeg-2",
  "mpeg",
];
const rootPath = "E:/SteamLibrary/steamapps/workshop/content/431960";
readdirSync(rootPath).forEach((folder) => {
  readdirSync(`${rootPath}/${folder}`, {
    withFileTypes: true,
  }).forEach((animationFile) => {
    const fileParts = animationFile.name.split(".");
    const fileExtension = fileParts[fileParts.length - 1];
    if (animationFile.isFile() && videoFormats.includes(fileExtension)) {
      const fullFilePath = `${rootPath}/${folder}/${animationFile.name}`;
      const destinationPath = "C:/Users/Christian/Downloads/wallpapersList";
      console.log(fullFilePath);
    }
  });
});
