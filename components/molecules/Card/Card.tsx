import React, {
  useMemo,
  useState,
  useCallback,
  useEffect
} from "react";
import {
  RingProgress,
  Text,
  Paper,
  Center,
  Group,
  Button
} from "@mantine/core";
import {
  IconChecks,
  IconPlayerPause,
  IconTool,
  TablerIcon
} from "@tabler/icons";
import ProjectModal from '../../organisms/ProjectModal/ProjectModal';
import { IModalDetails } from '../../organisms/HomePage/HomePage';
import {
  useCardStyles,
  useStyles
} from "../../molecules/StatsRing/StatsRing.styles";
import {
  StatsRingProps,
} from '../../molecules/StatsRing/StatsRing';
import { icons } from "../../molecules/StatsRing/StatsRing";

const projectDetails = [
  {
    title: 'RE Template',
    link: 'https://github.com/particlespace/real-estate-listing-platform-starter-template',
    overview: 'This was an Open Source project done at Particle Space. The project consisted of crafting a simple React template for Real Estate listing platforms. ' +
      'It utilized Particle Space API for property data and Google Maps API to pinpoint the property location. ' +
      'The property modal incorporated UI from a previous Chrome Extension project.',
    goal: [
      'Create an Open Source template for building Real Estate Listing applications',
      'Setup for easy integration of Particle Space API',
      'Show map location of properties'
    ],
    significance: [
      'Provides an easy starting point to integrate Particle Space API for developers at HackMidwest or anyone building a listing platform.',
      'In terms of the UI I handled the Header, provided solutions for UI problems such as Listing Cards and Map responsiveness, mocked the data in a JSON file, assisted with connecting the map markers based on longitude and latitude, finished the property details modal, and created Type Safe UI data query and manipulation.',
      'Overall the project was completed only with simple code conflicts, Typescript, and Unique Key problems. If the template were to be improved, my primary focus would be the aesthetics of the property details modal. The last thing I will add is removing the mock data property details and have the API Query Particle Space onClick of the property listing cards.'
    ],
    images: [
      '/templateHome.jpg',
      '/templateConsole.jpg',
      '/templateModal.jpg',
      '/templateModalTwo.jpg',
      '/templateMap.jpg',
    ]
  },
  {
    title: 'Properly',
    link: 'https://chrome.google.com/webstore/detail/properly-by-particle-spac/fgbbcngkdhfkahipapobpdbkijlanpeb',
    overview: `Properly is a Chrome Extension that automates the Query for property data inside of Gmail. It stays open while surfing through Gmail and any property addresses detected inside an Email${`'`}s Subject or Body line is queried for property data using Particle Space${`'`}s API.`,
    goal: [
      'Build a product for non-technical users with the Particle Space API',
      'Detect adresses inside of Gmail',
      'Automate the query for property data using a Particle Space Dev account',
      'Keep bundle size minimal'
    ],
    significance: [
      `Particle Space${`'`}s service is an API only usable by people with a technical background. This extension is a cool tool that any lay person can use day to day with. The primary target audience  
       are Real Estate Agents, Investors, and potential Home Buyers or Tenants`,
      `I was tasked with creating Properly${`'`}s UI design and chose Mantine for the Frontend UI Library. Isaac Spiegel (Particle Space Developer) and I pair programmed the majority of Properly and completed the extension in a week using React as the Framework. While Isaac started on the Particle Space logo injection into the side Navigation, I started the initial design in an isolated Storybook environment.   
       Grace (Particle Space Developer) created the logic for the detection of adresses. I noticed the detection didn${`'`}t work when Gmail${`'`}s UI was configured for a split Reading Pane which was resolved by Grace. I also worked on the logic for Querying and Hydrating the data into their designated Accordian categories. The last feature I contributed to the extension was a Button to copy all the data to the client's clipboard with formatted text using js-yaml.`,
      `One of the issued we faced with the Extension was if the Chrome Web Store allowed DOM manipulation. Fortunately they did and we took inspiration from Hubspot and injected our logo into the side Navigation which opened the main side drawer. One of the bigger issues on top of that is our drawer hovers over the rest of the page unlike Hubspot where their side drawer pushed the the page and made room for the drawer onOpen. ` +
      `A solution wasn\t found but we also didn${`'`}t want to hyper focus on an issue that wasn${`'`}t a breaking problem but I believe having a drawer that doesn${`'`}t cover any UI would result in a better user experience.`
    ],
    images: [
      '/properlyNoDetected.jpg',
      '/properly.jpg',
      '/properlyBummer.jpg',
      '/properlyCopy.jpg',
      '/properlyDropdown.jpg',
    ]
  },
  {
    title: 'JN Brand',
    link: 'https://www.instagram.com/ngynjohn/',
    overview: 'JN is a Social Media Influencer, Brand, and Content Creator. ngynjohn is his online presence and I am the current developer for his website.',
    goal: [
      `Expand John${`'`}s online presence with a new website`,
      'Create a product for John to promote and sell his brand',
      'Should contain all his social media accounts and contact information',
      'Uphold website performance',
      'Learn about the best practices for video content'
    ],
    significance: [
      `A website is mandatory for any successful social media influencer. John${`'`}s website is a great example of how to create a website that is easy to use, easy to maintain, and easy to showcase produced work.`,
      'The website uses Next JS as the React Framework and Mantine for the UI Library. The current version of the website is a work in progress and is being updated with new content and features. Not all of the content is finalized and is subject to change. All the videos are placeholders and are not owned by John.',
      'The biggest issue I face with the website is video management. Working with large quantities of videos can esily decrease the performance of the website. I am currently learning the best practices to maintain top performance. At first I thought of writing a Node JS application to manage video upload and streaming but we both decided to use the Vimeo API instead. ' +
      'I chose Vimeo over Youtube because it has a higher video quality playback becuase Youtube primarily focuses on large videos resulting in Vimeo having more time to focus on encoding. All videos are embedded except for the landing page which is a compressed webm/mp4 file.',
    ],
    images: [
      '/john.jpg',
      '/johnCollage.jpg',
      '/johnVideos.jpg',
      '/johnContact.jpg',
    ]
  },
  {
    title: 'Thundurus',
    link: 'https://github.com/thundurusdev/thundurus',
    overview: 'Mantine is a water type Pokemon but in programming i\'s my favorite Typescript UI library for React. Thundurus is a lightning type Pokemon which is a direct counter to Mantine and is the Typescript UI library i\'m building.',
    goal: [
      'Create reusable testable components for all of my future projects',
      'Make Thundurus open source',
      'Type safe',
      'Be better than Mantine'
    ],
    significance: [
      'There are many UI Libraries available for React so there is no value in terms of rarity but there is value to me personally. I am a fan of the Mantine UI library and excited to see how Thundurus will improve over the long run. I plan on adding more features and components to the library than what Mantine currently offers. ' +
      'All my future applications will use Thundurus as the UI Library.',
      'The current version of Thundurus is a work in progress and has barely been broken into. React is the chosen Framework alongside Storybook for isolated UI development. The project uses Lerna Monorepo for ease of package management. There is only one component so far but I am planning on adding more components in the future.',
      'The biggest flaw about the project is not having enought time to work on it. Thundurus is currently classified On Hold and new components will be as improved snippets of code from outside projects.'
    ],
    images: [
      '/thundurusCode.jpg',
      '/thundurus.jpg',
    ]
  },
  {
    title: 'Archillect Bot',
    link: 'https://github.com/michaelballos/archillect',
    overview: 'Archillect is an AI bot with an API that chooses aesthetically pleasing art from the internet. My bot crawls Archillect and synchronously extracts all the image links from the page.',
    goal: [
      'Extract all the image links from the Archillect page',
    ],
    significance: [
      'The intended purpose of the script is only to extract all the image links from the Archillect page. It can be used standalone or integrated into a larger project.',
      'The bot is written with Puppeteer and Jest as the testing framework.',
      'The biggest improvement I can make on the bot is to make it more efficient by using asynchronous webscraping. The current bot is synchronous and will take a long time to run. The bot would be able to extract all the image links from the Archillect page in a matter of seconds.',
    ],
    images: [
      '/archillectCode.jpg',
      '/archillect.jpg',
    ]
  },
  {
    title: 'Documentation',
    link: 'https://docs.particlespace.com/docs/intro',
    overview: 'Updated documentation and Roadmap for the Particle Space Search API.',
    goal: [
      'Update the Documentation',
      'Update the Roadmap',
    ],
    significance: [
      'Added in the Error table that provides basic HTTP error codes and their meaning. ',
      'Docusaurus was built on React for Documentation and Blogs with MDX. I overode the default theme to make the documentation colors more consistent.',
      'The biggest flaw is wasting time by having to manually update the docs when auto generated Documentation like Swagger exists. I also Noticed the colors were off on the details dropdown and will be updated when possible.',
    ],
    images: [
      '/errorsLight.jpg',
      '/errorsDark.jpg',
      '/roadmapLight.jpg',
      '/roadmapDark.jpg',
      '/detailsLight.jpg',
      '/detailsDark.jpg',
    ]
  },
  {
    title: 'Electa',
    link: 'https://devpost.com/software/electa-jzbo79',
    overview: 'Electa is an API service concept for automated delegation. The developer defines Qualifications for a Role and Electa will automatically assigns the Qualified Users to that Role based on those Qualifications. This project was completed at HackKu 2022. ',
    goal: [
      'Create Developer Dashboard',
      'Create Documentation',
      'Create the API',
      'Finish in 36 hours',
      'Pitch to Judges',
    ],
    significance: [
      'There are no good accessable ways to automate delegation or create a platform for it. Electa is a great example of a service that can benefit a wide varity of fields.',
      'Developed the UI with Mantine and React. Participated in a Hackathon with a team of 4 people where we underwent a very agile developemnt process.',
      'The biggest flaw was the limited time during the hackathon. We completed the UI in 36 hours but the API did not have enough time to get fully developed.',
    ],
    images: [
      '/electaDashboard.jpg',
      '/electaDocs.jpg',
      '/electaRoute.jpg',
      '/electaRoles.jpg',
    ]
  },
  {
    title: 'React Calculator',
    link: 'https://github.com/michaelballos/calculator-react',
    overview: 'Stepping into React and away from vanilla Javascript, I gained the confidence to tackle a harder project right away. I decided to create a calculator. ' +
      'The Calculator performs basic arithmetic operations and used Hooks to manage operation state.',
    goal: [
      'Create a calculator with ios design',
    ],
    significance: [
      'It was because I challenged myslef, always aiming slightly higher than whats within my ability that I was able to improve significantly as a developer and will continue to do so.',
      'After this project my developement skills skyrocketed. Soon after I coded in Typescript making my way into api\'s and backend development.',
      'The flaw of this project is the responsiveness.',
    ],
    images: [
      '/calculator.jpg',
      '/calculatorSolved.jpg',
    ]
  },
  {
    title: 'React Counter',
    link: 'https://github.com/michaelballos/react-counter-project',
    overview: 'This was my very first React project. It was a recreation of my very first Javascript project using React and didn\'t take as long as the original one using vanilla Javascript.',
    goal: [
      'React Incrementer',
      'React Decrementer'
    ],
    significance: [
      'This was an important project as it was a milestone for me. For someone who struggled in creating the logic for two functions that was just the inverse of each other, reaching React and implementing Hooks showed progress.',
      'The logic was a recreating of a button counter I prevoisly wrote except Hooks were used with the logic.',
      'Huge flaw is that disgusting design.'
    ],
    images: [
      '/counterReactCode.jpg',
      '/counterReact.jpg',
    ]
  },
  {
    title: 'Counter',
    link: 'https://github.com/michaelballos/counterProj',
    overview: 'This was my very first Javascript project. It was a simple vanilla JS incremental/decremental counter. At that time in February I struggled with creating the logic for the counter. ',
    goal: [
      'Incremental count',
      'Decremental count',
    ],
    significance: [
      'This was an important project as it was the start of my life into programming. ',
      'This was a vanilla JS and CSS counter. No frameworks or libraries were used. At that time I had no idea what NPM or YARN packages were. ',
      'If I could travel back in time I would have told myself to use const instead of let, not hyperfocus on the CSS, and start coding in Typescript.'
    ],
    images: [
      '/counterCode.jpg',
      '/counter.jpg',
    ]
  },
]

const projectTitles = projectDetails.map(project => project.title)

type ProjectTitle = (typeof projectTitles)[number]

type CardProps = StatsRingProps['data'][number] & {
  label: ProjectTitle,
  setModalDetails: (details: (typeof projectDetails)[number]) => void,
  setModalOpen: (open: boolean) => void
};

export default function Card({
  status,
  category,
  label,
  id,
  setModalDetails,
  setModalOpen,
}: CardProps) {
  const Icon = icons[status];
  const color = status === "inProgress"
    ? "#00A8FF"
    : status === "onHold"
      ? "orange"
      : "green";

  const { classes } = useCardStyles();
  const project = projectDetails.find((project) => {
    const { title } = project;
    return label === title;
  }) as typeof projectDetails[number]; // this is known not to be undefined since typeof label is ProjectTitle
  const details = project;

  const openModalOnClick = useCallback(() => {
    setModalDetails(details);
    setModalOpen(true);
  }, [
    details,
    setModalDetails,
    setModalOpen
  ]);

  return (
    <Paper
      className={classes.card}
      withBorder
      radius="md"
      p="xs"
      key={id}
      onClick={openModalOnClick}
    >
      <Group noWrap>
        <RingProgress
          key={color}
          size={80}
          roundCaps
          thickness={8}
          sections={[
            {
              value: 100,
              color,
            },
          ]}
          label={
            <Center>
              <Icon size={22} />
            </Center>
          }
        />
        <div>
          <Text
            style={{
              whiteSpace: "nowrap",
            }}
            key={category}
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
          >
            {category}
          </Text>
          <Text
            style={{
              whiteSpace: "nowrap",
              fontFamily: 'tgHaidoGrotesk, sans-serif'
            }}
            key={label}
            weight={800}
            size="xl"
          >
            {label}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
