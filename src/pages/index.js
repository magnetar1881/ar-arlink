import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";


const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../svg/arlink.svg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="ARlink Logo"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Welcome to <b>ARlink</b></h1>
      <p className={styles.intro}>
        Deploy your React or Next.js apps permanently on Arweave with ease.
      </p>
     
    </div>
  </Layout>
);

export const Head = () => <Seo title="ARlink - Deploy Permanently" />;

export default IndexPage;
