"use client"
import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // potential backend addition
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setError('');
<<<<<<< HEAD
    } catch (err: unknown) {
=======
    } catch (err) {
>>>>>>> 6695cbaa1ec7473d70ecd73066cdf0f47ae311ec
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <section id="contact" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-200"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-200"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-200"
            rows={4}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Message sent successfully!</p>}
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-300">Other Contact Methods:</h3>
        <p className="text-gray-300">Email: evancrews21@gmail.com</p>
      </div>
    </section>
  );
}
