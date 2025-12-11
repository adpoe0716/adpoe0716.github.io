import { Experience, Project, Skill, Certification, Education } from './types';
import { Code, Database, Layout, Brain, Terminal, Server } from 'lucide-react';
import React from 'react';

export const PROFILE = {
  name: "周庭安",
  englishName: "Ting-An Zhou",
  title: "全端軟體工程師 | AI 應用開發",
  email: "bobi.bboi@gmail.com",
  phone: "0968930679",
  github: "https://github.com/adpoe0716",
  location: "New Taipei, Taiwan",
  about: "畢業於國立聯合大學資訊管理學系，具備前後端全端開發能力的軟體工程師。曾經使用 Vue.js、React.js 等前端框架以及 ASP.NET、Python Flask、Node.js 進行後端開發經驗。擁有敏捷開發 (Scrum) 實務經驗，實作過 OpenAI API 與 LangChain/LlamaIndex 開發 AI 應用與自動化工具。曾於實習期間開發企業級招募系統，並於畢業專題中結合 AI 技術實作 ESG 永續魚塭管理資訊系統。"
};

export const SKILLS: Skill[] = [
  { name: "Vue.js", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "ASP.NET", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python (Flask)", category: "Backend" },
  { name: "MSSQL / MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "OpenAI API", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "LlamaIndex", category: "AI" },
  { name: "Git & GCP", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Postman", category: "Tools" },
];

export const SKILL_ICONS = {
  Frontend: <Layout className="w-5 h-5" />,
  Backend: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  AI: <Brain className="w-5 h-5" />,
  Tools: <Terminal className="w-5 h-5" />,
};

export const EXPERIENCES: Experience[] = [
  {
    company: "新加坡商鈦坦科技 (TITANSOFT PTE LTD)",
    role: "產品開發實習生 (Product Developer Intern)",
    period: "2025.02 - 2025.06",
    location: "台北, 台灣",
    techStack: ["Vue.js", "ASP.NET", "TypeScript", "TailwindCSS", "MSSQL", "Element UI"],
    description: [
      "敏捷開發實踐：採用 Scrum 框架與 Kanban 方法，透過結對程式設計 (Pair Programming) 進行協作，達成每週迭代的持續交付目標。",
      "人資招募系統開發：參與開發「Campus Recruit」系統與校園履歷表單。",
      "透過數位化整合履歷收取、資料整理、篩選候選人至面試邀約的流程，大幅提升 HR 審閱與招募效率。"
    ],
    reflection: "在鈦坦科技的這段時間，最大的收穫不僅是技術上的精進，更是對「敏捷思維」的深刻體悟。透過每日的 Stand-up meeting 和結對程式設計，我學會了如何高效溝通以及在團隊中擁抱變化。我們不再只是埋頭寫程式，而是不斷思考如何為使用者創造最大價值。這段經歷讓我明白，優秀的軟體工程師不只要會寫 Code，更要懂得如何協作與解決真正的問題。"
  },
  {
    company: "思客數據 (SEEKERSDATA / THINKER'S CAFE)",
    role: "技術人員 (Technology Associate)",
    period: "2024.06 - 2025.02",
    location: "苗栗, 台灣",
    techStack: ["Python", "Flask", "MongoDB", "GCP", "Slack API", "OpenAI API", "React.js"],
    description: [
      "自動化流程開發：開發 Slack 機器人（部署於 GCP Compute Engine），串接 OpenAI API 自動生成摘要報告並執行排程提醒，實現內部匯報自動化。",
      "RAG 知識庫建置：設計並製作檢索增強生成 (RAG) 知識庫原型，整合聊天記錄與圖像數據，實現高準確度的語意搜索功能。",
      "技術品牌經營：管理團隊 Instagram 技術頻道，分享 AI 工具應用與開發見解。"
    ],
    reflection: "這是我第一次將 AI 技術實際落地到商業場景中。從零開始建置 RAG 知識庫的過程充滿挑戰，尤其是在調整 Prompt 和處理資料清洗的部分。看到自己開發的自動化工具能為團隊節省大量重複性工作的時間，那種成就感是無可比擬的。這份工作也培養了我獨立解決問題的能力，以及如何快速學習新技術（如 LangChain）並應用到專案中。"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "政黨傾向分辨器 (Political Leaning Classifier)",
    period: "2024",
    description: "基於 NLP 技術的政治傾向分析工具",
    techStack: ["Python", "Transformers (BERT)", "Scikit-learn", "FastAPI", "Pandas"],
    image: "https://picsum.photos/seed/politics/600/400",
    details: [
      "利用自然語言處理 (NLP) 技術，分析文本內容並預測其政治傾向（如：偏藍、偏綠、中立）。",
      "使用 Transformer 架構（BERT）進行模型微調訓練，提升對台灣政治語境的理解準確度。",
      "資料前處理：包含繁體中文斷詞、去除停用詞與資料增強。",
      "部署為 RESTful API，可供前端或其他應用程式串接即時分析。"
    ]
  },
  {
    title: "ESG：台灣水產養殖淨零路徑",
    period: "2023.06 - 2025.01",
    description: "畢業專題 - 結合 IoT 與 GenAI 的永續魚塭管理系統",
    techStack: ["React", "Node.js", "Flask", "MySQL", "LangChain", "OpenAI API", "Ant Design"],
    image: "https://picsum.photos/seed/fishfarm/600/400",
    details: [
      "即時監控儀表板：結合模擬 IoT 感測器數據（水溫、pH值、溶氧量等），利用 React 與 Ant Design 打造低延遲儀表板。",
      "可視化數據：以雷達圖與熱力圖視覺化水質與藻類分佈。",
      "RAG 知識庫與 AI 助理：實作 LangChain 與 LlamaIndex 進行每月碳排放分析，並提供 Line Bot 形式的養殖知識問答。"
    ]
  },
  {
    title: "Campus Recruit 人資招募系統",
    period: "2025.02 - 2025.06",
    description: "鈦坦科技實習專案 - 企業級招募流程管理",
    techStack: ["Vue.js", "ASP.NET", "TypeScript", "TailwindCSS", "MSSQL"],
    image: "https://picsum.photos/seed/campus/600/400",
    details: [
      "解決手動處理履歷的痛點，整合資料收集、篩選到面試邀約。",
      "開發校園履歷投遞表單與後台管理介面。",
      "高併發下的資料一致性處理與權限控管。"
    ]
  },
  {
    title: "工程建案管理系統",
    period: "2022.06 - 2023.01",
    description: "營建專案管理平台",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "https://picsum.photos/seed/construction/600/400",
    details: [
      "建置營建專案管理平台，包含專案增刪查改 (CRUD)。",
      "實作日誌追蹤以及進度排程管理功能，協助業主數位化管理工地進度。"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "全國技能競賽 - 機器人職類 (北區分賽) 佳作" },
  { name: "數位電子乙級技術士證" },
  { name: "電腦軟體設計丙級技術士證" },
  { name: "電腦軟體應用丙級技術士證" },
  { name: "電腦硬體裝修丙級技術士證" },
  { name: "網路架設丙級技術士證" },
  { name: "工業電子丙級技術士證" }
];

export const EDUCATION: Education = {
  school: "國立聯合大學 (National United University)",
  degree: "資訊管理學系 學士 (B.B.A. in Information Management)",
  major: "資訊管理",
  period: "Sept. 2021 - June 2025",
  location: "苗栗, 台灣"
};