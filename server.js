const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// POST route for syllabus generation
app.post('/api/getSyllabus', (req, res) => {
  const { standard, course } = req.body;

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

  const syllabus = mockSyllabus[standard]?.[course] || ['No syllabus found'];
  res.json({ syllabus });
});
app.post('/api/getSyllabus', (req, res) => {
    console.log('Received data:', req.body);
    const { standard, course } = req.body;
  
    const syllabus = mockSyllabus[standard]?.[course] || ['No syllabus found'];
    res.json({ syllabus });
  });
  
// Server Start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

