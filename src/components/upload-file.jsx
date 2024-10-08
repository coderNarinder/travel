import React, { useState } from 'react';  
import { postRequestGod } from '../service';

const UploadFile = ({ 
    onUpload,
    path,
    type,
    name,  
    val
}) => { 
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    const handleUpload = async (e) => { 
        setUploading(true); 
        const formData = new FormData();
        if (e.target.files && e.target.files.length > 0) {
            formData.append('image', e.target.files[0]);
            formData.append('type', type);
            formData.append('path', path);  
            try {
                const response = await postRequestGod(`v1/upload-image`, formData, 1);
                const data = await response; 
                if (data?.status) {
                    console.log(data.data.url, 'data');
                    onUpload(name, data.data.url);
                } else {
                    setError(data.message || 'Upload failed');
                }
            } catch (err) {
                
            } finally {
                setUploading(false);
            }
        } else {
            setError('No file selected');
            setUploading(false);
        }
    };

    return (
        <div className="form-group mb-0">
            <label htmlFor="fileUpload">{name}</label>
            <input 
                type="file" 
                id="fileUpload" 
                accept="image/*" 
                onChange={handleUpload} 
                className="form-control"
            />
           
            {uploading && <p>Uploading...</p>}
            
            {error && <p className="text-danger">{error}</p>}
            {val && (
                <div>
                    <p>Uploaded Image URL: {val}</p>
                    <img src={val} alt="Uploaded" width="200" />
                </div>
            )}
        </div> 
    );
}

export default UploadFile;
