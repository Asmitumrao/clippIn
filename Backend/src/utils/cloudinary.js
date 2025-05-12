import {cloudinary} from '../config/cloudinaryConfig.js';
import fs from 'fs';

const uploadImage = async (filePath) => {
  if (!filePath) {
    console.error('No file path provided for upload');
    return null;
  }

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'image',
    });

    fs.unlinkSync(filePath); // Clean up local file
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
};

export default uploadImage;

