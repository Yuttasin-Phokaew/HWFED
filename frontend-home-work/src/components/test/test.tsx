import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const YourComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file);
  };

  // ... ต่อไปจะถูกอธิบายในข้อถัดไป
};

const YourComponent: React.FC = () => {
    // ... (โค้ดจากข้อ 1)
  
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    // ... ต่อไปจะถูกอธิบายในข้อถัดไป
  };

  const YourComponent: React.FC = () => {
    // ... (โค้ดจากข้อ 1)
  
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    // ... ต่อไปจะถูกอธิบายในข้อถัดไป
  };
  
  const NextPage: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
  
    const selectedImage = location.state?.selectedImage as File;
    const email = location.state?.email as string;
  
    // ทำอะไรกับข้อมูลที่ได้รับ เช่น แสดงผลในหน้านี้
    console.log('Selected Image in NextPage:', selectedImage);
    console.log('Email in NextPage:', email);
  
    // ... ต่อไปจะถูกอธิบายในข้อถัดไป
  };
      