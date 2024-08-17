'use client'
import { ContactRoundIcon, DownloadCloud, SearchCheckIcon } from 'lucide-react';
import  {
  blog_content,
  blog_idea,
  development,
  essay_writing,
  lab_report,
  presentation,
  research_paper,
  study_guide,
  story,
  translation,
  classroom_management,
  quiz,
  lesson_plain,
  homework_assignment,
  behavioral_assessment,
  user_friendly,wellness,templates,
  career_counselling,cerification_sugguestion,case_Study,experiment_report,dsa_problem,finder,
  historial_event,homework,interview,meditation_guide,iq_test,personal_statement,plan,project_proposal,study_music,skil_roadmap,
} from '../public/asset'
import { Templat, TFAQS, TNAVIITEM, TSERVICE, TSUBCARDDATA } from '@/type';
export const Templates:Templat[]| any=[
    {
        name:'Blog Title',
        desc:' AI to Generate Creative Blog Ideas',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        category:'Blog',
        icon: blog_idea,
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your BLog niche',
                name:'niche',
                field:'input',
                required:true
            },
            {
                label:'Enter blog outline',
                field : 'textarea',
                name:'outline'
            }

        ]
    },
    {
      name: "Behavioral Assessment Preparation",
      desc: "AI-Assisted Preparation for Behavioral Assessments and Interview Questions",
      aiPrompt: "You are an AI assistant specializing in behavioral assessments. A student or job candidate has provided the following behavioral assessment scenario: '[Describe the scenario or context, e.g., a situation involving team conflict resolution].' Based on this scenario, provide:\n\n1. **Situation Analysis:** Describe how to approach the given situation or behavioral question. Outline the key elements and considerations.\n\n2. **Sample Answers:** Provide sample responses to common behavioral questions related to the scenario. Include examples of how to effectively demonstrate competencies such as teamwork, leadership, problem-solving, and conflict resolution.\n\n3. **Evaluation Criteria:** List the criteria that evaluators might use to assess the answers. Explain what makes an effective response and how to align answers with these criteria.\n\n4. **Tips for Success:** Offer practical tips for performing well in behavioral assessments, such as structuring responses, using the STAR (Situation, Task, Action, Result) method, and practicing common questions.\n\n5. **Additional Resources:** Suggest further reading or resources for improving behavioral interview skills.\n\n6. **Formatting:** Use clear headings, bullet points, and concise paragraphs for easy readability.",
      category: "Interview Preparation",
      icon: behavioral_assessment,
      slug: "behavioral-assessment-preparation",
      form: [
          {
              label: "Describe the behavioral assessment scenario or context",
              name: "scenario",
              field: "textarea",
              required: true
          },
          {
              label: "Specify any particular behavioral competencies or skills to focus on (optional)",
              name: "focus",
              field: "textarea"
          }
      ]
  },

    {
      name: "DSA Problem Solving",
      desc: "AI-Assisted Step-by-Step Guidance and Code Examples for DSA Questions",
      aiPrompt: "You are an AI assistant specializing in Data Structures and Algorithms (DSA). A computer science student has provided the following DSA problem: '[Describe the problem, e.g., Implement a binary search algorithm in Python].' Based on this problem, provide:\n\n1. **Problem Statement:** Reiterate the problem statement to ensure clarity.\n\n2. **Step-by-Step Solution:** Break down the problem into a series of steps, explaining each step in detail. Include key concepts and methodologies used to approach the problem.\n\n3. **Code Example:** Provide a complete code example that solves the problem. Include comments to explain the code logic and any important aspects.\n\n4. **Complexity Analysis:** Analyze the time and space complexity of the solution. Explain how the complexity is calculated and why the solution is efficient or otherwise.\n\n5. **Common Mistakes:** Highlight common mistakes or pitfalls related to this problem and how to avoid them.\n\n6. **Further Reading:** Suggest additional resources or topics for further learning related to the problem or the concepts used.\n\n7. **Formatting:** Use clear headings, bullet points, and code formatting for easy readability.",
      category: "Computer Science",
      icon: dsa_problem,
      slug: "dsa-problem-solving",
      form: [
          {
              label: "Describe the DSA problem",
              name: "problem",
              field: "textarea",
              required: true
          },
          {
              label: "Specify any particular constraints or requirements (optional)",
              name: "constraints",
              field: "textarea"
          }
      ]
  }
  
    ,
    {
      name: "IQ Test Practice",
      desc: "AI-Assisted IQ Test Questions and Explanations Based on Difficulty Level",
      aiPrompt: "You are an AI assistant specializing in IQ test preparation. The user has specified the following IQ level: '[Specify the IQ level, e.g., Beginner, Intermediate, Advanced].' Based on this level, provide:\n\n1. **IQ Test Question:** Present an IQ test question appropriate for the specified difficulty level.\n\n2. **Answer Explanation:** Provide a detailed explanation of the answer, including the reasoning and thought process behind it. Explain why the answer is correct and clarify any common misconceptions.\n\n3. **Tips for Improvement:** Offer tips and strategies to help the user improve their IQ test performance, including practice techniques and areas to focus on.\n\n4. **Sample Questions:** Optionally, provide additional sample questions for practice, if the user wants more examples.\n\n5. **Formatting:** Use clear headings, bullet points, and concise language to ensure the information is easily digestible.",
      category: "IQ Test",
      icon: iq_test,
      slug: "iq-test-practice",
      form: [
          {
              label: "Specify your IQ test level",
              name: "level",
              field: "dropdown",
              options: ["Beginner", "Intermediate", "Advanced"],
              required: true
          },
          {
              label: "Enter any specific focus areas or types of questions (optional)",
              name: "focus",
              field: "textarea"
          }
      ]
  },
  
    {
      name: "Study Plan",
      desc: "AI-Generated Study Plan and To-Do List Based on Study Topics and Available Hours",
      aiPrompt: "You are an AI assistant helping a student create a structured study plan. The student has provided the following details:\n\n1. **Study Topic:** '[Enter the topic or subject, e.g., Advanced Calculus, World History].'\n\n2. **Available Hours:** '[Specify the number of hours available per day or week, e.g., 2 hours per day, 10 hours per week].'\n\nBased on these inputs, create:\n\n1. **Study Schedule:** Distribute the available hours across different topics or subtopics related to the main study topic.\n\n2. **To-Do List:** Provide a detailed to-do list with specific tasks or milestones to be achieved during each study session. Include deadlines or target dates for each task.\n\n3. **Prioritization:** Suggest which topics or tasks should be prioritized based on the student's goals and deadlines.\n\n4. **Recommendations:** Offer any additional tips or strategies to help the student effectively manage their study time and stay on track.\n\n5. **Formatting:** Use clear headings, bullet points, and organized sections to make the study plan easy to follow and implement.",
      category: "Study Plan",
      icon: plan,
      slug: "generate-study-plan",
      form: [
          {
              label: "Enter the study topic",
              name: "topic",
              field: "input",
              required: true
          },
          {
              label: "Specify the number of hours available per day or week",
              name: "hours",
              field: "input",
              required: true
          },
          {
              label: "Provide any specific goals or deadlines (optional)",
              name: "goals",
              field: "textarea"
          }
      ]
  }
  ,
    {
        name:'Blog Content',
        desc:' AI to Generate Creative Blog Ideas',
        aiPrompt:"You are a knowledgeable and engaging AI writer tasked with creating a detailed blog post. Write a comprehensive blog post on the given topic .' \n\nThe blog post should include:\n\n1. **Introduction:** Provide a compelling introduction that hooks the reader and clearly states what they will learn.\n\n2. **Main Content:** Break down the content into multiple sections with headings. Each section should include informative, engaging, and actionable content. Include relevant examples, tips, or bullet points where appropriate. \n\n3. **Conclusion:** Summarize the key points and offer a call to action, encouraging the reader to apply the advice, leave a comment, or share the post.\n\n4. **Tone and Style:** Write in a conversational and accessible tone. Use clear and concise language that resonates with the target audience. Ensure the content is well-organized and flows naturally from one section to the next.\n\n5. **Formatting:** Use rich text formatting with bold headings, bullet points, and short paragraphs for easy readability.\n\n6. **Word Count:** Aim for approximately 1500 words, ensuring the content is detailed yet concise.",
        category:'Blog',
        icon:blog_content,
        slug:'generate-blog-content',
        form:[
            {
                label:'Enter your blog topic',
                name:'topic',
                field:'input',
                required:true
            },
            {
                label:'Enter blog outline',
                field : 'textarea',
                name:'outline'
            }

        ]
    }
    ,
    {
        name: "Research Paper Outline",
        desc: "AI-Generated Outline for Academic Research Papers",
        aiPrompt: "You are an AI assistant helping a student create a detailed outline for a research paper on the topic '[Your Research Topic, e.g., The Impact of Social Media on Adolescent Mental Health].' \n\nThe outline should include:\n\n1. **Introduction:** Define the research question or thesis statement and provide a brief overview of the topic.\n\n2. **Literature Review:** Summarize the key literature and studies relevant to the topic. Organize the review thematically or chronologically.\n\n3. **Methodology:** Outline the research methods that will be used to gather and analyze data.\n\n4. **Findings/Expected Findings:** Provide an outline of the potential findings or results based on the research question.\n\n5. **Discussion:** Plan how the findings will be analyzed and related to the existing literature. Include any theoretical frameworks or models.\n\n6. **Conclusion:** Summarize the anticipated contributions of the research to the field and suggest areas for future research.\n\n7. **Formatting:** Use headings and bullet points to clearly structure the outline.",
        category: "Research Paper",
        icon: research_paper,
        slug: "generate-research-paper-outline",
        form: [
          {
            label: "Enter your research topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Provide any specific guidelines or structure",
            field: "textarea",
            name: "guidelines"
          }
        ]
      }
      ,
      {
        name: "Presentation Script Writing",
        desc: "AI-Generated Presentation Scripts for Students",
        aiPrompt: "You are an AI writer helping a student prepare a presentation script on the topic '[Your Presentation Topic, e.g., The Role of Artificial Intelligence in Modern Medicine].' \n\nThe presentation script should include:\n\n1. **Introduction:** Start with a strong opening to grab the audience's attention and introduce the topic.\n\n2. **Main Points:** Outline the key points of the presentation, providing detailed explanations, examples, and any supporting data. Organize the content into sections with clear headings.\n\n3. **Visual Aids:** Suggest where to include slides, images, or videos to enhance the presentation.\n\n4. **Conclusion:** End with a summary of the key points and a compelling closing statement or call to action.\n\n5. **Timing:** Ensure the script is timed appropriately for a [Specify Duration, e.g., 10-minute] presentation.\n\n6. **Tone and Style:** Write in a confident and engaging tone, using language that is clear and easy to follow.",
        category: "Presentation",
        icon:presentation,
        slug: "generate-presentation-script",
        form: [
          {
            label: "Enter your presentation topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Provide any specific points or sections to cover",
            field: "textarea",
            name: "points"
          }
        ]
      }
      ,
      {
        name: "Lab Report Writing",
        desc: "AI-Assisted Lab Report Writing for Science Students",
        aiPrompt: "You are an AI assistant helping a student write a detailed lab report based on their experiment '[Your Experiment Topic, e.g., The Effect of Light Intensity on Photosynthesis Rate].' \n\nThe lab report should include:\n\n1. **Title:** Provide a clear and descriptive title for the report.\n\n2. **Abstract:** Summarize the experiment, methods, results, and conclusions in a brief paragraph.\n\n3. **Introduction:** Provide background information on the topic, state the purpose of the experiment, and present the hypothesis.\n\n4. **Methods:** Describe the materials and procedures used in the experiment in detail.\n\n5. **Results:** Present the data collected, using tables, graphs, or charts where appropriate. Summarize the key findings.\n\n6. **Discussion:** Analyze the results, discussing whether the hypothesis was supported, any errors or unexpected outcomes, and the implications of the findings.\n\n7. **Conclusion:** Summarize the main points of the report and suggest potential future experiments or studies.\n\n8. **Formatting:** Use clear headings, bullet points, and proper scientific formatting.",
        category: "Lab Report",
        icon:lab_report,
        slug: "generate-lab-report",
        form: [
          {
            label: "Enter your experiment topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Provide experiment details (if any)",
            field: "textarea",
            name: "experimentDetails"
          }
        ]
      },
      {
        name: "Study Guide",
        desc: "AI-Generated Study Guides for Efficient Learning",
        aiPrompt: "You are an AI assistant helping a student prepare a comprehensive study guide on the topic '[Your Study Topic, e.g., The American Civil War].' \n\nThe study guide should include:\n\n1. **Overview:** Provide a brief summary of the topic, outlining key themes and concepts.\n\n2. **Key Concepts:** List and explain the most important concepts, terms, and events related to the topic. Use bullet points for clarity.\n\n3. **Detailed Sections:** Break down the topic into more detailed sections with headings, providing in-depth explanations, examples, and important dates or figures.\n\n4. **Review Questions:** Include a set of review questions or practice problems at the end to help the student test their understanding.\n\n5. **Formatting:** Use clear headings, bullet points, and short paragraphs to make the guide easy to read and study from.\n\n6. **Length:** Aim for a study guide that is thorough yet concise, approximately 1000-1500 words.",
        category: "Study Guide",
        icon:study_guide,
        slug: "generate-study-guide",
        form: [
          {
            label: "Enter your study topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Specify any key concepts or areas to focus on",
            field: "textarea",
            name: "focusAreas"
          }
        ]
      },
      {
        name: "Essay Writing",
        desc: "AI-Assisted Essay Writing for Students",
        aiPrompt: "You are an AI tutor helping a student write a detailed essay on the topic '[Your Essay Topic, e.g., The Impact of Climate Change on Global Agriculture].' \n\nThe essay should include:\n\n1. **Introduction:** Introduce the topic, provide background information, and present a clear thesis statement.\n\n2. **Body Paragraphs:** Develop the argument across several paragraphs. Each paragraph should focus on a single idea, supported by evidence, examples, and analysis. Use transitions to ensure a logical flow between ideas.\n\n3. **Conclusion:** Summarize the main points, restate the thesis in light of the evidence presented, and provide a closing thought or call to action.\n\n4. **Tone and Style:** Maintain a formal and academic tone, ensuring clarity and coherence throughout the essay.\n\n5. **Formatting:** Use rich text formatting with headings, bullet points, and citations where necessary.\n\n6. **Word Count:** Aim for approximately 1200 words.",
        category: "Essay",
        icon:essay_writing,
        slug: "generate-essay-content",
        form: [
          {
            label: "Enter your essay topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Provide any specific guidelines or requirements",
            field: "textarea",
            name: "guidelines"
          }
        ]
      },
      {
        name: "Science Experiment Report",
        desc: "AI-Assisted Report for Science Experiments",
        aiPrompt: "You are an AI assistant helping a student write a science experiment report. The experiment is '[Your Experiment Topic, e.g., The Reaction of Baking Soda and Vinegar]'. The report should include:\n\n1. **Title:** Provide a clear and descriptive title.\n\n2. **Abstract:** Summarize the experiment, methods, and results.\n\n3. **Introduction:** Introduce the experiment, including background information and hypothesis.\n\n4. **Materials and Methods:** Detail the materials used and the procedures followed.\n\n5. **Results:** Present the data collected, including any observations, tables, or graphs.\n\n6. **Discussion:** Analyze the results, discuss any discrepancies, and compare with the hypothesis.\n\n7. **Conclusion:** Summarize the findings and suggest future experiments.\n\n8. **Formatting:** Use headings, bullet points, and scientific formatting.",
        category: "Science",
        icon: experiment_report,
        slug: "generate-experiment-report",
        form: [
            {
                label: "Enter your experiment topic",
                name: "topic",
                field: "input",
                required: true
            },
            {
                label: "Provide experiment details",
                name: "details",
                field: "textarea"
            }
        ]
    },
    
      {
        name: "Project Proposal Outline",
        desc: "AI-Assisted Outline for Project Proposals",
        aiPrompt: "You are an AI assistant helping to outline a project proposal for '[Your Project Title, e.g., Developing a New Mobile App]'. The outline should include:\n\n1. **Introduction:** Provide an overview of the project and its objectives.\n\n2. **Background:** Explain the background and context of the project.\n\n3. **Project Goals:** Outline the goals and expected outcomes of the project.\n\n4. **Methodology:** Describe the methods and approaches to be used.\n\n5. **Timeline:** Provide a timeline for the project, including major milestones.\n\n6. **Budget:** Outline the estimated budget and resource requirements.\n\n7. **Conclusion:** Summarize the proposal and its importance.\n\n8. **Formatting:** Use headings and bullet points for clarity.",
        category: "Business",
        icon: project_proposal,
        slug: "generate-project-proposal",
        form: [
            {
                label: "Enter your project title",
                name: "title",
                field: "input",
                required: true
            },
            {
                label: "Provide specific project details",
                name: "details",
                field: "textarea"
            }
        ]
    }
    
      ,
      {
        name: "Lesson Plan Creation",
        desc: "AI-Generated Lesson Plans for Teachers",
        aiPrompt: `
          You are an AI assistant helping a teacher create a detailed lesson plan on the topic '[Your Lesson Topic, e.g., Introduction to Photosynthesis].' 
    
          The lesson plan should include:
    
          1. **Objectives:** Define clear learning objectives for the lesson.
          2. **Materials Needed:** List all materials and resources required for the lesson.
          3. **Introduction:** Suggest an engaging way to introduce the topic and grab students' attention.
          4. **Lesson Activities:** Outline a series of activities or exercises to teach the content, including any group work or hands-on learning opportunities.
          5. **Assessment:** Provide suggestions for assessing student understanding, including any quizzes, assignments, or discussion points.
          6. **Conclusion:** Suggest how to wrap up the lesson and reinforce key takeaways.
          7. **Formatting:** Use clear headings and bullet points to organize the plan.
        `,
        category: "Teaching Resources",
        icon: lesson_plain,
        slug: "generate-lesson-plan",
        form: [
          {
            label: "Enter your lesson topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Specify any materials or resources",
            name: "materials",
            field: "textarea"
          }
        ]
      },
      {
        name: "Personal Statement",
        desc: "AI-Assisted Writing of Personal Statements for Applications",
        aiPrompt: "You are an AI assistant helping a student write a personal statement for [Your Application, e.g., University Admission]. The statement should include:\n\n1. **Introduction:** Provide a compelling introduction about yourself.\n\n2. **Academic Achievements:** Outline your academic achievements and experiences.\n\n3. **Extracurricular Activities:** Discuss your involvement in extracurricular activities and their impact on you.\n\n4. **Goals and Aspirations:** Describe your future goals and how the application aligns with them.\n\n5. **Conclusion:** Summarize your key points and express your enthusiasm for the opportunity.\n\n6. **Formatting:** Use headings and clear paragraphs for readability.",
        category: "Application",
        icon: personal_statement,
        slug: "generate-personal-statement",
        form: [
            {
                label: "Enter the application type",
                name: "application",
                field: "input",
                required: true
            },
            {
                label: "Provide specific details to include",
                name: "details",
                field: "textarea"
            }
        ]
    }
,    
      {
        name: "Career Counseling Guide",
        desc: "AI-Assisted Career Counseling for Students",
        aiPrompt: "You are an AI career counselor helping a student explore potential career paths. The student has the following skills and interests: '[Your Skills and Interests, e.g., strong in math, interested in technology, enjoys problem-solving]'. Based on this information, provide:\n\n1. **Career Suggestions:** Suggest potential careers that align with the student's skills and interests.\n\n2. **Required Education/Certifications:** Outline any necessary education or certifications for each suggested career.\n\n3. **Job Outlook:** Provide an overview of the job outlook and potential growth in these fields.\n\n4. **Additional Resources:** Recommend any resources or steps the student can take to explore these careers further.\n\n5. **Formatting:** Use headings and bullet points for clarity.",
        category: "Career Counseling",
        icon: career_counselling,
        slug: "career-counseling-guide",
        form: [
            {
                label: "Enter your skills and interests",
                name: "skills_interests",
                field: "textarea",
                required: true
            },
            {
                label: "Specify any career areas you're interested in",
                name: "career_interest",
                field: "input"
            }
        ]
    },
    
      {
        name: "Student Meditation Guide",
        desc: "AI-Assisted Meditation Techniques for Students",
        aiPrompt: "You are an AI assistant helping a student with meditation techniques to reduce stress and improve focus. The student is experiencing '[Your Current Challenges, e.g., stress before exams, difficulty focusing, general anxiety]'. Based on this, provide:\n\n1. **Meditation Techniques:** Suggest meditation techniques tailored to the student's challenges.\n\n2. **Guided Meditation:** Offer a short guided meditation script or audio recommendations.\n\n3. **Benefits of Meditation:** Explain the benefits of regular meditation for students.\n\n4. **Daily Routine Suggestions:** Suggest how to incorporate meditation into the student's daily routine.\n\n5. **Formatting:** Use clear headings and bullet points for readability.",
        category: "Wellness",
        icon: meditation_guide,
        slug: "student-meditation-guide",
        form: [
            {
                label: "Describe your current challenges",
                name: "challenges",
                field: "textarea",
                required: true
            }
        ]
    }
,
{
  name: "Music Suggestions for Studying",
  desc: "AI-Assisted Music Recommendations to Enhance Study Sessions",
  aiPrompt: "You are an AI assistant providing music suggestions to help a student focus while studying. The student prefers '[Your Preferred Music Genre, e.g., classical, lo-fi, instrumental]'. Based on this preference, provide:\n\n1. **Music Playlist Suggestions:** Recommend a playlist or specific tracks that are conducive to concentration and focus.\n\n2. **Benefits of This Music:** Explain how this type of music can help improve study efficiency.\n\n3. **Additional Tips:** Offer any additional tips for creating a productive study environment.\n\n4. **Formatting:** Use bullet points for a clear and organized list.",
  category: "Study Tips",
  icon: study_music,
  slug: "study-music-suggestions",
  form: [
      {
          label: "Enter your preferred music genre",
          name: "music_genre",
          field: "input",
          required: true
      }
  ]
}
,{
  name: "Lesson Plan Generator",
  desc: "AI-Assisted Lesson Plan Creation for Teachers",
  aiPrompt: "You are an AI assistant helping a teacher create a comprehensive lesson plan for the topic '[Your Lesson Topic, e.g., Introduction to Fractions]'. The lesson plan should include:\n\n1. **Objectives:** Define the learning objectives for the lesson.\n\n2. **Materials Needed:** List all materials and resources required for the lesson.\n\n3. **Introduction:** Provide a brief introduction to the topic to engage students.\n\n4. **Instructional Activities:** Outline the main activities and teaching methods to be used during the lesson.\n\n5. **Assessment:** Describe how students will be assessed on their understanding of the lesson.\n\n6. **Conclusion:** Summarize the key points and provide a closing activity or reflection.\n\n7. **Timing:** Include estimated time allocations for each section of the lesson plan.\n\n8. **Formatting:** Use headings, bullet points, and clear organization to make the plan easy to follow.",
  category: "Teaching",
  icon: plan,
  slug: "generate-lesson-plan",
  form: [
      {
          label: "Enter your lesson topic",
          name: "topic",
          field: "input",
          required: true
      },
      {
          label: "Provide specific learning objectives",
          name: "objectives",
          field: "textarea"
      }
  ]
}
,
,{
  name: "Historical Event Summary",
  desc: "AI-Generated Summary of Historical Events",
  aiPrompt: "You are an AI assistant helping to summarize a historical event. The event is '[Your Historical Event, e.g., The Fall of the Berlin Wall]'. The summary should include:\n\n1. **Overview:** Provide a brief overview of the event.\n\n2. **Key Details:** Outline the main details and significant moments of the event.\n\n3. **Impact:** Discuss the impact and significance of the event on history.\n\n4. **Conclusion:** Summarize the key points and any lasting effects.\n\n5. **Formatting:** Use headings and bullet points for clarity.",
  category: "History",
  icon: historial_event,
  slug: "summarize-historical-event",
  form: [
      {
          label: "Enter the historical event",
          name: "event",
          field: "input",
          required: true
      }
  ]
}
,
      {
        name: "Quiz Creation",
        desc: "AI-Generated Quizzes for Student Assessment",
        aiPrompt: `
          You are an AI assistant helping a teacher create a quiz on the topic '[Your Quiz Topic, e.g., Basic Algebra].' 
    
          The quiz should include:
    
          1. **Multiple-Choice Questions:** Provide [Specify Number, e.g., 10] multiple-choice questions with four answer options each.
          2. **Short Answer Questions:** Create [Specify Number, e.g., 5] short answer questions to test understanding of key concepts.
          3. **Answer Key:** Include an answer key with correct answers and brief explanations where necessary.
          4. **Formatting:** Organize the quiz with clear instructions, question numbers, and space for students to write their answers.
        `,
        category: "Assessments",
        icon: quiz,
        slug: "generate-quiz",
        form: [
          {
            label: "Enter your quiz topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Specify the number of questions",
            name: "numQuestions",
            field: "input",
            required: true
          }
        ]
      },
      {
        name: "Skill Development Roadmap",
        desc: "AI-Assisted Roadmap for Developing Specific Skills",
        aiPrompt: "You are an AI assistant helping a student create a roadmap to develop a specific skill. The student wants to improve their skills in '[Your Skill, e.g., coding in Python, public speaking, graphic design]'. Provide:\n\n1. **Skill Development Plan:** Outline a step-by-step plan to develop this skill.\n\n2. **Resources and Tools:** Suggest resources (books, courses, websites) that can help the student learn the skill.\n\n3. **Milestones:** Define key milestones to track progress.\n\n4. **Practical Exercises:** Recommend practical exercises or projects to apply the skills.\n\n5. **Formatting:** Use headings, bullet points, and clear steps for organization.",
        category: "Skill Development",
        icon: skil_roadmap,
        slug: "skill-development-roadmap",
        form: [
            {
                label: "Enter the skill you want to develop",
                name: "skill",
                field: "input",
                required: true
            }
        ]
    },
    
      {
        name: "Certification Suggestions Based on Skills",
        desc: "AI-Assisted Certification Recommendations to Enhance Student Market Value",
        aiPrompt: "You are an AI assistant helping a student identify certifications that can enhance their skills and market value. The student has skills in '[Your Skills, e.g., project management, data analysis, cybersecurity]'. Based on this, provide:\n\n1. **Certification Recommendations:** Suggest relevant certifications that align with the student's skills.\n\n2. **Benefits of Each Certification:** Explain how each certification can help improve the student's job prospects and marketability.\n\n3. **Certification Providers:** Recommend trusted organizations or platforms where these certifications can be obtained.\n\n4. **Next Steps:** Provide guidance on how to prepare for these certifications (e.g., study resources, practice exams).\n\n5. **Formatting:** Use clear headings and bullet points for easy reading.",
        category: "Career Advancement",
        icon: cerification_sugguestion,
        slug: "certification-suggestions",
        form: [
            {
                label: "Enter your current skills",
                name: "skills",
                field: "textarea",
                required: true
            }
        ]
    }
,    
      {
        name: "Research Paper Finder",
        desc: "AI-Assisted Research Paper Discovery Based on Provided Topics",
        aiPrompt: "You are an AI assistant that helps students find academic research papers related to their topic of interest. The student has provided the following research topic: '[Research Topic, e.g., climate change impact on agriculture]'. Based on this topic, find and list research papers, articles, and academic resources related to it. Provide:\n\n1. **Research Paper Titles and Authors:** List the titles and authors of relevant research papers.\n\n2. **Links to Papers:** Provide links to access these papers (preferably free or open access).\n\n3. **Abstracts:** Summarize the abstracts or key points of the papers.\n\n4. **Related Keywords:** Suggest additional keywords or subtopics for further research.",
        category: "Academic Research",
        icon: finder,
        slug: "research-paper-finder",
        form: [
            {
                label: "Enter your research topic",
                name: "research_topic",
                field: "textarea",
                required: true
            },
            {
                label: "Optional: Specify any particular focus or sub-topic",
                name: "sub_topic",
                field: "textarea"
            }
        ]
    },
    {
      name: "Interview Preparation Assistance",
      desc: "AI-Assisted Interview Preparation Based on Job Requirements",
      aiPrompt: "You are an AI assistant helping a student prepare for a job interview. The student has provided the following job requirements: '[Paste Job Requirements, e.g., proficiency in JavaScript, experience with React, strong problem-solving skills]'. Based on these requirements, generate:\n\n1. **Potential Interview Questions:** List potential interview questions related to the job requirements.\n\n2. **Suggested Answers:** Provide suggested answers or talking points for each question.\n\n3. **Key Skills to Highlight:** Identify the key skills and experiences the student should emphasize during the interview.\n\n4. **Additional Tips:** Offer any additional tips for interview preparation, such as body language, questions to ask the interviewer, or research to do beforehand.\n\n5. **Formatting:** Use bullet points and clear sections for easy navigation.",
      category: "Interview Preparation",
      icon: interview,
      slug: "interview-preparation-assistance",
      form: [
          {
              label: "Paste the job requirements",
              name: "job_requirements",
              field: "textarea",
              required: true
          },
          {
              label: "Add any specific skills or experiences you want to focus on",
              name: "focus_skills",
              field: "textarea"
          }
      ]
  }
,  
    
      {
        name: "Classroom Management Tips",
        desc: "AI-Generated Classroom Management Strategies for Teachers",
        aiPrompt: `
          You are an AI educational consultant providing a teacher with effective classroom management strategies. The strategies should be tailored to a classroom of [Specify Age Group, e.g., middle school students]. 
    
          The resource should include:
    
          1. **Behavior Management:** Provide techniques for managing disruptive behavior and maintaining a positive classroom environment.
          2. **Engagement Strategies:** Suggest ways to keep students engaged and motivated during lessons.
          3. **Organizational Tips:** Offer advice on organizing classroom materials, time management, and maintaining smooth transitions between activities.
          4. **Communication:** Recommend strategies for clear and effective communication with students and parents.
          5. **Case Studies:** Include brief examples or case studies of successful classroom management practices.
          6. **Formatting:** Use bullet points and headings for easy reference.
        `,
        category: "Classroom Management",
        icon: classroom_management,
        slug: "generate-classroom-management-tips",
        form: [
          {
            label: "Enter the student age group",
            name: "ageGroup",
            field: "input",
            required: true
          },
          {
            label: "Specify any particular challenges or focus areas",
            name: "challenges",
            field: "textarea"
          }
        ]
      },
      {
        name: "Homework Assignment Creation",
        desc: "AI-Generated Homework Assignments for Students",
        aiPrompt: `
          You are an AI assistant helping a teacher create a homework assignment on the topic '[Your Homework Topic, e.g., The Water Cycle].'
    
          The homework assignment should include:
    
          1. **Instructions:** Provide clear instructions on what students need to do.
          2. **Tasks:** Create a set of tasks, such as questions, problems, or short projects that students need to complete.
          3. **Resources:** Suggest any resources or readings that students should use to complete the homework.
          4. **Assessment:** Indicate how the homework will be assessed or graded.
          5. **Formatting:** Use clear formatting with bullet points, headings, and space for student responses.
        `,
        category: "Assignments",
        icon: homework_assignment,
        slug: "generate-homework-assignment",
        form: [
          {
            label: "Enter your homework topic",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Provide any specific instructions or guidelines",
            name: "instructions",
            field: "textarea"
          }
        ]
      },
      {
        name: "Case Study Analysis",
        desc: "AI-Assisted Detailed Analysis and Answers for Law Case Studies",
        aiPrompt: "You are an AI assistant specializing in legal studies. A law student has provided the following case study: '[Paste Case Study Here, e.g., a landmark decision on intellectual property rights].' Based on this case study, provide:\n\n1. **Case Summary:** Summarize the key facts and issues of the case.\n\n2. **Legal Analysis:** Analyze the legal principles and arguments involved in the case. Include references to relevant laws or precedents.\n\n3. **Court Decision:** Explain the court's decision and reasoning. Describe the impact of the decision on legal practice or future cases.\n\n4. **Critical Evaluation:** Offer a critical evaluation of the case, discussing strengths, weaknesses, or implications of the ruling.\n\n5. **Suggestions for Further Research:** Provide suggestions for further reading or research related to the case study.\n\n6. **Formatting:** Use clear headings, bullet points, and concise paragraphs for readability.",
        category: "Legal Studies",
        icon: case_Study,
        slug: "case-study-analysis",
        form: [
            {
                label: "Paste the case study",
                name: "case_study",
                field: "textarea",
                required: true
            },
            {
                label: "Specify any particular focus or questions (optional)",
                name: "focus",
                field: "textarea"
            }
        ]
    }
,    
      {
        name: "Educational Content Translation",
        desc: "AI-Generated Translations of Educational Materials",
        aiPrompt: `
          Translate the following educational content into [Target Language, e.g., Spanish, French, Mandarin]. 
    
          Ensure that the translation is accurate and maintains the original meaning without any further changes or additions.
        `,
        category: "Languages",
        icon: translation,
        slug: "translate-educational-content",
        form: [
          {
            label: "Enter the content to be translated",
            name: "content",
            field: "textarea",
            required: true
          },
          {
            label: "Select the target language",
            name: "language",
            field: "dropdown",
            options: ["Spanish", "French", "Mandarin", "German", "Japanese", "Other"],
            required: true
          },
          {
            label: "Provide any specific translation guidelines (optional)",
            name: "guidelines",
            field: "textarea"
          }
        ]
      },
      {
        name: "Creative Story Writing",
        desc: "AI-Assisted Story Creation for Students to Enhance Narrative Skills",
        "aiPrompt": "You are an AI creative writing assistant helping a student generate a unique and engaging story. Guide them in crafting a narrative based on the following prompts and requirements:\n\n1. **Story Prompt:** Provide a creative writing prompt to inspire the story. The prompt can be based on a theme or genre like fantasy, adventure, or mystery. Example: 'A young explorer discovers a hidden portal in the forest that leads to a parallel world.'\n\n2. **Characters:** Create interesting characters, providing details about their personalities, backgrounds, and motivations.\n\n3. **Setting:** Describe the setting of the story, including time, place, and atmosphere. Encourage vivid descriptions that bring the world to life.\n\n4. **Plot Structure:** Outline the basic plot structure with a clear beginning, middle, and end. Include key events and conflicts that drive the narrative forward.\n\n5. **Dialogue:** Provide examples of dialogue between characters to enhance the story's realism and develop character relationships.\n\n6. **Conclusion:** Suggest a compelling ending that resolves the main conflict or leaves the reader with something to think about.\n\n7. **Tone and Style:** Encourage the use of a tone and style appropriate to the genre, whether it’s whimsical for a fantasy story or suspenseful for a mystery.\n\n8. **Length:** Aim for a story of approximately 1000-1500 words, allowing for a fully developed narrative.",
        category: "Creative Writing",
        icon: story,
        slug: "generate-creative-story",
        form: [
          {
            label: "Select a genre or theme",
            name: "genre",
            field: "dropdown",
            options: ["Fantasy", "Adventure", "Mystery", "Science Fiction", "Historical Fiction", "Other"],
            required: true
          },
          {
            label: "Enter a story prompt (optional)",
            name: "prompt",
            field: "textarea"
          }
        ]
      },
     
      {
        name: "Professional Development Content",
        desc: "AI-Generated Professional Development Resources for Educators",
        aiPrompt: "You are an AI educational consultant assisting educators in creating comprehensive professional development content. Your task is to develop a resource that keeps educators updated on the latest teaching strategies, trends, and tools. The content should include:\n\n1. **Introduction:** Provide an overview of the importance of continuous professional development for educators and what they can expect to learn from this resource.\n\n2. **Latest Teaching Strategies:** Summarize the most recent and effective teaching strategies, such as differentiated instruction, flipped classrooms, and blended learning. Include examples of how these strategies can be applied in the classroom.\n\n3. **Emerging Trends:** Discuss current trends in education, such as the integration of technology in teaching, personalized learning, and the importance of social-emotional learning (SEL). Highlight how these trends are shaping the future of education.\n\n4. **New Tools and Technologies:** Introduce new tools, apps, and platforms that are revolutionizing teaching and learning. Provide a brief description of each tool, its benefits, and suggestions on how educators can incorporate it into their teaching practices.\n\n5. **Case Studies and Best Practices:** Include case studies or examples of schools and educators successfully implementing these strategies and tools. Share best practices and lessons learned from these examples.\n\n6. **Conclusion:** Summarize the key takeaways and encourage educators to explore further resources or training to deepen their understanding and application of these new strategies and tools.\n\n7. **Formatting:** Use clear headings, bullet points, and practical examples to make the content easy to follow and actionable.",
        category: "Professional Development",
        icon:development,
        slug: "create-professional-development-content",
        form: [
          {
            label: "Enter the specific topic or focus area",
            name: "topic",
            field: "input",
            required: true
          },
          {
            label: "Provide any specific guidelines or objectives (optional)",
            name: "guidelines",
            field: "textarea"
          }
        ]
      }
          
]
export const NEWCOLLECTION2: TSUBCARDDATA[] = [
  {
    title: "Research Paper Finder",
    thumbnail:finder,
    description:
      " AI-Assisted Research Paper Discovery Based on Provided Topics",
  },

  {
    title: "Certification Suggestions Based on Skills",
    thumbnail:cerification_sugguestion ,
    description:
      "AI-Assisted Certification Recommendations to Enhance Student Market Value",
  },
  {
    title: "Student Meditation Guide",
    thumbnail: meditation_guide,
    description:
      "AI-Assisted Meditation Techniques for Students",
  },
];

export  const copyToClipboard = (content:string) => {
  navigator.clipboard.writeText(content).then(() => {
    alert('Text copied to clipboard!');
  }).catch((err) => {
    console.error('Failed to copy text: ', err);
  });
};


export enum PATHS {
  HOME = "/",
  ABOUTUS = "/about-us",
  CONTACT = "/contact-us",
  FAQ = "/faq",
  TERMCONDITION = "/term&condition",
  FEATURES = "/features",
  FACEBOOK = "https://www.facebook.com/",
  TWITTER = "https://twitter.com/",
  LINKEDIN = "https://www.linkedin.com/",
  EMAIL = "",

}

export const NAVITEMS: TNAVIITEM[] = [
  {
    title: "Home",
    to: PATHS.HOME,
  },
  {
    title: "Contact Us",
    to: PATHS.CONTACT,
  },
];


export const SERVICES: TSERVICE[] = [
  {
    heading: "Customizable and User-Friendly Experience",
    image:  user_friendly,
  },
  {
    heading: "Versatile Templates for Any Need",
    image: templates,
  },
  {
    heading: "Integrated Wellness and Productivity Tools",
    image: wellness
  },
];


export const FAQS : TFAQS[] = [
  {
    question:
      "What is ALCademy?",
    answer:
      "AlCademy is a platform that provides customizable AI prompt templates, mental health resources, study music, and teaching support. It’s designed to enhance the educational experience for both students and teachers.",
  },
  {
    question:
      "What kind of teacher resources are available?",
    answer:
      "We offer a range of resources for teachers, including lesson planning templates, classroom management tools, and other aids to support effective teaching and enhance the learning experience.",
  },
  {
    question:
      "What mental health resources do you offer?",
    answer:
      "We provide access to professional counselors, self-help tools, and guided meditation practices to support students in managing stress and maintaining mental well-being.",
  },
  {
    question:
      "How can the prompt templates help me?",
    answer:
      "Our prompt templates streamline your interactions with AI chatbots, ensuring you receive accurate and relevant responses quickly. They are designed to save time and improve the efficiency of your AI communications.",
  },
  
];


export const NEWCOLLECTION: TSUBCARDDATA[] = [
  {
    title: "Professional Development Content",
    thumbnail:development,
    description:
      " AI-Generated Professional Development Resources for Educators",
  },

  {
    title: "Educational Content Translation",
    thumbnail:translation ,
    description:
      "AI-Generated Translations of Educational Materials",
  },
  {
    title: "Interview Preparation Assistance",
    thumbnail: interview,
    description:
      "AI-Assisted Interview Preparation Based on Job Requirements",
  },
];

export  const redirectToURL = () => {
    window.location.href = '/dashboard'
  }