import multer from "multer";

// Configure Multer to store files in memory
const storage = multer.memoryStorage();

// Middleware to handle single file upload
export const singleUpload = multer({ storage }).single("file");
