import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  features: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: "智能优化简历",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        简历不是模板堆砌，而是个人能力的"产品包装"
      </>
    ),
    features: [
      "智能体检：自动识别结构漏洞、表达不清等问题",
      "内容医生：逐段生成优化建议，提升专业度",
      "项目工坊：基于STAR法则生成项目经历"
    ]
  },
  {
    title: "一键AI投递岗位",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        投递不该是盲目海投，而是精准高效的"机会匹配"
      </>
    ),
    features: [
      "支持对接Boss直聘，智能匹配岗位",
      "自动投递，无需手动筛选",
      "模拟猎头操作，提升曝光率与被查看率"
    ]
  },
  {
    title: "AI模拟面试",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        面试不只是随机发挥，更是训练可提升的"表达技巧"
      </>
    ),
    features: [
      "多轮交互式问答，模拟真实面试流程",
      "实时反馈表达优劣，给出结构化建议",
      "助力面试表达力进阶"
    ]
  },
];

function Feature({title, Svg, description, features}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">🚀 核心功能</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
