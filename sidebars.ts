import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // 升级公告相关文档
    'intro',
    // 自动投递脚本文档
    'autosend',
    // Offer猎手
    'offer-hunter',
    // 简历创建
    'create-resume',

    {
      type: 'category',
      label: '💡 如何优化简历',
      link: {
        type: 'generated-index',
        slug: '/optimize-resume',
        title: '如何优化简历',
        description: '通过三种强大的AI工具，让你的简历更出彩：简历诊断、项目工坊、小派优化。',
      },
      collapsed: false, // 默认展开
      className: 'optimize-section', // 可自定义样式
      items: [
        {
          type: 'doc',
          id: 'optimize-resume/resume-diagnosis',
          label: '🩺 简历诊断',
        },
        {
          type: 'doc',
          id: 'optimize-resume/project-workshop',
          label: '🧩 项目工坊',
        },
        {
          type: 'doc',
          id: 'optimize-resume/xiaopai-optimization',
          label: '🤖 小派优化',
        },
      ],
    },
  ],
};

export default sidebars;
