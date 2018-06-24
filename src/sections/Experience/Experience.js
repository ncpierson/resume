import preact from 'preact';

import Section from '../../components/Section';
import Job from '../../components/Job';

const Experience = () => (
  <Section title="Experience">
    <Job
      title="Full-Stack Web Developer"
      company="Self Employed"
      time="Mar 2017 to Dec 2017">
      <li>Scaled a personal web application to 20,000 daily users.</li>
      <li>
        Partnered with local startups to fulfill their custom web development
        needs.
      </li>
      <li>
        Managed personal time and business finances to run a sustainable
        business.
      </li>
    </Job>
    <Job
      title="Software Engineer"
      company="Asynchrony Labs"
      time="Aug 2015 to Feb 2017">
      <li>
        Built a Master Data Management solution using Scala, Play, Kafka, and
        Neo4j.
      </li>
      <li>
        Worked with Agile teams practicing TDD, pair programming, and kanban.
      </li>
    </Job>
    <Job
      title="Software Engineer, Intern"
      company="Union Pacific"
      time="May 2014 to Aug 2014">
      <li>
        Replaced an expensive, technical process with a database-driven,
        user-friendly web application using Java, Spring, and jQuery.
      </li>
      <li>Automated an email alert system stylized using Ink.</li>
    </Job>
    <Job
      title="Software Engineer, Intern"
      company="Asynchrony Labs"
      time="May 2013 to Aug 2013">
      <li>
        Delivered a Q&amp;A submission and voting platform for Android in an
        Agile, pair-programming, and test-driven environment.
      </li>
    </Job>
  </Section>
);

export default Experience;
