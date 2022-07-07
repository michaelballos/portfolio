import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useStyles } from "./Layout.styles";

export interface ILayoutProps {
  children: React.ReactNode | React.ReactNodeArray;
}

const navLinks = [
  {
    link: "/home",
    label: 'Home',
  },
  {
    link: "/blogs",
    label: "Blogs",
  },
  {
    link: "/resume",
    label: "Resume",
  },
  {
    link: "/contact",
    label: "Contact",
  }
];

const footerLinks = [
  {
    title: "Site Map",
    links: navLinks,
  },
  {
    title: "Resources",
    links: [
      {
        target: "blank",
        label: "MDNDocs",
        link: "https://developer.mozilla.org/en-US/"
      },
      {
        target: "blank",
        label: "Design Patterns",
        link: "https://refactoring.guru/"
      },
      {
        target: "blank",
        label: "Warmup",
        link: "https://www.speedcoder.net/"
      },
      {
        target: "blank",
        label: "Quick Types",
        link: "https://quicktype.io/"
      }
    ]
  }
]

export default function Layout({ children }: ILayoutProps) {
  const { classes } = useStyles();

  return (
    <div className="layout">
      <Header links={navLinks} />
        <main className={classes.pageMargin}>
          {children}
        </main>
      <Footer data={footerLinks} />
    </div>
  );
}
