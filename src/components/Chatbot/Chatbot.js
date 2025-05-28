import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FaComments, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm your AI assistant. Ask me anything about SPMC - I'm here to help!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Close chat window when clicking outside for accessibility
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error('DeepSeek API key is missing');
      setMessages(prev => [...prev, {
        type: 'ai',
        content: "I apologize, but there's a configuration issue. Please contact support."
      }]);
      return;
    }

    const userMessage = {
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call DeepSeek API
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant for SPMC (Southampton Personal Management Company), a care and support service provider. You can help users with information about their services, booking consultations, and general inquiries. Keep responses concise and relevant to SPMC's services."
            },
            ...messages.map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            {
              role: "user",
              content: inputMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 150,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      const aiMessage = {
        type: 'ai',
        content: data.choices[0].message.content
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      const errorMessage = {
        type: 'ai',
        content: "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly through our contact form."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const LoadingIndicator = () => (
    <div className="chat-message ai-message" role="status" aria-label="AI is thinking">
      <strong>AI</strong>
      <div className="loading-bar">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div 
          className="chat-window"
          ref={chatWindowRef}
          role="dialog"
          aria-label="Chat with AI Assistant"
          aria-modal="true"
        >
          <div className="chat-header">
            <div className="chat-header-title">
              <strong>Chatbot</strong>
              <div className="chat-header-description">AI Assistance</div>
            </div>
            <button 
              onClick={toggleChat} 
              className="close-btn"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          <div 
            className="chat-body"
            role="log"
            aria-label="Chat messages"
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`chat-message ${message.type}-message`}
                role="article"
                aria-label={`${message.type === 'ai' ? 'AI' : 'Your'} message`}
              >
                <strong>{message.type === 'ai' ? 'AI' : 'You'}</strong>
                <p>{message.content}</p>
              </div>
            ))}
            {isLoading && <LoadingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          <form 
            onSubmit={handleSendMessage} 
            className="chat-footer"
            aria-label="Send message"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
              aria-label="Message input"
              aria-disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading}
              aria-label="Send message"
              aria-disabled={isLoading}
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button 
        onClick={toggleChat} 
        className="chatbot-btn"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <FaComments />
      </button>
    </div>
  );
};

export default Chatbot;
