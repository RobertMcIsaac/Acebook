import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateUser } from "../services/users";
import { uploadToImgBB } from "../services/pictures";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


export function UploadProfilePic () {
    const [pictureFile, setPictureFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const payload = {};
        if (!pictureFile) {
            alert("Select an image, bro...");
            return;
        }
        setUploading(true);

        try {
            const imgURL = await uploadToImgBB(pictureFile);
            payload.imgURL  = imgURL;
            await UpdateUser(payload);
            navigate('/users/me');
        } catch (error) {
            console.error("Image Upload Failed!", error);
            navigate(0);
        } finally {
            setUploading(false);
        }
    }

    function handlePictureChange(event) {
        setPictureFile(event.target.files[0]);
    }
    return (
        <>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicUsername">
<Form.Label>Change Profile Picture</Form.Label>
<Form.Control
type="file"
accept="image/*"
onChange={handlePictureChange}
/>
</Form.Group>
<Button
        role="submit-button"
        id="submit"
        variant="primary"
        type="submit"
        disabled={uploading}
        >
        {uploading ? "Uploading..." : "Submit"}
        </Button>
    </Form>
    </>
);
}
