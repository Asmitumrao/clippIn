import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {   
        cb(null, 'uploads/'); // Save files in the 'uploads/' directory
    },
    filename: (req, file, cb) => {  
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Middleware for handling single file upload
const singleFileUpload = upload.single('file');
const uploadMultipleFiles = upload.array('files', 10); // Limit to 10 files


export { singleFileUpload, uploadMultipleFiles };










