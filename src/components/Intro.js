import React from "react";

export default function Intro(props) {
    return (
        <div className="about-section">
            <img className="IF-image" src="" alt='Innovation Fair'/>
            <div className="description-section">
                <h2 className="title">What Is IF2021?</h2>
                <hr className="seperation-line"/>
                <p className="description">
                UTADA Innovation Fair 2020是一个基于计算机编程的网上应用设计大赛。参赛者们将以个人或小组，围绕着人工智能、大学生活、后疫情时代三个主题进行头脑风暴来开发出独特的应用程序并最终展示其原型。比赛中，专业评审会对参赛作品提出细致点评，参赛者们可以从建议中获得宝贵的应用开发经验。此外，IF2020还将邀请各行业精英人士开展有关应用开发的讲座并与参赛者们直接沟通交流经验。这不单是一场编程爱好者的比赛，更是关注生活、有丰富创意的同学们一个实现创想的平台。
                </p>
            </div>
        </div>
    );
}