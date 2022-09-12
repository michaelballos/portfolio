export interface Link {
  link: string;
  label: string;
}

export interface NestedFooterLink {
  target?: string;
  label: string;
  link: string;
}

export interface FooterLink {
  title: string;
  links: NestedFooterLink[];
}

export type LinksList = Link[];

export type FooterLinksList = FooterLink[];

export const headerLinks: LinksList = [
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

export const footerLinks: FooterLinksList = [
  {
    title: "Site Map",
    links: headerLinks,
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
        label: "Algorithms",
        link: "https://neetcode.io/"
      },
      {
        target: "blank",
        label: "Quick Types",
        link: "https://quicktype.io/"
      }
    ]
  }
]
