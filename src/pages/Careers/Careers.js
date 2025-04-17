import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaGraduationCap, FaMoneyBillWave, FaBalanceScale, 
         FaUsers, FaTrophy, FaUserNurse, FaUserTie, FaFirstAid, FaHome, 
         FaHeart, FaUsersCog, FaClipboardCheck, FaArrowRight, FaPaperPlane, FaBriefcase } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
  const [activeJob, setActiveJob] = useState(null);

  const jobOpenings = [
    {
      title: 'Care Assistant',
      icon: <FaUserNurse />,
      description: 'Provide compassionate personal care, assist with daily living activities, and offer companionship to clients.',
    },
    {
      title: 'Senior Care Worker',
      icon: <FaUserTie />,
      description: 'Lead and mentor care teams, oversee quality service delivery, and ensure adherence to care plans.',
    },
    {
      title: 'Registered Nurse',
      icon: <FaFirstAid />,
      description: 'Deliver clinical care, administer medications, and manage individual healthcare plans while ensuring compliance with medical standards.',
    },
    {
      title: 'Live-in Carer',
      icon: <FaHome />,
      description: 'Offer continuous, round-the-clock care and companionship in a home setting, supporting clients in maintaining their independence.',
    },
    {
      title: 'Support Worker',
      icon: <FaHeart />,
      description: 'Assist individuals with disabilities, dementia, or complex care needs, empowering them to live fulfilling lives.',
    },
    {
      title: 'Team Leader',
      icon: <FaUsersCog />,
      description: 'Supervise care staff, coordinate schedules, and provide operational support to enhance service quality.',
    },
    {
      title: 'Field Care Supervisor',
      icon: <FaClipboardCheck />,
      description: 'Conduct assessments, monitor care delivery, and ensure compliance with regulatory requirements.',
    },
  ];

  const benefits = [
    {
      title: 'Make a Meaningful Impact',
      icon: <FaHandHoldingHeart />,
      description: 'Every day, you will help individuals lead fulfilling, independent lives while ensuring their dignity and well-being.',
    },
    {
      title: 'Professional Development & Career Progression',
      icon: <FaGraduationCap />,
      description: 'We offer structured training programs, mentorship opportunities, and clear career paths to help you grow in your role and beyond.',
    },
    {
      title: 'Competitive Salary & Comprehensive Benefits',
      icon: <FaMoneyBillWave />,
      description: 'Receive an attractive compensation package, including pension schemes, paid leave, and additional perks that support your financial security.',
    },
    {
      title: 'Work-Life Balance & Flexibility',
      icon: <FaBalanceScale />,
      description: 'We understand the importance of balance and offer various shift patterns to fit your schedule and personal commitments.',
    },
    {
      title: 'A Supportive & Inclusive Culture',
      icon: <FaUsers />,
      description: 'Join a diverse team where respect, teamwork, and employee well-being are at the heart of everything we do.',
    },
    {
      title: 'Recognition & Appreciation',
      icon: <FaTrophy />,
      description: 'Your hard work doesn\'t go unnoticed—we celebrate and reward dedication through employee appreciation programs and career milestones.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleApplyNow = () => {
    window.location.href = '/careers-apply';
  };

  const toggleJobDetails = (index) => {
    if (activeJob === index) {
      setActiveJob(null);
    } else {
      setActiveJob(index);
    }
  };

  return (
    <div className="careers-page">
        <Helmet>
            <title>Careers at SPMCS | Join Our Team</title>
            <meta name="description" content="Start a rewarding career in care with SPMCS. We offer competitive salaries, professional development, and a supportive work environment." />
        </Helmet>

        { /* Hero Section */}
        <div className="careers-hero">
            <motion.div 
            className="careers-hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            >
            <FaBriefcase className="hero-icon" />
            <h1>Join Our Team</h1>
            <p>Start a Rewarding Career in Care</p>
            
            <motion.button 
                className="primary-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyNow}
            >
                Apply Now <FaArrowRight className="button-icon" />
            </motion.button>
            </motion.div>
            
            <div className="wave-decoration">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#fffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,176C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>

        {/* Benefits Section */}
        <section className="careers-benefits">
            <div className="container">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                Why Work with SPMCS?
                </motion.h2>
                
                <motion.div 
                className="benefits-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                {benefits.map((benefit, index) => (
                    <motion.div 
                    className="benefit-card" 
                    key={index}
                    variants={itemVariants}
                    >
                    <div className="benefit-icon">
                        {benefit.icon}
                    </div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                    </motion.div>
                ))}
                </motion.div>
            </div>
            </section>

            {/* Job Openings Section */}
            <section className="careers-jobs">
            <div className="container">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
                Current Job Openings
                </motion.h2>
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                >
                We are actively seeking dedicated professionals to join our team in the following roles:
                </motion.p>
                
                <motion.div 
                className="jobs-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
                {jobOpenings.map((job, index) => (
                    <motion.div 
                    className={`job-card ${activeJob === index ? 'active' : ''}`}
                    key={index}
                    variants={itemVariants}
                    onClick={() => toggleJobDetails(index)}
                    >
                    <div className="job-header">
                        <div className="job-icon">{job.icon}</div>
                        <h3>{job.title}</h3>
                        <div className="job-expand">
                        <FaArrowRight className={`expand-icon ${activeJob === index ? 'expanded' : ''}`} />
                        </div>
                    </div>
                    <div className="job-details">
                        <p>{job.description}</p>
                        <button className="apply-button" onClick={handleApplyNow}>
                        Apply for this position <FaPaperPlane />
                        </button>
                    </div>
                    </motion.div>
                ))}
                </motion.div>
            </div>
            </section>

            {/* Apply CTA Section */}
            <section className="careers-cta">
            <div className="container">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
                Ready to Make a Difference?
                </motion.h2>
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                >
                If you are passionate about delivering high-quality care and making a positive impact, we would love to welcome you to our team!
                </motion.p>
                <motion.button 
                className="primary-button"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyNow}
                >
                Apply Now <FaArrowRight className="button-icon" />
                </motion.button>
            </div>
            </section>
    </div>
  );
};

export default Careers; 