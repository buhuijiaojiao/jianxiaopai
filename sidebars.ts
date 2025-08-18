import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "upgrade-announcement",
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
    "hunter-feature",
  ],
};

export default sidebars;
