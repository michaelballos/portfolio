import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useStyles } from "./Layout.styles";
import { headerLinks, footerLinks } from "../../../common/links";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <div className="layout">
      <Header links={headerLinks} />
        <main className={classes.pageMargin}>
          {children}
        </main>
      <Footer data={footerLinks} />
    </div>
  );
}
