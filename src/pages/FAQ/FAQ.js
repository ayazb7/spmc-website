import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaAngleDown, FaQuestionCircle, FaHome, FaMedkit, FaShoppingCart, 
         FaCalendarAlt, FaLaptop, FaPlane, FaCreditCard, FaPhoneAlt, 
         FaEnvelope, FaGlobe, FaClipboardList, FaPrescriptionBottleAlt,
         FaMoneyBillWave, FaHandsHelping } from 'react-icons/fa';
import ContactCard from "../Home/components/ContactCard/ContactCard";
import ContactSection from '../Home/sections/Contact/ContactSection';
import './FAQ.css';

const FAQ = () => {
    const contactSectionRef = useRef(null);

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleFaqs, setVisibleFaqs] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    const faqData = [
        {
            question: "What type of support services do you offer?",
            answer: "We offer both regulated and non-regulated support services to meet a wide range of individual needs. This includes personal care, medication support, and other regulated activities, as well as home and lifestyle assistance, companionship, errands, travel support, and event assistance. Our goal is to deliver care that promotes independence, comfort, and dignity — whether someone needs everyday support or more specialised help.",
            icon: <FaHandsHelping />,
            category: "services"
        },
        {
            question: "Do you provide personal or medical care?",
            answer: "Yes, we provide regulated personal care services under our Care Quality Commission (CQC) registration (pending). This includes support with tasks such as washing, dressing, mobility, and medication. Our trained care professionals deliver these services with compassion and respect — alongside non-regulated support like companionship, daily living assistance, and help accessing the community.",
            icon: <FaMedkit />,
            category: "services"
        },
        {
            question: "Are your services flexible?",
            answer: "Yes! We offer tailored support to meet individual needs, whether it's a one-time service or ongoing assistance.",
            icon: <FaClipboardList />,
            category: "services"
        },
        {
            question: "Can you help with cleaning and gardening?",
            answer: "Yes! We provide light housekeeping, laundry, ironing, and gardening services such as lawn mowing and hedge trimming.",
            icon: <FaHome />,
            category: "services"
        },
        {
            question: "Do you offer decluttering and home organisation services?",
            answer: "Absolutely! We can help organise spaces, declutter your home, and create a stress-free environment.",
            icon: <FaHome />,
            category: "services"
        },
        {
            question: "Can you remind me to take my medication?",
            answer: "Yes, we can provide gentle reminders and also support with administering or handling prescribed medication as part of our regulated services. All medication support is delivered safely by trained staff, in line with current guidelines and your personalised care plan.",
            icon: <FaPrescriptionBottleAlt />,
            category: "services"
        },
        {
            question: "Do you offer support after hospital discharge?",
            answer: "Yes, our after-hospital care services assist with errands, meal preparation, mobility support, and general well-being checks to help you transition smoothly back home.",
            icon: <FaMedkit />,
            category: "services"
        },
        {
            question: "Can you do my grocery shopping for me?",
            answer: "Yes! We can shop for you, accompany you to the shops, and help with meal planning.",
            icon: <FaShoppingCart />,
            category: "services"
        },
        {
            question: "Do you offer a prescription collection service?",
            answer: "Yes, we can collect prescriptions on your behalf and deliver them to your home.",
            icon: <FaPrescriptionBottleAlt />,
            category: "services"
        },
        {
            question: "Can you help plan and organise events?",
            answer: "Yes, we assist with party planning, venue setup, decoration, and post-event clean-up.",
            icon: <FaCalendarAlt />,
            category: "services"
        },
        {
            question: "Do you provide travel assistance?",
            answer: "Yes, we can help with packing, travel arrangements, booking tickets, and drop-off/pick-up services to ensure a stress-free journey.",
            icon: <FaPlane />,
            category: "services"
        },
        {
            question: "Can you help me learn how to use a smartphone or computer?",
            answer: "Yes, we offer digital literacy support to help with using smartphones, tablets, and computers effectively.",
            icon: <FaLaptop />,
            category: "services"
        },
        {
            question: "How do I book a service?",
            answer: "You can contact us via phone, email, or through our website to arrange a consultation and book a service.",
            icon: <FaCalendarAlt />,
            category: "booking"
        },
        {
            question: "How much do your services cost?",
            answer: "Prices vary depending on the service required and the duration. We provide customised quotes based on individual needs.",
            icon: <FaMoneyBillWave />,
            category: "payment"
        },
        {
            question: "Do you offer one-time services, or do I need a contract?",
            answer: "We offer both one-time services and ongoing support—our services are flexible to suit your requirements.",
            icon: <FaClipboardList />,
            category: "booking"
        },
        {
            question: "How do I make a payment?",
            answer: "We accept various payment methods, including bank transfers and card payments. Full details will be provided upon booking.",
            icon: <FaCreditCard />,
            category: "payment"
        }
    ];

    const categories = [
        { id: "all", name: "All Questions" },
        { id: "services", name: "Our Services" },
        { id: "booking", name: "Booking Process" },
        { id: "payment", name: "Payment & Pricing" }
    ];

    // Initialize visibleFaqs with all FAQs on component load
    useEffect(() => {
        setVisibleFaqs(faqData);
    }, []);

    // Filter FAQs based on search term and category
    useEffect(() => {
        const filtered = faqData.filter(faq => {
            const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
        setVisibleFaqs(filtered);
    }, [searchTerm, activeCategory]);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const resetSearch = () => {
        setSearchTerm('');
        setActiveCategory('all');
    };

    return (
        <div className="faq-page">
            <Helmet>
                <title>SPMC | Frequently Asked Questions</title>
            </Helmet>

            <div className="faq-hero">
                <motion.div 
                    className="faq-hero-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <FaQuestionCircle className="hero-icon" />
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about our services and support</p>
                    
                    <div className="search-container">
                        <input 
                            type="text" 
                            placeholder="Search for questions..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="faq-search-input"
                        />
                        {searchTerm && (
                            <button onClick={resetSearch} className="reset-search">
                                Clear
                            </button>
                        )}
                    </div>
                </motion.div>
                
                <div className="wave-decoration">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#f9fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,176C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <div className="faq-content">
                <div className="category-tabs">
                    {categories.map(category => (
                        <button 
                            key={category.id}
                            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="faq-container">
                    {visibleFaqs.length > 0 ? (
                        visibleFaqs.map((faq, index) => (
                            <div 
                                className={`faq-item ${expandedIndex === index ? 'active' : ''}`}
                                key={index}
                            >
                                <div className="faq-question" onClick={() => handleToggle(index)}>
                                    <div className="question-content">
                                        <span className="faq-icon">{faq.icon}</span>
                                        <span>{faq.question}</span>
                                    </div>
                                    <FaAngleDown className={`arrow-icon ${expandedIndex === index ? 'rotate' : ''}`} />
                                </div>
                                {expandedIndex === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No matching questions found. Please try a different search term.</p>
                            <button onClick={resetSearch} className="reset-button">Reset Search</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="faq-disclaimer">
                <p>Please note: Our Care Quality Commission (CQC) registration is currently pending. All regulated care activities — including personal care and medication administration — will only be delivered once our registration is fully approved. In the meantime, we continue to provide non-regulated support services in line with current guidance.</p>
            </div>

            <ContactSection ref={contactSectionRef} />
        </div>
    );
};

export default FAQ; 