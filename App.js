import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
} from '@mui/material';
import './App.css';
import './index.css';

const generateSyllabus = (standard, course, language) => {
  const mockSyllabus = {
    '1st': {
      Math: ['Counting', 'Shapes', 'Simple Addition'],
      Science: ['Living and Non-Living', 'Plants', 'Animals'],
      Marathi: ['स्वर', 'साधी शब्दरचना'],
      English: ['Alphabet', 'Simple Words'],
      Hindi: ['अक्षर', 'सरल वाक्य'],
      Biology: ['Introduction to Living Beings', 'Parts of a Plant'],
    },
    '2nd': {
      Math: ['Subtraction', 'Addition', 'Simple Geometry'],
      Science: ['Water', 'Air', 'Plants'],
      Marathi: ['वाक्यांश', 'साधी वाक्ये'],
      English: ['Grammar Basics', 'Reading Comprehension'],
      Hindi: ['सरल शब्द', 'वाक्य'],
      Biology: ['Plants and Animals', 'Human Body'],
    },
    '3rd': {
      Math: ['Multiplication', 'Division', 'Time'],
      Science: ['Soil', 'Weather', 'Animals'],
      Marathi: ['वाक्य', 'अनुच्छेद लेखन'],
      English: ['Simple Stories', 'Tenses'],
      Hindi: ['क्रिया', 'वाक्य रचना'],
      Biology: ['Types of Plants', 'Respiration in Animals'],
    },
    '4th': {
      Math: ['Multiplication Tables', 'Length', 'Area'],
      Science: ['Water Cycle', 'Materials Around Us'],
      Marathi: ['कविता', 'लघुकथा'],
      English: ['Vocabulary', 'Grammar'],
      Hindi: ['समानार्थी', 'विलोम'],
      Biology: ['Plant Growth', 'Body Systems'],
    },
    '5th': {
      Math: ['Fractions', 'Measurement', 'Time'],
      Science: ['Living Beings', 'Matter and Energy'],
      Marathi: ['प्रसिद्ध व्यक्तिमत्वे', 'शब्दसंग्रह'],
      English: ['Reading Comprehension', 'Vocabulary Building'],
      Hindi: ['सर्वनाम', 'वाक्य रचना'],
      Biology: ['Plants', 'Human Body'],
    },
    '6th': {
      Math: ['Basic Algebra', 'Shapes and Geometry', 'Data Handling'],
      Science: ['Motion', 'Electricity', 'Earth and Space'],
      Marathi: ['व्याकरण', 'निबंध'],
      English: ['Story Writing', 'Tenses and Articles'],
      Hindi: ['व्याकरण', 'कविता'],
      Biology: ['Human Digestive System', 'Plant Reproduction'],
    },
    '7th': {
      Math: ['Linear Equations', 'Perimeter and Area', 'Data Interpretation'],
      Science: ['Heat and Temperature', 'Force and Motion', 'Matter'],
      Marathi: ['गद्य', 'पद्य लेखन'],
      English: ['Poetry', 'Advanced Reading Comprehension'],
      Hindi: ['काल', 'व्याकरण अभ्यास'],
      Biology: ['Human Nervous System', 'Respiratory System'],
    },
    '8th': {
      Math: ['Quadratic Equations', 'Pythagoras Theorem', 'Geometry'],
      Science: ['Magnetism', 'Light and Optics', 'Chemical Reactions'],
      Marathi: ['लघुकथा', 'कविता'],
      English: ['Literature', 'Creative Writing'],
      Hindi: ['अपठित गद्यांश', 'शब्दसंग्रह'],
      Biology: ['Reproduction in Plants', 'Evolution'],
    },
    '9th': {
      Math: ['Polynomials', 'Coordinate Geometry', 'Statistics'],
      Science: ['Work, Energy and Power', 'Force', 'Newton’s Laws'],
      Marathi: ['निबंध', 'गद्यलेखन'],
      English: ['Literature', 'Advanced Grammar'],
      Hindi: ['गद्य', 'पद्य'],
      Biology: ['Cell Structure', 'Genetics'],
    },
    '10th': {
      Math: ['Linear Equations', 'Trigonometry', 'Probability'],
      Science: ['Acids, Bases, and Salts', 'Electricity and Magnetism', 'Human Anatomy'],
      Marathi: ['व्याकरण', 'साहित्य'],
      English: ['Letter Writing', 'Creative Writing'],
      Hindi: ['साहित्य', 'व्याकरण'],
      Biology: ['Photosynthesis', 'Human Diseases'],
    },
    '11th': {
      Math: ['Differentiation', 'Integration', 'Limits and Continuity'],
      Science: ['Mechanics', 'Electrostatics', 'Organic Chemistry'],
      Marathi: ['कविता', 'गद्यलेखन'],
      English: ['Advanced Literature', 'Creative Essays'],
      Hindi: ['कविता', 'गद्य'],
      Biology: ['Cell Division', 'Ecology'],
    },
    '12th': {
      Math: ['Integration', 'Differentiation', 'Linear Programming'],
      Science: ['Electrochemistry', 'Nuclear Physics', 'Genetics'],
      Marathi: ['साहित्य', 'कविता'],
      English: ['Advanced Grammar', 'Essays'],
      Hindi: ['कविता', 'गद्य'],
      Biology: ['Human Reproduction', 'Ecology'],
    },
  };

  if (!mockSyllabus[standard]) return ['No syllabus found'];
  if (language && mockSyllabus[standard][language]) {
    return mockSyllabus[standard][language];
  }
  return mockSyllabus[standard][course] || ['No syllabus found'];
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    standard: '',
    course: '',
    email: '',
    mobile: '',
    language: '',
  });

  const [syllabus, setSyllabus] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Debugging: log the selected values
    console.log("Selected values: ", formData.standard, formData.course, formData.language);
    
    // API Call to backend
    fetch('http://localhost:5000/api/getSyllabus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        standard: formData.standard,
        course: formData.course,
        language: formData.language,
 
      }),
    })
    .then(res => res.json())
  .then(data => {
    console.log('Syllabus:', data.syllabus); 
    setSyllabus(data.syllabus);
  })

    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        MEDHAVI - Education Model
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          select
          label="Standard"
          name="standard"
          fullWidth
          margin="normal"
          value={formData.standard}
          onChange={handleChange}
        >
          {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map((standard) => (
            <MenuItem key={standard} value={standard}>{standard}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Course"
          name="course"
          fullWidth
          margin="normal"
          value={formData.course}
          onChange={handleChange}
        >
          <MenuItem value="Math">Math</MenuItem>
          <MenuItem value="Science">Science</MenuItem>
          <MenuItem value="Marathi">Marathi</MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Biology">Biology</MenuItem>
        </TextField>
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Mobile"
          name="mobile"
          fullWidth
          margin="normal"
          value={formData.mobile}
          onChange={handleChange}
        />
        <TextField
          select
          label="Language"
          name="language"
          fullWidth
          margin="normal"
          value={formData.language}
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Marathi">Marathi</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
        </TextField>

        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          sx={{
            mt: 2,
            width: '100%', 
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '16px',
          }}
        >
          Submit
        </Button>
      </form>

      {syllabus.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Mock Syllabus:</Typography>
          <ul>
            {syllabus.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}

export default App;
