import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FaComments, FaTimes, FaLink, FaEnvelope, FaPhone, FaListUl, FaListOl } from 'react-icons/fa';
import { getSystemPrompt } from './chatContext';

const API_URL = 'https://openrouter.ai/api/v1';

const formatMessage = (content) => {
  let formattedContent = content.replace(
    /\*\*(.*?)\*\*/g,
    '<strong>$1</strong>'
  );

  formattedContent = formattedContent.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="link"><i class="fa fa-link"></i> $1</a>'
  );

  formattedContent = formattedContent.replace(
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
    '<a href="mailto:$1" class="email-link"><i class="fa fa-envelope"></i> $1</a>'
  );

  formattedContent = formattedContent.replace(
    /(\+?[\d\s-()]{10,})/g,
    '<a href="tel:$1" class="phone-link"><i class="fa fa-phone"></i> $1</a>'
  );

  formattedContent = formattedContent.replace(
    /^\s*[-*]\s+(.+)$/gm,
    '<li><i class="fa-solid fa-arrow-right"></i> $1</li>'
  );
  formattedContent = formattedContent.replace(
    /^\s*\d+\.\s+(.+)$/gm,
    '<li><i class="fa-solid fa-arrow-right"></i> $1</li>'
  );

  if (formattedContent.includes('<li>')) {
    formattedContent = formattedContent.replace(
      /((?:<li>.*<\/li>\n?)+)/g,
      '<ul>$1</ul>'
    );
  }

  formattedContent = formattedContent.replace(
    /\n\n/g,
    '</p><p>'
  );
  formattedContent = `<p>${formattedContent}</p>`;

  return formattedContent;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm your AI assistant. Ask me anything about SPMC's services, care options, or how we can help you. I'm here to provide information and support!"
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
      setMessages(prev => [...prev, {
        type: 'ai',
        content: "I apologize, but there's a configuration issue. Please contact support."
      }]);
      return;
    }

    // Add user message to chat
    const userMessage = {
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'SPMC Website',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v3-base:free',
          messages: [
            {
              role: 'system',
              content: getSystemPrompt()
            },
            ...messages.map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            {
              role: 'user',
              content: inputMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 250
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });

        let errorMessage = "I apologize, but I'm having trouble connecting right now.";
        
        if (response.status === 401) {
          errorMessage = "Authentication error. Please check the API configuration.";
          console.error('Authentication failed. Please verify your API key is correct and active.');
        } else if (response.status === 429) {
          errorMessage = "Rate limit exceeded. Please try again in a moment.";
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      
      const aiMessage = {
        type: 'ai',
        content: data.choices[0].message.content,
        formattedContent: formatMessage(data.choices[0].message.content)
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenRouter API:', error);
      const errorMessage = {
        type: 'ai',
        content: error.message || "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly through our contact form.",
        formattedContent: formatMessage(error.message || "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly through our contact form.")
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
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: message.formattedContent || formatMessage(message.content)
                  }} 
                />
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
