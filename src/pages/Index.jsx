import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-motorcycle.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Experience the Thrill of the Ride</h1>
          <p className="text-xl mb-6">Discover the best motorcycles and gear for your next adventure</p>
          <Button size="lg" variant="primary">Shop Now</Button>
        </div>
      </section>

      {/* Featured Motorcycles */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Motorcycles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Motorcycle Card */}
          <Card>
            <img src="/images/motorcycle1.jpg" alt="Motorcycle 1" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Motorcycle 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Motorcycle 1.</p>
              <Button variant="link">Learn More</Button>
            </CardContent>
          </Card>
          {/* Add more motorcycle cards as needed */}
        </div>
      </section>

      {/* About Us */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/images/about-us.jpg" alt="About Us" className="w-full md:w-1/2 h-64 object-cover" />
          <div className="space-y-4">
            <p>We are passionate about motorcycles and dedicated to providing the best products and services to our customers. Our mission is to help you experience the thrill of the ride with top-quality motorcycles and gear.</p>
            <Button variant="link">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
        <div className="space-y-8">
          {/* Example Testimonial */}
          <div className="text-center">
            <p className="text-xl">"Amazing experience! The motorcycle I bought is fantastic and the customer service was top-notch."</p>
            <p className="mt-4 font-semibold">- John Doe</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Updated</h2>
        <div className="flex flex-col items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full max-w-md"
          />
          <Button size="lg" onClick={handleSubscribe}>Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="space-x-4">
            <a href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;