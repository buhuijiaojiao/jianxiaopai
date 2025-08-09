import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './donors.module.css';

type DonorItem = {
  name: string;
  amount: number;
  description?: string;
  date?: string;
};

const donorList: DonorItem[] = [
  {
    name: '刘亚',
    amount: 9000,
    description: '4核8G服务器一台',
  },
  {
    name: '黄同学',
    amount: 500,
  },
  {
    name: '刘仙',
    amount: 500,
  },
  {
    name: '薛纳',
    amount: 500,
  },
  {
    name: '666同学',
    amount: 150,
  },
  {
    name: '程楷',
    amount: 369,
  },
  {
    name: '王坤',
    amount: 200,
    description: '腾讯会议会员3个月',
  },
  {
    name: '一只小白鸽',
    amount: 200,
  },
  {
    name: '徐文',
    amount: 100,
  },
  {
    name: '宋建华',
    amount: 50,
    description: '1000w token',
  },
  {
    name: '林同学',
    amount: 36,
  },
  {
    name: '沙漠',
    amount: 20,
  },
  {
    name: '魏同学',
    amount: 20,
  },
  {
    name: '不愿透露姓名同学',
    amount: 40,
  },
  {
    name: '老猫',
    amount: 30,
    description: '社区日常维护',
  },
  {
    name: '张同学',
    amount: 5,
  },
  {
    name: '吴同学',
    amount: 15,
  },
  {
    name: '陈应元',
    amount: 0,
    description: '一杯星巴克咖啡',
  },
  {
    name: 'cute同学',
    amount: 0,
    description: '设计的logo一份',
  },
];

// 按金额排序（从高到低）
const sortedDonors = donorList.sort((a, b) => b.amount - a.amount);

function DonorCard({donor}: {donor: DonorItem}) {
  return (
    <div className={styles.donorCard}>
      <div className={styles.donorInfo}>
        <h3 className={styles.donorName}>{donor.name}</h3>
        {donor.description && (
          <p className={styles.donorDescription}>{donor.description}</p>
        )}
      </div>
      <div className={styles.donorAmount}>
        {donor.amount > 0 ? `¥${donor.amount}` : '特别捐赠'}
      </div>
    </div>
  );
}

export default function Donors(): ReactNode {
  const totalAmount = donorList.reduce((sum, donor) => sum + donor.amount, 0);
  
  return (
    <Layout
      title="捐献榜 - 简小派"
      description="感谢所有支持简小派的用户，你们的每一份捐赠都是我们前进的动力">
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <Heading as="h1" className={styles.title}>
              捐献榜
            </Heading>
            <p className={styles.subtitle}>
              感谢所有支持简小派的用户，你们的每一份捐赠都是我们前进的动力
            </p>
            <div className={styles.totalAmount}>
              总捐赠金额：<span className={styles.amount}>¥{totalAmount.toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.donorsGrid}>
            {sortedDonors.map((donor, index) => (
              <DonorCard key={index} donor={donor} />
            ))}
          </div>

          <div className={styles.thanksSection}>
            <h2>特别感谢</h2>
            <p>
              感谢每一位支持简小派的用户，无论是金钱捐赠、技术支持还是精神鼓励，
              都是我们继续前进的动力。我们会用这些资源来：
            </p>
            <ul>
              <li>持续优化AI算法，提供更好的服务</li>
              <li>扩展服务器资源，提升用户体验</li>
              <li>开发新功能，满足更多用户需求</li>
              <li>维护社区运营，创造更好的交流环境</li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h2>联系我们</h2>
            <p>
              如果你想支持简小派的发展，欢迎通过以下方式联系我们：
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>QQ群：</strong>1043216521
              </div>
              <div className={styles.contactItem}>
                <strong>官网：</strong>
                <a href="http://8.153.173.210:5173" target="_blank" rel="noopener noreferrer">
                  http://8.153.173.210:5173
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 