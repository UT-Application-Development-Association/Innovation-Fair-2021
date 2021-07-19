import React from "react";
import Heading from "./Heading";
import TimelineItem from "./TimelineItem";

export default function Timeline(props) {
    return (
      <div className="container">
        <Heading text="TIMELINE" />
        <div className="timeline-container">
            <TimelineItem from="2021-07-09" to="2021-07-22" title="Team Sign-up Period" description="Registration opens for participants." />
            
            <TimelineItem from="2021-07-23 7:30pm" to="8:30pm" title="Workshop: Job Hunting Experience in the Technology Industry " description="Host: Debin Li, Assistant Vice President - Senior Software Developer at Citi Bank." />
            <TimelineItem from="2021-07-24 9:00pm" to="10:30pm" title="Workshop: Deployment，DevOps & MLOps" description="Host: Raven Sun, Director of Technology at Fintelics." />
            <TimelineItem from="2021-07-27 8:00pm" to="9:00pm" title="Workshop: Introduction to AWS" description="An introduction of different AWS services for small scope application development, such as S3, EC2, Lambda, DynamoDb. <br/>Host: Yusra Ai-Sharfi, Solution architect at Amazon Web Service, previous technology specialist at Bell." />
            <TimelineItem from="2021-07-28 9:00pm" to="10:00pm" title="Workshop: ML Appilication in Mental Health" description="An introduction of different ML models and its application in mental health research. <br/> Host: Mah Parsa, Postdoctoral Researcher at CRIM, Research Project Lead at AIML. " />
            
            {/* <TimelineItem from="2021-07-24" to="2021-07-31" title="Workshop/Panel Talk" description="Industry representatives give workshops on relevant topics which will be followed by a Q&A session." /> */}
            <TimelineItem from="2021-08-01 7:00pm" to="2021-08-05 11:59pm" title="Presentation Submission" description="Submissions will close at 3pm EST. One person from each group is expected to submit a presentation deck and other group information via google Form given to their emails." />
            <TimelineItem from="2021-08-06 9:00am" title="Announcement of Presentation Schedule" description="UTADA will announce a detailed presentation agenda." />
            <TimelineItem from="2021-08-07 9:00am" to="11:00am" title="Presentation" description="Presentations begin at 9AM. Presenting groups will enter the scheduled Zoom rooms according to the schedule announced in July. Each group has 6-8 minutes to present, and 10 minutes for judges' Q&A." />
            <TimelineItem from="2021-08-07 11:00am" to="11:30am" title="Partner Panel Talk" description="Partner organizations will use this time to share experiences related to Innovation Fair topics before finalists are announced. Participants will have an opportunity to receive career and academic advice." />
            <TimelineItem from="2021-08-07 11:30am" to="12:30am" title="Finalist Presentation" description="The winning group from each panel will compete in the final round. Each group will have 6-8 minutes to present and 5 minutes for Q&A. The judges will then deliberate first, second, and third place." />
            <TimelineItem from="2021-08-07 12:40am" to="1:00pm" title="Award Ceremony" description="Winners will be announced and prizes will be awarded to the top three teams." />
        </div>
      </div>
    );
}
  