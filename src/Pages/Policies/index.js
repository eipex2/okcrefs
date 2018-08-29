import React, {Component} from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Page, Body } from '../../Components'

import './policies.css'

const Policies = (props) => {
    return ( 
        <Page history={props.history}>
            <Paper className={Policies.width}>
                <Typography> 
                    Oklahoma State Referee Committee
                </Typography>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={Policies.heading}>SECTION I: Objectives</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        The Oklahoma State Referee Committee (SRC) is dedicated to all soccer referees, whose purpose is to ensure the 
                        development of the United States Soccer Referee in terms of quality and quantity through achieving excellence in 
                        governance, education, and administration. The program shall work in the interests of all its members.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={Policies.heading}>SECTION II: Structure</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        The Chair of the Committee shall be the State Referee Chairman
                        The membership of the SRC shall consist of:
                            State Referee Chairman
                            State Referee Administrator (SRA)
                            State Youth Referee Administrator (SYRA)
                            State Director of Assessment (SDA)
                            State Director of Instruction (SDI)
                            State Director of Assignors
                            the President or a representative of the Youth State Association.
                            the President or representative of the Adult State Association.
                        The SRA serves a two (2) year term by appointment of the Adult and Youth Board Presidents.
                        The SYRA serves a two (2) year term by appointment of the Youth Board President with recommendation by the SRA.
                        The State Referee Chairman shall be elected according to the bylaws of the Oklahoma Soccer Association.
                        The remaining committee members serve by appointment of the SRA.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={Policies.heading}>SECTION III: Duties and Responsibilities</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        The SRC shall develop a budget to cover its projected income and expenses for its fiscal year as established by the Oklahoma Soccer Association bylaws.
                        The SRC shall organize and present certification and recertification clinics for the referees, assessors, assignors, and instructors in the state of Oklahoma.
                        The SRC shall organize and present an upgrade clinic for the referees who wish to attain higher levels of referee proficiency.
                        The SRC shall organize and present an annual fitness exam and recertification clinic for all referees that are grade 7 and higher.
                        The SRC shall select a Youth Referee of the Year (Aaron Whitewolf Award) and a Referee of the Year based on nominations.
                        The SRC will oversee the registration of referees, assignors, instructor and assessors within the state of Oklahoma.
                        The SRC shall select the referees and assessors who will represent Oklahoma at the Region III tournaments.
                        The SRC shall provide training for new referees, assessors, assignors, and instructors as the need arises.
                        The SRC will provide entry-level clinics for assessors, instructors, and assignors on an as needed basis. The SRC will determine who shall be invited to participate in these clinics based upon their referee grade, ability, and experience.
                        The SRC shall encourage qualified referees to achieve a higher referee grade level, up to and including the Professional Referee Organization.
                        The SRC shall meet on the first Wednesday of every month, unless The State Referee Chairman chooses to change it with 7-day written notice to the SRC.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={Policies.heading}>SECTION IV: Referee Policies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    Referee abilities and requirements

            OUTDOOR UPPER LEVEL REFEREE REQUIREMENTS

                    Grade 9
                    Purpose: The Grade 9 Referee Course is to prepare officials for the small-sided and recreational youth game. Based on the level of training provided, U.S. Soccer recommends that these officials be assigned accordingly to best service the game. The Oklahoma SRC has determined this to be all Youth Recreational matches up to U14 Recreational and Assistant Referee on Academy matches.

                    To Obtain:

                    Must be 12 years old by the start of the referee course.
                    Attend Grade 9 Referee Clinic
                    Pay Grade 9 Referee Registration
                    Pass the written Grade 9 test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    No Fitness Test Required
                    If over 18 years old must pass annual background check.

                    To Maintain: 

                    Attend recertification clinic in Oklahoma
                    Pay Grade 9 Referee Registration
                    Pass Written Grade 9 test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    No Fitness Test Required
                    If over 18 years old must pass annual background check.
                    
                    Grade 8
                    Purpose: The Grade 8 Referee Course is to prepare officials for the competitive youth game. Based on the level of training provided, U.S. Soccer recommends that these officials be assigned accordingly to best service the game. The Oklahoma SRC has determined this to be All Youth matches up to and including U19 Competitive. Must have successfully passed the Grade 9 clinic.

                    To Obtain:

                    Must have successfully passed the Grade 9 clinic.
                    Attend Grade 8 Referee Clinic
                    Pay Grade 8 Referee Registration
                    Pass the written Grade 8 test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    No Fitness Test Required
                    If over 18 years old must pass annual background check.

                    To Maintain:

                    Attend recertification in Oklahoma
                    Pay Grade 8 Referee Registration
                    Pass Written Grade 8 test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    No Fitness Test Required
                    If over 18 years old must pass annual background check.

                    Grade 7
                    Purpose: The Grade 7 Referee Course is to prepare officials for the amateur adult game. Based on the level of training provided, U.S. Soccer recommends that these officials be assigned accordingly to best service the game.

                    To Obtain:

                    Must be Grade 8 for one (1) Year
                    Must be 18 years old before January 1 of next year.
                    Declare to upgrade before Nov 1st
                    Game count (75 referee 25 AR)- Sanctioned USSF games using Diagonal System of Control
                    Have everything completed and turned in before Dec. 1 to the upgrade panel.
                    Pay Grade 7 Upgrade Clinic fee
                    Attend upgrade clinic in January. 
                    Pass written Grade 7 test with a minimum of 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must have one assessment on an U14 Boys Competitive match ($50 must be before June 30th)
                    Assessments- 2:1 If failing an assessment, after three (3) fails cannot upgrade
                    Must pass annual background check

                    To Maintain:

                    Attend the upper level recertification on the first Saturday in August.
                    Pay Grade 7 Referee Registration
                    Pass Written Grade 7 test with a minimum 86%
                    Must have one assessment on an U14 Boys Competitive match ($50 must be before June 30th)
                    Assessments- 2:1 If failing an assessment after three (3) will be downgraded.
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check

                    Grade 7A
                    Purpose: Same as Grade 7

                    To Obtain:

                    Must be Grade 8 for one (1) Year.
                    Do NOT have to be Grade 7B first.
                    Must be 18 years old before January 1 of next year.
                    Declared to upgrade before Nov 1
                    Game count (75 referee 25 AR)- Sanctioned USSF games
                    Turn in and have everything complete for upgrade panel by Dec 1.
                    Pay Grade 7 Upgrade Clinic Fee
                    Attend upgrade clinic in January. 
                    Pass written Grade 7 test with a minimum of 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Pass one (1) Referee assessment on a 16 Boys match or Higher (at least 40 min halves)
                    Assessments- 2:1 If failing an assessment, after three (3) will be downgraded.
                    Pass 45:45 intervals (150:50) x 20 times
                    7.5 second 40m sprints x 6 times
                    Must pass annual background check

                    To Maintain:

                    Pay Grade 7 Referee Registration
                    Attend the upper level recertification on the first Saturday in August.
                    Pass Written Grade 7 test with a minimum 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Pass Fitness test (described in “Grade 7a, To Obtain” above)
                    Pass one (1) Referee assessment on a 16 Boys match or Higher (at least 40 min halves)
                    Assessments- 2:1 If failing an assessment.
                    Must pass annual background check

                    Grade 6
                    Must be Grade 7A during attempt to upgrade
                    Declare to upgrade April 1
                    Game count (50 games as a referee & 35 games as an AR-  additional after you have registered as a grade 7)- Sanctioned USSF games
                    Pass 3 assessments (one (1)- adult referee, one (1)- U17 thru U19 referee, and 1 assistant referee) (assessors be from different sides of the state)
                    Assessments- 2:1 If failing an assessment, after three (3) fails cannot upgrade
                    Pass 35:40 intervals (150:50) x 20 times
                    6.4 second sprints x 6 times (Men)
                    6.75 second sprints x 6 times (Women)
                    Turn in and have everything complete for upgrade panel by Dec 1.
                    Pay Grade 6 Referee Registration
                    If invited to attend Grade 6 upgrade clinic in January.
                    Pass written Grade 6 test with a minimum 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check

                    To Maintain:

                    Pay Grade 6 Referee Registration
                    Attend the upper level recertification on the first weekend in August.
                    Pass Fitness test (described above)
                    Pass Written Grade 6 Test with a minimum 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Pass two (2) Assessments (one (1) as a Referee & one (1) as an Assistant Referee)- (does not have to be from assessors from different sides of the state.)
                    Assessments- 2:1 If failing an assessment, after 3 fails will be downgraded
                    Come in front of Upgrade Panel for Approval to maintain grade.
                    Must pass annual background check

                    Grade 5 Referee
                    Must apply to upgrade by March 1st. (Applicants will be notified by April 1st if approved to attempt to upgrade)
                    Pass assessments on 3 adult D2 or above as a Referee by three (3) different National Coaches
                    Assessments- 2:1 If failing an assessment, after three (3) fails cannot upgrade
                    Full length matches (90 Min)
                    17:20 (Male Referee Interval) cat 1 x 40 times (75m:25m)
                    6.0 second sprints x 6 times= 40m
                    Turn in and have everything complete for upgrade panel by Dec 1.
                    Pay Grade 5 Referee Registration
                    If invited to attend Grade 5 Referee upgrade clinic in January.
                    Must pass National Written Test with an 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check
                    To Maintain:

                    Pay Grade 5 Referee Registration
                    Attend the upper level recertification on the first weekend in August.
                    Pass Fitness test (described above)
                    Pass Written National Test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Pass assessments on 3 assessments as a Referee on D2 or Higher by 3 different National Coaches
                    Assessments- 2:1 If failing an assessment, after three (3) fails will be downgraded.
                    Come in front of Upgrade Panel for Approval to maintain grade
                    Must pass annual background check
                    
                    Grade 5 AR
                    Must apply to upgrade by March 1st. (Applicants will be notified by April 1st if approved to attempt to upgrade)
                    Pass assessments on 3 adult D2 or above as an Assistant Referee by three (3) different National Coaches
                    Assessments- 2:1 If failing an assessment, after three (3) fails cannot upgrade
                    Full length matches (90 Min)
                    CODA- 10x8x8x10 meters x 1- 11 seconds
                    5.10 second sprints x 5 = 30m
                    AR- 17:22 (Female Referee Interval) cat 2
                    Turn in and have everything complete for upgrade panel by Dec 1.
                    Pay Grade 5 Assistant Referee Registration
                    If invited to attend Grade 5 Assistant Referee upgrade clinic in January.
                    Pass Written National Test with a minimum of 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check
                    To Maintain:

                    Pay Grade 5 Assistant Referee Registration
                    Attend the upper level recertification on the first weekend in August.
                    Pass Fitness test (described above)
                    Pass Written National Test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Pass assessments on 3 adult D2 or above as an Assistant Referee by 3 different National Coaches
                    Assessments- 2:1 If failing an assessment, after three (3) fails will be downgraded
                    Must pass annual background check
                    Come in front of Upgrade Panel for Approval 

                    National Assistant Referee- National Camp

                    National Referee- National Camp

                    PRO- PRO Camp

                    FIFA- FIFA Panel

                    Emeritus Referees (13,14,15)- recommend assignment up to adult matches. Must have successfully been in Grade 3,4,5,6 minimum of 3 years. Minimum age of 45 years old. Must send in writing to the upgrade panel to obtain Emeritus status.  
                    Pay Emeritus Referee Registration
                    Attend the upper level recertification on the first weekend in August.
                    Pass Written National Test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check

                    To return to former grade:
                    Must have been in requested grade within 3 years. (If not must retake grade 8 course and pass written test.)
                    Must summit request to return to wanted grade by April 1.
                    Must have all items to maintain grade completed before Dec. 1st.
                    Must come in front of the upgrade panel to see if requested grade was granted.
                    Grade 8 Futsal
                    All Youth matches up to and including U19 Competitive. No fitness test.
                    Pay Grade 8 Futsal Referee Registration
                    Attend Grade 8 Futsal Referee Clinic
                    Pass Written Grade 8 test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check
                    To Maintain:

            OUTDOOR UPPER LEVEL REFEREE REQUIREMENTS


            FUTSAL

                    Grade 8 Futsal Referee Registration
                    Attend Futsal recertification in Oklahoma
                    Pass Written Grade 8 test with a minimum 80%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check
                    Grade 6 Futsal
                    Declare to upgrade April 1
                    Game count (50 games on the Floor)
                    Pass 2 assessments (1- adult referee, 1- Youth)
                    Assessments- 2:1 If failing an assessment, after three(3) fails cannot upgrade
                    Turn in and have everything complete for upgrade panel by Dec 1.
                    Pay Grade 6 Futsal Referee Registration
                    If invited to attend Grade 6 Futsal upgrade clinic.
                    Attend Grade 6 Futsal Upgrade Clinic
                    Pass Written Grade 6 Futsal test with a minimum 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Must pass annual background check
                    To Maintain:

                    Grade 6 Futsal Referee Registration
                    Pass Written Grade 6 Test with a minimum 86%
                    If you fail written test must wait seven (7) days to retake test. Test must be set up through SDI.
                    Pass one (1) Assessments
                    Assessments- 2:1 If failing an assessment, after three (3) fails will be downgraded
                    Must pass annual background checK
                    
            Fitness Requirements

                    Fitness exam – A yearly fitness exam will be held the first Saturday of August as a part of Recertification for referee grades 7 advanced, grade 6, grade 5 and grade 5AR. This fitness exam is also offered to any referee desiring to upgrade from a grade 8 to a 7 advanced, or grade 7A to grade 6, or grade 6 to grade 5. The fitness exam will be administered per the Oklahoma Upgrading Process. If a referee fails to attend the fitness exam, the referee will be provided the opportunity for a make-up fitness exam at a fee (See Fee Schedule). Failure to complete the fitness exam will cause a referee to be downgraded to a 7 basic, assuming the referee has successfully completed a recertification course.
                    Fitness Exam requirements- See Abilities and Requirements

            Assessment

                    Assessments- Are field evaluations done by registered assessors. The purpose for assessments are to upgrade, maintain, or develop a higher level of referees.
                    The cost for assessments will be determined by the level of referee needing the assessment. (see Fee Schedule)
                    Assessments at USSF sponsored tournaments - When the SRC sends referees to USSF sponsored tournaments or events, any assessments obtained at such a venue may be considered by the State Director of Assessments.
                    Collegiate Game Assessments – Effective January 1, 2018 collegiate assessments will be NOT counted for any USSF assessment. This policy is a year-to-year policy.
                    If referee should fail assessment. The ratio for make-up assessment is 2:1, must pass two assessments for one failed assessment.
                    If referee or assistant referee should fail three assessments. The referee or assistant referee may not continue anymore assessments until the next registration year.
                    Assessment fees from Jan. 1 thru May 31 will be $75 and Assessment fees Jun 1 thru Dec 31 will be $100.
                    Grade 7B ($50 Must be before June 30th)

            Clinics

                    Entry-level clinics (Grade 9) - The entry-level course for referees in Oklahoma is the Grade 9 course. Clubs and/or leagues may request to host the clinics at locations in or near their sites. A referee course contract form explaining the requirements for hosting a clinic is available on the SRC website. Referees who wish to continue their growth in officiating to the Grade 8 can begin the upgrade process by attending a Grade 8 clinic.
                    Grade 8 clinics – Referees may upgrade to the Grade 8 level in Oklahoma after successfully completing the Grade 9 entry-level clinic. A referee course contract form explaining the requirements for hosting a clinic is available on the SRC website. Referees who wish to continue their growth in officiating to the Grade 7 Basic level can begin the upgrade process. (See Upgrading Process)
                    Upgrade Clinics- Will be held by the SRC as necessary. The upgrade clinic will be posted with place, date, and time for all approved to attend upgrade clinic by the upgrade panel.
                    Recertification clinics – Every registered referee, instructor, assignor and assessor must attend a Recertification Clinic each year prior to registering with USSF as a referee, assignor, assessor, instructor for the following calendar year. Recertification Clinics will be set up by the SRC in cooperation with clubs and/or leagues. Each club and/or league may have one Recertification clinic a year at no charge. A fee will be charged for each additional clinic, see Fee Schedule.
                    A Recertification Clinic for grades 7 basic, 7 advanced, grade 6, grade 5, and grade 5AR referees will be held the first Saturday in August of each year. The clinic will be held in conjunction with the annual fitness exam required of such referees.
                    A Recertification Clinic for Assignors, Assessors, and Instructors will be held annually. It will be held on the next to the last Saturday in July.
                    Failure to attend a Recertification Clinic will prevent a referee, instructor, assessor and/or, assignor from registering for the following calendar year.
                    Reference materials will be distributed to Recertified officials at the Recertification Clinic (if available).

            Training

                    Out-of-state Training - The SRC, using input from assessors and mentor referees, will encourage the promotion of referees to a higher-grade level, up to and including the PRO Badge. Referees who are designated as potential National referees will be given opportunities to attend out-of-state training seminars and tournaments which will give the candidate an opportunity to showcase his/her abilities. The SRC, within its budgetary ability, may underwrite attendance at such events.
                    Assessor and Instructor Advanced Training – The SRC may provide budgetary assistance for those assessors and instructors who wish to attend advanced training within their discipline, e.g., PEACE courses, State Assessors courses.
                    USSF sponsored fitness Training – Referees who attend USSF sponsored advanced training between July 1 and the regularly scheduled Oklahoma fitness exams, may not submit fitness exam results from that training without prior approval from the SRC or the Upgrade Panel.

            Registration

                    New Referee Registration- All newly trained referees will be uploaded by the SRC, or an appointed person(s) to USSF.
                    New Referees will get their badge after the completion of the clinic and written test.
                    Returning Referees – Will pay for their returning registrations when they sign up for the mandatory Recertification Clinic.
                    The SRC or an appointed person will mail badges to properly registered referees.
                    The SRC will pay for the following referees annual registration(s).
                    All sitting SRC Members and Assistants
                    Outgoing SRC Members
                    FIFA, PRO, or National Referees/ Assistant Referees (if they provide a service for the State) (Approved by the SRC)
                    Any other Referee, Instructor, Assessor or, Assignor as approved by the SRC (if they provide a service for the State)
                    Registration Deadline - Deadline for registration is December 31 of each year. All registrations received after January 1 will be assessed a late fee (see Fee Schedule). Referees, instructors, assessors, and assignors obtaining licensing after January 1 have until June 30 to register for the current year.
                    Badges for the current registration year will be provided to referees who complete their registration.
                    Registration cards will be available to print.
                    Late Registrations - Registrations received after December 31 will be treated as late registrations (see Fee Schedule). No registrations will be accepted after June 30. Referees who fail to register before June 30 of each year will not be allowed to officiate matches for the remainder of that calendar year.
                    Registered Referee list
                    The SRC will provide a complete posting of registered referees to Registered USSF Assignors in Oklahoma via email.
                    The SRC will post on the website a complete posting of registered referees listing only their name and grade.

            Game Priority

                    The SRC has created the following priority of game assignments. The highest priority will be located at the top of the list. Referees should understand that they should not turn back any assignment for a high priority assignments. You must communicate with the assignors if you have been offered higher assignments after accepting lower assignments.
                    International
                    Major League Soccer
                    USL
                    PDL
                    NPSL
                    National Tournaments
                    Development Academy
                    Regional Tournaments
                    State Tournaments
                    WPSL
                    In-State Leagues
                    Out of State Leagues

            Awards and Honors

                    Referee of the Year - A referee (over 20 years of age) who has attained a minimum referee grade of 7 advanced or higher shall be eligible for Adult Referee of the Year. Nominations may be made by tournament officials using the Tournament Evaluation form, by area referees, or fellow referees by using the nomination form available on the SRC website. The SRC will make its selection and present the award at the Soccer Workshop luncheon.
                    Aaron Whitewolf Award (Youth Referee of the Year) – A youth referee (under 20 years of age) who has attained the minimum referee grade 8 shall be eligible for Youth Referee of the Year. Tournament officials, area referees, fellow referees, etc. may make nominations. Nominations may be made by tournament officials using the Tournament Evaluation form or by area referees, fellow referees, etc. by using the nomination form available on the SRC website. The SRC will make the final selection and present the award at the Soccer Workshop luncheon.
                    Paperwork

                    Misconduct Reports- report must be filed for all send off and dismissals within 24 hours of the misconduct and sent to the appropriate governing body.
                    All Referee Abuse/Assault
                    Form letter acknowledging receipt of Referee Abuse/Assault Form sent to officials whom submitted the form.
                    Form letter to the alleged assailants acknowledging receipt of complaint.
                    Forward to SRA, SYRA, and OSA Vice Chairman for response.
                    OSA’s Vice Chairman will either chair or appoint a chair for any hearing.
                    OSA’s Vice Chairman will set up the hearing. The Vice Chairman will also notify, in writing, the parties involved as to the hearing date, time, and location.
                    Upon completion of the hearing and the outcome of the hearing, the involved parties will be notified in writing of the panel’s decision.

            Correspondence

                    Letters of complaint – either letters or emails received in OSA offices
                    Unsigned letters containing return address or email address
                    Form letter or email response acknowledging receipt of complaint sent to writer requesting that a letter be mailed by US Postal Service signed by the coach/manager of the team.
                    Unsigned letters without return address or email address
                    No action will be taken
                    Signed letters from coach/manager sent by US Postal Service or email letter from coach or manager.
                    Form letter acknowledging receipt of complaint sent to writer – if letter is emailed by Coach / manager a request will be emailed requesting written and signed letter
                    Forward to SRA for response
                    If necessary, a copy will be sent to the appropriate committee member
                    SRA may choose to investigate allegations.
                    Send informational copy to SYRA if complaint involves a youth game.
                    Request for clarification on Laws of the Game – signed or unsigned
                    Forward to SDI for response
                    SDI will copy response to Referee Committee
                    Letter concerning referee procedures - signed or unsigned
                    Forward to SRA for response
                    If necessary, a copy will be sent to the appropriate committee member
                    SRA may choose to investigate allegations

            Finance

                    Authorization of Payments from the Referee Fund - To ensure any funds spent will be reimbursed from the Referee Budget, pre-approval should be obtained from the appropriate section head as indicated below:
                    The State Director of Assessment will authorize payments to those certified assessors who are assigned to assess a referee, as requested by the referee.
                    The State Director of Instruction will authorize payments to those certified instructors who are assigned to instruct a referee course.
                    The State Youth Referee Administrator is authorized to expend funds for Youth Regionals in an amount not to exceed the funding provided by the SRC for the event.
                    The State Referee Administrator will authorize all other expenses from the referee fund.
                    Reimbursement for Training, Clinics, or Tournaments – Based on the criteria and considerations listed below, the SRC will partially reimburse certain expenses incurred by registered referees in Oklahoma traveling to USSF sanctioned clinics and tournaments outside of the state. The SRC makes no guarantee that any applicant will receive remuneration in any form. Each application will be considered individually.
                    Criteria and considerations are as follows:
                    The applicant must be a currently registered USSF referee, registered in Oklahoma.
                    The applicant must have obtained a referee grade of 6 or higher. Grade 7 Advanced referees who have stated in writing their intention to upgrade will also be considered.
                    The applicant must apply for funding two months prior to the scheduled start date of the clinic or tournament. A letter stating the name and location of the clinic or tournament, anticipated total expenses and why the applicant believes this would further his/her referee career must be sent to the SRA or SYRA.
                    The tournament and/or clinic must be sanctioned by the USSF.
                    Funding for this program is limited and may not be available yearly. Applicants should not assume that they will be reimbursed for any expenditure unless notified in writing, by the SRC. The applicant will be informed as to the amount of the stipend approved by the SRC.
                    Funding after the fact will not be considered. All applications must be approved in advance.
                    If approved, only partial funding will be provided. The SRC believes that individual referees must have a financial stake in their development and advancement.

            Fee Schedule

                    Grade 9 Referee Registration	$75.00
                    Grade 8 Referee Registration	$75.00
                    Grade 7 & 7A Referee Registration	$80.00
                    Grade 6 Referee Registration	$110.00
                    Grade 5 Referee Registration	$135.00
                    Grade 5 AR Registration	$135.00
                    Grade 15 Referee Registration	$110.00
                    Grade 13 Referee Registration	$110.00
                    Futsal Grade 8	$80.00
                    Futsal Grade 6	$110.00
                    National Coach	$135.00
                    National Emeritus Assessor	$110.00
                    State Assessor	$110.00
                    Assessor	$80.00
                    State Instructor	$110.00
                    Instructor	$80.00
                    Assignor	$45.00
                    All other Grades Late Registration	Fee + $50.00
                    Grade 9 Late Registration	Fee + $25.00
                    Grade 7 Upgrade Clinic	$35.00
                    Extra Referee Recertification Clinic	$60.00 + travel expenses
                    Make Up fitness exam	$75.00 (per person running)
                    Grade 7B Assessment	$50.00 (Jan1 thru June 30)
                    Assessment	$75.00 (Jan 1 thru May 31)
                    Assessment	$100.00 (June 1 thru Dec 31)
                    National Assessment Fee	$125.00
                    Futsal Assessment	$30.00
                    Make Up Futsal Fitness	$25.00 (per person running)
                    All Registration Fees are tied to US Soccer and will change as they change their fees.



                    Last updated October 15th 2018
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        </Page>
    )
}

export default Policies