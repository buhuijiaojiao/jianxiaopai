import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // 升级公告相关文档
    "upgrade-announcement",
    // 简历相关文档
    "create-resume",
    {
      type: "category",
      label: "如何优化简历",
      link: {
        type: "generated-index",
        slug: "/optimize-resume",
        description: "💡 我们提供了三种工具来优化简历",
      },
      collapsed: true,
      items: [
        "optimize-resume/smart-physical-examination",
        "optimize-resume/content-doctor",
        "optimize-resume/project-workshop",
      ],
    },
    // 小派猎头相关文档
    "hunter-feature",
    // 简小鉴相关文档
    "jianxiaojian-guide",
    // 职小派相关文档
    "zhixiaopai-preview",
    "zhixiaopai-guide",
    // 邀请码相关文档
    "invitation-code-guide",
    // 投递邀请码相关文档
    "delivery-invitation-code-guide",
    // 重置密码相关文档
    "reset-password",
    //简小派积分等级机制相关文档
    "level-system"
  ],
};

export default sidebars;
