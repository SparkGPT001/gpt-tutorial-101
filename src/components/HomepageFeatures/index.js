import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '文档不是什么',
    // Svg: require('@site/static/img/xxx.svg').default,
    description: (
      <>
        不是个“游戏攻略”：
        如果你是一个纯粹的玩家，也不关心 ChatGPT 的是什么、为什么和能干什么，那么这个文档可能不太适合你。
        不是个代码教学教程：
        如果你是正在寻找一个本地部署大语言模型的代码教程，那么这个教程同样可能也帮不到你。
      </>
    ),
  },
  {
    title: '社区招募',
    // Svg: require('@site/static/img/xxx.svg').default,
    description: (
      <>
        目标做成至少在中文互联网里质量最高、最详细的 ChatGPT 文档，但由于我们团队的几位作者终究是时间有限，我们希望更多的有志之士能够加入我们和我们一起做这个文档。如果你对 ChatGPT 这件事情很感兴趣并且每周能固定拿出 3 小时以上投入到文档里，我们诚挚邀请你加入我们。
      </>
    ),
  },
  {
    title: '为什么要建立社区？',
    // Svg: require('@site/static/img/xxx.svg').default,
    description: (
      <>
        ChatGPT 到来席卷了整个学界、产业界、也可预见地将改变所有普通人的生活。尽管目前而言中文世界的 GPT 技术落后于 OpenAI 许多，也因为墙等各种因素，我们难以直接获取优质的资讯和学习材料，我们希望通过建立学习文档和社区帮助所有中文使用者更快地用 AI 改善生活和工作。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
