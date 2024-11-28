import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Connect the Dots',
    Svg: require('@site/static/img/mindmap.svg').default,
    description: (
      <>
        Store and organize your chain of questions in a mindmap
      </>
    ),
  },
  {
    title: 'AI Powered Evaluation',
    Svg: require('@site/static/img/aidar1.svg').default,
    description: (
      <>
        Get feedback on your answers with AI powered evaluation
      </>
    ),
  },
  {
    title: 'Share your work',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        Share your mindmap with others to get feedback
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
