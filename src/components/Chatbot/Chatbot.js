import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FaComments, FaTimes, FaLink, FaEnvelope, FaPhone, FaListUl, FaListOl } from 'react-icons/fa';
import { getSystemPrompt } from './chatContext';

const API_URL = 'https://api.openai.com/v1';


const formatMessage = (content) => {
  let formattedContent = content;

  // 1. Handle headings first (before other formatting)
  formattedContent = formattedContent.replace(
    /^### (.+)$/gm,
    '<h3 class="heading-3">$1</h3>'
  );
  formattedContent = formattedContent.replace(
    /^## (.+)$/gm,
    '<h2 class="heading-2">$1</h2>'
  );
  formattedContent = formattedContent.replace(
    /^# (.+)$/gm,
    '<h1 class="heading-1">$1</h1>'
  );

  // 2. Handle code blocks (before inline code)
  formattedContent = formattedContent.replace(
    /```(\w+)?\n?([\s\S]*?)```/g,
    '<pre class="code-block"><code class="language-$1">$2</code></pre>'
  );

  // 3. Handle inline code
  formattedContent = formattedContent.replace(
    /`([^`]+)`/g,
    '<code class="inline-code">$1</code>'
  );

  // 4. Handle blockquotes
  formattedContent = formattedContent.replace(
    /^> (.+)$/gm,
    '<blockquote class="quote">$1</blockquote>'
  );

  // 5. Handle bold text (before other formatting)
  formattedContent = formattedContent.replace(
    /\*\*(.*?)\*\*/g,
    '<strong>$1</strong>'
  );

  // 6. Handle italic text
  formattedContent = formattedContent.replace(
    /\*([^*]+)\*/g,
    '<em>$1</em>'
  );

  // 7. Handle strikethrough
  formattedContent = formattedContent.replace(
    /~~(.*?)~~/g,
    '<del>$1</del>'
  );

  // 8. Handle links (before other URL processing)
  formattedContent = formattedContent.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="markdown-link"><i class="fa fa-link"></i> $1</a>'
  );

  // 9. Handle plain URLs
  formattedContent = formattedContent.replace(
    /(https?:\/\/[^\s\]]+)(?![^<]*<\/a>)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="link"><i class="fa fa-link"></i> $1</a>'
  );

  // 10. Handle email addresses
  formattedContent = formattedContent.replace(
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
    '<a href="mailto:$1" class="email-link"><i class="fa fa-envelope"></i> $1</a>'
  );

  // 11. Handle phone numbers
  formattedContent = formattedContent.replace(
    /(\+?[\d\s-()]{10,})/g,
    '<a href="tel:$1" class="phone-link"><i class="fa fa-phone"></i> $1</a>'
  );

  // 12. Handle complex list items with enhanced formatting
  // First, handle numbered lists with complex content
  formattedContent = formattedContent.replace(
    /^\s*(\d+)\.\s+(.+)$/gm,
    (match, number, content) => {
      // Check if content has heading-like structure (bold text followed by colon or description)
      const headingMatch = content.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
      if (headingMatch) {
        const title = headingMatch[1];
        const description = headingMatch[2];
        return `<li class="list-item-complex">
          <div class="list-item-title">${title}</div>
          ${description ? `<div class="list-item-description">${description}</div>` : ''}
        </li>`;
      }
      
      // Check for colon-separated title and description
      const colonMatch = content.match(/^([^:]+):\s*(.+)/);
      if (colonMatch) {
        const title = colonMatch[1].trim();
        const description = colonMatch[2].trim();
        return `<li class="list-item-complex">
          <div class="list-item-title">${title}</div>
          <div class="list-item-description">${description}</div>
        </li>`;
      }
      
      return `<li class="list-item-simple"><i class="fa-solid fa-arrow-right"></i> ${content}</li>`;
    }
  );

  // 13. Handle bullet points with enhanced formatting
  formattedContent = formattedContent.replace(
    /^\s*[-*+]\s+(.+)$/gm,
    (match, content) => {
      // Check if content has heading-like structure (bold text followed by colon or description)
      const headingMatch = content.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
      if (headingMatch) {
        const title = headingMatch[1];
        const description = headingMatch[2];
        return `<li class="list-item-complex">
          <div class="list-item-title">${title}</div>
          ${description ? `<div class="list-item-description">${description}</div>` : ''}
        </li>`;
      }
      
      // Check for colon-separated title and description
      const colonMatch = content.match(/^([^:]+):\s*(.+)/);
      if (colonMatch) {
        const title = colonMatch[1].trim();
        const description = colonMatch[2].trim();
        return `<li class="list-item-complex">
          <div class="list-item-title">${title}</div>
          <div class="list-item-description">${description}</div>
        </li>`;
      }
      
      return `<li class="list-item-simple"><i class="fa-solid fa-arrow-right"></i> ${content}</li>`;
    }
  );

  // 14. Wrap consecutive list items in appropriate list containers
  if (formattedContent.includes('<li>')) {
    // Handle unordered lists
    formattedContent = formattedContent.replace(
      /((?:<li class="list-item-[^"]*">.*?<\/li>\s*)+)/gs,
      '<ul class="formatted-list">$1</ul>'
    );
    
    // Clean up any remaining standalone li tags
    formattedContent = formattedContent.replace(
      /((?:<li[^>]*>.*?<\/li>\s*)+)/gs,
      '<ul class="formatted-list">$1</ul>'
    );
  }

  // 15. Handle horizontal rules
  formattedContent = formattedContent.replace(
    /^---+$/gm,
    '<hr class="divider" />'
  );

  // 16. Handle line breaks and paragraphs
  // First, normalize line breaks
  formattedContent = formattedContent.replace(/\r\n/g, '\n');
  
  // Split by double line breaks to create paragraphs, but preserve other HTML elements
  const paragraphs = formattedContent.split(/\n\s*\n/);
  formattedContent = paragraphs.map(paragraph => {
    paragraph = paragraph.trim();
    
    // Don't wrap if it's already an HTML block element
    if (paragraph.match(/^<(h[1-6]|ul|ol|li|blockquote|pre|hr|div)/i) || 
        paragraph.match(/<\/(h[1-6]|ul|ol|li|blockquote|pre|hr|div)>$/i)) {
      return paragraph;
    }
    
    // Don't wrap empty paragraphs
    if (!paragraph) {
      return '';
    }
    
    return `<p class="message-paragraph">${paragraph}</p>`;
  }).filter(p => p).join('\n\n');


  // 18. Clean up extra whitespace and fix formatting issues
  formattedContent = formattedContent
    .replace(/\n{3,}/g, '\n\n') // Remove excessive line breaks
    .replace(/(<\/[^>]+>)\s*\n\s*(<[^>]+>)/g, '$1\n$2') // Clean spacing between HTML elements
    .trim();

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
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);
  
    try {
      const recentMessages = messages.slice(-6).map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
  
      const response = await fetch(`${API_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'SPMC Website',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: getSystemPrompt()
            },
            ...recentMessages, 
            {
              role: 'user',
              content: currentInput
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
