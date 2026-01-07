import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CloudEngineering from './pages/CloudEngineering';
import AIAutomation from './pages/AIAutomation';
import ProductUXDesign from './pages/ProductUXDesign';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import ConsultingMentoring from './pages/ConsultingMentoring';
import GraphicDesign from './pages/GraphicDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import ContentWriting from './pages/ContentWriting';
import AISolution from './pages/AISolution';
import AIAgentsDevelopment from './pages/AIAgentsDevelopment';
import CustomAISolutions from './pages/CustomAISolutions';
import AIChatbotIntegration from './pages/AIChatbotIntegration';
import CustomRAGModels from './pages/CustomRAGModels';
import AIPoweredAutomation from './pages/AIPoweredAutomation';
import WorkflowAutomationRPA from './pages/WorkflowAutomationRPA';
import Training from './pages/Training';
import Bootcamps from './pages/Bootcamps';
import WebDevelopmentBootcamp from './pages/WebDevelopmentBootcamp';
import CloudEngineeringBootcamp from './pages/CloudEngineeringBootcamp';
import AIBootcamp from './pages/AIBootcamp';
import FDPs from './pages/FDPs';
import ModernTeachingMethods from './pages/ModernTeachingMethods';
import ModernDevelopmentTools from './pages/ModernDevelopmentTools';
import ProjectIntegration from './pages/ProjectIntegration';
import SQLInternship from './pages/SQLInternship';
import PythonInternship from './pages/PythonInternship';
import WebsiteDevelopmentInternship from './pages/WebsiteDevelopmentInternship';
import UIUXInternship from './pages/UIUXInternship';
import GraphicDesignInternship from './pages/GraphicDesignInternship';
import Contact from './pages/Contact';
import VideoEditingProduction from './pages/VideoEditingProduction';
import DataScienceInternship from './pages/DataScienceInternship';
import QualityAssuranceInternship from './pages/QualityAssuranceInternship';
const App = () => {
  return (
    <Layout>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/services/product-ux-design" element={<ProductUXDesign />} />
  <Route path="/services/application-development" element={<ApplicationDevelopment />} />
  <Route path="/services/consulting-mentoring" element={<ConsultingMentoring />} />
  <Route path="/services/graphic-design" element={<GraphicDesign />} />
  <Route path="/services/website-development" element={<WebsiteDevelopment />} />
  <Route path="/services/content-writing" element={<ContentWriting />} />
  <Route path="/services/ai-solutions" element={<AISolution />} />
  <Route path="/services/cloud" element={<CloudEngineering />} />
  <Route path="/services/ai" element={<AIAutomation />} />
  <Route path="/services/ai-agents-development" element={<AIAgentsDevelopment />} />
  <Route path="/services/custom-ai-solutions" element={<CustomAISolutions />} />
  <Route path="/services/ai-chatbot-integration" element={<AIChatbotIntegration />} />
  <Route path="/services/custom-rag-models" element={<CustomRAGModels />} />
  <Route path="/services/ai-powered-automation" element={<AIPoweredAutomation />} />
  <Route path="/services/workflow-automation-rpa" element={<WorkflowAutomationRPA />} />
  <Route path="/training" element={<Training />} />
  <Route path="/training/bootcamps" element={<Bootcamps />} />
  <Route path="/training/bootcamps/web-development" element={<WebDevelopmentBootcamp />} />
  <Route path="/training/bootcamps/cloud-engineering" element={<CloudEngineeringBootcamp />} />
  <Route path="/training/bootcamps/ai" element={<AIBootcamp />} />
  <Route path="/training/fdps" element={<FDPs />} />
  <Route path="/training/fdps/modern-teaching-methods" element={<ModernTeachingMethods />} />
  <Route path="/training/fdps/modern-development-tools" element={<ModernDevelopmentTools />} />
  <Route path="/training/fdps/project-integration" element={<ProjectIntegration />} />
  <Route path="/training/internships/sql-internship" element={<SQLInternship />} />
  <Route path="/training/internships/python-internship" element={<PythonInternship />} />
  <Route path="/training/internships/website-development-internship" element={<WebsiteDevelopmentInternship />} />
  <Route path="/training/internships/ui-ux-internship" element={<UIUXInternship />} />
  <Route path="/training/internships/graphic-design-internship" element={<GraphicDesignInternship />} />
  <Route path="/services/video-editing-production" element={<VideoEditingProduction />} />
  <Route path="/training/internships/data-science-internship" element={<DataScienceInternship />} />
  <Route path="/training/internships/quality-assurance-internship" element={<QualityAssuranceInternship />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

    </Layout>
  );
};

export default App;
