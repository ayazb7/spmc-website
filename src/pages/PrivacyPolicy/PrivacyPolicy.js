import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [tocPosition, setTocPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const contentRef = useRef(null);
    const sectionRefs = useRef([]);
    const tocRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            
            // Calculate scroll progress
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(Math.min(progress, 100));

            // Find active section
            const sections = document.querySelectorAll('h2[id]');
            let currentSection = '';
            
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) {
                    currentSection = section.id;
                }
            });
            
            setActiveSection(currentSection);

            // Handle TOC positioning - only on desktop
            if (window.innerWidth > 1200 && tocRef.current) {
                const contentWrapper = document.querySelector('.privacy-content-wrapper');
                const policyContent = document.querySelector('.policy-content');
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                
                if (contentWrapper && policyContent) {
                    const wrapperRect = contentWrapper.getBoundingClientRect();
                    const contentRect = policyContent.getBoundingClientRect();
                    const wrapperTop = wrapperRect.top + scrollTop;
                    const contentBottom = contentRect.bottom + scrollTop;
                    const tocHeight = tocRef.current.offsetHeight;
                    const viewportHeight = window.innerHeight;
                    
                    // Check if we should start fixing the TOC
                    const shouldStartFixing = scrollTop > (wrapperTop - navbarHeight - 20);
                    
                    // Calculate if TOC would go past the bottom of content when fixed
                    const fixedTocBottom = scrollTop + navbarHeight + 20 + tocHeight;
                    const shouldStopFixing = fixedTocBottom > contentBottom;
                    
                    if (shouldStartFixing && !shouldStopFixing) {
                        // TOC should be fixed to viewport
                        setIsFixed(true);
                        setTocPosition(0);
                    } else if (shouldStartFixing && shouldStopFixing) {
                        // TOC should be positioned so its bottom aligns with content bottom
                        setIsFixed(false);
                        setTocPosition(contentBottom - wrapperTop - tocHeight);
                    } else {
                        // TOC should be in normal flow
                        setIsFixed(false);
                        setTocPosition(0);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Initial call
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentSectionRefs = sectionRefs.current;
        
        currentSectionRefs.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            currentSectionRefs.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'smooth',
            });
        }
    };

    const tableOfContents = [
        { id: 'contact-details', title: 'Contact Details', icon: '📞' },
        { id: 'information-collection', title: 'What Information We Collect', icon: '📋' },
        { id: 'lawful-bases', title: 'Lawful Bases & Data Protection Rights', icon: '⚖️' },
        { id: 'information-sources', title: 'Where We Get Information From', icon: '📍' },
        { id: 'retention-periods', title: 'How Long We Keep Information', icon: '⏰' },
        { id: 'information-sharing', title: 'Who We Share Information With', icon: '🤝' },
        { id: 'complaints', title: 'How to Complain', icon: '📝' },
    ];

    return (
        <div className="privacy-page">
            <Helmet>
                <title>SPMC | Privacy Policy</title>
            </Helmet>

            <div className="privacy-hero">
                <motion.div 
                    className="privacy-hero-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <FaShieldAlt className="hero-icon" />
                    <h1>Privacy Policy</h1>
                    <p>Staff & Volunteers Privacy Notice</p>
                </motion.div>
                
                <div className="wave-decoration">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#f9fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,176C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <div className="privacy-content-wrapper">
                {/* Table of Contents - Desktop Only */}
                <motion.div 
                    ref={tocRef}
                    className={`table-of-contents ${isFixed ? 'fixed' : ''}`}
                    style={{
                        transform: isFixed ? 'none' : `translateY(${tocPosition}px)`,
                        top: isFixed ? '100px' : 'auto',
                        position: isFixed ? 'fixed' : 'absolute'
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="toc-header">
                        <h3>Contents</h3>
                        <div className="scroll-progress">
                            <div 
                                className="scroll-progress-bar"
                                style={{ height: `${scrollProgress}%` }}
                            />
                        </div>
                    </div>
                    
                    <ul>
                        {tableOfContents.map((item, index) => (
                            <motion.li 
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            >
                                <button 
                                    onClick={() => scrollToSection(item.id)}
                                    className={activeSection === item.id ? 'active' : ''}
                                >
                                    <span className="toc-icon">{item.icon}</span>
                                    <span className="toc-text">{item.title}</span>
                                    <FaChevronRight className="toc-arrow" />
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                    className="policy-content" 
                    ref={el => sectionRefs.current[0] = el}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p>This privacy notice tells you what to expect us to do with your personal information when you work for us.</p>
                    
                    <h2 id="contact-details">Contact details</h2>
                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-text">
                                <strong>Address</strong>
                                <div className="address-block">
                                    <p>Director Generals House</p>
                                    <p>15 Rockstone Place</p>
                                    <p>Southampton, Hampshire</p>
                                    <p>SO15 2EP, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-text">
                                <strong>Telephone</strong>
                                <p>02382145353</p>
                            </div>
                        </div>
                        <div className="contact-item no-margin-bottom">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-text">
                                <strong>Email</strong>
                                <p>info@spmcs.co.uk</p>
                            </div>
                        </div>
                    </div>

                    <h2 id="information-collection">What information we collect and use, and why</h2>
                    
                    <h3>Staff recruitment, administration and management</h3>
                    <p>We collect or use the following personal information as part of staff recruitment, administration and management:</p>
                    <ul>
                        <li>Contact details (eg name, address, telephone number or personal email address)</li>
                        <li>Date of birth</li>
                        <li>National Insurance number</li>
                        <li>Gender</li>
                        <li>Photographs (eg staff ID card)</li>
                        <li>Copies of passports or other photo ID</li>
                        <li>Copies of proof of address documents (eg bank statements or bills)</li>
                        <li>Marital status</li>
                        <li>Next of kin or emergency contact details</li>
                        <li>Employment history (eg job application, employment references or secondary employment)</li>
                        <li>Education history (eg qualifications)</li>
                        <li>Right to work information</li>
                        <li>Details of any criminal convictions (eg DBS checks)</li>
                        <li>Political, conflict of interest or gift declarations</li>
                        <li>Security clearance details (eg basic checks and higher security clearance)</li>
                        <li>Performance records (eg reviews, disciplinary records, complaints or disciplinary action)</li>
                        <li>Training history and development needs</li>
                        <li>Monitoring employees' IT use</li>
                        <li>CCTV footage or other recordings</li>
                    </ul>
                    
                    <p>We also collect or use the following special category information for staff recruitment, administration and management. This information is subject to additional protection due to its sensitive nature:</p>
                    <ul>
                        <li>Racial or ethnic origin</li>
                        <li>Religious or philosophical beliefs</li>
                        <li>Trade union membership</li>
                        <li>Biometric information</li>
                        <li>Health information</li>
                        <li>Sexual orientation information</li>
                    </ul>

                    <h3>Salaries and pensions</h3>
                    <p>We collect or use the following personal information as part of managing salaries and pensions:</p>
                    <ul>
                        <li>Job role and employment contract (eg start and leave dates, salary, changes to employment contract or working patterns)</li>
                        <li>Time spent working (eg timesheets or clocking in and out)</li>
                        <li>Expense, overtime or other payments claimed</li>
                        <li>Leave (eg sick leave, holidays or special leave)</li>
                        <li>Maternity, paternity, shared parental and adoption leave and pay</li>
                        <li>Pension details</li>
                        <li>Bank account details</li>
                        <li>Payroll records</li>
                        <li>Tax status</li>
                        <li>Trade Union membership</li>
                    </ul>
                    
                    <p>We also collect or use the following special category information for managing salaries and pensions. This information is subject to additional protection due to its sensitive nature:</p>
                    <ul>
                        <li>Racial or ethnic origin</li>
                        <li>Religious or philosophical beliefs</li>
                        <li>Trade union membership</li>
                        <li>Biometric information (where used to identify someone)</li>
                        <li>Health information</li>
                        <li>Sexual orientation information</li>
                    </ul>

                    <h3>Staff health and wellbeing</h3>
                    <p>We collect or use the following personal information for managing staff health and wellbeing:</p>
                    <ul>
                        <li>General health and wellbeing information</li>
                        <li>Occupational health referrals and reports</li>
                        <li>Sick leave forms or fit notes (eg Statement of Fitness for Work from a GP or hospital)</li>
                        <li>Accident at work records</li>
                        <li>Access needs or reasonable adjustments</li>
                        <li>Protected Characteristics (as defined by the Equality Act and s.75 of the Northern Ireland Act for the purpose of equal opportunities monitoring)</li>
                    </ul>
                    
                    <p>We also collect or use the following special category information for managing staff health and wellbeing. This information is subject to additional protection due to its sensitive nature:</p>
                    <ul>
                        <li>Racial or ethnic origin</li>
                        <li>Religious or philosophical beliefs</li>
                        <li>Trade union membership</li>
                        <li>Biometric information (where used to identify someone)</li>
                        <li>Health information</li>
                        <li>Sexual orientation information</li>
                    </ul>

                    <h2 id="lawful-bases">Lawful bases and data protection rights</h2>
                    <p>Under UK data protection law, we must have a "lawful basis" for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO's website.</p>
                    
                    <p>Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO's website:</p>
                    
                    <ul>
                        <li><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. You can read more about this right <a href="https://ico.org.uk/your-data-matters/your-right-to-get-copies-of-your-data/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                        <li><strong>Your right to rectification</strong> - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. You can read more about this right <a href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-corrected/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                        <li><strong>Your right to erasure</strong> - You have the right to ask us to delete your personal information. You can read more about this right <a href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                        <li><strong>Your right to restriction of processing</strong> - You have the right to ask us to limit how we can use your personal information. You can read more about this right <a href="https://ico.org.uk/your-data-matters/your-right-to-limit-how-organisations-use-your-data/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                        <li><strong>Your right to object to processing</strong> - You have the right to object to the processing of your personal data. You can read more about this right <a href="https://ico.org.uk/your-data-matters/the-right-to-object-to-the-use-of-your-data/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                        <li><strong>Your right to data portability</strong> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. You can read more about this right <a href="https://ico.org.uk/your-data-matters/your-right-to-data-portability/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                        <li><strong>Your right to withdraw consent</strong> – When we use consent as our lawful basis you have the right to withdraw your consent at any time. You can read more about this right <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/consent/" target="_blank" rel="noopener noreferrer">here</a>.</li>
                    </ul>
                    
                    <p>If you make a request, we must respond to you without undue delay and in any event within one month.</p>
                    
                    <p>To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.</p>

                    <h3>Our lawful bases for the collection and use of your data</h3>
                    <p>Our lawful bases for collecting or using personal information as part of staff recruitment, administration and management are:</p>
                    <ul>
                        <li><strong>Consent</strong> - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
                        <li><strong>Contract</strong> – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.</li>
                        <li><strong>Legal obligation</strong> – we have to collect or use your information so we can comply with the law. All of your data protection rights may apply, except the right to erasure, the right to object and the right to data portability.</li>
                        <li><strong>Vital interests</strong> – collecting or using the information is needed when someone's physical or mental health or wellbeing is at urgent or serious risk. This includes an urgent need for life sustaining food, water, clothing or shelter. All of your data protection rights may apply, except the right to object and the right to portability.</li>
                        <li><strong>Public task</strong> – we have to collect or use your information to carry out a task laid down in law, which the law intends to be performed by an organisation such as ours. All of your data protection rights may apply, except the right to erasure and the right to portability.</li>
                    </ul>
                    
                    <p>Our lawful bases for collecting or using personal information as part of managing salaries and pensions are:</p>
                    <ul>
                        <li><strong>Consent</strong> - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
                        <li><strong>Contract</strong> – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.</li>
                        <li><strong>Legal obligation</strong> – we have to collect or use your information so we can comply with the law. All of your data protection rights may apply, except the right to erasure, the right to object and the right to data portability.</li>
                        <li><strong>Vital interests</strong> – collecting or using the information is needed when someone's physical or mental health or wellbeing is at urgent or serious risk. This includes an urgent need for life sustaining food, water, clothing or shelter. All of your data protection rights may apply, except the right to object and the right to portability.</li>
                        <li><strong>Public task</strong> – we have to collect or use your information to carry out a task laid down in law, which the law intends to be performed by an organisation such as ours. All of your data protection rights may apply, except the right to erasure and the right to portability.</li>
                    </ul>
                    
                    <p>Our lawful bases for collecting or using personal information as part of managing staff health and wellbeing are:</p>
                    <ul>
                        <li><strong>Consent</strong> - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
                        <li><strong>Contract</strong> – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.</li>
                        <li><strong>Legal obligation</strong> – we have to collect or use your information so we can comply with the law. All of your data protection rights may apply, except the right to erasure, the right to object and the right to data portability.</li>
                        <li><strong>Vital interests</strong> – collecting or using the information is needed when someone's physical or mental health or wellbeing is at urgent or serious risk. This includes an urgent need for life sustaining food, water, clothing or shelter. All of your data protection rights may apply, except the right to object and the right to portability.</li>
                        <li><strong>Public task</strong> – we have to collect or use your information to carry out a task laid down in law, which the law intends to be performed by an organisation such as ours. All of your data protection rights may apply, except the right to erasure and the right to portability.</li>
                    </ul>

                    <h2 id="information-sources">Where we get personal information from</h2>
                    <p>We collect your information from the following places:</p>
                    <ul>
                        <li>Directly from you</li>
                        <li>Employment agency</li>
                        <li>Referees (external or internal)</li>
                        <li>Security clearance providers</li>
                        <li>Occupational Health and other health providers</li>
                        <li>Pension administrators or government departments (eg HMRC and DWP)</li>
                        <li>Public sources (eg LinkedIn or other websites)</li>
                        <li>CCTV footage or other recordings</li>
                    </ul>

                    <h2 id="retention-periods">How long we keep information</h2>
                    <div className="table-responsive">
                        <table className="retention-table">
                            <thead>
                                <tr>
                                    <th>Category of Data</th>
                                    <th>Purpose of Collection</th>
                                    <th>Legal Basis (UK GDPR)</th>
                                    <th>Retention Period</th>
                                    <th>Disposal Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Resident care records</td>
                                    <td>Care planning, legal compliance, safeguarding</td>
                                    <td>Public Task, Legal Obligation</td>
                                    <td>8 years after last contact (25 years for children)</td>
                                    <td>Digital deletion / shredding</td>
                                </tr>
                                <tr>
                                    <td>Safeguarding records</td>
                                    <td>Protecting individuals at risk, legal evidence</td>
                                    <td>Legal Obligation, Vital Interests</td>
                                    <td>Minimum 8 years, or indefinitely in serious cases</td>
                                    <td>Reviewed case-by-case</td>
                                </tr>
                                <tr>
                                    <td>Mental capacity assessments / DoLS</td>
                                    <td>Legal compliance under MCA 2005</td>
                                    <td>Legal Obligation</td>
                                    <td>8 years after last entry</td>
                                    <td>Secure disposal</td>
                                </tr>
                                <tr>
                                    <td>Risk assessments</td>
                                    <td>Ensuring health and safety</td>
                                    <td>Legal Obligation</td>
                                    <td>8 years after end of care</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Medication records</td>
                                    <td>Safe administration of medication</td>
                                    <td>Legal Obligation, Public Task</td>
                                    <td>8 years after last entry</td>
                                    <td>Secure shredding or deletion</td>
                                </tr>
                                <tr>
                                    <td>Consent forms</td>
                                    <td>Legal documentation of consent</td>
                                    <td>Consent, Legal Obligation</td>
                                    <td>8 years from date of signing or until superseded</td>
                                    <td>Secure disposal</td>
                                </tr>
                                <tr>
                                    <td>Daily care notes / visit logs</td>
                                    <td>Service delivery monitoring</td>
                                    <td>Public Task</td>
                                    <td>8 years</td>
                                    <td>Secure shredding or digital erasure</td>
                                </tr>
                                <tr>
                                    <td>Staff employment records</td>
                                    <td>Employment, payroll, legal compliance</td>
                                    <td>Legal Obligation, Contract</td>
                                    <td>6 years after end of employment</td>
                                    <td>Secure shredding/deletion</td>
                                </tr>
                                <tr>
                                    <td>DBS certificates</td>
                                    <td>Safer recruitment</td>
                                    <td>Legal Obligation</td>
                                    <td>6 months for certificate copies; summary info 6 years</td>
                                    <td>Certificate destroyed; summary securely stored</td>
                                </tr>
                                <tr>
                                    <td>Recruitment and interview records</td>
                                    <td>Recruitment process documentation</td>
                                    <td>Legitimate Interests</td>
                                    <td>6–12 months</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Training records</td>
                                    <td>CQC compliance, evidence of competency</td>
                                    <td>Legal Obligation, Legitimate Interests</td>
                                    <td>6 years after employment ends</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Timesheets and rota records</td>
                                    <td>Operational workforce planning and payroll</td>
                                    <td>Legal Obligation</td>
                                    <td>6 years</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Payroll & financial records</td>
                                    <td>HMRC compliance</td>
                                    <td>Legal Obligation</td>
                                    <td>6 years after financial year end</td>
                                    <td>Secure deletion or shredding</td>
                                </tr>
                                <tr>
                                    <td>Staff supervision and appraisals</td>
                                    <td>Professional development, HR documentation</td>
                                    <td>Legitimate Interests, Contract</td>
                                    <td>6 years after end of employment</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>CCTV recordings</td>
                                    <td>Security, safeguarding</td>
                                    <td>Legitimate Interests</td>
                                    <td>30 days, unless required for investigation</td>
                                    <td>System auto-delete or manual deletion</td>
                                </tr>
                                <tr>
                                    <td>Email correspondence</td>
                                    <td>Care coordination, family communication</td>
                                    <td>Legitimate Interests</td>
                                    <td>8 years (if care-related); 1 year for general admin</td>
                                    <td>Periodic deletion policy</td>
                                </tr>
                                <tr>
                                    <td>Complaints and investigations</td>
                                    <td>Governance, legal defence</td>
                                    <td>Legal Obligation, Legitimate Interests</td>
                                    <td>8 years (longer if unresolved)</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Feedback/surveys</td>
                                    <td>Quality assurance and service improvement</td>
                                    <td>Legitimate Interests</td>
                                    <td>2 years</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Contracts with clients/families</td>
                                    <td>Legal agreement for services</td>
                                    <td>Contract, Legal Obligation</td>
                                    <td>6 years after contract ends</td>
                                    <td>Secure shredding or digital deletion</td>
                                </tr>
                                <tr>
                                    <td>Photos/recordings</td>
                                    <td>Life story work, social inclusion, marketing</td>
                                    <td>Consent</td>
                                    <td>Until consent withdrawn or resident leaves + 1 year</td>
                                    <td>Deleted or returned</td>
                                </tr>
                                <tr>
                                    <td>Website enquiry forms</td>
                                    <td>Responding to prospective clients</td>
                                    <td>Consent, Legitimate Interests</td>
                                    <td>6 months</td>
                                    <td>Secure deletion</td>
                                </tr>
                                <tr>
                                    <td>Policies and procedures</td>
                                    <td>Legal compliance, audits, inspections</td>
                                    <td>Legal Obligation</td>
                                    <td>Current version + 1 previous</td>
                                    <td>Manual review & deletion</td>
                                </tr>
                                <tr>
                                    <td>IT systems logs</td>
                                    <td>Cybersecurity, audit trails</td>
                                    <td>Legitimate Interests</td>
                                    <td>1 year</td>
                                    <td>Auto-deleted or reviewed manually</td>
                                </tr>
                                <tr>
                                    <td>Business continuity records</td>
                                    <td>Risk management, regulatory requirement</td>
                                    <td>Legal Obligation</td>
                                    <td>6 years</td>
                                    <td>Secure deletion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>For more information on how long we store your personal information or the criteria we use to determine this please contact us using the details provided above.</p>

                    <h2 id="information-sharing">Who we share information with</h2>
                    <p>In some circumstances, we may share information with the following organisations:</p>
                    <ul>
                        <li>Training suppliers</li>
                        <li>HMRC</li>
                        <li>Employee benefit schemes</li>
                        <li>Health and benefit suppliers</li>
                        <li>Suppliers and service providers</li>
                    </ul>

                    <h2 id="complaints">How to complain</h2>
                    <p>If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.</p>
                    
                    <p>If you remain unhappy with how we've used your data after raising a complaint with us, you can also complain to the ICO.</p>
                    
                    <p>The ICO's address:</p>
                    <div className="address-block">
                        <p>Information Commissioner's Office</p>
                        <p>Wycliffe House</p>
                        <p>Water Lane</p>
                        <p>Wilmslow</p>
                        <p>Cheshire</p>
                        <p>SK9 5AF</p>
                    </div>
                    
                    <p>Helpline number: 0303 123 1113<br />
                    Website: <a href="https://www.ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer">https://www.ico.org.uk/make-a-complaint</a></p>
                    
                    <p><strong>Last updated:</strong> June 2024</p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 