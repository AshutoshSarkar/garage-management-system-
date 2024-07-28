import { storage } from './firebaseConfig.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadPhotos = async (photos) => {
  try {
    const uploadPromises = photos.map(async (photo) => {
      const storageRef = ref(storage, `photos/${photo.originalname}`);
      await uploadBytes(storageRef, photo.buffer);
      const url = await getDownloadURL(storageRef);
      return url;
    });

    return Promise.all(uploadPromises);
  } catch (error) {
    console.error('Failed to upload photos:', error);
    throw new Error('Failed to upload photos');
  }
};

export default uploadPhotos;
