
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState<'contact' | 'chat'>('contact');
  const { toast } = useToast();

  useEffect(() => {
    // Handle hash-based navigation for direct chat opening
    if (window.location.hash === '#chat') {
      setIsOpen(true);
    }

    // Add event listener for custom events to open chat
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChat', handleOpenChat);

    return () => {
      window.removeEventListener('openChat', handleOpenChat);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email to continue.",
        variant: "destructive"
      });
      return;
    }
    setStep('chat');
    toast({
      title: "Contact information received",
      description: "A CliMate representative will be with you shortly.",
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    toast({
      title: "Message sent",
      description: "Thank you for your message. We'll respond shortly.",
    });
    setMessage('');
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-xl chat-toggle-button"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 animate-fade-in z-50">
          <div className="bg-primary text-white p-4">
            <h3 className="font-bold">CliMate Support</h3>
            <p className="text-sm text-white/80">We typically reply within minutes</p>
          </div>

          {step === 'contact' ? (
            <div className="p-4">
              <p className="mb-4 text-sm">Please provide your contact information to get started.</p>
              <form onSubmit={handleSubmitContact} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Start Chat
                </Button>
              </form>
            </div>
          ) : (
            <>
              <div className="h-64 p-4 overflow-y-auto bg-gray-50">
                <div className="flex items-start gap-2 mb-4">
                  <div className="bg-primary/20 rounded-full p-2">
                    <User size={16} className="text-primary" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-sm">Hello {name}! How can the CliMate team help you today?</p>
                    <span className="text-xs text-gray-500 mt-1 block">CliMate Support • Just now</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex gap-2">
                <Textarea
                  placeholder="Type your message here..."
                  className="flex-1 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" size="icon" className="h-auto">
                  <Send size={18} />
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBox;
