import { Experience, Project, Skill, Certification, Education } from './types';
import { Database, Layout, Brain, Terminal, Server } from 'lucide-react';
import React from 'react';

export const PROFILE = {
  name: "周庭安",
  englishName: "Ting-An Zhou",
  title: "全端軟體工程師",
  email: "bobi.bboi@gmail.com",
  phone: "0968930679",
  github: "https://github.com/adpoe0716",
  location: "New Taipei, Taiwan",
  about: "畢業於國立聯合大學資訊管理學系，具備前後端全端開發能力的軟體工程師。曾經使用 Vue.js、React.js 等前端框架以及 ASP.NET、Python Flask、Node.js 進行後端開發經驗。擁有敏捷開發 (Scrum) 實務經驗，實作過 OpenAI API 與 LangChain/LlamaIndex 開發 AI 應用與自動化工具。曾於實習期間開發企業級招募系統，並於畢業專題中結合 AI 技術實作 ESG 永續魚塭管理資訊系統。",
  avatar: "img/Professional.jpg" // Added avatar path
};

export const SKILLS: Skill[] = [
  { name: "Vue.js", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "ASP.NET", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python (Flask)", category: "Backend" },
  { name: "MSSQL / MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "OpenAI API", category: "AI" },
  { name: "Stable Diffusion", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "LlamaIndex", category: "AI" },
  { name: "Git", category: "Tools" },
  { name: "OOGLE GCP", category: "Tools" },
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
    reflection: `遙想半年前面試時，我其實不抱太大的希望。當初收到錄取通知時，還心想這間公司怎麼會選上我？開玩笑地懷疑是不是標準不高？而這半年的實習徹底顛覆了我的想像，這或許是我大學生涯中，進步最神速的一段時光。

在鈦坦的這半年，我深刻體認到「業界的開發模式」遠不只是寫好程式碼而已。除了技術工具的精進，我學到了更多關於軟體工程的全貌：從開發週期的規劃、商業價值的權衡、與組員的溝通協作，到使用者需求訪談以及敏捷開發（Agile）的實踐。

而鈦坦教給我的，遠不止於硬實力。這裡「快樂工作」的氛圍、鼓勵我們「勇於表達」的文化，以及 Senior 們開放的思維模式，都是我過去不曾觸及的領域。我也在這裡結交了許多優秀的夥伴，包括來自其他學校的實習夥伴，以及業界內部的資深前輩等等。

非常感謝這段經歷，讓我從一個單純的學生，轉變為能從更宏觀的角度理解軟體產業的開發者。`,
    image: "img/titansoft.jpg"
  },
  {
    company: "稀客數據/思考者咖啡 (SEEKERSDATA / THINKER'S CAFE)",
    role: "技術人員 (Technology Associate)",
    period: "2024.06 - 2025.02",
    location: "苗栗, 台灣",
    techStack: ["Python", "Flask", "MongoDB", "GCP", "Slack API", "OpenAI API", "React.js"],
    description: [
      "自動化流程開發：開發 Slack 機器人（部署於 GCP Compute Engine），串接 OpenAI API 自動生成摘要報告並執行排程提醒，實現內部匯報自動化。",
      "RAG 知識庫建置：設計並製作檢索增強生成 (RAG) 知識庫原型，整合聊天記錄與圖像數據，實現高準確度的語意搜索功能。",
      "技術品牌經營：管理團隊 Instagram 技術頻道，分享 AI 工具應用與開發見解。"
    ],
    reflection: `這是我第一次正式踏入科技產業工作。能加入這間充滿活力的新創公司，對我的職業生涯起步幫助極大。

在新創環境中，除了感謝老闆與前輩工程師在技術上的悉心指導外，最讓我印象深刻的是團隊間「高強度的思維碰撞」。在這樣的氛圍下，我學到最有價值的技能並非單一的程式語言，而是「如何快速掌握一項新技術」並將其轉化為「快速落地產品」的執行力。

此外，這裡的機會無處不在。我見識到了各種奇思妙想，工作內容也跨出了單純的程式開發。我有機會參與系統規劃，接觸到自媒體經營等多元內容。這段經歷讓我明白，身為工程師也能擁有多元視角，這次實習實在獲益良多。`,
    image: "img/Thinker.png"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "政黨傾向分辨器",
    period: "2024",
    description: "基於 NLP 技術的政治傾向分析工具",
    techStack: ["Python", "Logistic Regression","Pandas"],
    images: ["img/python.png"],
    details: [
      "選取四個具有代表性的側翼粉專，利用自然語言處理 (NLP) 技術，分析文本內容並預測其政治傾向（如：偏藍、偏綠）。",
      "使用羅吉斯回歸模型（Logistic Regression）訓練並驗證，準確率良好後完成模型建構",
      "資料前處理：包含繁體中文斷詞、去除停用詞與資料增強。",      
    ]
  },
  {
    title: "ESG：台灣水產養殖淨零路徑",
    period: "2023.06 - 2025.01",
    description: "畢業專題 - 結合模擬 IoT 與ESG策略的永續魚塭管理系統",
    techStack: ["React", "Node.js", "Flask", "MySQL", "LangChain", "OpenAI API", "Ant Design"],
    images: ["img/f1.png","img/f2.png","img/15.png","img/f3.png","img/f4.png","img/f5.png","img/f6.png","img/f7.png","img/20.png","img/21.png","img/24.png"],
    details: [
      "即時監控儀表板：結合模擬 IoT 感測器數據（水溫、pH值、溶氧量等），利用 React 與 Ant Design 打造低延遲儀表板。",
      "可視化數據：以雷達圖與熱力圖視覺化水質與藻類分佈。",
      "RAG 知識庫與 AI 助理：實作 LangChain 與 LlamaIndex 進行每月碳排放分析，並提供 Line Bot 形式的養殖知識問答。",
      `作為大學畢業專題，我主導開發了一套以ESG原則為核心的淨零養殖管理系統。系統透過自動化數據模擬引擎，持續注入水溫、pH 值、溶氧、鹽度、用電與碳排等關鍵指標；並以 React + Ant Design 打造即時響應式儀表板，確保資料延遲低於 5 秒。後端採用 Node.js RESTful API 與排程腳本，實現高可用的 ETL 流程；AI 模組則結合 GPT-4o、LangChain 及 LlamaIndex，提供即時問答與自動報表生成功能，大幅縮短報告製作時間。專題期間，我與指導教師及同儕緊密協作，快速迭代功能與 UI/UX，並在校內展示中獲得高度肯定，充分展現技術整合與跨領域合作能力。`
    ]
  },
  {
    title: "Campus Recruit 人資招募系統",
    period: "2025.02 - 2025.06",
    description: "鈦坦科技實習專案 - 企業級招募流程系統",
    techStack: ["Vue.js", "ASP.NET", "TypeScript", "TailwindCSS", "MSSQL"],
    images: ["img/ca1.png","img/ca2.png","img/ca3.png","img/ca4.png"],
    details: [
      "解決手動處理履歷的痛點，整合資料收集、篩選到面試邀約。",
      "開發校園履歷投遞表單與後台管理介面。",
      "高併發下的資料一致性處理與權限控管。"
    ]
  },
  {
    title: "工程建案管理系統",
    period: "2022.06 - 2023.01",
    description: "工程進度管理平台",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    images: ["img/case3.png","img/case2.png","img/case1.png"],
    details: [
      "建置營建專案管理平台，包含專案增刪查改 (CRUD)。",
      "實作日誌追蹤以及進度排程管理功能，協助業主數位化管理工地進度。"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "全國技能競賽 - 機器人職類 (北區分賽) 佳作", type: "award" },
  { name: "Innoserve 校內初審第二名", type: "award" },
  { name: "數位電子乙級技術士證", type: "certification" },
  { name: "電腦軟體設計丙級技術士證", type: "certification" },
  { name: "電腦軟體應用丙級技術士證", type: "certification" },
  { name: "電腦硬體裝修丙級技術士證", type: "certification" },
  { name: "網路架設丙級技術士證", type: "certification" },
  { name: "工業電子丙級技術士證", type: "certification" }
];

export const EDUCATION: Education = {
  school: "國立聯合大學 (National United University)",
  degree: "資訊管理學系 學士 (B.B.A. in Information Management)",
  major: "資訊管理",
  period: "Sept. 2021 - June 2025",
  location: "苗栗, 台灣"
};