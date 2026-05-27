export type Person = {
  name: string;
  role?: string;
  affiliation?: string;
  image: string;
};

// Shared contact shown on every founder / associate card (as on the old site)
export const FOUNDER_EMAIL = 'howrahdiabetessociety@gmail.com';
export const FOUNDER_PHONE = '(+91)9830877675';

// Intro copy — verbatim from the old website
export const FOUNDERS_INTRO =
  'The founder members include Dr. Sanjay K Shah of Narayana Superspeciality & Multispecialty Hospital a renowned endocrinologist heading the society as President, Dr. Mannalal Bhansali a senior doctor of internal medicine practising at North Howrah as Vice President, Dr. Bijay Prakash Pandey the famous cardiologist attached with Narayana Hospital as Secretary, Dr. Guruprasad Bhattacharya, a popular diabetologist practising at south Howrah as Assistant Secretary, Dr. Mridul Bera a prominent Physician attached with Narayana Hospital as Treasurer, Dr. Saikat Ghosh a well known doctor practising pain medicine in rural and municipal areas of Howrah as Assistant Treasurer and Dr. Dilip Todi the leading Gastroenterologist attached with Narayana Hospital, Dr. S. K Somani a well known neurologist practising as central Howrah, Dr. Bismay Kumar the knowledgeable Nephrologist, attached with Narayana Hospital, as the members of scientific affairs of Howrah Town Diabetes Study Society. And last but not the least to mention that the huge load of administrative works is managed by two lady founders (associate), Mrs Joyati Bhattacharya, as secretary social affairs and Mrs Falguni Shah as convenor public relation.';

export const PATRONS_INTRO =
  'From the very beginning HDS was blessed with liberal patronage of senior teachers namely Prof. Dr. Samar Banerjee, Prof. Dr. Dasarathi Sarkar, Late Prof. Dr. Arun Majumdar, Late Prof. Dr. Shibananda Dutta, Late Dr. Buddhadeb Mukherjee, Dr. Ashok Mukherjee and Dr. T. K. Pal.';

export const COMMITTEE_INTRO =
  'The learning phase evolved by the years — with each scientific conference and other meaningful social events the society continued to enrich its core strength. Doctors with interest in diabetes and related specialities joined the organisation as executive committee members and involved themselves in all sorts of activity to make the society better and bigger.';

// 9 founding doctors
export const FOUNDERS: Person[] = [
  { name: 'Dr. Sanjay K. Shah',      role: 'President',                 image: '/wp-content/uploads/2025/05/Dr.-Sanjay-Shah.png' },
  { name: 'Dr. M. L. Bhansali',      role: 'Vice President',            image: '/wp-content/uploads/2025/05/Dr.-M.-L.-Bhansali.png' },
  { name: 'Dr. B. P. Pandey',        role: 'Secretary',                 image: '/wp-content/uploads/2025/05/Dr.B.-P.-Pandey.png' },
  { name: 'Dr. G. P. Bhattacharya',  role: 'Asst. Secretary',           image: '/wp-content/uploads/2025/05/Dr.-Guruprasad-Bhattacharya.png' },
  { name: 'Dr. Mridul Bera',         role: 'Treasurer',                 image: '/wp-content/uploads/2025/05/Dr.-Mridul-Bera.png' },
  { name: 'Dr. Saikat Ghosh',        role: 'Asst. Treasurer',           image: '/wp-content/uploads/2025/05/Dr.-Saikat-Ghosh.png' },
  { name: 'Dr. Bismay Kumar',        role: 'Member Scientific Affairs', image: '/wp-content/uploads/2025/05/Dr.-Bismay-Kumar.png' },
  { name: 'Dr. Dilip Todi',          role: 'Member Scientific Affairs', image: '/wp-content/uploads/2025/05/Dr.-Dilip-Todi.png' },
  { name: 'Dr. S. K. Somani',        role: 'Member Scientific Affairs', image: '/wp-content/uploads/2025/05/Dr.-S.K-Somani.png' },
];

// 2 lady founders / associates
export const ASSOCIATES: Person[] = [
  { name: 'Mrs. Joyati Bhattacharya', role: 'Secretary, Social Affairs', image: '/wp-content/uploads/2025/05/Mrs.-Joyati-Bhattacharya.png' },
  { name: 'Mrs. Falguni Shah',        role: 'Convenor, Public Relations', image: '/wp-content/uploads/2025/05/Mrs.-Falguni-Shah.png' },
];

export const PATRONS: Person[] = [
  { name: 'Prof. Dr. Samar Banerjee',  image: '/wp-content/uploads/2025/06/Prof.-Dr.-Samar-Banerjee.jpg' },
  { name: 'Prof. Dr. Dasarathi Sarkar', image: '/wp-content/uploads/2025/06/Dr.-Dasarathi-Sarkar.jpg' },
  { name: 'Dr. T. K. Pal',             image: '/wp-content/uploads/2025/06/Dr.-T.-K.-Pal.jpg' },
  { name: 'Dr. Ashok Mukherjee',       image: '/wp-content/uploads/2025/06/Dr-Ashok-Mukherjee.jpg' },
];

export const COMMITTEE: Person[] = [
  { name: 'Dr. Satish Gupta',            image: '/wp-content/uploads/2025/06/Dr.-Satish-Gupta.jpg' },
  { name: 'Dr. Sukumar Barik',           image: '/wp-content/uploads/2025/06/Dr.-Sukumar-Barik.jpg' },
  { name: 'Dr. H. N. Chakraborty',       image: '/wp-content/uploads/2025/06/Dr.-H.N-Chakraborty.jpg' },
  { name: 'Dr. Kausik Pahari',           image: '/wp-content/uploads/2025/06/Dr.-Kausik-Pahari.jpg' },
  { name: 'Dr. Somnath Mukherjee',       image: '/wp-content/uploads/2025/06/Dr.Somnath-Mukherjee.jpg' },
  { name: 'Dr. Satyam Chakraborty',      image: '/wp-content/uploads/2025/06/Dr.-Satyam-Chakraborty.jpg' },
  { name: 'Dr. Sunip Banerjee',          image: '/wp-content/uploads/2025/06/Dr.-Sunip-Banerrjee.jpg' },
  { name: 'Dr. Sanjay Sud',              image: '/wp-content/uploads/2025/06/Dr.Sanjay-Sud.jpg' },
  { name: 'Dr. Somnath Mukhopadhyay',    image: '/wp-content/uploads/2025/06/Dr.-Somnath-Mukhopadhyay.jpg' },
  { name: 'Dr. Tanima Das Bhattacharya', image: '/wp-content/uploads/2025/06/Dr.-Tanima-Das-Bhattacharya.jpg' },
  { name: 'Dr. Samudra Gooptu',          image: '/wp-content/uploads/2025/06/Dr.-Samudra-Gooptu.jpg' },
  { name: 'Dr. Somnath Naskar',          image: '/wp-content/uploads/2025/06/Dr.-Somnath-Naskar.jpg' },
  { name: 'Dr. Ambarish Bhattacharya',   image: '/wp-content/uploads/2025/06/Dr.-Ambarish-Bhattacharya.jpg' },
  { name: 'Dr. Arindam Ghosh',           image: '/wp-content/uploads/2025/06/Dr.Arindam-Ghosh.jpg' },
  { name: 'Dr. Rajib De',                image: '/wp-content/uploads/2025/06/Dr.-Rajib-De.jpg' },
  { name: 'Dr. Supriya Datta',           image: '/wp-content/uploads/2025/06/Dr.-Supriya-Datta.jpg' },
  { name: 'Dr. Sanjay Seal',             image: '/wp-content/uploads/2025/06/Dr.-Sanjay-Seal.jpg' },
  { name: 'Dr. Agniva Maity',            image: '/wp-content/uploads/2025/06/Dr.Agniva-Maity.jpg' },
  { name: 'Dr. Avrojit Raha',            image: '/wp-content/uploads/2025/06/Dr.-Avrojit-Raha.jpg' },
  { name: 'Dr. Rajat Kar',               image: '/wp-content/uploads/2025/06/Dr.-Rajat-Kar.jpg' },
  { name: 'Dr. Aditya Vora',             image: '/wp-content/uploads/2025/06/Dr.-Aditya-Vora.jpg' },
  { name: 'Dr. Subrata Kr Pal',          image: '/wp-content/uploads/2025/06/Dr.-Subrata-Kr-Pal.jpg' },
];
