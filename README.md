

# **ALCademy - AI-Powered Educational Content Generator**

**ALCademy** is a platform that leverages artificial intelligence to assist students and teachers in generating educational content rapidly. Whether you need to draft an essay, plan a study session, outline a research paper, or create a lesson plan, **ALCademy** provides over 20 customizable templates for a wide variety of educational needs.

## **Features**
- **AI-Generated Content**: Choose from over 20 pre-built templates to create educational content in seconds.
- **User Authentication**: Secure login and profile management system for storing and accessing previous work.
- **Template Library**: Easily browse, search, and select templates to fit your needs.
- **Archive & History**: Keep track of previously generated content and templates in a personal archive.
- **User-Friendly Design**: Responsive, intuitive interface built with TailwindCSS and React.
- **Feedback & Suggestion System**: Users can easily suggest new templates or report issues directly from the platform using integrated EmailJS forms.

## **Tech Stack**
- **Front-End**: React, Next.js, HTML, CSS, TailwindCSS, ShadCN
- **Back-End**: Next.js API routes
- **Database**: DrizzleORM
- **Additional Integrations**: EmailJS for handling feedback and contact forms
- **AI Integration**: Google Generative AI

## **Getting Started**

### **Prerequisites**
To get the project running locally, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **Git** for version control

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/yashal-ali/ALCademy.git)
   cd alcademy
   ```

2. **Install dependencies:**

   If you're using npm:

   ```bash
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env.local` file in the root directory and add the necessary environment variables:

   ```bash
   NEXT_PUBLIC_GOOGLE_AI_API_KEY=your_google_api_key
   NEXT_PUBLIC_EMAILJS_USER_ID=your_emailjs_user_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   DATABASE_URL=your_database_url
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will now be running locally at `http://localhost:3000`.

### **Scripts**

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Runs the production build.
- `npm run lint`: Lints the codebase for potential errors.

## **Usage**

### **Login & Registration**
Users can sign up or log in to the platform to create, store, and retrieve their educational content.

### **Template Selection**
Once logged in, users can select from a library of over 20 templates categorized by educational needs. Examples include:
- **Essay Writing**
- **Research Paper Outline**
- **Lesson Planning**
- **Study Schedule Creation**

### **AI-Generated Content**
After selecting a template, users can input their topic or requirement, and **ALCademy** will use AI to generate relevant content based on the selected template. The generated content can be further refined and customized.

### **Feedback & Suggestions**
Users can provide feedback or request new templates using the built-in contact form powered by EmailJS.

## **Folder Structure**

The project is organized as follows:

```
ALCademy/
├── components/         # React components
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   ├── index.js        # Home page
│   └── ...             
├── public/             # Static files (images, icons, etc.)
├── styles/             # TailwindCSS styles and global CSS
├── utils/              # Utility functions
├── drizzle/            # Drizzle ORM models and database configuration
├── .env.local          # Environment variables (local development)
├── package.json        # Project configuration and dependencies
├── README.md           # Project documentation
└── next.config.js      # Next.js configuration
```


## **Contributing**

We welcome contributions to **ALCademy**! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure the code passes linting and tests.
4. Submit a pull request explaining your changes.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
